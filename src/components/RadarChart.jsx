import { motion } from 'framer-motion';

const axes = [
  { label: 'Milliyetçilik', angle: -90 },
  { label: 'Ekonomi', angle: -30 },
  { label: 'Özgürlük', angle: 30 },
  { label: 'Devlet', angle: 90 },
  { label: 'Din', angle: 150 },
  { label: 'Ademi Merkeziyet', angle: 210 }
];

export default function RadarChart({ data }) {
  const size = 300;
  const center = size / 2;
  const maxRadius = 110;

  const getPoint = (value, angle) => {
    const radius = (value / 100) * maxRadius;
    const rad = (angle * Math.PI) / 180;
    return { x: center + radius * Math.cos(rad), y: center + radius * Math.sin(rad) };
  };

  const currentPoints = data.map(d => {
    const p = getPoint(d.value, d.angle);
    return `${p.x},${p.y}`;
  }).join(' ');

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="overflow-visible">
        {[0.25, 0.5, 0.75, 1].map((level, i) => (
          <polygon key={i} points={axes.map(a => { const p = getPoint(level * 100, a.angle); return `${p.x},${p.y}`; }).join(' ')} fill="none" stroke="#e0d6c2" strokeWidth="1" strokeDasharray="2,2" />
        ))}
        {axes.map((axis, i) => {
          const p = getPoint(100, axis.angle);
          return <line key={i} x1={center} y1={center} x2={p.x} y2={p.y} stroke="#c2b8a4" strokeWidth="1" />;
        })}
        <motion.polygon points={currentPoints} fill="rgba(43, 27, 35, 0.4)" stroke="#2b1b23" strokeWidth="2" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 80, damping: 12 }} style={{ transformOrigin: 'center', transformBox: 'fill-box' }} />
        {axes.map((axis, i) => {
          const p = getPoint(125, axis.angle);
          return <text key={i} x={p.x} y={p.y} fill="#2b1b23" fontSize="11" fontFamily='"Special Elite", monospace' textAnchor="middle" dominantBaseline="middle">{axis.label}</text>;
        })}
      </svg>
    </div>
  );
}
