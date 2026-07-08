import { motion } from 'framer-motion';
import { useState } from 'react';
import { ideologies } from '../data/ideologies';
import Notebook from './Notebook';

export default function IdeologyWheel() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeIdeology, setActiveIdeology] = useState(null);
  const targetRotation = selectedIndex !== null ? -(selectedIndex * 60) : 0;

  const handleClick = (index) => {
    setSelectedIndex(index);
    setTimeout(() => { setActiveIdeology(ideologies[index]); }, 800);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
      <div className="absolute top-[calc(50%-180px)] z-20 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-brass-light drop-shadow-lg"></div>
      <motion.div animate={{ rotate: targetRotation }} transition={{ type: 'spring', stiffness: 60, damping: 15 }} className="relative w-[400px] h-[400px] rounded-full border-[12px] border-brass-dark shadow-2xl" style={{ background: 'radial-gradient(circle at 30% 30%, #e6c98c, #b8860b, #806020)', boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5), 0 10px 20px rgba(0,0,0,0.6)' }}>
        <div className="absolute inset-0 rounded-full opacity-20 mix-blend-overlay" style={{ backgroundImage: 'repeating-conic-gradient(#fff 0deg 2deg, transparent 2deg 4deg)' }}></div>
        {ideologies.map((ideo, i) => {
          const angle = i * 60;
          const isSelected = selectedIndex === i;
          return (
            <div key={ideo.id} className="absolute top-1/2 left-1/2 w-32 h-24" style={{ transform: `rotate(${angle}deg) translateY(-160px) rotate(-${angle}deg)`, transformOrigin: 'center', marginLeft: '-64px', marginTop: '-48px' }}>
              <motion.div animate={{ rotate: -targetRotation }} transition={{ type: 'spring', stiffness: 60, damping: 15 }} className="w-full h-full">
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => handleClick(i)} className={`w-full h-full rounded-md flex items-center justify-center font-serif text-lg ${isSelected ? 'bg-walnut text-brass-light border-2 border-brass-light' : 'bg-walnut-dark/80 text-paper-light border border-brass-dark'} shadow-lg transition-colors duration-300`}>
                  {ideo.name}
                </motion.button>
              </motion.div>
            </div>
          );
        })}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-walnut border-4 border-brass-dark shadow-inner flex items-center justify-center">
          <span className="text-brass-light text-xs font-mono">ATLAS</span>
        </div>
      </motion.div>
      <Notebook ideology={activeIdeology} onClose={() => setActiveIdeology(null)} />
    </div>
  );
}
