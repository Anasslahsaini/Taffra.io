import React, { useEffect, useState } from 'react';

interface IntroProps {
  onComplete: () => void;
}

const words = ["PREMIUM", "FAST", "IMPACT"];

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Cycle words
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < words.length - 1) return prev + 1;
        return prev;
      });
    }, 1100);

    // Start exit sequence after last word
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 3300);

    // Complete and unmount
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712] transition-all duration-700 ease-in-out ${
        exiting ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
       <div key={index} className="relative">
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter animate-word-reveal">
            {words[index]}<span className="text-primary">.</span>
          </h1>
       </div>
       
       <style>{`
         @keyframes wordReveal {
           0% { opacity: 0; transform: translateY(30px); filter: blur(12px); }
           20% { opacity: 1; transform: translateY(0); filter: blur(0); }
           80% { opacity: 1; transform: translateY(0); filter: blur(0); }
           100% { opacity: 0; transform: translateY(-30px); filter: blur(12px); }
         }
         .animate-word-reveal {
           animation: wordReveal 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
         }
       `}</style>
    </div>
  );
};

export default Intro;