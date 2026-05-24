/**
 * SAID Bau - Website Configuration
 * Customize company details here
 */

const SITE_CONFIG = {
  // Company Information
  company: {
    name: "SAID Bau",
    tagline: "Professionelle Renovierungsdienstleistungen",
    description: "700+ abgeschlossene Projekte für LEG und Vonovia",
    founded: "15+ Jahre Erfahrung",
    projects_completed: 700,
  },

  // Contact Information
  contact: {
    phone: "+49 (0) 123 456789",
    email: "info@said-bau.de",
    website: "https://www.said-bau.de",
    address: "Deutschland",
    service_area: "Ganz Deutschland",
  },

  // Business Hours
  hours: {
    weekday_start: "08:00",
    weekday_end: "18:00",
    saturday_start: "09:00",
    saturday_end: "13:00",
    closed: ["Sunday"],
  },

  // Color Theme
  colors: {
    primary: "#0066cc",
    primary_dark: "#0052a3",
    accent: "#ff6b35",
    dark_gray: "#1a1a1a",
    light_gray: "#f5f5f5",
    text: "#333333",
    light_text: "#666666",
  },

  // Services Offered
  services: [
    {
      id: "interior",
      name: "Innenrenovierungen",
      icon: "🏠",
      description: "Komplette Innenrenovierungen mit modernem Design"
    },
    {
      id: "apartments",
      name: "Wohnungsrenovierung",
      icon: "🏢",
      description: "Professionelle Wohnungsrenovierungen für Wohnungsunternehmen"
    },
    {
      id: "painting",
      name: "Malerarbeiten & Verputz",
      icon: "🎨",
      description: "Fachgerechte Maler- und Putzarbeiten"
    },
    {
      id: "flooring",
      name: "Bodenbeläge",
      icon: "⬜",
      description: "Installation von Fliesen, Vinyl, Laminat und Parkettböden"
    },
    {
      id: "drywall",
      name: "Trockenbau",
      icon: "🔨",
      description: "Gipskartonarbeiten und Wandkonstruktionen"
    },
    {
      id: "bathroom",
      name: "Badezimmerrenovierung",
      icon: "🚿",
      description: "Moderne Badezimmerausstattungen"
    },
    {
      id: "kitchen",
      name: "Kücheninstallation",
      icon: "🍳",
      description: "Hochwertige Kücheninstallationen"
    },
    {
      id: "repairs",
      name: "Reparaturen & Ausbesserungen",
      icon: "🔧",
      description: "Handwerkliche Reparaturen"
    },
  ],

  // Social Media (add if needed)
  social: {
    facebook: "https://facebook.com/said-bau",
    instagram: "https://instagram.com/said-bau",
    linkedin: "https://linkedin.com/company/said-bau",
    youtube: "https://youtube.com/said-bau",
  },

  // Analytics
  analytics: {
    google_analytics_id: "GA-XXXXXXXXX-X", // Replace with your ID
    enabled: false,
  },

  // Feature Flags
  features: {
    enable_animations: true,
    enable_lightbox: true,
    enable_form_validation: true,
    enable_language_selector: true,
    enable_newsletter: false,
    enable_chat: false,
  },

  // Multi-language Settings
  languages: {
    default: "de",
    available: ["de", "en", "ar", "tr"],
    rtl_languages: ["ar"], // Right-to-left languages
  },

  // SEO
  seo: {
    title: "SAID Bau - Professionelle Renovierungsdienstleistungen",
    description: "Professionelle Renovierungen mit über 700 abgeschlossenen Projekten. Vertraut von LEG und Vonovia.",
    keywords: "Renovierung, Sanierung, Wohnungsrenovierung, LEG, Vonovia",
    author: "SAID Bau",
  },

  // API Endpoints (if you add backend)
  api: {
    contact_form: "/api/contact",
    projects: "/api/projects",
    testimonials: "/api/testimonials",
  },
};

// Export for use in JavaScript
window.SITE_CONFIG = SITE_CONFIG;
