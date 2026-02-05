import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Shield } from 'lucide-react';

export const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulación de envío de datos profesional
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="waitlist" className="py-24 relative bg-cif-dark border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        
        {/* Badge Institucional Sutil */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-cif-green/10 border border-cif-green/20">
          <Shield size={14} className="text-cif-green" />
          <span className="text-cif-green text-xs font-bold tracking-widest uppercase">
            Programa de Implementación 2026
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          ACCEDE A LA <span className="text-cif-green">BETA CERRADA</span>
        </h2>
        
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Inscripción abierta para peritos, instituciones de formación y estudiantes de criminalística. 
          Obtenga acceso prioritario al simulador de laboratorio y sitio del suceso.
        </p>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-cif-green/5 border border-cif-green/30 p-8 rounded-lg inline-flex flex-col items-center gap-4"
          >
            <CheckCircle size={40} className="text-cif-green" />
            <div className="text-center">
              <h3 className="text-white font-bold text-xl mb-1">Solicitud Recibida</h3>
              <p className="text-gray-400 text-sm">Validaremos sus credenciales y le contactaremos vía email.</p>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="correo@institucion.edu.co"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="flex-1 px-6 py-4 bg-cif-panel border border-white/10 rounded-md text-white placeholder-gray-600 focus:outline-none focus:border-cif-green transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-cif-green text-cif-dark font-bold rounded-md hover:bg-white transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? "PROCESANDO..." : "SOLICITAR ACCESO"}
              {!loading && <Send size={18} />}
            </button>
          </form>
        )}
        
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 opacity-40 grayscale max-w-lg mx-auto">
          <p className="text-[10px] text-gray-500 font-mono">ENCRIPTACIÓN AES-256</p>
          <p className="text-[10px] text-gray-500 font-mono">PROTOCOLOS CIF/SIF</p>
          <p className="text-[10px] text-gray-500 font-mono hidden md:block">VERIFICACIÓN INSTITUCIONAL</p>
        </div>
      </div>
    </section>
  );
};