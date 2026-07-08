import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Background from './components/Background';
import IdeologyWheel from './components/IdeologyWheel';
import Quiz from './pages/Quiz';
import ComparisonTable from './components/ComparisonTable';
import Timeline from './components/Timeline';
import Home from './pages/Home';

export default function App() {
  const navItems = [
    { path: '/', label: 'Ana Sayfa', icon: '🏠' },
    { path: '/cark', label: 'Çark', icon: '🧭' },
    { path: '/karsilastir', label: 'Karşılaştır', icon: '⚖️' },
    { path: '/test', label: 'Test', icon: '📝' },
    { path: '/tarih', label: 'Tarih', icon: '📜' }
  ];

  return (
    <BrowserRouter>
      <Background />
      <div className="relative z-10 min-h-screen flex flex-col">
        <nav className="sticky top-0 z-40 bg-walnut-dark/80 backdrop-blur-md border-b-2 border-brass-dark shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="font-serif text-xl md:text-2xl text-brass-light tracking-wider hidden sm:block">Türkiye İdeoloji Atlası</h1>
            <div className="flex gap-2 md:gap-6 w-full sm:w-auto justify-around">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} className="relative px-4 py-2 group">
                  {({ isActive }) => (
                    <>
                      <motion.span className={`flex flex-col items-center text-xs font-mono transition-colors ${isActive ? 'text-brass-light' : 'text-paper-dark/60 group-hover:text-paper-light'}`} whileHover={{ y: -2 }}>
                        <span className="text-lg mb-1">{item.icon}</span>{item.label}
                      </motion.span>
                      {isActive && <motion.div layoutId="navIndicator" className="absolute bottom-0 left-0 right-0 h-1 bg-brass-dark rounded-full" />}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
        <main className="flex-1 flex flex-col items-center justify-start py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cark" element={<IdeologyWheel />} />
            <Route path="/karsilastir" element={<ComparisonTable />} />
            <Route path="/test" element={<Quiz />} />
            <Route path="/tarih" element={<Timeline />} />
          </Routes>
        </main>
        <footer className="py-6 text-center font-mono text-xs text-brass-dark/50">
          "Bu atlas, siyasi gerçeği değil, siyasi takıntıları haritalandırır." <br/>© Araştırmacının Günlüğü
        </footer>
      </div>
    </BrowserRouter>
  );
}
