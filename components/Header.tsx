import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, Content } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: Content['nav'];
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const navLinks = [
    { name: content.offer, href: '#offer' },
    { name: content.work, href: '#portfolio' },
    { name: content.about, href: '#about' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-background/80 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-extrabold tracking-tighter text-white">
              TAFFRA<span className="text-primary">.IO</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full px-4 py-1.5 border border-white/10"
            >
              <Globe size={14} />
              <span className="uppercase text-xs font-bold">{language}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-400 border border-white/10 rounded-full px-3 py-1 bg-white/5"
            >
              <span className="uppercase text-xs font-bold">{language}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-white/5 absolute w-full top-full left-0 animate-fade-in-up">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;