// ================================================================
// BASDILS PHARMA - MAIN JAVASCRIPT FILE
// Animations, Interactions, and Dynamic Features
// ================================================================

// ================================================================
// 1. PAGE LOADER
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
  const loader = document.querySelector('.page-loader');
  
  // Simulate page load
  setTimeout(() => {
    if (loader) {
      loader.classList.add('hidden');
    }
  }, 1500);
});

// ================================================================
// 2. NAVIGATION
// ================================================================

class Navigation {
  constructor() {
    this.hamburger = document.querySelector('.hamburger');
    this.navMenu = document.querySelector('.nav-menu');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.header = document.querySelector('header');
    this.initialActiveLink = document.querySelector('.nav-link.active');
    this.resizeObserver = null;
    
    this.init();
  }

  init() {
    // Hamburger menu toggle
    if (this.hamburger) {
      this.hamburger.addEventListener('click', () => this.toggleMenu());
    }

    // Close menu when link is clicked
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
      this.handleHeaderScroll();
      this.highlightActiveLink();
    }, { passive: true });

    window.addEventListener('resize', () => {
      this.syncHeaderOffset();
      if (window.innerWidth > 768) {
        this.closeMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.closeMenu();
      }
    });

    // Active link highlighting
    this.observeHeaderSize();
    this.syncHeaderOffset();
    this.handleHeaderScroll();
    this.highlightActiveLink();

    window.addEventListener('load', () => this.syncHeaderOffset(), { once: true });
  }

  toggleMenu(forceState) {
    const isOpen = typeof forceState === 'boolean'
      ? forceState
      : !this.navMenu?.classList.contains('active');

    this.hamburger?.classList.toggle('active', isOpen);
    this.hamburger?.setAttribute('aria-expanded', String(isOpen));
    this.navMenu?.classList.toggle('active', isOpen);
  }

  closeMenu() {
    this.toggleMenu(false);
  }

  handleHeaderScroll() {
    this.header?.classList.toggle('scrolled', window.scrollY > 24);
    this.syncHeaderOffset();
  }

  syncHeaderOffset() {
    if (!this.header) return;
    const headerHeight = this.header.offsetHeight;
    const offset = headerHeight + 24;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    document.documentElement.style.setProperty('--header-offset', `${offset}px`);
  }

  observeHeaderSize() {
    if (!this.header || typeof ResizeObserver === 'undefined') return;

    this.resizeObserver = new ResizeObserver(() => {
      this.syncHeaderOffset();
    });

    this.resizeObserver.observe(this.header);
  }

  highlightActiveLink() {
    const scrollPosition = window.scrollY;
    let hasMatchingSection = false;

    this.navLinks.forEach(link => {
      link.classList.remove('active');

      // Get the section id from href
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.querySelector(href);
        
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            link.classList.add('active');
            hasMatchingSection = true;
          }
        }
      }
    });

    if (!hasMatchingSection && this.initialActiveLink) {
      this.initialActiveLink.classList.add('active');
    }
  }
}

// ================================================================
// 3. COUNTER ANIMATION
// ================================================================

class Counter {
  constructor(element, target, duration = 2000) {
    this.element = element;
    this.target = parseInt(target);
    this.duration = duration;
    this.current = 0;
    this.isAnimating = false;
  }

  animate() {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    const increment = this.target / (this.duration / 16);
    const startTime = Date.now();

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / this.duration, 1);
      
      this.current = Math.floor(this.target * progress);
      this.element.textContent = this.current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        this.element.textContent = this.target.toLocaleString();
        this.isAnimating = false;
      }
    };

    updateCounter();
  }
}

class CounterSection {
  constructor() {
    this.counters = [];
    this.init();
  }

  init() {
    const counterElements = document.querySelectorAll('.counter-number');
    
    counterElements.forEach(el => {
      const target = el.getAttribute('data-target');
      if (target) {
        this.counters.push(new Counter(el, target, 2500));
      }
    });

    // Trigger animation when section is in view
    const achievementsSection = document.querySelector('.achievements');
    if (achievementsSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.counters.forEach(counter => counter.animate());
            observer.unobserve(achievementsSection);
          }
        });
      });

      observer.observe(achievementsSection);
    }
  }
}

// ================================================================
// 4. SCROLL ANIMATIONS
// ================================================================

class ScrollAnimations {
  constructor() {
    this.init();
  }

  init() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
      observer.observe(el);
    });
  }
}

// ================================================================
// 5. MODAL/INQUIRY FORM
// ================================================================

class InquiryModal {
  constructor() {
    this.modal = document.getElementById('inquiryModal');
    this.openBtn = document.getElementById('openInquiryBtn');
    this.closeBtn = document.querySelector('.modal-close');
    this.form = document.getElementById('inquiryForm');

    this.init();
  }

  init() {
    if (!this.modal) return;

    // Open modal
    if (this.openBtn) {
      this.openBtn.addEventListener('click', () => this.open());
    }

    // Close modal
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    // Close on background click
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });

    // Handle form submission
    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  }

  open() {
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById('name')?.value,
      email: document.getElementById('email')?.value,
      phone: document.getElementById('phone')?.value,
      message: document.getElementById('message')?.value
    };

    console.log('Form submitted:', formData);

    // Show success message (you can integrate with email service here)
    alert('Thank you for your inquiry! We will contact you soon.');
    
    this.form.reset();
    this.close();
  }
}

// ================================================================
// 6. SMOOTH SCROLL TO SECTIONS
// ================================================================

