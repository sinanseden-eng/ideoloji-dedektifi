import { motion } from 'framer-motion';
import { useState } from 'react';
import { ideologies } from '../data/ideologies';

const comparisonTopics = [
  { key: 'nationalism', label: 'Milliyetçilik / Vatan' },
  { key: 'economy', label: 'Devletçilik / Piyasa' },
  { key: 'freedom', label: 'Bireysel Özgürlük' },
  { key: 'religion', label: 'Din / Gelenek' },
  { key: 'state', label: 'Otorite / Disiplin' }
];

function Star({ filled }) {
  return (
    <div className={`w-6 h-6 ${filled ? 'text-brass-dark' : 'text-ink/20'}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ filter: filled ? 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))' : 'none' }}>
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    </div>
  );
}

export default function ComparisonTable() {
  const [selectedIds, setSelectedIds] = useState(['kemalist', 'liberal', 'socialist']);
  const [showTable, setShowTable] = useState(false);

  const toggleSelection = (id) => {
    setShowTable(false);
    if (selectedIds.includes(id)) { setSelectedIds(selectedIds.filter(i => i !== id)); } 
    else if (selectedIds.length < 3) { setSelectedIds([...selectedIds, id]); }
  };

  const selectedIdeologies = selectedIds.map(id => ideologies.find(i => i.id === id)).filter(Boolean);

  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <h2 className="text-4xl font-serif text-brass-light mb-8">Karşılaştırma Masası</h2>
      <div className="flex flex-wrap gap-4 justify-center mb-12 max-w-3xl">
        {ideologies.map(ideo => {
          const isSelected = selectedIds.includes(ideo.id);
          return (
            <motion.button key={ideo.id} whileTap={{ scale: 0.95 }} onClick={() => toggleSelection(ideo.id)} disabled={!isSelected && selectedIds.length >= 3} className={`px-6 py-3 font-mono border-2 transition-all duration-300 ${isSelected ? 'bg-brass text-walnut-dark border-brass-light shadow-brass scale-105' : 'bg-walnut text-paper-light border-brass-dark/50 opacity-60 hover:opacity-100'}`}>
              {isSelected ? '✓ ' : ''}{ideo.name}
            </motion.button>
          );
        })}
      </div>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setShowTable(true)} disabled={selectedIdeologies.length < 2} className="mb-12 px-8 py-4 bg-brass text-walnut-dark font-serif text-xl shadow-brass disabled:opacity-30">
        Karşılaştırmayı Oluştur
      </motion.button>
      {showTable && (
        <motion.div initial={{ opacity: 0, y: 50, rotateX: -20 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ type: 'spring', stiffness: 50 }} className="bg-paper-light shadow-paper p-8 rounded-sm w-full max-w-4xl relative" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/aged-paper.png)' }}>
          <div className="grid mb-6" style={{ gridTemplateColumns: `2fr repeat(${selectedIdeologies.length}, 1fr)` }}>
            <div></div>
            {selectedIdeologies.map(ideo => (<div key={ideo.id} className="text-center font-serif text-2xl text-ink border-b-4 border-double border-ink/30 pb-2">{ideo.name}</div>))}
          </div>
          {comparisonTopics.map((topic, rowIndex) => (
            <div key={topic.key} className="grid items-center py-4 border-b border-ink/10" style={{ gridTemplateColumns: `2fr repeat(${selectedIdeologies.length}, 1fr)` }}>
              <div className="font-mono text-ink/80 text-sm uppercase tracking-wider">{topic.label}</div>
              {selectedIdeologies.map((ideo, colIndex) => {
                const score = ideo.scores[topic.key];
                const stars = Math.round((score / 100) * 5);
                return (
                  <div key={ideo.id} className="flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div key={i} initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: (rowIndex * 0.2) + (colIndex * 0.1) + (i * 0.1), type: 'spring', stiffness: 300, damping: 15 }}>
                        <Star filled={i < stars} />
                      </motion.div>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
          <div className="mt-8 text-right font-mono text-xs text-ink/50 italic">"Yıldızlar, ideolojinin o konuya olan takıntı derecesini gösterir. Beş yıldız fanatizm, tek yıldız ilgisizliktir."</div>
        </motion.div>
      )}
    </div>
  );
}
