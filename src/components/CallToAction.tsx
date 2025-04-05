
import React from "react";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-primary to-purple-light rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 p-10 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to Build Your Dream Website?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-xl">
                Let's create something amazing together. Start your project now
                and get a free consultation with our experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:webzyhelps@gmail.com"
                  className="bg-white text-primary font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-md inline-flex items-center gap-2 group"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://wa.me/918270612215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition-all duration-200 shadow-md inline-flex items-center gap-2 group"
                >
                  <MessageSquare className="h-4 w-4" />
                  WhatsApp Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-sm h-full p-10 md:p-16 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-subtle">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
                <p className="text-white font-medium">Start Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
