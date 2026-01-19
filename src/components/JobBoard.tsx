import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  Banknote, 
  ChevronRight, 
  Search,
  SlidersHorizontal,
  Building2,
  Sparkles
} from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Registered Nurse - ICU",
    facility: "St Thomas' Hospital",
    location: "London, SE1",
    payRate: "£28-35/hr",
    type: "Full-time",
    urgent: true,
    posted: "2 hours ago",
  },
  {
    id: 2,
    title: "Healthcare Assistant",
    facility: "Sunrise Care Home",
    location: "Manchester, M1",
    payRate: "£14-18/hr",
    type: "Part-time",
    urgent: false,
    posted: "5 hours ago",
  },
  {
    id: 3,
    title: "Mental Health Nurse",
    facility: "Priory Hospital",
    location: "Birmingham, B1",
    payRate: "£30-38/hr",
    type: "Contract",
    urgent: true,
    posted: "1 day ago",
  },
  {
    id: 4,
    title: "Complex Care Nurse",
    facility: "Private Client",
    location: "Leeds, LS1",
    payRate: "£35-42/hr",
    type: "Full-time",
    urgent: false,
    posted: "2 days ago",
  },
  {
    id: 5,
    title: "Community Care Worker",
    facility: "HomeFirst Care",
    location: "Bristol, BS1",
    payRate: "£15-20/hr",
    type: "Flexible",
    urgent: false,
    posted: "3 days ago",
  },
];

const filters = [
  { label: "Job Type", options: ["All", "Full-time", "Part-time", "Contract", "Flexible"] },
  { label: "Specialty", options: ["All", "Nursing", "Home Care", "Mental Health", "Complex Care"] },
  { label: "Pay Rate", options: ["All", "£10-20/hr", "£20-30/hr", "£30-40/hr", "£40+/hr"] },
];

const JobBoard = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section id="jobs" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Job Opportunities
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
            Find Your Perfect Role
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Browse hundreds of healthcare positions across the UK. 
            New opportunities added daily.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Glassmorphism */}
          <aside className="lg:w-80 shrink-0 animate-fade-up">
            <div className="sticky top-28 bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Smart Filters</h3>
              </div>

              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-sage/50 border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Filter Groups */}
              {filters.map((filter) => (
                <div key={filter.label} className="mb-6">
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    {filter.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {filter.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => setActiveFilter(option)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          activeFilter === option
                            ? "bg-primary text-primary-foreground"
                            : "bg-sage/50 text-muted-foreground hover:bg-sage hover:text-foreground"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {/* Clear Filters */}
              <Button variant="ghost" className="w-full text-muted-foreground">
                Clear All Filters
              </Button>
            </div>
          </aside>

          {/* Job Cards */}
          <div className="flex-1 space-y-4">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/20 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      {job.urgent && (
                        <Badge variant="urgent" className="gap-1">
                          <Sparkles className="w-3 h-3" />
                          Urgent
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Building2 className="w-4 h-4" />
                      <span className="text-sm">{job.facility}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="mint" className="gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </Badge>
                      <Badge variant="emerald" className="gap-1">
                        <Banknote className="w-3.5 h-3.5" />
                        {job.payRate}
                      </Badge>
                      <Badge variant="glass" className="gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex sm:flex-col items-center gap-3">
                    <Button 
                      variant="hero" 
                      size="sm"
                      className="gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Quick View
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                    <span className="text-xs text-muted-foreground">{job.posted}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Load More */}
            <div className="text-center pt-8">
              <Button variant="outline" size="lg">
                View All Opportunities
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobBoard;
