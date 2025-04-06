
// JavaScript for Webzys Website

document.addEventListener("DOMContentLoaded", function() {
  // Update current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Handle sticky navbar
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('d-none');
      
      // Update icon
      const icon = mobileMenuToggle.querySelector('svg');
      if (mobileMenu.classList.contains('d-none')) {
        icon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
      } else {
        icon.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
      }
    });
    
    // Close mobile menu when clicking nav links
    const mobileNavLinks = mobileMenu.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('d-none');
        const icon = mobileMenuToggle.querySelector('svg');
        icon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
      });
    });
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // Offset for the fixed header
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Initialize Bootstrap carousels
  const testimonialCarousel = document.getElementById('testimonialCarousel');
  if (testimonialCarousel && typeof bootstrap !== 'undefined') {
    new bootstrap.Carousel(testimonialCarousel, {
      interval: 5000,
      touch: true
    });
  }
});
