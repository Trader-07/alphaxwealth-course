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

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Processing chat request with", messages?.length || 0, "messages");

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
          ...messages,
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
