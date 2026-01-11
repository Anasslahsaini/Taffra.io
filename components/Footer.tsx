import React from 'react';
import { Mail } from 'lucide-react';
import { Content } from '../types';

interface FooterProps {
  content: Content['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-background text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-2xl font-bold tracking-tight">
            TAFFRA<span className="text-gray-600">.IO</span>
          </div>

          <div className="flex space-x-6">
            <a href="mailto:contact@taffra.io" className="flex items-center text-gray-400 hover:text-primary transition-colors">
              <Mail size={20} className="mr-2" />
              <span className="text-sm tracking-wide">contact@taffra.io</span>
            </a>
          </div>

          <div className="text-gray-600 text-sm font-mono">
            {content.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;