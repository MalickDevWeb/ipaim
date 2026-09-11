import React from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  CheckCircle, 
  Clock, 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  ArrowRight,
  ShieldCheck,
  Coins
} from 'lucide-react';
import { Program } from '../types';

interface ProgramDetailModalProps {
  program: Program | null;
  onClose: () => void;
  onApply: (programId: string) => void;
  onOpenCalculator: () => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onApply,
  onOpenCalculator
}) => {
  if (!program) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ type: 'spring', stiffness: 450, damping: 30 }}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header aux couleurs de l'école */}
        <div className="bg-[#0066bf] text-white p-5 sm:p-6 relative">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </motion.button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 text-xs font-bold uppercase rounded-md bg-[#57c730] text-white">
              {program.degree}
            </span>
            <span className="text-xs text-blue-100 font-mono">
              {program.code}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-['Outfit',sans-serif]">
            {program.title}
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-blue-100">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-blue-200" />
              <span>Durée : {program.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ebe727]" />
              <span>Diplôme d'État reconnu</span>
            </div>
          </div>
        </div>

        {/* Modal Body - Simple et net */}
        <div className="p-5 sm:p-6 max-h-[65vh] overflow-y-auto space-y-5 text-slate-700 text-xs sm:text-sm">
          
          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#0066bf]" />
              Présentation de la filière
            </h3>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              {program.fullDesc}
            </p>
          </div>

          {/* Prérequis */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
              Profil d'admission
            </h4>
            <p className="text-xs font-semibold text-slate-800">
              {program.prerequisites}
            </p>
          </div>

          {/* Semestres & Modules */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#0066bf]" />
              Programme & Matières enseignées
            </h3>
            <div className="space-y-2">
              {program.semesters.map((sem, sIdx) => (
                <div key={sIdx} className="border border-slate-200 rounded-xl p-3 bg-white">
                  <h4 className="text-xs font-bold text-[#0066bf] mb-1.5">
                    {sem.title}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-slate-600">
                    {sem.modules.map((mod, mIdx) => (
                      <li key={mIdx} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-[#57c730] shrink-0" />
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Débouchés */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-[#0066bf]" />
              Métiers & Débouchés
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {program.careerOpportunities.map((career, cIdx) => (
                <span 
                  key={cIdx} 
                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-blue-50 text-[#0066bf] border border-blue-100"
                >
                  {career}
                </span>
              ))}
            </div>
          </div>

          {/* Frais */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Coins className="w-5 h-5 text-[#57c730]" />
              <div>
                <span className="text-xs font-bold text-slate-800">Scolarité :</span>
                <span className="text-xs text-slate-600 ml-1">
                  {program.tuition.monthly.toLocaleString('fr-FR')} FCFA / mois
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenCalculator();
              }}
              className="text-xs font-bold text-[#0066bf] hover:underline cursor-pointer"
            >
              Simuler les frais
            </button>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 flex items-center justify-end gap-2.5">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 bg-white border border-slate-300 rounded-xl cursor-pointer"
          >
            Fermer
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            onClick={() => {
              onClose();
              onApply(program.id);
            }}
            className="px-5 py-2 text-xs font-black text-slate-950 bg-[#ebe727] hover:bg-[#deda1b] border border-[#d6d21f] rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>S'inscrire à cette filière</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

      </motion.div>
    </motion.div>
  );
};
