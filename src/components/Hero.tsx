import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, CheckCircle2, Users, ArrowRight } from "lucide-react";
import heroNurse from "@/assets/hero-nurse.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage via-mint/30 to-sage-deep -z-10" />
      <div className="absolute top-20 right-0 w-1/2 h-1/2 bg-mint/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-sage-deep rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <Badge variant="mint" className="gap-2">
              <TrendingUp className="w-3.5 h-3.5" />
              #1 Healthcare Staffing Platform
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Connecting{" "}
              <span className="text-primary">Healthcare Heroes</span>
              <br />
              with Meaningful Work
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              We partner with NHS trusts and private care providers to place exceptional 
              nursing and care professionals where they're needed most. Your next 
              opportunity starts here.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" className="gap-2">
                Find Your Next Role
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                I'm Looking to Hire
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { value: "5,000+", label: "Active Staff" },
                { value: "250+", label: "NHS Partners" },
                { value: "98%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image with Organic Shape */}
          <div className="relative lg:h-[600px] animate-fade-up" style={{ animationDelay: "200ms" }}>
            {/* Organic Image Container */}
            <div className="relative h-full">
              <div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-mint rounded-[0_3rem_0_3rem] overflow-hidden shadow-2xl"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)"
                }}
              >
                <img
                  src={heroNurse}
                  alt="Healthcare professional smiling confidently"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>

              {/* Floating Success Rate Card */}
              <div className="absolute -left-4 lg:-left-8 bottom-24 bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-5 shadow-lg animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-mint flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Live Success Rate</p>
                    <p className="text-2xl font-bold text-foreground">97.8%</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-sm text-primary font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Placements this month: 342</span>
                </div>
              </div>

              {/* Floating Users Card */}
              <div 
                className="absolute -right-4 lg:-right-8 top-20 bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-4 shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-mint to-sage-deep border-2 border-white flex items-center justify-center"
                      >
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">+128 Staff</p>
                    <p className="text-xs text-muted-foreground">Registered this week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
