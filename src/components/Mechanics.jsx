import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Crosshair, Search, Fingerprint } from 'lucide-react';

export const Mechanics = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section id="mechanics" className="py-24 bg-gradient-to-b from-cif-dark to-[#0f1411]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto descriptivo */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-cif-gold" />
              <span className="text-cif-gold font-bold tracking-wider text-sm uppercase font-display">Mecánicas Inmersivas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              DEL SITIO DEL SUCESO <br /> AL LABORATORIO
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Experimenta el flujo de trabajo real. <strong>CIF Lab</strong> te permite gestionar casos desde la llamada inicial hasta el informe pericial final.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { txt: 'Fotografía Forense', icon: <Search size={14}/> },
                { txt: 'Reactivos Químicos', icon: <Fingerprint size={14}/> },
                { txt: 'Balística 2D', icon: <Crosshair size={14}/> },
                { txt: 'Informes Técnicos', icon: <Target size={14}/> }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-white/5 p-3 border-l-2 border-cif-green text-gray-300 text-sm">
                  <span className="text-cif-green">{item.icon}</span>
                  {item.txt}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visual del juego INTERACTIVO */}
          <motion.div 
            className="relative group cursor-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="absolute -inset-1 bg-cif-green/20 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-black border border-white/10 rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video bg-[#050505] relative overflow-hidden">
                
                {/* Capa 1: Imagen "Normal" (oscura/base) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <div className="text-center">
                     <Crosshair size={40} className="text-gray-700 mx-auto mb-2" />
                     <p className="text-gray-700 font-mono text-[10px]">VISUAL_LOW_LIGHT_MODE</p>
                  </div>
                </div>

                {/* Capa 2: La Lupa (Revela el contenido brillante) */}
                <div 
                  className="absolute inset-0 bg-cif-green/5 transition-opacity duration-300"
                  style={{
                    clipPath: isHovering 
                      ? `circle(80px at ${mousePos.x}% ${mousePos.y}%)` 
                      : `circle(0px at 50% 50%)`,
                    background: 'radial-gradient(circle, rgba(74,222,128,0.1) 0%, transparent 100%)',
                    backgroundColor: '#0a0f0d'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="text-center">
                        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                          <Fingerprint size={80} className="text-cif-green mx-auto mb-4 opacity-80" />
                        </motion.div>
                        <p className="text-cif-green font-display text-xl tracking-[0.2em] font-bold">EVIDENCIA DETECTADA</p>
                        <p className="text-white font-mono text-[10px] mt-2">ID_PATER: 77-B90 // MATCH: 99.2%</p>
                     </div>
                  </div>
                </div>

                {/* UI Overlay */}
                <div className="absolute top-0 inset-x-0 p-4 flex justify-between items-start pointer-events-none">
                  <div className="bg-black/80 border-l-2 border-cif-green px-2 py-1">
                    <p className="text-[10px] font-mono text-cif-green">CAM_01 // ESCENA_NORTE</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-mono text-cif-gold">RECOLECCIÓN ACTIVA</p>
                    <div className="flex gap-1 mt-1">
                      {[1,2,3].map(i => <div key={i} className={`h-1 w-3 ${i<3 ? 'bg-cif-green' : 'bg-gray-800'}`} />)}
                    </div>
                  </div>
                </div>

                {/* Puntero Personalizado de Lupa */}
                {isHovering && (
                  <div 
                    className="absolute w-40 h-40 border-2 border-cif-green/50 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                    style={{ left: `${mousePos.x}%`, top: `${mousePos.y}%` }}
                  >
                    <div className="absolute inset-0 rounded-full border border-cif-green/20 animate-ping" />
                    <Search className="text-cif-green opacity-50" size={20} />
                  </div>
                )}

                <div className="absolute inset-0 w-full h-[1px] bg-cif-green/20 animate-scan pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};