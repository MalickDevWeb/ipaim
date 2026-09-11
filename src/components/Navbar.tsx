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
  MessageSquare,
  PlaySquare,
  MapPin
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
    <header className="fixed top-0 left-0 right-0 z-[100]">
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
              className="lg:hidden p-1 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shrink-0 flex items-center justify-center"
              aria-label="Contact WhatsApp"
            >
              <WhatsAppIcon className="w-[26px] h-[26px] text-[#25D366]" />
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

      {/* Menu Mobile & Tablette - Style App Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-slate-50 z-[110] shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 sm:p-6 bg-gradient-to-r from-[#0b1a3d] to-[#1a1a8c] text-white shadow-md relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 shadow-inner">
                    <img src="/logo.png" alt="IPAIM" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="font-black text-lg block leading-tight">IPAIM THIÈS</span>
                    <span className="text-[10px] text-blue-200 font-medium uppercase tracking-wider">Institut d'Excellence</span>
                  </div>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative z-10 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 flex flex-col gap-2">
                <div className="flex flex-col space-y-2 font-bold text-slate-700 text-[15px]">
                  <a href="#formations" onClick={(e) => scrollTo(e, 'formations')} className="px-4 py-3.5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[#0066bf]/30 hover:shadow-md hover:text-[#0066bf] active:scale-[0.98] flex items-center gap-4 transition-all">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0066bf]"><GraduationCap className="w-4 h-4" /></div>
                    Formations (BTS & Licences)
                  </a>
                  <a href="#resultats" onClick={(e) => scrollTo(e, 'resultats')} className="px-4 py-3.5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[#0066bf]/30 hover:shadow-md hover:text-[#0066bf] active:scale-[0.98] flex items-center gap-4 transition-all">
                    <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500"><Trophy className="w-4 h-4" /></div>
                    Nos Résultats & Majors
                  </a>
                  <a href="#presentation" onClick={(e) => scrollTo(e, 'presentation')} className="px-4 py-3.5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[#0066bf]/30 hover:shadow-md hover:text-[#0066bf] active:scale-[0.98] flex items-center gap-4 transition-all">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500"><PlaySquare className="w-4 h-4" /></div>
                    Vidéo & Campus Thiès
                  </a>
                  <button onClick={() => { setMobileMenuOpen(false); onOpenCalculator(); }} className="px-4 py-3.5 bg-white text-left rounded-2xl shadow-sm border border-slate-100 hover:border-[#0066bf]/30 hover:shadow-md hover:text-[#0066bf] active:scale-[0.98] text-slate-700 flex items-center gap-4 transition-all cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500"><Calculator className="w-4 h-4" /></div>
                    Frais de scolarité
                  </button>
                  <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="px-4 py-3.5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[#0066bf]/30 hover:shadow-md hover:text-[#0066bf] active:scale-[0.98] flex items-center gap-4 transition-all">
                    <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500"><MapPin className="w-4 h-4" /></div>
                    Contact & Accès
                  </a>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50 flex flex-col gap-3">
                <motion.button whileTap={{ scale: 0.98 }} onClick={() => { setMobileMenuOpen(false); onOpenRegistration(); }} className="w-full py-3.5 text-[15px] font-black text-slate-950 bg-[#ebe727] hover:bg-[#deda1b] border border-[#d6d21f] rounded-xl shadow-sm flex items-center justify-center gap-2 cursor-pointer">
                  <UserCheck className="w-5 h-5" /> S'inscrire en ligne
                </motion.button>
                <a href="tel:+221775643790" className="w-full py-3 text-[15px] font-bold text-slate-700 bg-white border border-slate-200 shadow-sm hover:bg-slate-50 rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <Phone className="w-4 h-4 text-[#0066bf]" /> Appeler l'IPAIM
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
