import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Microscope, Fingerprint, 
  Shield, Database, Cpu, ChevronRight 
} from 'lucide-react';
import cifLogo from '../assets/CIFLab-icon.jpg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Características', href: '#features', icon: <Cpu size={16} /> },
    { name: 'Mecánicas', href: '#mechanics', icon: <Fingerprint size={16} /> },
    { name: 'Instituciones', href: '#institutions', icon: <Shield size={16} /> },
  ];

  return (
    <nav className="fixed w-full z-[100] bg-cif-dark/60 backdrop-blur-xl border-b border-cif-green/20">
      {/* Línea de escaneo superior decorativa */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cif-green/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo con efecto Glow */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex-shrink-0 flex items-center gap-4 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <img 
                className="h-11 w-11 rounded-sm border border-cif-green/50 group-hover:border-cif-green transition-colors" 
                src={cifLogo} 
                alt="CIF Lab Logo" 
              />
              <div className="absolute -inset-1 bg-cif-green/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-tighter text-white leading-none">
                CIF <span className="text-cif-green">LAB</span>
              </span>
              <span className="text-[8px] font-mono text-cif-green tracking-[0.3em] uppercase opacity-70">
                Forensic System v1.0
              </span>
            </div>
          </motion.div>

          {/* Desktop Menu - Botones tipo Módulo */}
          <div className="hidden md:block">
            <div className="flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-gray-400 hover:text-white px-4 py-2 rounded-sm text-xs font-bold transition-all duration-300 uppercase tracking-widest border border-transparent hover:border-white/10 hover:bg-white/5"
                >
                  <span className="text-cif-green/50 group-hover:text-cif-green transition-colors">
                    {link.icon}
                  </span>
                  {link.name}
                </a>
              ))}
              
              <div className="h-6 w-[1px] bg-white/10 mx-4" />

              <motion.a 
                whileHover={{ y: -2 }}
                href="#waitlist" 
                className="relative px-6 py-2 overflow-hidden group bg-cif-green text-cif-dark font-black text-xs tracking-tighter uppercase"
              >
                <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black">
                  ACCESO_SISTEMA <ChevronRight size={14} />
                </span>
              </motion.a>
            </div>
          </div>

          {/* Botón Mobile con Animación */}
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-cif-green p-2 border border-cif-green/20 bg-cif-green/5"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Inmersivo */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0f0d] border-b border-cif-green/20 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 text-gray-400 hover:text-cif-green py-3 border-b border-white/5 font-display text-lg tracking-widest uppercase"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
              <a 
                href="#waitlist"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-cif-green text-black py-4 font-black tracking-widest text-sm"
              >
                UNIRSE A LA WAITLIST
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};