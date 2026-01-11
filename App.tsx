import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Offer from './components/Offer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Intro from './components/Intro';
import { CONTENT } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('fr');
  const [showIntro, setShowIntro] = useState(true);
  const currentContent = CONTENT[language];

  // Lock scroll during intro
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
      // Scroll to top when reloading/starting
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showIntro]);

  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      
      <div className="fixed inset-0 bg-grid-white z-0 pointer-events-none"></div>
      
      {/* Main content wrapper - rendered behind intro for smooth reveal */}
      <div className="relative z-10">
        <Header 
          language={language} 
          setLanguage={setLanguage} 
          content={currentContent.nav}
        />
        
        <main>
          <Hero content={currentContent.hero} />
          <Offer content={currentContent.offer} />
          <Portfolio content={currentContent.portfolio} />
          <About content={currentContent.about} />
        </main>

        <Footer content={currentContent.footer} />
        <FloatingWhatsApp />
      </div>
    </div>
  );
};

export default App;