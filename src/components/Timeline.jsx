import { motion } from 'framer-motion';
import { useState } from 'react';

const timelineData = [
  { year: '1923', title: 'Cumhuriyetin İlanı', desc: 'İmparatorluk yıkılır, yerine matematiksel olarak çizilmiş bir ulus inşa edilir. Köylü ayaklanmaları modern rüzgarlarla savuşturulur.', x: 10 },
  { year: '1960', title: 'Askeri Müdahale', desc: 'Demokrasi, kendi kendini yok edemeyeceği için ordu tarafından kurtarılmaya karar verilir. İdam sehpaları, demokrasinin pahalı bir aksesuarıdır.', x: 35 },
  { year: '1980', title: '12 Eylül Darbesi', desc: 'Sokaklar temizlenir, zihinler işkencehanelerde yeniden formatlanır. Susmak altın, konuşmak kurşun değirmeninde öğütülmektir.', x: 60 },
  { year: '2002+', title: 'Yeni Çağ / Muhafazakar Demokrasi', desc: 'Sistem tıkır tıkır işler, sadece çarkları döndürenlerin elbisesi değişir. Tarih, beklenen ütopia yerine bir kara mizah dergisi olarak gelir.', x: 85 }
];

export default function Timeline() {
  const [activeEvent, setActiveEvent] = useState(null);
  return (
    <div className="relative min-h-screen p-8 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-serif text-brass-light mb-16">Tarih Çizgisi</h2>
      <div className="relative w-full max-w-5xl h-96 bg-paper-light shadow-paper p-8 rounded-sm" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/aged-paper.png)' }}>
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.path d="M 50 200 Q 300 50, 500 200 T 950 200" fill="none" stroke="#2b1b23" strokeWidth="4" strokeDasharray="10, 8" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 3, ease: 'easeInOut' }} />
        </svg>
        <div className="relative w-full h-full">
          {timelineData.map((event, i) => (
            <div key={i} className="absolute flex flex-col items-center" style={{ left: `${event.x}%`, top: '35%', transform: 'translate(-50%, -50%)' }}>
              <motion.button whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} onClick={() => setActiveEvent(event)} className="w-6 h-6 rounded-full bg-walnut-dark border-4 border-brass-dark shadow-lg z-10" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.5 + 1, type: 'spring' }} />
              <motion.span className="absolute top-8 font-mono text-ink whitespace-nowrap" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.5 + 1.2 }}>{event.year}</motion.span>
            </div>
          ))}
        </div>
        <motion.div className="absolute bottom-10 left-10 right-10 bg-paper-dark/80 p-6 border-l-4 border-ink shadow-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: activeEvent ? 1 : 0, y: activeEvent ? 0 : 20 }}>
          {activeEvent ? (<><h3 className="text-2xl font-serif text-ink mb-2">{activeEvent.title}</h3><p className="font-mono text-sm text-ink/80 leading-relaxed">{activeEvent.desc}</p></>) : (<p className="font-mono text-sm text-ink/50 italic">Bir noktaya tıklayarak tarihin tozunu al...</p>)}
        </motion.div>
      </div>
    </div>
  );
}
