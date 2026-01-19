import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Circle, 
  Upload, 
  FileText, 
  ShieldCheck,
  Clock,
  User,
  GraduationCap,
  HeartPulse,
  Fingerprint
} from "lucide-react";

const steps = [
  {
    icon: User,
    title: "Personal Details",
    status: "complete",
    description: "Basic information and contact details",
  },
  {
    icon: GraduationCap,
    title: "Qualifications",
    status: "complete",
    description: "Professional certifications and training",
  },
  {
    icon: HeartPulse,
    title: "Health Declaration",
    status: "current",
    description: "Occupational health assessment",
  },
  {
    icon: Fingerprint,
    title: "DBS Check",
    status: "pending",
    description: "Enhanced background verification",
  },
  {
    icon: ShieldCheck,
    title: "Right to Work",
    status: "pending",
    description: "Employment eligibility verification",
  },
];

const documents = [
  { name: "NMC PIN Certificate", status: "verified" },
  { name: "Enhanced DBS", status: "pending" },
  { name: "Training Certificates", status: "verified" },
  { name: "ID Documents", status: "verified" },
];

const ComplianceHub = () => {
  return (
    <section id="compliance" className="py-24 bg-gradient-to-b from-sage-deep/50 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Compliance Hub
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
            Your Compliance Dashboard
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Track your compliance status, upload documents, and get work-ready faster 
            with our streamlined verification process.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Progress Stepper */}
          <div className="bg-white rounded-3xl p-8 shadow-sm animate-fade-up">
            <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-primary" />
              Verification Progress
            </h3>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[18px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-border" />

              {/* Steps */}
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={step.title} className="flex gap-5">
                    {/* Icon */}
                    <div
                      className={`relative z-10 w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
                        step.status === "complete"
                          ? "bg-primary text-primary-foreground"
                          : step.status === "current"
                          ? "bg-mint text-primary ring-4 ring-primary/20"
                          : "bg-sage text-muted-foreground"
                      }`}
                    >
                      {step.status === "complete" ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : step.status === "current" ? (
                        <step.icon className="w-5 h-5" />
                      ) : (
                        <Circle className="w-5 h-5" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-semibold text-foreground">{step.title}</h4>
                        {step.status === "complete" && (
                          <Badge variant="success">Verified</Badge>
                        )}
                        {step.status === "current" && (
                          <Badge variant="warning" className="gap-1">
                            <Clock className="w-3 h-3" />
                            In Progress
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Document Upload Zone */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
            {/* Upload Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Document Centre
              </h3>

              {/* Drop Zone */}
              <div className="border-2 border-dashed border-primary/30 rounded-2xl p-8 text-center hover:border-primary/60 hover:bg-mint/20 transition-all duration-300 cursor-pointer group">
                <div className="w-16 h-16 rounded-2xl bg-mint mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <p className="text-foreground font-semibold mb-1">
                  Drag & drop files here
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  or click to browse your device
                </p>
                <Button variant="outline" size="sm">
                  Select Files
                </Button>
              </div>
            </div>

            {/* Document List */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h4 className="font-semibold text-foreground mb-4">Uploaded Documents</h4>
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-center justify-between p-4 rounded-2xl bg-sage/30 hover:bg-sage/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium text-foreground">{doc.name}</span>
                    </div>
                    {doc.status === "verified" ? (
                      <Badge variant="success" className="gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </Badge>
                    ) : (
                      <Badge variant="warning" className="gap-1">
                        <Clock className="w-3 h-3" />
                        Pending
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceHub;
