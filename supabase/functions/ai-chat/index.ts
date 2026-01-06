import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_PROMPT = `You are an expert AI assistant for Alpha X Wealth, a financial education platform founded by Mohammed Zeeshan Mohi Uddin. Your role is to help users understand:

1. **Stock Market Basics**: Explain fundamental concepts like stocks, bonds, market indices, trading, investing vs speculation
2. **Stock Price Factors**: Explain what affects stock prices including:
   - Company fundamentals (earnings, revenue, profit margins)
   - Market sentiment and investor psychology
   - Economic indicators (GDP, inflation, interest rates)
   - Industry trends and competitive landscape
   - Supply and demand dynamics
   - News and events (earnings reports, product launches, scandals)
   - Technical analysis factors (volume, momentum, support/resistance)
   
3. **Course Information**: Alpha X Wealth teaches ethical, Shariah-aligned investing focusing on:
   - Market basics and how exchanges work
   - Fundamental analysis (reading financial statements, valuation metrics)
   - Technical analysis (charts, patterns, indicators)
   - What is Halal vs Haram in stock market practices
   - Long-term wealth building with discipline and ethics

4. **Ethical Investing**: Distinguish between Halal and Haram practices in investing

Key principles to follow:
- Be educational and informative, never give specific buy/sell advice
- Emphasize "knowledge first, discipline always, values above everything"
- Clarify that this is for educational purposes only, not financial advice
- Be clear, concise, and beginner-friendly
- When discussing Halal/Haram, be respectful and informative

Remember the founder's philosophy: "We don't teach how to get rich quickly. We teach how to think correctly in the market, ethically and responsibly."`;

// Simple in-memory rate limiting (per IP, resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 20; // Max requests per window
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute window

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }
  
  record.count++;
  return true;
}

// Input validation constants
const MAX_MESSAGES = 50;
const MAX_MESSAGE_LENGTH = 4000;
const VALID_ROLES = ['user', 'assistant'];

interface ChatMessage {
  role: string;
  content: string;
}

function validateMessages(messages: unknown): { valid: boolean; error?: string; messages?: ChatMessage[] } {
  if (!Array.isArray(messages)) {
    return { valid: false, error: 'Messages must be an array' };
  }
  
  if (messages.length === 0) {
    return { valid: false, error: 'Messages array cannot be empty' };
  }
  
  if (messages.length > MAX_MESSAGES) {
    return { valid: false, error: `Too many messages (max ${MAX_MESSAGES})` };
  }
  
  const validatedMessages: ChatMessage[] = [];
  
  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i];
    
    if (!msg || typeof msg !== 'object') {
      return { valid: false, error: `Invalid message at index ${i}` };
    }
    
    if (!msg.role || typeof msg.role !== 'string') {
      return { valid: false, error: `Missing or invalid role at index ${i}` };
    }
    
    if (!VALID_ROLES.includes(msg.role)) {
      return { valid: false, error: `Invalid role "${msg.role}" at index ${i}. Must be "user" or "assistant"` };
    }
    
    if (!msg.content || typeof msg.content !== 'string') {
      return { valid: false, error: `Missing or invalid content at index ${i}` };
    }
    
    if (msg.content.length > MAX_MESSAGE_LENGTH) {
      return { valid: false, error: `Message at index ${i} exceeds max length (${MAX_MESSAGE_LENGTH} chars)` };
    }
    
    // Sanitize: only keep role and content
    validatedMessages.push({
      role: msg.role,
      content: msg.content.trim()
    });
  }
  
  return { valid: true, messages: validatedMessages };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting by IP
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('cf-connecting-ip') || 
                     'unknown';
    
    if (!checkRateLimit(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(JSON.stringify({ error: 'Too many requests. Please wait a moment before trying again.' }), {
        status: 429,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Parse and validate request body
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON in request body' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!body || typeof body !== 'object') {
      return new Response(JSON.stringify({ error: 'Request body must be an object' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { messages } = body as { messages?: unknown };
    
    // Validate messages
    const validation = validateMessages(messages);
    if (!validation.valid) {
      console.warn(`Input validation failed: ${validation.error}`);
      return new Response(JSON.stringify({ error: validation.error }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log(`Processing chat request from ${clientIP} with ${validation.messages!.length} messages`);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...validation.messages!,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "AI service temporarily unavailable" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Streaming response from AI gateway");

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
