import { motion } from 'framer-motion';
import { Eye, ShieldCheck, Lock } from 'lucide-react';

export const Institutions = () => {
  const institutions = [
    { name: 'CIF', detail: 'CENTRO INVESTIGACIÓN' },
    { name: 'SIF', detail: 'SISTEMA INTEGRAL' },
    { name: 'LAB-FORENSE', detail: 'UNIDAD TÉCNICA' },
    { name: 'CRIMINALÍSTICA', detail: 'DIVISIÓN JUDICIAL' }
  ];

  return (
    <section id="institutions" className="py-20 bg-[#080b09] border-y border-cif-green/10 relative overflow-hidden">
      {/* Decoración de fondo: Ondas de frecuencia sutiles */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_#4ade80_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-2">
            <Lock size={14} className="text-cif-gold animate-pulse" />
            <span className="text-cif-gold font-mono text-[10px] tracking-[0.5em] uppercase">
              Security_Protocol: Active
            </span>
          </div>
          <h2 className="text-gray-500 text-xs font-display font-bold tracking-[0.3em] uppercase">
            Validado para entrenamiento institucional
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {institutions.map((inst, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Contenedor del Logo/Tarjeta */}
              <div className="relative bg-cif-panel/50 border border-white/5 p-6 transition-all duration-500 group-hover:border-cif-green/40 group-hover:bg-cif-green/5 overflow-hidden">
                
                {/* Rayo de Escaneo de Retina (Láser) */}
                <div className="absolute inset-x-0 h-[1px] bg-cif-green shadow-[0_0_10px_#4ade80] opacity-0 group-hover:opacity-100 group-hover:animate-scan z-20" />

                <div className="flex flex-col items-center gap-4">
                  {/* Icono de Escaneo */}
                  <div className="relative">
                    <div className="w-16 h-16 border border-white/10 flex items-center justify-center rounded-sm group-hover:border-cif-green/30 transition-colors">
                      <Eye size={24} className="text-white/20 group-hover:text-cif-green transition-colors" />
                    </div>
                    {/* Decoración en las esquinas del icono */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-cif-green opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-cif-green opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="text-center">
                    <span className="block font-display font-black text-2xl text-white/40 group-hover:text-white transition-colors tracking-tighter">
                      {inst.name}
                    </span>
                    <span className="block text-[8px] font-mono text-gray-600 group-hover:text-cif-green/70 transition-colors mt-1">
                      {inst.detail}
                    </span>
                  </div>

                  {/* Badge de "Autorizado" */}
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ShieldCheck size={10} className="text-cif-green" />
                    <span className="text-[9px] font-mono text-cif-green font-bold">AUTHORIZED</span>
                  </div>
                </div>

                {/* Código de barras decorativo lateral */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-0.5 opacity-10 group-hover:opacity-30">
                  {[...Array(6)].map((_, x) => (
                    <div key={x} className="h-[1px] bg-white" style={{ width: Math.random() * 10 + 5 }} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Barra de progreso de carga simulada al final de la sección */}
        <div className="mt-16 max-w-xs mx-auto">
          <div className="flex justify-between text-[9px] font-mono text-gray-600 mb-2 tracking-widest">
            <span>DATABASE_FETCH</span>
            <span>100% COMPLETED</span>
          </div>
          <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute h-full bg-cif-green shadow-[0_0_10px_#4ade80]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};