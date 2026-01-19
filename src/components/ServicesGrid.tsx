import { Stethoscope, Home, HeartHandshake, Brain, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Nursing",
    description: "Registered nurses, healthcare assistants, and specialist nursing professionals for NHS and private healthcare settings.",
    stats: "2,400+ Active Nurses",
    color: "from-primary/10 to-mint/40",
  },
  {
    icon: Home,
    title: "Home Care",
    description: "Compassionate domiciliary care workers providing personalized support in patients' homes with dignity and respect.",
    stats: "1,200+ Care Workers",
    color: "from-mint/40 to-sage-deep",
  },
  {
    icon: HeartHandshake,
    title: "Complex Care",
    description: "Highly trained professionals for complex care packages including ventilator care, PEG feeding, and tracheostomy care.",
    stats: "450+ Specialists",
    color: "from-sage-deep to-mint/50",
  },
  {
    icon: Brain,
    title: "Mental Health",
    description: "Mental health nurses and support workers for psychiatric hospitals, community settings, and crisis intervention teams.",
    stats: "800+ MH Professionals",
    color: "from-mint/50 to-primary/10",
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 bg-sage-deep/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
            Specialist Healthcare Staffing
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From acute care to community settings, we provide fully compliant, 
            quality-assured healthcare professionals across all specialties.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-mint flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Stats Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-sage text-sm font-medium text-primary">
                  {service.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
