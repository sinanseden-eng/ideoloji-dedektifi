import { motion } from 'framer-motion';

export default function BrassButton({ children, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
      whileTap={{ scale: 0.98, boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }}
      className="relative px-8 py-4 rounded-md font-serif text-lg tracking-wider text-walnut-dark bg-gradient-to-b from-brass-light via-brass to-brass-dark shadow-brass border border-brass-dark transition-all duration-200"
    >
      <div className="absolute inset-0 rounded-md opacity-30 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0px, transparent 1px, transparent 2px)' }} />
      <span className="relative z-10 drop-shadow-sm">{children}</span>
    </motion.button>
  );
}
