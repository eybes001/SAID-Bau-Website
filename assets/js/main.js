/* ========================================
   SAID Bau - Main JavaScript File
   Handles: Languages, Navigation, Animations, Forms
   ======================================== */

// Global Variables
let currentLanguage = localStorage.getItem('language') || 'de';
let translations = {};
let isNavOpen = false;

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  loadTranslations();
  setLanguage(currentLanguage);
  initializeNavigation();
  initializeAnimations();
  initializeFormHandling();
  initializeScrollEffects();
  initializeBeforeAfterGallery();
  setupLanguageSelector();
});

// ========== LOAD TRANSLATIONS ==========
function loadTranslations() {
  fetch('assets/languages/translations.json')
    .then(response => response.json())
    .then(data => {
      translations = data;
    })
    .catch(error => console.error('Error loading translations:', error));
}

// ========== SET LANGUAGE ==========
function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Set page direction
  if (lang === 'ar') {
    document.body.classList.add('rtl');
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.body.classList.remove('rtl');
    document.documentElement.removeAttribute('dir');
    document.documentElement.setAttribute('lang', lang);
  }
  
  // Update all translatable elements
  updatePageText();
  
  // Update language selector
  const selector = document.getElementById('languageSelector');
  if (selector) {
    selector.value = lang;
  }
}

// ========== UPDATE PAGE TEXT ==========
function updatePageText() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = translations[currentLanguage]?.[key];
    
    if (translation) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    }
  });

  const htmlElements = document.querySelectorAll('[data-i18n-html]');
  htmlElements.forEach(element => {
    const key = element.getAttribute('data-i18n-html');
    const translation = translations[currentLanguage]?.[key];
    if (translation) {
      element.innerHTML = translation;
    }
  });
}

// ========== SETUP LANGUAGE SELECTOR ==========
function setupLanguageSelector() {
  const selector = document.getElementById('languageSelector');
  if (selector) {
    selector.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
}

// ========== NAVIGATION ==========
function initializeNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.navbar-nav');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', toggleMenu);
  }

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.navbar-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isNavOpen) {
        toggleMenu();
      }
      updateActiveLink(link);
    });
  });

  // Sticky header effects
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Set initial active link
  updateNavOnLoad();
}

function toggleMenu() {
  const navMenu = document.querySelector('.navbar-nav');
  navMenu.classList.toggle('active');
  isNavOpen = !isNavOpen;
}

function updateActiveLink(clickedLink) {
  const navLinks = document.querySelectorAll('.navbar-nav a');
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  clickedLink.classList.add('active');
}

function updateNavOnLoad() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ========== SCROLL ANIMATIONS ==========
function initializeScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe service cards
  document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
  });

  // Observe project cards
  document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
  });

  // Observe testimonial cards
  document.querySelectorAll('.testimonial-card').forEach(card => {
    observer.observe(card);
  });

  // Observe why choose items
  document.querySelectorAll('.why-item').forEach(item => {
    observer.observe(item);
  });
}

// ========== ANIMATIONS ==========
function initializeAnimations() {
  // Add animation classes to elements
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// ========== FORM HANDLING ==========
function initializeFormHandling() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }

  // Add real-time validation
  const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
  formInputs.forEach(input => {
    input.addEventListener('blur', validateField);
  });
}

function validateField(e) {
  const field = e.target;
  const value = field.value.trim();

  if (value === '') {
    field.style.borderColor = '#f44336';
    return false;
  } else {
    if (field.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        field.style.borderColor = '#f44336';
        return false;
      }
    }
    field.style.borderColor = '#e0e0e0';
    return true;
  }
}

