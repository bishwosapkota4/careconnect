import { Button } from "@/components/ui/button";
import { HeartPulse, Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "For Staff": ["Find Jobs", "Register", "Compliance Hub", "Training", "Resources"],
    "For Clients": ["Request Staff", "Client Portal", "Pricing", "Case Studies", "Sectors"],
    "Company": ["About Us", "Careers", "News", "Contact", "Privacy Policy"],
  };

  return (
    <footer className="bg-sage pt-20 pb-8">
      {/* Newsletter Section */}
      <div className="container mx-auto px-6 mb-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Stay Updated
              </h3>
              <p className="text-muted-foreground">
                Get the latest job opportunities and industry insights delivered to your inbox.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-80 pl-12 pr-4 py-3.5 rounded-full bg-sage/50 border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <Button variant="hero" className="gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Care<span className="text-primary">Connect</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Connecting healthcare professionals with meaningful opportunities 
              across the UK since 2015.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+441onal234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                0800 123 4567
              </a>
              <a href="mailto:hello@careconnect.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                hello@careconnect.com
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>1 Healthcare Place<br />London, EC1A 1BB</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Accreditations */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Accredited By</h4>
            <div className="space-y-3">
              {["CQC Registered", "REC Member", "ISO 9001:2015", "Cyber Essentials"].map((acc) => (
                <div
                  key={acc}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-white text-xs font-medium text-muted-foreground border border-border/50 mr-2 mb-2"
                >
                  {acc}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 CareConnect. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Facebook, href: "#" },
              { icon: Instagram, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white hover:bg-primary flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all duration-300 shadow-sm"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
