import { motion } from 'framer-motion';

export default function Background() {
  const dust = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div className="fixed inset-0 bg-walnut z-0">
      <div className="absolute inset-0 shadow-desk"></div>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `repeating-linear-gradient(90deg, #3e2723, #3a2420 2px, #4b3128 3px, #3e2723 4px)` }}></div>
      {dust.map((p) => (
        <motion.div key={p.id} className="absolute w-1 h-1 bg-brass-light/30 rounded-full"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
