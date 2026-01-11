import React from 'react';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { Content } from '../types';
import { WHATSAPP_LINK, BOOKING_LINK } from '../constants';

interface HeroProps {
  content: Content['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-20 pointer-events-none animate-pulse"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Available for new projects
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {content.title.split('.')[0]}.
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300 mt-2">
            {content.title.split('.')[1]?.replace('Prix fixe :', '').replace('990€', '')} 
            <span className="text-white">990€.</span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {content.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <MessageCircle className="mr-2 relative z-10" size={20} />
            <span className="relative z-10">{content.ctaPrimary}</span>
            <ArrowRight className="ml-2 w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/10 text-gray-300 font-medium rounded-full hover:bg-white/5 hover:text-white transition-all hover:border-white/20"
          >
            <Phone className="mr-2" size={20} />
            {content.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;