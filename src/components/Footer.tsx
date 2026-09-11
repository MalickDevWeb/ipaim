import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ArrowUp,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onOpenRegistration: () => void;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenRegistration,
  onOpenCalculator,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Institution Info avec le Logo Officiel */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/logo-ipaim.svg"
                alt="Logo Officiel IPAIM Thiès"
                className="w-13 h-13 object-contain drop-shadow-md shrink-0 select-none"
              />
              <div>
                <span className="text-lg font-black text-white font-['Outfit',sans-serif] tracking-tight">
                  IPAIM THIÈS
                </span>
                <span className="block text-[11px] text-slate-400">
                  Institut Privé Africain en Informatique & Management
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Fondé en 2006 à Thiès. Établissement supérieur agréé par le Ministère de l'Enseignement Supérieur, de la Recherche et de l'Innovation (MESRI) - Arrêté n° 003884.
            </p>

            <div className="flex flex-col gap-1 text-[11px] font-bold">
              <div className="text-[#EA4138] flex items-center gap-1 font-black">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Accrédité ANAQ-SUP</span>
              </div>
              <div className="text-[#ebe727] flex items-center gap-1 font-black">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Habilité par l'État (N° REpSEN/Ensup-priv/HA/024-2017)</span>
              </div>
            </div>
          </div>

          {/* Formations Rapides */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Filières Phares
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li><a href="#formations" className="hover:text-white transition-colors">Administration Réseaux & Télécoms</a></li>
              <li><a href="#formations" className="hover:text-white transition-colors">Génie Logiciel & Dév. Web</a></li>
              <li><a href="#formations" className="hover:text-white transition-colors">Finance & Comptabilité</a></li>
              <li><a href="#formations" className="hover:text-white transition-colors">Banque & Assurance</a></li>
              <li><a href="#formations" className="hover:text-white transition-colors">Commerce International</a></li>
              <li><a href="#formations" className="hover:text-white transition-colors">Transport & Logistique</a></li>
            </ul>
          </div>

          {/* Liens Utiles */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Accès Rapide
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <button
                  onClick={onOpenRegistration}
                  className="text-[#ebe727] hover:underline font-black cursor-pointer"
                >
                  Pré-inscription 2025-2026
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCalculator}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Simulateur de Frais de Scolarité
                </button>
              </li>
              <li>
                <a href="#atouts" className="hover:text-white transition-colors">
                  Laboratoires & Atouts
                </a>
              </li>
              <li>
                <a href="#resultats" className="hover:text-white transition-colors">
                  Nos Résultats (Majors BTS)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Plan d'accès Campus Thiès
                </a>
              </li>
              <li>
                <a 
                  href="https://www.ipaim.sn/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-slate-400"
                >
                  Site officiel (ipaim.sn) <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Campus & Contact */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Campus de Thiès
            </h4>
            <div className="space-y-2 text-slate-400 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0066bf] shrink-0 mt-0.5" />
                <span>318, Rue 14, Quartier Carrière, Thiès, Sénégal</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#ebe727] shrink-0" />
                <span>Fixe : 33 951 4484</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#ebe727] shrink-0" />
                <span>Cell : 77 564 37 90 - 77 125 56 56 - 77 125 57 57</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0066bf] shrink-0" />
                <span>Od5361@gmail.com</span>
              </p>
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                onClick={scrollToTop}
                className="inline-flex items-center gap-1 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg cursor-pointer transition-colors text-xs"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                Haut de page
              </motion.button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} IPAIM Thiès. Tous droits réservés.
          </div>
          <div>
            Établissement d'Enseignement Supérieur Agréé MESRI n° 003884 • Sénégal
          </div>
        </div>

      </div>
    </footer>
  );
};
