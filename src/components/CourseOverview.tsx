import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3, LineChart, Sparkles } from "lucide-react";

const courses = [
  {
    icon: TrendingUp,
    title: "Basics of Financial Markets",
    description: "Foundation knowledge for every aspiring trader",
    topics: ["Markets & IPOs", "Trading Types", "Market Timings", "Long vs Short Positions"],
  },
  {
    icon: BarChart3,
    title: "Fundamental Analysis",
    description: "Evaluate companies like a professional",
    topics: ["Valuations & Ratios", "EPS & P/E Ratio", "Market Capitalization", "Corporate Actions"],
  },
  {
    icon: LineChart,
    title: "Technical Analysis",
    description: "Master charts and price action",
    topics: ["Charts & Price Action", "Support & Resistance", "Volume Analysis", "Order Types"],
  },
  {
    icon: Sparkles,
    title: "Bonus Strategies",
    description: "Proven trading methods",
    topics: ["9 & 15 EMA Strategy", "VCP Pattern", "Gap Trading", "Trend Lines"],
  },
];

const CourseOverview = () => {
  return (
    <section className="py-20 px-4" id="courses">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Complete <span className="text-gradient-gold">Course Curriculum</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From basics to advanced strategies — everything you need to trade ethically
          </p>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <course.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-display text-xl mb-1">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2">
                  {course.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
