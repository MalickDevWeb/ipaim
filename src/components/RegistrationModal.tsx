import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Printer, 
  ShieldCheck, 
  MessageSquare
} from 'lucide-react';
import { PROGRAMS } from '../data/programsData';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedProgramId?: string;
  preSelectedSession?: 'jour' | 'soir';
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  preSelectedProgramId,
  preSelectedSession = 'jour'
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    programId: preSelectedProgramId || PROGRAMS[0].id,
    sessionTime: preSelectedSession,
    bacSeries: 'Bac S'
  });
  const [dossierNumber, setDossierNumber] = useState('');

  useEffect(() => {
    if (preSelectedProgramId) {
      setFormData(prev => ({ ...prev, programId: preSelectedProgramId }));
    }
  }, [preSelectedProgramId]);

  useEffect(() => {
    if (preSelectedSession) {
      setFormData(prev => ({ ...prev, sessionTime: preSelectedSession }));
    }
  }, [preSelectedSession]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      alert('Veuillez renseigner votre nom complet et votre numéro de téléphone.');
      return;
    }
    const num = `IPAIM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setDossierNumber(num);
    setIsSuccess(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const selectedProg = PROGRAMS.find(p => p.id === formData.programId) || PROGRAMS[0];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0b1a3d]/40 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ type: 'spring', stiffness: 450, damping: 30 }}
        className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header aux couleurs de l'école */}
        <div className="bg-[#0b1a3d] text-white p-6 sm:p-8 relative border-b-2 border-[#ebe727] overflow-hidden">
          {/* Formes décoratives en fond */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066bf] rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#ebe727] rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </motion.button>

          <div className="flex items-start gap-3.5 pr-8">
            <img
              src="/logo-ipaim.svg"
              alt="Logo IPAIM"
              className="w-12 h-12 object-contain drop-shadow-md shrink-0 mt-0.5"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider bg-[#ebe727] text-slate-950 px-2 py-0.5 rounded border border-[#d6d21f]">
                  Session 2025 - 2026
                </span>
                <span className="text-xs text-blue-100 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#EA4138]" /> Accrédité ANAQ-SUP & Habilité
                </span>
              </div>

              <h2 className="text-xl font-bold font-['Outfit',sans-serif]">
                Pré-inscription Simple & Rapide
              </h2>
              <p className="text-xs text-blue-100 mt-0.5">
                IPAIM Thiès • Remplissez ce formulaire en 1 minute pour réserver votre place.
              </p>
            </div>
          </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 max-h-[calc(88vh-130px)] overflow-y-auto">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Nom et Prénom *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Ibrahima Diallo"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0066bf] focus:outline-none text-slate-900"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Téléphone (WhatsApp de préférence) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ex: 77 564 37 90"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0066bf] focus:outline-none text-slate-900"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Filière souhaitée à l'IPAIM *
                </label>
                <select
                  value={formData.programId}
                  onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0066bf] focus:outline-none text-slate-900 font-medium"
                >
                  {PROGRAMS.map((prog) => (
                    <option key={prog.id} value={prog.id}>
                      [{prog.degree}] {prog.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Horaire *
                  </label>
                  <select
                    value={formData.sessionTime}
                    onChange={(e) => setFormData({ ...formData, sessionTime: e.target.value as 'jour' | 'soir' })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0066bf] focus:outline-none text-slate-900"
                  >
                    <option value="jour">Cours du Jour (08h - 14h)</option>
                    <option value="soir">Cours du Soir (17h30 - 21h)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Série Bac / Niveau *
                  </label>
                  <select
                    value={formData.bacSeries}
                    onChange={(e) => setFormData({ ...formData, bacSeries: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0066bf] focus:outline-none text-slate-900"
                  >
                    <option value="Bac S">Bac S (S1, S2, S3)</option>
                    <option value="Bac L">Bac L (L1, L2, L')</option>
                    <option value="Bac G / STEG">Bac G / STEG</option>
                    <option value="Bac T">Bac T (Technique)</option>
                    <option value="Bac+2 / L2">Bac+2 (Entrée Licence 3)</option>
                    <option value="Autre">Autre diplôme</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                  className="w-full py-3 text-sm font-black text-slate-950 bg-[#ebe727] hover:bg-[#deda1b] border border-[#d6d21f] rounded-xl shadow-md transition-shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Valider ma Pré-inscription</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                Aucun paiement n'est exigé en ligne. Vous finalisez votre dossier directement au secrétariat de l'IPAIM à Thiès.
              </p>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="text-center space-y-1.5">
                <div className="w-12 h-12 rounded-full bg-yellow-50 text-slate-950 flex items-center justify-center mx-auto border border-[#d6d21f]">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-['Outfit',sans-serif]">
                  Pré-inscription Enregistrée !
                </h3>
                <p className="text-xs text-slate-600">
                  Votre dossier a été transmis au secrétariat de l'IPAIM Thiès.
                </p>
              </div>

              {/* Récépissé épuré */}
              <div id="simple-receipt" className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2.5 text-xs">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="/logo-ipaim.svg"
                      alt="IPAIM"
                      className="w-7 h-7 object-contain drop-shadow-xs shrink-0"
                    />
                    <span className="font-bold text-[#1a1a8c]">IPAIM THIÈS</span>
                  </div>
                  <span className="font-mono font-bold bg-[#ebe727] text-slate-950 px-2 py-0.5 rounded border border-[#d6d21f]">
                    {dossierNumber}
                  </span>
                </div>
                <div className="space-y-1 text-slate-700">
                  <p><span className="text-slate-400">Candidat :</span> <strong>{formData.fullName}</strong></p>
                  <p><span className="text-slate-400">Filière :</span> <strong>{selectedProg.title} ({selectedProg.degree})</strong></p>
                  <p><span className="text-slate-400">Régime :</span> <strong>{formData.sessionTime === 'jour' ? 'Cours du Jour' : 'Cours du Soir'}</strong></p>
                  <p><span className="text-slate-400">Téléphone :</span> <strong>{formData.phone}</strong></p>
                </div>
              </div>

              {/* Action WhatsApp direct */}
              <div className="space-y-2 pt-1">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/221775643790?text=${encodeURIComponent(`Bonjour IPAIM Thiès, je viens de faire ma pré-inscription en ligne (Dossier : ${dossierNumber}) pour la filière ${selectedProg.title}. Mon nom est ${formData.fullName}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#0066bf] hover:bg-blue-700 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#ebe727]" />
                  <span>Confirmer sur WhatsApp (+221 77 564 37 90)</span>
                </motion.a>

                <div className="flex gap-2">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrint}
                    className="w-1/2 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Imprimer</span>
                  </motion.button>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="w-1/2 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                  >
                    Terminer
                  </motion.button>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
