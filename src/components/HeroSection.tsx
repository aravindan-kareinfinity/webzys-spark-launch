
import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-white to-purple-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We Build <span className="gradient-text">Beautiful</span> Static Websites
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Launch your online presence with style, speed, and impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2 group">
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#portfolio" className="btn-secondary">
                View Our Work
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Web Design Process"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-primary opacity-10"></div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-secondary rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-5 -left-5 w-40 h-40 bg-primary rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
