import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mujahid Khan",
    role: "Software Engineer",
    location: "Hyderabad",
    avatar: "RS",
    rating: 5,
    date: "2 weeks ago",
    text: "Finally understood how candlestick patterns actually work in real markets. The course content is practical, not just theory. Made my first profitable trade last week using the strategies taught here.",
    verified: true,
  },
  {
    name: "Rohit Reddy",
    role: "Businessman",
    location: "Bangalore",
    avatar: "RR",
    rating: 5,
    date: "1 month ago",
    text: "I was skeptical at first, but the way concepts are explained is very beginner-friendly. Started with zero knowledge, now I can read charts confidently. Worth every rupee.",
    verified: true,
  },
  {
    name: "Safa Fatima",
    role: "Engineering Student",
    location: "Hyderabad",
    avatar: "SF",
    rating: 4,
    date: "3 weeks ago",
    text: "Good content overall. Some modules could be more detailed, but the risk management section alone was worth the investment. Helped me avoid some costly mistakes.",
    verified: true,
  },
  {
    name: "Ananya Krishnan",
    role: "College Student",
    location: "Chennai",
    avatar: "AK",
    rating: 4,
    date: "2 months ago",
    text: "Affordable and comprehensive. As a student with limited budget, this was perfect. The psychology section really changed how I approach trading. Minor suggestion: add more practice quizzes.",
    verified: true,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-up">
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Real Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-3 sm:mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
            Join alot of students who have transformed their trading journey
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-fade-up bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/20 mb-3 sm:mb-4 group-hover:text-primary/40 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                      i < testimonial.rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground/90 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-border/50">
                {/* Avatar */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs sm:text-sm flex-shrink-0">
                  {testimonial.avatar}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <span className="font-medium text-foreground text-xs sm:text-sm truncate">
                      {testimonial.name}
                    </span>
                    {testimonial.verified && (
                      <span className="text-[9px] sm:text-[10px] bg-green-500/10 text-green-500 px-1 sm:px-1.5 py-0.5 rounded-full font-medium flex-shrink-0">
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
                
                <span className="text-[10px] sm:text-xs text-muted-foreground/70 flex-shrink-0 hidden sm:block">
                  {testimonial.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-8 sm:mt-12 md:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 animate-fade-up" style={{ animationDelay: "600ms" }}>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">500+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">4.8</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">95%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Recommend Us</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
