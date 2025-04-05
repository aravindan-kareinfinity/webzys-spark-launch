
import React from "react";
import { Clock, DollarSign, Smartphone, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: "Fast Delivery",
      description: "Get your website up and running in record time with our streamlined process.",
      icon: <Clock className="h-12 w-12 text-white" />,
      bgColor: "bg-primary",
    },
    {
      id: 2,
      title: "Affordable Pricing",
      description: "Premium quality websites at budget-friendly prices that won't break the bank.",
      icon: <DollarSign className="h-12 w-12 text-white" />,
      bgColor: "bg-secondary",
    },
    {
      id: 3,
      title: "Fully Responsive",
      description: "Websites that look stunning on all devices, from smartphones to desktops.",
      icon: <Smartphone className="h-12 w-12 text-white" />,
      bgColor: "bg-primary",
    },
    {
      id: 4,
      title: "Friendly Support",
      description: "We're here to help with quick responses and solutions to your questions.",
      icon: <Headphones className="h-12 w-12 text-white" />,
      bgColor: "bg-secondary",
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We stand out from the competition with these key advantages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden card-hover"
            >
              <div
                className={`${reason.bgColor} p-6 flex items-center justify-center md:h-full`}
              >
                {reason.icon}
              </div>
              <div className="p-6 md:p-8 flex-1">
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
