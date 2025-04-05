
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Bloom Café",
      category: "Restaurant Website",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "#",
    },
    {
      id: 2,
      title: "Venture Capital",
      category: "Business Website",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "#",
    },
    {
      id: 3,
      title: "Arctic Travels",
      category: "Tourism Website",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      link: "#",
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent work for our amazing clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-lg overflow-hidden shadow-lg h-72 card-hover"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.category}</p>
                </div>
                <a
                  href={project.link}
                  className="absolute top-4 right-4 bg-white/20 p-2 rounded-full backdrop-blur-sm"
                >
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
