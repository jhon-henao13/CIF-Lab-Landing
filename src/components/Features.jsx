import { motion } from 'framer-motion';
import { Microscope, FileSearch, Fingerprint, Database, Clipboard, Info } from 'lucide-react';

const featuresList = [
  {
    icon: <Microscope size={32} />,
    title: "Análisis de Laboratorio",
    id: "LAB-SCAN-01",
    desc: "Usa microscopios, reactivos y luces UV para analizar evidencia traza, fluidos y balística con rigor científico."
  },
  {
    icon: <Fingerprint size={32} />,
    title: "Dactiloscopia Realista",
    id: "BIO-MATCH-02",
    desc: "Procesos completos de revelado, levantamiento y cotejo de huellas latentes en diferentes superficies."
  },
  {
    icon: <FileSearch size={32} />,
    title: "Escena del Crimen",
    id: "SCENE-OBS-03",
    desc: "Entornos 2D detallados donde debes aplicar los protocolos de protección, observación y recolección.",
  },
  {
    icon: <Database size={32} />,
    title: "Cadena de Custodia",
    id: "CUSTODY-LOG-04",
    desc: "Gestión documental integrada. Cada error en el embalaje o rotulado tiene consecuencias en el juicio virtual."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-[#0a0f0d] relative overflow-hidden">
      {/* Elemento decorativo: Regla técnica lateral */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_20px,#4ade80_20px,#4ade80_21px)] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/5 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2 text-cif-green">
              <Clipboard size={16} />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Manual de Operaciones</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white">
              SISTEMA DE <span className="text-cif-green">INVESTIGACIÓN</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-sm font-light italic">
            "La verdad está en los detalles. Nuestra tecnología permite al perito recrear procesos reales en un entorno controlado."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-[#111614] p-8 border border-white/5 hover:border-cif-green/30 transition-all duration-500 group"
            >
              {/* Etiqueta de Expediente */}
              <div className="absolute top-0 right-0 bg-cif-green/10 text-cif-green text-[9px] font-mono px-2 py-1 border-b border-l border-cif-green/20">
                {feature.id}
              </div>

              {/* Efecto de Iluminación Forense (Glow) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(74,222,128,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-black flex items-center justify-center mb-6 border border-white/10 group-hover:border-cif-green/50 group-hover:text-cif-green transition-all shadow-inner">
                  {feature.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 font-display tracking-tight group-hover:text-cif-green transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.desc}
                </p>

                {/* Footer del card tipo reporte */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                   <div className="flex gap-1">
                      <div className="w-1 h-1 bg-cif-green/30" />
                      <div className="w-1 h-1 bg-cif-green/30" />
                      <div className="w-1 h-1 bg-cif-green/30" />
                   </div>
                   <Info size={12} className="text-gray-700 group-hover:text-cif-gold transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marca de agua técnica al fondo */}
      <div className="absolute bottom-10 right-10 text-[120px] font-display font-black text-white/[0.02] pointer-events-none select-none">
        FORENSIC
      </div>
    </section>
  );
};