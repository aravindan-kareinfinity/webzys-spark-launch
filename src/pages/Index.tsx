
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    
    // Update document title for SEO
    document.title = "Webzys - Affordable Static Website Design for Small Business in India";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="sr-only">
        <h1>Webzys - Professional Static Website Design Company in India</h1>
        <p>Affordable websites for small businesses and startups. Fast loading, custom static websites at budget-friendly prices under 5000.</p>
      </div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
