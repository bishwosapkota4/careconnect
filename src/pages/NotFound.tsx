import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HeartPulse, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage via-mint/30 to-sage-deep flex items-center justify-center px-6">
      <div className="text-center max-w-md animate-fade-up">
        {/* Logo */}
        <div className="w-16 h-16 rounded-3xl bg-primary flex items-center justify-center mx-auto mb-8 shadow-lg">
          <HeartPulse className="w-8 h-8 text-primary-foreground" />
        </div>

        {/* 404 Number */}
        <h1 className="text-8xl font-extrabold text-primary mb-4">404</h1>
        
        {/* Message */}
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href="/" className="gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" onClick={() => window.history.back()} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
