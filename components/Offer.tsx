import React from 'react';
import { Check, Zap, Globe, Rocket, ShieldCheck, Clock } from 'lucide-react';
import { Content } from '../types';

interface OfferProps {
  content: Content['offer'];
}

const Offer: React.FC<OfferProps> = ({ content }) => {
  return (
    <section id="offer" className="py-24 bg-surface/30 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-gray-400">Everything you need to launch. Nothing you don't.</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Main Pricing (Span 2 cols on desktop) */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-surface border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap size={120} />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">All-in-One Package</h3>
                <p className="text-gray-400 mb-6">{content.note}</p>
              </div>
              <div>
                <div className="text-6xl font-extrabold text-white tracking-tight mb-2">
                  {content.price}
                </div>
                <div className="text-primary font-medium">Fixed price. No monthly fees.</div>
              </div>
            </div>
          </div>

          {/* Card 2: Speed */}
          <div className="p-8 rounded-3xl bg-surface border border-white/5 hover:border-primary/30 transition-colors flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">5 Days Delivery</h3>
            <p className="text-gray-400 text-sm">Fast turnaround without compromising quality.</p>
          </div>

          {/* Card 3: Features List (Span 1 col, Row 2) */}
          <div className="md:col-span-1 p-8 rounded-3xl bg-surface border border-white/5 hover:border-primary/30 transition-colors">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <ShieldCheck className="mr-2 text-primary" size={20} /> 
              Included
            </h3>
            <ul className="space-y-4">
              {content.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-gray-300">
                  <Check className="h-5 w-5 text-primary mr-3 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

           {/* Card 4: Tech & More (Span 2 cols, Row 2) */}
           <div className="md:col-span-2 p-8 rounded-3xl bg-surface border border-white/5 hover:border-primary/30 transition-colors">
               <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <Rocket className="mr-2 text-secondary" size={20} /> 
                Tech Stack & Support
              </h3>
               <ul className="space-y-4">
                {content.features.slice(3).map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-300">
                    <Check className="h-5 w-5 text-secondary mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offer;