import React from 'react';
import { ExternalLink, ArrowRight, Eye } from 'lucide-react';
import { Content } from '../types';

interface PortfolioProps {
  content: Content['portfolio'];
}

const Portfolio: React.FC<PortfolioProps> = ({ content }) => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {content.title}
            </h2>
            <p className="text-gray-400">Selected projects and experiments.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative bg-surface rounded-2xl border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${project.isFeatured ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              {/* Image Container */}
              <div className={`relative overflow-hidden ${project.isFeatured ? 'h-64 sm:h-96' : 'h-48'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10 opacity-60"></div>
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 hover:bg-white/20"
                  >
                    <Eye size={24} />
                  </a>
                )}

                <div className="absolute top-4 right-4 z-20">
                    <span className="bg-black/50 backdrop-blur-md text-xs font-bold text-white px-3 py-1 rounded-full border border-white/10">
                        {project.type}
                    </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`font-bold text-white ${project.isFeatured ? 'text-3xl' : 'text-xl'}`}>
                      {project.name}
                  </h3>
                </div>
                
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary font-semibold hover:text-blue-400 transition-colors group/link"
                  >
                    {content.cta} <ExternalLink size={16} className="ml-2 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                  </a>
                ) : (
                   <span className="inline-flex items-center text-gray-600 font-medium cursor-not-allowed">
                     {content.cta} <ArrowRight size={16} className="ml-2" />
                   </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;