
import React from "react";
import { Mail, MessageSquare, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Webzys</h3>
            <p className="text-gray-300 mb-6">
              We build beautiful static websites for small businesses, startups, and individuals.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                className="bg-gray-800 p-3 rounded-full hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                className="bg-gray-800 p-3 rounded-full hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                className="bg-gray-800 p-3 rounded-full hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com"
                className="bg-gray-800 p-3 rounded-full hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-300 hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@webzys.com"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Mail size={18} />
                  hello@webzys.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <MessageSquare size={18} />
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Webzys. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
