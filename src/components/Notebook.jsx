import { motion } from 'framer-motion';
import RadarChart from './RadarChart';
import { X } from 'lucide-react';

export default function Notebook({ ideology, onClose }) {
  if (!ideology) return null;

  const radarData = [
    { angle: -90, value: ideology.scores.nationalism },
    { angle: -30, value: ideology.scores.economy },
    { angle: 30, value: ideology.scores.freedom },
    { angle: 90, value: ideology.scores.state },
    { angle: 150, value: ideology.scores.religion },
    { angle: 210, value: ideology.scores.decentralization },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-walnut-dark/80 backdrop-blur-sm p-4">
      <motion.div initial={{ opacity: 0, scale: 0.9, rotateY: -90 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 0.9, rotateY: 90 }} transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        className="relative bg-paper-light shadow-2xl border border-paper-dark/50 rounded-r-md"
        style={{ width: '90%', maxWidth: '900px', height: '600px', perspective: '1000px', backgroundImage: 'linear-gradient(to right, #e8e0d0 0%, #fdfbf7 5%, #fdfbf7 100%)' }}>
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-walnut-dark rounded-l-md shadow-inner flex flex-col items-center justify-center gap-4 border-r-2 border-brass-dark">
          <div className="w-2 h-2 rounded-full bg-brass-dark"></div><div className="w-2 h-2 rounded-full bg-brass-dark"></div>
        </div>
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-ink/50 hover:text-ink transition-colors"><X size={24} /></button>
        <div className="flex h-full pl-12 pr-8 py-10">
          <div className="w-1/2 pr-8 border-r border-ink/20 overflow-y-auto">
            <h2 className="text-4xl font-serif text-ink mb-2">{ideology.name}</h2>
            <div className="w-16 h-1 bg-brass-dark mb-6"></div>
            <div className="space-y-6 font-mono text-ink/90 text-sm leading-relaxed">
              <div><h3 className="text-brass-dark font-bold uppercase tracking-widest mb-2">📖 Tanım</h3><p>{ideology.description}</p></div>
              <div><h3 className="text-brass-dark font-bold uppercase tracking-widest mb-2">⚖️ Ekonomi</h3><p>{ideology.economy}</p></div>
              <div><h3 className="text-brass-dark font-bold uppercase tracking-widest mb-2">🏛️ Devlet</h3><p>{ideology.state}</p></div>
            </div>
          </div>
          <div className="w-1/2 pl-8 flex flex-col items-center">
            <h3 className="text-xl font-serif text-ink mb-4 self-start">İdeolojik Yapı</h3>
            <div className="flex-1 flex items-center justify-center"><RadarChart data={radarData} /></div>
            <div className="mt-4 w-full bg-paper-dark/50 p-4 border-l-4 border-ink/40 font-mono text-xs text-ink/80 italic">
              <p>"{ideology.quote}"</p><p className="text-right mt-2 not-italic">- Anonim Araştırmacı</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
