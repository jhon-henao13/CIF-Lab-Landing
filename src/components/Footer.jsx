import cifLogo from '../assets/CIFLab-icon.jpg';
import { ShieldCheck, Mail, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#050505] py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12">
          
          {/* Columna 1: Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={cifLogo} 
                alt="CIF Lab" 
                className="w-12 h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all rounded-sm border border-white/10" 
              />
              <div className="flex flex-col">
                <span className="text-white font-display font-bold text-xl tracking-tight">CIF LAB</span>
                <span className="text-[10px] text-gray-600 font-mono uppercase tracking-[0.2em]">Tactical Forensic Sim</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Plataforma de simulación técnica para el fortalecimiento de competencias en criminalística y ciencias forenses.
            </p>
          </div>

          {/* Columna 2: Enlaces Institucionales */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-cif-green transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-cif-green transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-cif-green transition-colors">Licencias</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">Soporte</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-cif-green transition-colors">Documentación</a></li>
                <li><a href="#" className="hover:text-cif-green transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-cif-green transition-colors">Instituciones</a></li>
              </ul>
            </div>
          </div>

          {/* Columna 3: Estado de Sistema / Certificación */}
          <div className="bg-white/5 p-6 border border-white/5 rounded-sm">
            <div className="flex items-center gap-3 mb-4 text-cif-green">
              <ShieldCheck size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">Validación Técnica</span>
            </div>
            <p className="text-[11px] text-gray-500 font-mono leading-tight">
              Diseñado bajo estándares internacionales de investigación criminal. Compatible con protocolos CIF, SIF e Investigación Forense 2026.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-[11px] font-mono tracking-wider uppercase">
            &copy; {new Date().getFullYear()} CIF LAB - Investigación & Desarrollo Forense.
          </div>
          <div className="flex items-center gap-6 opacity-40">
            <Mail size={16} className="text-gray-400" />
            <Globe size={16} className="text-gray-400" />
            <div className="h-4 w-[1px] bg-gray-800" />
            <span className="text-[10px] text-gray-500 font-mono">MVP_VERSION_2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};