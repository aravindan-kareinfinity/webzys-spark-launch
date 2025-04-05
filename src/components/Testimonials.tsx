
import React, { useState } from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Boutique Owner",
      quote:
        "Webzys transformed our online presence with a beautiful website that perfectly captures our brand. Sales have increased by 40% since launch!",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      quote:
        "Fast, efficient, and incredibly talented. Webzys delivered our website ahead of schedule, and the results exceeded all expectations.",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Photographer",
      quote:
        "As a creative professional, I needed a portfolio that would showcase my work while being easy to update. Webzys nailed it on the first try!",
      avatar: "https://i.pravatar.cc/150?img=26",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section-padding gradient-bg text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto opacity-80">
            Don't just take our word for it. Here's what our clients have to say about our work.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative py-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-secondary opacity-40">
              <Quote size={80} />
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="min-h-[200px] flex flex-col items-center text-center">
                <p className="text-lg md:text-xl mb-8">
                  {testimonials[activeIndex].quote}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    className="w-14 h-14 rounded-full border-2 border-white"
                  />
                  <div className="ml-4 text-left">
                    <h4 className="text-lg font-semibold">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-sm opacity-80">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? "bg-white scale-125" : "bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
