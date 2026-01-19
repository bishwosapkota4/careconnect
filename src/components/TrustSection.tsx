import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const partners = [
  "NHS England",
  "Bupa",
  "Care UK",
  "Priory Group",
  "NHS Scotland",
  "Nuffield Health",
  "Four Seasons",
  "Barchester",
  "HC-One",
  "Avery Healthcare",
];

const testimonials = [
  {
    quote: "CareConnect has transformed our recruitment process. We now fill critical nursing positions 60% faster than before.",
    author: "Sarah Mitchell",
    role: "HR Director",
    company: "St Thomas' Hospital",
  },
  {
    quote: "The quality of candidates is exceptional. Every nurse we've hired through them has exceeded our expectations.",
    author: "James Rodriguez",
    role: "Clinical Lead",
    company: "Sunrise Care Homes",
  },
  {
    quote: "Their compliance system saved us hundreds of hours. Everything is verified and ready before staff even start.",
    author: "Emma Thompson",
    role: "Recruitment Manager",
    company: "Priory Group",
  },
];

const TrustSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Trusted Partners
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
            Working with the Best in Healthcare
          </h2>
        </div>

        {/* Logo Marquee */}
        <div className="relative mb-24">
          {/* Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Marquee Container */}
          <div className="flex overflow-hidden">
            <div className="flex gap-16 animate-marquee">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner}-${index}`}
                  className="flex items-center justify-center min-w-[180px] h-20 px-8 rounded-2xl bg-sage/50 border border-border/50"
                >
                  <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="relative bg-white rounded-3xl p-10 md:p-12 shadow-sm">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-10 w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Speech Bubble Tail */}
              <div className="absolute -bottom-4 left-16 w-8 h-8 bg-white rotate-45 rounded-sm shadow-sm" />

              {/* Content */}
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                  "{testimonials[currentTestimonial].quote}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full bg-sage hover:bg-mint flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-foreground" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full bg-sage hover:bg-mint flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "w-8 bg-primary"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