function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = {
    name: form.querySelector('input[name="name"]')?.value || '',
    email: form.querySelector('input[name="email"]')?.value || '',
    phone: form.querySelector('input[name="phone"]')?.value || '',
    service: form.querySelector('select[name="service"]')?.value || '',
    message: form.querySelector('textarea[name="message"]')?.value || ''
  };

  // Validate form
  if (!formData.name || !formData.email || !formData.message) {
    showFormMessage('error', 'Bitte füllen Sie alle erforderlichen Felder aus.');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    showFormMessage('error', 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    return;
  }

  // Simulate form submission (in real scenario, this would send to a server)
  console.log('Form Data:', formData);
  
  // Show success message
  const successKey = currentLanguage === 'ar' ? 'contact_form_success' : 
                     currentLanguage === 'tr' ? 'contact_form_success' :
                     currentLanguage === 'en' ? 'contact_form_success' : 'contact_form_success';
  const successMessage = translations[currentLanguage]?.[successKey];
  showFormMessage('success', successMessage || 'Message sent successfully!');

  // Reset form
  form.reset();

  // Hide message after 5 seconds
  setTimeout(() => {
    const messageElement = document.querySelector('.form-message');
    if (messageElement) {
      messageElement.style.display = 'none';
    }
  }, 5000);
}

function showFormMessage(type, message) {
  let messageElement = document.querySelector('.form-message');
  
  if (!messageElement) {
    const form = document.getElementById('contactForm');
    messageElement = document.createElement('div');
    messageElement.className = 'form-message';
    form.parentElement.insertBefore(messageElement, form);
  }

  messageElement.className = `form-message ${type}`;
  messageElement.textContent = message;
  messageElement.style.display = 'block';
}

// ========== BEFORE & AFTER GALLERY ==========
function initializeBeforeAfterGallery() {
  const sliders = document.querySelectorAll('.before-after-slider');
  
  sliders.forEach(slider => {
    const beforeImg = slider.querySelector('.before-img');
    const afterImg = slider.querySelector('.after-img');
    const sliderHandle = slider.querySelector('.slider-handle');
    
    if (!beforeImg || !afterImg) return;

    let isActive = false;

    const updateSliderPosition = (e) => {
      if (!isActive) return;

      let rect = slider.getBoundingClientRect();
      let x = e.clientX - rect.left;

      // Handle touch events
      if (e.touches) {
        x = e.touches[0].clientX - rect.left;
      }

      // Constrain x to slider bounds
      x = Math.max(0, Math.min(x, rect.width));

      const percentage = (x / rect.width) * 100;

      beforeImg.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;

      if (sliderHandle) {
        sliderHandle.style.left = `${percentage}%`;
      }
    };

    const startDrag = () => {
      isActive = true;
    };

    const stopDrag = () => {
      isActive = false;
    };

    sliderHandle?.addEventListener('mousedown', startDrag);
    sliderHandle?.addEventListener('touchstart', startDrag);

    document.addEventListener('mousemove', updateSliderPosition);
    document.addEventListener('touchmove', updateSliderPosition);

    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);

    // Initialize position
    beforeImg.style.clipPath = 'polygon(0 0, 50% 0, 50% 100%, 0 100%)';
    if (sliderHandle) {
      sliderHandle.style.left = '50%';
    }
  });
}

// ========== GALLERY FILTERING ==========
function filterProjects(category) {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  // Update active button
  filterBtns.forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');

  // Filter projects
  projectCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    
    if (category === 'all' || cardCategory === category) {
      card.style.display = 'grid';
      card.classList.add('fade-in');
    } else {
      card.style.display = 'none';
    }
  });
}

// ========== UTILITY FUNCTIONS ==========
function translate(key) {
  return translations[currentLanguage]?.[key] || key;
}

// Export for external use
window.SAID_BAU = {
  filterProjects,
  setLanguage,
  translate,
  currentLanguage: () => currentLanguage
};

// ========== LIGHTBOX FUNCTIONALITY ==========
function openLightbox(imgSrc) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    cursor: pointer;
  `;

  const img = document.createElement('img');
  img.src = imgSrc;
  img.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  `;

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '×';
  closeBtn.style.cssText = `
    position: absolute;
    top: 20px;
    right: 40px;
    background: none;
    border: none;
    color: white;
    font-size: 40px;
    cursor: pointer;
    z-index: 2001;
  `;

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    lightbox.remove();
  });

  lightbox.appendChild(img);
  lightbox.appendChild(closeBtn);

  lightbox.addEventListener('click', () => {
    lightbox.remove();
  });

  document.body.appendChild(lightbox);
}

// ========== ADD THIS TO INITIALIZE LIGHTBOX CLICKS ==========
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-image').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      openLightbox(img.src);
    });
  });
});
