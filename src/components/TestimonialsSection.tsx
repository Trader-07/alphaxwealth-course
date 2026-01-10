import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Arjun Sharma",
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
    name: "Priya Mehta",
    role: "Engineering Student",
    location: "Hyderabad",
    avatar: "PM",
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase"
          >
            Real Feedback
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-3 sm:mb-4"
          >
            What Our Students Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2"
          >
            Join alot of students who have transformed their trading journey
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
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
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-8 sm:mt-12 md:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16"
        >
          {[
            { value: "100+", label: "Happy Students" },
            { value: "4.8", label: "Average Rating" },
            { value: "95%", label: "Recommend Us" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
