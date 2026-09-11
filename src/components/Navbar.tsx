import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home,
  GraduationCap, 
  Trophy,
  PlayCircle,
  FileText,
  Mail,
  Phone, 
  Menu, 
  X, 
  ArrowRight,
  Calculator,
  UserCheck,
  MessageSquare
} from 'lucide-react';
import { WhatsAppIcon } from './FloatingWhatsApp';

interface NavbarProps {
  onOpenRegistration: (programId?: string) => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRegistration,
  onOpenCalculator,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav 
        className="bg-white border-b border-slate-200/80 shadow-xs py-2.5 sm:py-3"
      >
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo Brand officiel avec l'emblème de l'IPAIM */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-0"
          >
            <img
              src="/logo-ipaim.svg"
              alt="Logo Officiel IPAIM Thiès"
              className="w-11 h-11 sm:w-12 sm:h-12 object-contain drop-shadow-xs group-hover:scale-105 transition-transform shrink-0 select-none"
            />
            
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0b1a3d] font-['Outfit',sans-serif]">
                  IPAIM
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase font-black tracking-wider bg-[#ebe727] text-slate-950 px-2 py-0.5 rounded-full border border-[#d6d21f] shrink-0">
                  THIÈS
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-slate-600 font-medium hidden md:block -mt-0.5 truncate max-w-[280px]">
                Institut Privé Africain en Informatique et Management
              </span>
            </div>
          </a>

          {/* Liens de navigation avec icônes - conformes à la maquette */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-[13px] font-bold text-slate-700 shrink-0">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="relative py-1 text-[#0066bf] inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <Home className="w-4 h-4 text-[#0066bf]" />
              <span>Accueil</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0066bf] rounded-full" />
            </a>

            <a 
              href="#formations" 
              onClick={(e) => scrollTo(e, 'formations')}
              className="hover:text-[#0066bf] inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <GraduationCap className="w-4 h-4 text-slate-600 group-hover:text-[#0066bf]" />
              <span>Formations</span>
            </a>

            <a 
              href="#resultats" 
              onClick={(e) => scrollTo(e, 'resultats')}
              className="hover:text-[#0066bf] inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <Trophy className="w-4 h-4 text-slate-600" />
              <span>Résultats</span>
            </a>

            <a 
              href="#presentation" 
              onClick={(e) => scrollTo(e, 'presentation')}
              className="hover:text-[#0066bf] inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <PlayCircle className="w-4 h-4 text-slate-600" />
              <span>Vidéo & Campus</span>
            </a>

            <button 
              onClick={onOpenCalculator}
              className="hover:text-[#0066bf] inline-flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap font-bold"
            >
              <FileText className="w-4 h-4 text-slate-600" />
              <span>Frais</span>
            </button>

            <a 
              href="#contact" 
              onClick={(e) => scrollTo(e, 'contact')}
              className="hover:text-[#0066bf] inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <Mail className="w-4 h-4 text-slate-600" />
              <span>Contact</span>
            </a>
          </div>

          {/* Boutons d'action : Téléphone + Bouton S'inscrire rond jaune */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Numéro direct sur grands écrans */}
            <a
              href="tel:+221775643790"
              className="hidden xl:inline-flex items-center gap-2 text-xs xl:text-sm font-bold text-slate-800 hover:text-[#0066bf] py-1.5 px-2 rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#0066bf]" />
              <span>77 564 37 90</span>
            </a>

            {/* Bouton S'inscrire avec flèche noire circulaire conforme à la maquette */}
            <motion.button
              id="header-pre-registration-button"
              onClick={() => onOpenRegistration()}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-black text-slate-950 bg-[#ebe727] hover:bg-[#deda1b] border border-[#d6d21f] rounded-full shadow-xs transition-colors hidden sm:inline-flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
            >
              <div className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center shrink-0">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
              <span>S'inscrire</span>
            </motion.button>

            {/* Bouton WhatsApp Mobile (visible sous lg) près du menu */}
            <a
              href={`https://wa.me/221775643790?text=${encodeURIComponent("Bonjour IPAIM, j'aimerais avoir plus d'informations sur vos formations.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden p-1.5 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shrink-0 flex items-center justify-center"
              aria-label="Contact WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            </a>

            {/* Bouton Menu Mobile / Tablette (visible sous lg) */}
            <motion.button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.92 }}
              aria-label="Menu"
              className="lg:hidden p-1.5 text-slate-700 hover:text-[#0066bf] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shrink-0 flex items-center justify-center"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile & Tablette simple et aéré avec animation fluide */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 sm:px-6 py-4 space-y-3 overflow-hidden"
          >
            <div className="flex flex-col space-y-2 font-bold text-slate-700 text-sm">
              <a 
                href="#formations" 
                onClick={(e) => scrollTo(e, 'formations')}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Formations (BTS & Licences)
              </a>
              <a 
                href="#resultats" 
                onClick={(e) => scrollTo(e, 'resultats')}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Nos Résultats & Majors
              </a>
              <a 
                href="#presentation" 
                onClick={(e) => scrollTo(e, 'presentation')}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Vidéo & Campus Thiès
              </a>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="px-3 py-2 text-left rounded-lg hover:bg-slate-50 text-slate-700 inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-[#0066bf]" />
                Frais de scolarité
              </button>
              <a 
                href="#contact" 
                onClick={(e) => scrollTo(e, 'contact')}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Contact & Accès
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegistration();
                }}
                className="w-full py-2.5 text-sm font-black text-slate-950 bg-[#ebe727] hover:bg-[#deda1b] border border-[#d6d21f] rounded-xl shadow-xs text-center inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <UserCheck className="w-4 h-4 text-slate-950" />
                S'inscrire en ligne
              </motion.button>
              
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:+221775643790"
                  className="py-2 px-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg text-center inline-flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0066bf]" />
                  <span>Appel</span>
                </a>
                <a
                  href="https://wa.me/221775643790"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg text-center inline-flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