class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// ================================================================
// 7. WHATSAPP BUTTON
// ================================================================

function initWhatsAppButton() {
  const whatsappBtn = document.querySelector('.whatsapp-button');
  if (whatsappBtn) {
    const phoneNumber = '919999999999'; // Replace with actual number
    const message = 'Hello! I would like to inquire about BASDILS PHARMA products.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    whatsappBtn.href = whatsappUrl;
    whatsappBtn.target = '_blank';
  }
}

// ================================================================
// 8. LAZY LOADING IMAGES
// ================================================================

class LazyLoad {
  constructor() {
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
    }
  }
}

// ================================================================
// 9. PRODUCT FILTER (If needed)
// ================================================================

class ProductFilter {
  constructor() {
    this.filters = document.querySelectorAll('.product-filter');
    this.products = document.querySelectorAll('.product-card');
    
    this.init();
  }

  init() {
    this.filters.forEach(filter => {
      filter.addEventListener('click', (e) => {
        this.setActiveFilter(e.target);
        this.filterProducts(e.target.dataset.filter);
      });
    });
  }

  setActiveFilter(element) {
    this.filters.forEach(f => f.classList.remove('active'));
    element.classList.add('active');
  }

  filterProducts(category) {
    this.products.forEach(product => {
      if (category === 'all' || product.dataset.category === category) {
        product.style.display = 'block';
        setTimeout(() => product.classList.add('fade-in'), 0);
      } else {
        product.style.display = 'none';
      }
    });
  }
}

// ================================================================
// 10. FORM VALIDATION
// ================================================================

class FormValidator {
  constructor(formId) {
    this.form = document.getElementById(formId);
    if (this.form) {
      this.init();
    }
  }

  init() {
    this.form.addEventListener('submit', (e) => {
      if (!this.validate()) {
        e.preventDefault();
      }
    });
  }

  validate() {
    const inputs = this.form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        this.showError(input, 'This field is required');
        isValid = false;
      } else if (input.type === 'email' && !this.isValidEmail(input.value)) {
        this.showError(input, 'Please enter a valid email');
        isValid = false;
      } else if (input.type === 'phone' && !this.isValidPhone(input.value)) {
        this.showError(input, 'Please enter a valid phone number');
        isValid = false;
      } else {
        this.removeError(input);
      }
    });

    return isValid;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isValidPhone(phone) {
    const phoneRegex = /^[0-9\-\+\(\)\s]{10,}$/;
    return phoneRegex.test(phone);
  }

  showError(input, message) {
    input.classList.add('error');
    let error = input.nextElementSibling;
    
    if (!error || !error.classList.contains('error-message')) {
      error = document.createElement('span');
      error.className = 'error-message';
      error.textContent = message;
      input.parentNode.insertBefore(error, input.nextSibling);
    } else {
      error.textContent = message;
    }
  }

  removeError(input) {
    input.classList.remove('error');
    const error = input.nextElementSibling;
    if (error && error.classList.contains('error-message')) {
      error.remove();
    }
  }
}

// ================================================================
// 11. PARALLAX EFFECT
// ================================================================

class Parallax {
  constructor() {
    this.elements = document.querySelectorAll('[data-parallax]');
    this.init();
  }

  init() {
    if (this.elements.length > 0) {
      window.addEventListener('scroll', () => this.updateParallax());
    }
  }

  updateParallax() {
    this.elements.forEach(el => {
      const scrollPosition = window.scrollY;
      const elementOffset = el.offsetTop;
      const distance = scrollPosition - elementOffset;
      const speed = el.dataset.parallax || 0.5;

      el.style.transform = `translateY(${distance * speed}px)`;
    });
  }
}

// ================================================================
// 12. BACK TO TOP BUTTON
// ================================================================

class BackToTop {
  constructor() {
    this.button = document.querySelector('.back-to-top');
    this.init();
  }

  init() {
    if (!this.button) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        this.button.classList.add('visible');
      } else {
        this.button.classList.remove('visible');
      }
    });

    this.button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// ================================================================
// 13. TOOLTIP
// ================================================================

class Tooltip {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('[data-tooltip]').forEach(el => {
      el.addEventListener('mouseenter', () => this.show(el));
      el.addEventListener('mouseleave', () => this.hide(el));
    });
  }

  show(element) {
    const tooltip = element.getAttribute('data-tooltip');
    const div = document.createElement('div');
    div.className = 'tooltip';
    div.textContent = tooltip;
    
    document.body.appendChild(div);
    
    const rect = element.getBoundingClientRect();
    div.style.left = rect.left + rect.width / 2 - div.offsetWidth / 2 + 'px';
    div.style.top = rect.top - div.offsetHeight - 10 + 'px';
  }

  hide(element) {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
      tooltip.remove();
    }
  }
}

// ================================================================
// 14. INITIALIZATION
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all features
  new Navigation();
  new CounterSection();
  new ScrollAnimations();
  new InquiryModal();
  new SmoothScroll();
  new LazyLoad();
  new FormValidator('inquiryForm');
  new Parallax();
  new BackToTop();
  
  initWhatsAppButton();

  // Add loading complete class
  document.body.classList.add('loaded');
});

// ================================================================
// 15. UTILITY FUNCTIONS
// ================================================================

// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for performance
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Log version
console.log('%cBASDILS PHARMA', 'color: #0B3D91; font-size: 24px; font-weight: bold;');
console.log('%cPremium Pharmaceutical Website', 'color: #00A86B; font-size: 14px;');
