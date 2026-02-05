import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Crosshair, Terminal, ShieldCheck, Activity, Zap } from 'lucide-react';
import { useRef, useMemo } from 'react';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  const yParticles = useTransform(scrollY, [0, 500], [0, -200]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  // Aumentamos a 30 partículas y las hacemos más visibles
  const forensicParticles = useMemo(() => [...Array(30)].map((_, i) => ({
    id: i,
    size: Math.random() * 5 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  })), []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-cif-dark">
      
      {/* 1. LUCES DE CONTRASTE (Glows) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Luz principal detrás del texto */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cif-green/10 rounded-full blur-[120px]" />
        {/* Luces de acento en las esquinas */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cif-green/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cif-green/5 rounded-full blur-[100px]" />
      </div>

      {/* 2. SISTEMA DE PARTÍCULAS (Más visibles) */}
      <motion.div style={{ y: yParticles }} className="absolute inset-0 pointer-events-none z-0">
        {forensicParticles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-cif-green/40 border border-white/20 shadow-[0_0_8px_rgba(74,222,128,0.4)]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* 3. HUD MARCO TÉCNICO */}
      <div className="absolute inset-0 pointer-events-none z-10 p-4 md:p-8">
        <div className="w-full h-full border border-cif-green/20 relative">
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cif-green" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cif-green" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-cif-green" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cif-green" />
        </div>
      </div>

      {/* 4. CONTENIDO PRINCIPAL REVISADO */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
        <motion.div style={{ opacity: opacityText }}>
          
          <div className="flex justify-center items-center gap-3 mb-6">
             <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-cif-green to-transparent" />
             <div className="flex items-center gap-2">
               <Zap size={14} className="text-cif-green fill-cif-green" />
               <span className="font-mono text-[11px] text-cif-green tracking-[0.5em] uppercase font-bold">
                 Entorno de Simulación V.2.0
               </span>
             </div>
             <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-cif-green to-transparent" />
          </div>
          
          <h1 className="text-7xl md:text-[120px] font-display font-black text-white mb-6 leading-none tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            CIF <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-cif-green to-cif-olive">LAB</span>
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed">
            Plataforma interactiva de <span className="text-white font-bold">formación pericial</span> para instituciones de investigación criminalística.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(74, 222, 128, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#waitlist" 
              className="group relative px-14 py-5 bg-cif-green text-cif-dark font-black text-sm tracking-widest uppercase rounded-sm transition-all"
            >
              SOLICITAR ACCESO BETA
            </motion.a>
            
            <button className="flex items-center gap-3 text-white font-display tracking-[0.2em] text-sm hover:text-cif-green transition-all group">
              <Terminal size={18} className="text-cif-green" /> 
              DOCUMENTACIÓN TÉCNICA
            </button>
          </div>

          <div className="mt-16 flex justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-[10px] font-mono text-white tracking-widest uppercase">Avalado por:</span>
            <span className="font-display font-bold text-white text-lg italic tracking-widest">CIF</span>
            <span className="font-display font-bold text-white text-lg italic tracking-widest">SIF</span>
            <span className="font-display font-bold text-white text-lg italic tracking-widest">FORENSE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};