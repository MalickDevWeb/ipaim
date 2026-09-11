import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  GraduationCap, 
  Clock, 
  ArrowRight, 
  BookOpen,
  Laptop,
  Briefcase,
  Star,
  Check,
  ChevronRight,
  Network,
  Code,
  Calculator
} from 'lucide-react';
import { Program, DegreeType } from '../types';
import { PROGRAMS } from '../data/programsData';

interface ProgramsSectionProps {
  onSelectProgram: (program: Program) => void;
  onApplyProgram: (programId: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectProgram,
  onApplyProgram
}) => {
  const [selectedDegree, setSelectedDegree] = useState<DegreeType>('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const getIconForProgram = (title: string, code: string) => {
    const text = (title + ' ' + code).toLowerCase();
    if (text.includes('réseaux') || text.includes('art') || text.includes('cisco')) return Network;
    if (text.includes('logiciel') || text.includes('gl') || text.includes('dev') || text.includes('cyber')) return Code;
    if (text.includes('finance') || text.includes('compta') || text.includes('gestion') || text.includes('rh') || text.includes('ag')) return Calculator;
    return Briefcase;
  };

  const filteredPrograms = useMemo(() => {
    return PROGRAMS.filter((prog) => {
      if (selectedDegree !== 'Tous' && prog.degree !== selectedDegree) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = prog.title.toLowerCase().includes(query);
        const matchesCode = prog.code.toLowerCase().includes(query);
        const matchesDesc = prog.shortDesc.toLowerCase().includes(query);
        const matchesCareers = prog.careerOpportunities.some(c => c.toLowerCase().includes(query));
        return matchesTitle || matchesCode || matchesDesc || matchesCareers;
      }
      return true;
    });
  }, [selectedDegree, searchQuery]);

  return (
    <section id="formations" className="py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0066bf] text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-[#0066bf]" />
            Nos Formations & Diplômes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
            Formations Homologuées par l'État
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Choisissez votre filière en BTS d'État sénégalais (Bac+2) ou Licence Professionnelle LMD (Bac+3). Des formations d'excellence avec stages pratiques en entreprise.
          </p>
        </div>

        {/* Filter Controls Bar - Simple et direct */}
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-200 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Degree Tabs - Défilement fluide sans barre apparente sur mobile avec glissement élastique */}
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto no-scrollbar py-0.5 scroll-smooth relative">
            {(['Tous', 'BTS', 'Licence'] as DegreeType[]).map((deg) => {
              const isSelected = selectedDegree === deg;
              return (
                <motion.button
                  key={deg}
                  onClick={() => setSelectedDegree(deg)}
                  whileTap={{ scale: 0.96 }}
                  className={`relative px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0 z-10 ${
                    isSelected
                      ? 'text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeDegreeTabIndicator"
                      className="absolute inset-0 bg-[#0066bf] rounded-xl shadow-xs -z-10"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span>{deg === 'Tous' ? 'Toutes les filières' : deg === 'BTS' ? 'BTS d\'État (Bac+2)' : 'Licence LMD (Bac+3)'}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="search-programs-input"
              type="text"
              placeholder="Rechercher une filière..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 focus:bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0066bf]/40 text-slate-800"
            />
          </div>

        </div>

        {/* Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((prog) => {
              const IconComp = getIconForProgram(prog.title, prog.code);
              return (
                <div
                  key={prog.id}
                  className="group bg-white rounded-[24px] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Image Header with exact wave layout */}
                  <div className="relative w-full h-[220px] bg-slate-900 overflow-hidden shrink-0">
                    {/* Image */}
                    <img 
                      src={prog.image} 
                      alt={prog.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                    />
                    
                    {/* Top left badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-[#ebe727] text-slate-950 text-[11px] font-black rounded-full shadow-md">
                        <GraduationCap className="w-3.5 h-3.5" />
                        {prog.degree === 'BTS' ? "BTS d'État (2 ans)" : 'Licence LMD (3 ans)'}
                      </span>
                    </div>

                    {/* Top right badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 bg-[#0b1a3d] text-white text-[11px] font-black rounded-full shadow-md border border-white/20">
                        {prog.code}
                      </span>
                    </div>

                    {/* The dark blue banner overlay at the bottom before the wave */}
                    <div className="absolute bottom-4 left-0 right-0 h-10 bg-[#0b1a3d]/95 backdrop-blur-md flex items-center px-4 z-10 text-white">
                      <Star className="w-3.5 h-3.5 text-[#ebe727] fill-[#ebe727] shrink-0 mr-2" />
                      <span className="text-[11px] font-bold tracking-wide truncate">
                        {prog.highlight || "Préparation intensive aux épreuves du BTS d'État"}
                      </span>
                    </div>

                    {/* SVG Wave mask at absolute bottom */}
                    <svg className="absolute bottom-0 w-full z-20" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ height: '24px' }}>
                      <path d="M0,120 C480,120 960,0 1440,80 L1440,120 L0,120 Z" fill="white" />
                      <path d="M0,120 C480,120 960,0 1440,80" fill="none" stroke="#ebe727" strokeWidth="8" />
                    </svg>
                  </div>

                  {/* Card Body */}
                  <div className="px-5 pb-6 pt-5 space-y-4 flex-1 flex flex-col justify-between bg-white relative z-30">
                    
                    <div>
                      {/* Icon + Title */}
                      <div className="flex items-start gap-3 mb-2">
                        <div className="bg-[#fffbeb] p-2.5 rounded-xl text-[#0b1a3d] shrink-0 mt-0.5">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <h3 className="text-[15px] sm:text-base font-black text-[#0b1a3d] font-['Outfit',sans-serif] group-hover:text-[#0066bf] transition-colors leading-tight">
                          {prog.title}
                        </h3>
                      </div>

                      {/* Short Description */}
                      <p className="text-[12px] text-slate-500 line-clamp-3 leading-relaxed mt-3">
                        {prog.shortDesc}
                      </p>
                    </div>

                    {/* Débouchés */}
                    <div className="bg-slate-50 rounded-xl p-3 relative overflow-hidden mt-2 border border-slate-100">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ebe727]" />
                      <span className="text-[9px] font-black tracking-widest text-slate-500 uppercase block mb-2 pl-2">
                        DÉBOUCHÉS CLÉS :
                      </span>
                      <div className="flex flex-col gap-1.5 pl-2">
                        {prog.careerOpportunities.slice(0, 2).map((career, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <div className="w-3.5 h-3.5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 text-[#0066bf]" />
                            </div>
                            <span className="text-[10px] font-semibold text-slate-600 bg-white shadow-xs px-2.5 py-0.5 rounded-full truncate border border-slate-200/60 max-w-[90%]">
                              {career}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer Info & Action */}
                    <div className="pt-2">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-[#0b1a3d]" />
                          <div>
                            <span className="text-[10px] text-slate-500 block leading-tight">Mensualité :</span>
                            <span className="text-[13px] font-black text-[#0b1a3d] leading-tight block">
                              {prog.tuition.monthly.toLocaleString('fr-FR')} FCFA / mois
                            </span>
                          </div>
                        </div>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => onApplyProgram(prog.id)}
                          className="px-4 py-2 text-xs font-black text-slate-950 bg-[#ebe727] hover:bg-[#deda1b] rounded-full transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                        >
                          S'inscrire <ArrowRight className="w-3.5 h-3.5" />
                        </motion.button>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center text-[#0066bf] font-bold text-xs cursor-pointer hover:text-blue-800" onClick={() => onSelectProgram(prog)}>
                        <BookOpen className="w-4 h-4 mr-1.5" />
                        Détails du Cursus <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6 max-w-md mx-auto space-y-3">
            <h3 className="text-sm font-bold text-slate-800">
              Aucune formation trouvée
            </h3>
            <p className="text-xs text-slate-500">
              Essayez un autre mot-clé ou réinitialisez les filtres.
            </p>
            <button
              onClick={() => {
                setSelectedDegree('Tous');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-bold text-[#0066bf] bg-blue-50 rounded-lg"
            >
              Afficher toutes les formations
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
