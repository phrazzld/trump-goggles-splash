/**
 * Trump Goggles Splash - Main JavaScript
 * Minimal vanilla JS for scroll-triggered animations and dynamic year
 */

(function() {
  'use strict';

  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // If reduced motion is preferred, make all elements visible immediately
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  // Intersection Observer for scroll-triggered animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after animation to save resources
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all scroll-animated elements
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
})();
