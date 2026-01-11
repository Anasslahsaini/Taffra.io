import { Content, Language } from './types';

export const WHATSAPP_NUMBER = "330744644525";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const BOOKING_LINK = "https://cal.com/anass-lahsaini-u6lrsh/30min";

export const CONTENT: Record<Language, Content> = {
  fr: {
    nav: {
      offer: "Offre",
      about: "À propos",
      work: "Réalisations",
      cta: "Discuter",
    },
    hero: {
      title: "Votre site web pro, prêt en 5 jours. Prix fixe : 990€.",
      subtitle: "Conception, hébergement, nom de domaine — tout inclus. Pas de surprises.",
      ctaPrimary: "Discuter sur WhatsApp",
      ctaSecondary: "Réserver un appel",
    },
    offer: {
      title: "L’offre clé en main",
      price: "990€",
      features: [
        "Site web moderne & rapide (jusqu'à 5 pages)",
        "Hébergement rapide (Vercel) – 12 mois",
        "Nom de domaine (.com ou .io) – 12 mois",
        "Optimisation SEO de base",
        "30 jours de support & révisions",
        "Livraison en 5 jours ouvrés"
      ],
      note: "Paiement unique. Tout inclus."
    },
    portfolio: {
      title: "Réalisations",
      cta: "Voir le site",
      projects: [
        {
          name: "Fry Masters",
          type: "Page de Vente (E-book)",
          description: "Page de vente haute conversion pour un livre de recettes Air Fryer. Design persuasif, bonus intégrés et paiement sécurisé.",
          link: "https://afrymasters.com",
          image: "https://raw.githubusercontent.com/Anasslahsaini/Cv-Website/refs/heads/main/t%C3%A9l%C3%A9chargement.png",
          isFeatured: true
        }
      ]
    },
    about: {
      title: "À propos",
      p1: "Je suis un développeur web freelance passionné par la création de sites performants et esthétiques. Mon objectif est simple : aider les professionnels à se lancer en ligne sans tracas technique.",
      p2: "Je crois en une approche transparente et efficace. Pas de frais cachés, pas de délais interminables. Juste un travail de qualité livré en temps et en heure.",
      p3: "Vitesse, clarté et fiabilité sont les piliers de mon travail. Travaillons ensemble pour donner vie à votre projet."
    },
    footer: {
      copyright: "© 2025 Taffra. Tous droits réservés."
    }
  },
  en: {
    nav: {
      offer: "Offer",
      about: "About",
      work: "Work",
      cta: "Let's Chat",
    },
    hero: {
      title: "Your professional website, ready in 5 days. Fixed price: 990€.",
      subtitle: "Design, hosting, domain name — everything included. No surprises.",
      ctaPrimary: "Chat on WhatsApp",
      ctaSecondary: "Book a Call",
    },
    offer: {
      title: "The All-Inclusive Offer",
      price: "990€",
      features: [
        "Modern fast website (up to 5 pages)",
        "Fast hosting (Vercel) – 12 months",
        "Domain name (.com or .io) – 12 months",
        "Basic SEO optimization",
        "30 days support & revisions",
        "Delivery in 5 business days"
      ],
      note: "One-time payment. Everything included."
    },
    portfolio: {
      title: "Work",
      cta: "See live site",
      projects: [
        {
          name: "Fry Masters",
          type: "Sales Landing Page",
          description: "High-conversion sales page for an Air Fryer cookbook. Features persuasive copy, countdown timers, and secure payment processing.",
          link: "https://afrymasters.com",
          image: "https://raw.githubusercontent.com/Anasslahsaini/Cv-Website/refs/heads/main/t%C3%A9l%C3%A9chargement.png",
          isFeatured: true
        }
      ]
    },
    about: {
      title: "About",
      p1: "I am a freelance web developer passionate about creating high-performance, aesthetic websites. My goal is simple: to help professionals get online without technical hassles.",
      p2: "I believe in a transparent and efficient approach. No hidden fees, no endless delays. Just quality work delivered on time.",
      p3: "Speed, clarity, and reliability are the pillars of my work. Let's work together to bring your project to life."
    },
    footer: {
      copyright: "© 2025 Taffra. All rights reserved."
    }
  }
};