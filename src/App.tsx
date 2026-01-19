import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import JobBoard from "@/components/JobBoard";
import ComplianceHub from "@/components/ComplianceHub";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServicesGrid />
      <JobBoard />
      <ComplianceHub />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
