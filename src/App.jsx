import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Mechanics } from './components/Mechanics'
import { Institutions } from './components/Institutions'
import { Waitlist } from './components/Waitlist'
import { Footer } from './components/Footer'

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-cif-dark text-white font-sans selection:bg-cif-green selection:text-black">
      
      {/* Cursor dinámico */}
      <motion.div 
        className="fixed w-8 h-8 border border-cif-green rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      />

      <Navbar />
      <Hero />
      <Institutions /> 
      <Features />
      <Mechanics />
      <Waitlist />
      <Footer />
    </div>
  )
}