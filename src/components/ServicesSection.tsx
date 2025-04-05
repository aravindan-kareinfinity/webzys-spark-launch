
import React from "react";
import { Palette, Layout, Image, Search } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Static Website Design",
      description:
        "Beautiful, fast-loading websites built with modern technologies for optimal performance.",
      icon: <Layout className="h-8 w-8 text-primary" />,
    },
    {
      id: 2,
      title: "Portfolio Sites",
      description:
        "Showcase your work with elegance. Perfect for artists, photographers, and professionals.",
      icon: <Image className="h-8 w-8 text-primary" />,
    },
    {
      id: 3,
      title: "Branding & Logo Design",
      description:
        "Create a consistent brand identity with professional logos and branding materials.",
      icon: <Palette className="h-8 w-8 text-primary" />,
    },
    {
      id: 4,
      title: "Basic SEO",
      description:
        "Optimize your website for search engines to increase visibility and attract more visitors.",
      icon: <Search className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive web design solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-lg card-hover border border-gray-100"
            >
              <div className="bg-purple-50 p-4 rounded-full inline-block mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
