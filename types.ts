export type Language = 'fr' | 'en';

export interface Project {
  name: string;
  type: string;
  description: string;
  link?: string;
  image: string;
  isFeatured?: boolean;
}

export interface Content {
  nav: {
    offer: string;
    about: string;
    work: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  offer: {
    title: string;
    price: string;
    features: string[];
    note: string;
  };
  portfolio: {
    title: string;
    cta: string;
    projects: Project[];
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  footer: {
    copyright: string;
  };
}