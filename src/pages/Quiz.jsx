import { motion, AnimatePresence } from 'framer-motion';
import { useQuizStore, questions } from '../store/quizStore';
import { useState } from 'react';
import BrassButton from '../components/BrassButton';

const options = [
  { label: "Kesinlikle Katılmıyorum", val: 0 },
  { label: "Katılmıyorum", val: 1 },
  { label: "Kararsızım / Umurumda Değil", val: 2 },
  { label: "Katılıyorum", val: 3 },
  { label: "Kesinlikle Katılıyorum", val: 4 }
];

const getRoast = (scores) => {
  const { x, y } = scores;
  if (x > 20 && y > 20) return { title: "Otoriter Sağ / Muhafazakar", desc: "Sınırları ve gelenekleri seviyorsun, çünkü düşünmek zahmetli bir iştir. Cüzdanın modern ama zihnin 12. yüzyılda sıkışıp kalmış. Devletin seni kollamasını istiyorsun, tabi senin gibi düşünenleri. Geri kalanlar astırılsın.", color: "#8B0000" };
  if (x < -20 && y < -20) return { title: "Özgürlükçü Sol / Anarşist Eğilimli", desc: "Herkes özgür olmalı, ta ki komşunun bahçesindeki partide seni çağırmayana kadar. Sistemi yıkmak istiyorsun ama sabah 9'da uyanmak senin için zaten devrim niteliğinde. Teori çok iyi, pratik sınıfta kaldı.", color: "#FF4500" };
  if (x < -20 && y > 20) return { title: "Devletçi Sol / Sert Sosyalist", desc: "Ekmeği bölmek istiyorsun ama bıçağı kimin tuttuğu önemli. Devlet her şeyi yapmalı, yeter ki senin fikirlerini yapsın. Aksi düşünenler için Sibirya trenleri her zaman hazırdır.", color: "#8B0000" };
  if (x > 20 && y < -20) return { title: "Neoliberal / Özgürlükçü Sağ", desc: "Herkes kendi çilesini çeker, devlet elini cebimden çekmeli diyorsun. Tabi iş çöküşe geldiğinde ilk aradığın numara devlet. Ahlaki çöküşü serbest piyasa düzenlesin, herkes kendi cehennemini satın alsın.", color: "#FFD700" };
  return { title: "Merkez / Politik Apatist", desc: "Hiçbir şeye tam inanmıyorsun, bu yüzden kimseyi hayal kırıklığına uğratmıyorsun. Şehrin göbeğinde bir kayıp misafir gibisin. Belki bir gün bir taraf seçersin, ya da hiçbir zaman. Tarih, duvarlarda oturanları hatırlamaz.", color: "#808080" };
};

function Results() {
  const { scores, resetQuiz } = useQuizStore();
  const result = getRoast(scores);
  const angle = Math.atan2(scores.x, -scores.y) * (180 / Math.PI);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="relative w-80 h-80 mb-12">
        <div className="absolute inset-0 rounded-full border-8 border-brass-dark bg-walnut-dark shadow-2xl flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-brass/50 top-1/2"></div>
          <div className="absolute w-[1px] h-full bg-brass/50 left-1/2"></div>
          <span className="absolute top-2 font-serif text-brass-light text-sm">ÖZGÜRLÜK</span>
          <span className="absolute bottom-2 font-serif text-brass-light text-sm">OTORİTE</span>
          <span className="absolute right-2 font-serif text-brass-light text-sm">SAĞ</span>
          <span className="absolute left-2 font-serif text-brass-light text-sm">SOL</span>
          <motion.div className="absolute w-2 h-32 bg-brass-light origin-bottom" style={{ bottom: '50%', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }} initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: angle - 90, opacity: 1 }} transition={{ type: 'spring', stiffness: 60, damping: 10, duration: 3 }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-brass-light"></div>
          </motion.div>
          <div className="absolute w-4 h-4 bg-brass-dark rounded-full shadow-inner"></div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.8 }} className="bg-paper-light shadow-paper p-10 rounded-sm border border-paper-dark/50 max-w-2xl w-full relative" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/aged-paper.png)' }}>
        <h3 className="text-xl font-mono text-ink/70 mb-2 uppercase tracking-widest">Araştırmacının Notu:</h3>
        <h2 className="text-4xl font-serif text-ink mb-6 border-b-2 border-ink/20 pb-4">{result.title}</h2>
        <p className="text-lg font-mono text-ink/90 leading-relaxed mb-8">{result.desc}</p>
        <div className="flex justify-center"><BrassButton onClick={resetQuiz}>Testi Yinele (veya İnançlarını Sorgula)</BrassButton></div>
      </motion.div>
    </div>
  );
}

export default function Quiz() {
  const { currentQuestion, answerQuestion, scores } = useQuizStore();
  const [selected, setSelected] = useState(null);
  const question = questions[currentQuestion];

  const handleSelect = (val) => {
    setSelected(val);
    setTimeout(() => { answerQuestion(val, question.axis, question.weight); setSelected(null); }, 400);
  };

  if (!question) return <Results scores={scores} />;
  const progress = (currentQuestion / questions.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="w-full max-w-xl h-4 bg-walnut-dark rounded-full border border-brass-dark overflow-hidden mb-12 shadow-inner">
        <motion.div className="h-full bg-ink" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #4a4a4a, #1a1a1a)' }} animate={{ width: `${progress}%` }} transition={{ type: 'spring', stiffness: 50 }} />
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={currentQuestion} initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }} transition={{ duration: 0.4 }} className="bg-paper-light shadow-paper p-10 rounded-sm border border-paper-dark/50 max-w-2xl w-full relative">
          <h2 className="text-2xl font-mono text-ink mb-8 leading-relaxed">{question.text}</h2>
          <div className="flex flex-col gap-3">
            {options.map((opt, i) => (
              <motion.button key={i} whileHover={{ x: 5, backgroundColor: '#e8e0d0' }} whileTap={{ scale: 0.98 }} onClick={() => handleSelect(opt.val)} className={`text-left p-4 border-l-4 font-mono text-ink transition-colors ${selected === opt.val ? 'border-ink bg-paper-dark/50' : 'border-brass-dark/30 bg-paper-light'}`}>{opt.label}</motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
