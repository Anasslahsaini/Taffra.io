import React from 'react';
import { Content } from '../types';

interface AboutProps {
  content: Content['about'];
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-24 bg-surface/50 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="relative group">
             <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
             <div className="w-40 h-40 md:w-56 md:h-56 relative overflow-hidden rounded-full border-2 border-white/10 p-1 bg-surface">
                 <img 
                   src="https://raw.githubusercontent.com/Anasslahsaini/Cv-Website/refs/heads/main/1759917813755.jpg" 
                   alt="Web Developer" 
                   className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                 />
             </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {content.title}
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed font-light">
              <p>{content.p1}</p>
              <p>{content.p2}</p>
              <p className="font-medium text-white pt-2 border-l-2 border-primary pl-4">{content.p3}</p>
            </div>
            
            <div className="mt-8 flex gap-3 flex-wrap justify-center md:justify-start">
               {['React', 'TypeScript', 'Tailwind', 'Next.js', 'Node.js'].map((tech) => (
                   <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-400 font-mono">
                       {tech}
                   </span>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;