
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "./components/ui/toaster";

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

// Create the main App component
const App = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <ServicesSection />
        <Portfolio />
        <Testimonials />
        <WhyChooseUs />
        <CallToAction />
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

// Render the application
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
