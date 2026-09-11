import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  Coins, 
  ArrowRight, 
  Clock, 
  GraduationCap,
  Printer,
  Check
} from 'lucide-react';
import { PROGRAMS } from '../data/programsData';

interface TuitionCalculatorProps {
  onPreFillRegistration: (programId: string, sessionTime: 'jour' | 'soir') => void;
}

export const TuitionCalculator: React.FC<TuitionCalculatorProps> = ({
  onPreFillRegistration
}) => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>(PROGRAMS[0].id);
  const [sessionTime, setSessionTime] = useState<'jour' | 'soir'>('jour');

  const selectedProgram = useMemo(() => {
    return PROGRAMS.find(p => p.id === selectedProgramId) || PROGRAMS[0];
  }, [selectedProgramId]);

  const baseMonthly = selectedProgram.tuition.monthly;
  const sessionAdjustment = sessionTime === 'soir' ? 5000 : 0;
  const effectiveMonthly = baseMonthly + sessionAdjustment;
  const totalMonths = selectedProgram.tuition.monthsCount; // 9 mois

  const inscriptionFee = selectedProgram.tuition.inscription;
  const uniformAndAssurance = selectedProgram.tuition.uniformAndAssurance;
  const annualTuition = effectiveMonthly * totalMonths;
  const grandTotal = inscriptionFee + uniformAndAssurance + annualTuition;

  return (
    <section id="simulateur" className="py-16 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0066bf] text-xs font-bold uppercase tracking-wider">
            <Coins className="w-3.5 h-3.5 text-[#0066bf]" />
            Tarifs & Échéancier
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
            Simulateur Simple de Frais de Scolarité
          </h2>
          <p className="text-slate-600 text-sm">
            Calculez vos mensualités en toute transparence pour l'année académique 2025-2026.
          </p>
        </div>

        {/* Calculator Simple Card */}
        <div className="bg-[#f4f7fb] rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="md:col-span-7 space-y-5">
            {/* Program Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#0066bf]" />
                1. Choisissez la formation
              </label>
              <select
                id="calc-program-select"
                value={selectedProgramId}
                onChange={(e) => setSelectedProgramId(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0066bf] focus:outline-none font-semibold text-slate-900"
              >
                {PROGRAMS.map((prog) => (
                  <option key={prog.id} value={prog.id}>
                    [{prog.degree}] {prog.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Session Time */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#0066bf]" />
                2. Choisissez l'horaire
              </label>
              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                  onClick={() => setSessionTime('jour')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-colors ${
                    sessionTime === 'jour'
                      ? 'border-[#0066bf] bg-blue-50 text-[#0066bf] font-bold shadow-2xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm">Cours du Jour</span>
                    {sessionTime === 'jour' && <Check className="w-4 h-4 text-[#0066bf]" />}
                  </div>
                  <span className="text-[11px] text-slate-500 font-normal">08h00 - 14h00</span>
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                  onClick={() => setSessionTime('soir')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-colors ${
                    sessionTime === 'soir'
                      ? 'border-[#0066bf] bg-blue-50 text-[#0066bf] font-bold shadow-2xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm">Cours du Soir</span>
                    {sessionTime === 'soir' && <Check className="w-4 h-4 text-[#0066bf]" />}
                  </div>
                  <span className="text-[11px] text-slate-500 font-normal">17h30 - 21h00</span>
                </motion.button>
              </div>
            </div>

            <p className="text-xs text-slate-500 italic">
              * Facilités de paiement : les mensualités sont étalées sur 9 mois (d'octobre à juin). Une remise de 5% est offerte en cas de paiement comptant.
            </p>
          </div>

          {/* Results Column */}
          <div 
            className="md:col-span-5 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4"
          >
            <div className="border-b border-slate-100 pb-3">
              <span className="text-[10px] font-bold text-[#0066bf] uppercase tracking-wider block">
                Estimation Frais {selectedProgram.degree}
              </span>
              <h3 className="text-base font-bold text-slate-900 font-['Outfit',sans-serif] truncate">
                {selectedProgram.title}
              </h3>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center justify-between">
                <span>Inscription administrative :</span>
                <strong className="text-slate-900 font-bold">{inscriptionFee.toLocaleString('fr-FR')} FCFA</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Assurance & Tenue :</span>
                <strong className="text-slate-900 font-bold">{uniformAndAssurance.toLocaleString('fr-FR')} FCFA</strong>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 pt-2 text-slate-900 flex-wrap gap-1">
                <span>Mensualité ({totalMonths} mois) :</span>
                <strong className="text-[#0066bf] text-xs sm:text-sm font-black whitespace-nowrap">{effectiveMonthly.toLocaleString('fr-FR')} FCFA / mois</strong>
              </div>
            </div>

            {/* Total avec animation spring au changement */}
            <motion.div 
              key={`${selectedProgramId}-${sessionTime}`}
              initial={{ scale: 0.97, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="p-3.5 bg-blue-50/80 rounded-xl border border-blue-100 flex items-baseline justify-between"
            >
              <span className="text-xs font-bold text-slate-700">Total Annuel :</span>
              <span className="text-xl font-black text-[#0066bf] font-['Outfit',sans-serif]">
                {grandTotal.toLocaleString('fr-FR')} <span className="text-xs font-bold text-slate-600">FCFA</span>
              </span>
            </motion.div>

            {/* CTA Button avec micro-interaction */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              onClick={() => onPreFillRegistration(selectedProgram.id, sessionTime)}
              className="w-full py-2.5 px-4 text-xs font-black text-slate-950 bg-[#ebe727] hover:bg-[#deda1b] border border-[#d6d21f] rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Choisir cette filière & S'inscrire</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
};
