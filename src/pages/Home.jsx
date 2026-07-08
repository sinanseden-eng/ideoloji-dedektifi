import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BrassButton from '../components/BrassButton';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.h1 className="text-5xl md:text-7xl font-serif text-brass-light mb-4 tracking-wider" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        Türkiye İdeoloji Atlası
      </motion.h1>
      <motion.p className="font-mono text-paper-dark/70 italic mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        "Siyasi düşünceyi keşfet"
      </motion.p>
      <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 1.5, type: 'spring', stiffness: 100 }}>
        <BrassButton onClick={() => navigate('/cark')}>Atlası Aç</BrassButton>
      </motion.div>
    </div>
  );
}
