import React from 'react';
import { motion } from 'motion/react';
import { 
  Server, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { PARTNERS } from '../data/campusData';

interface CampusLifeProps {
  onOpenRegistration: () => void;
}

export const CampusLife: React.FC<CampusLifeProps> = ({ onOpenRegistration }) => {
  return (
    <section id="atouts" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0066bf] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            Nos Atouts Majeurs
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
            Pourquoi Choisir l'IPAIM à Thiès ?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Un encadrement d'excellence combinant pratique en laboratoire et insertion professionnelle rapide.
          </p>
        </div>

        {/* 3 Main Pillars avec physique Spring */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <motion.div 
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 450, damping: 25 }}
            className="p-6 rounded-2xl border border-slate-200 bg-[#f4f7fb] space-y-3 shadow-2xs hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0066bf] text-white flex items-center justify-center shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Outfit',sans-serif]">
              Diplômes d'État Reconnus
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tous nos BTS sont des diplômes d'État officiels délivrés par l'Office du Bac / Ministère, et nos Licences Professionnelles respectent le système LMD.
            </p>
            <div className="pt-2 flex items-center gap-1 text-xs font-bold text-[#0066bf]">
              <CheckCircle2 className="w-4 h-4 text-[#0066bf]" />
              Agrément MESRI n° 003884
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 450, damping: 25 }}
            className="p-6 rounded-2xl border border-slate-200 bg-[#f4f7fb] space-y-3 shadow-2xs hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0066bf] text-white flex items-center justify-center shadow-sm">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Outfit',sans-serif]">
              Laboratoires Réseaux Cisco
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Deux salles machines climatisées équipées de switchs, routeurs réels et fibre optique dédiée pour un apprentissage 100% pratique.
            </p>
            <div className="pt-2 flex items-center gap-1 text-xs font-bold text-[#0066bf]">
              <CheckCircle2 className="w-4 h-4 text-[#0066bf]" />
              60+ ordinateurs connectés
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 450, damping: 25 }}
            className="p-6 rounded-2xl border border-slate-200 bg-[#f4f7fb] space-y-3 shadow-2xs hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0066bf] text-white flex items-center justify-center shadow-sm">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Outfit',sans-serif]">
              Stages Garantis en Entreprise
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Notre cellule des stages accompagne chaque étudiant dès la 2ème année pour concrétiser son stage auprès de nos 45+ entreprises partenaires.
            </p>
            <div className="pt-2 flex items-center gap-1 text-xs font-bold text-[#0066bf]">
              <CheckCircle2 className="w-4 h-4 text-[#0066bf]" />
              94% d'insertion sous 6 mois
            </div>
          </motion.div>

        </div>

        {/* Photographies Réelles : Laboratoire Machine & Insertion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          <div 
            className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-md bg-slate-900 group min-h-[240px] sm:min-h-[260px] flex flex-col justify-end p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
          >
            <img
              src="https://www.ipaim.sn/wp-content/uploads/2018/10/administration-r%C3%A9seau-IPAIM.jpg"
              alt="Laboratoire Réseau IPAIM"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            
            <div className="relative z-10 space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#ebe727] text-slate-950 text-[10px] font-black uppercase tracking-wider">
                Laboratoire Informatique
              </span>
              <h4 className="text-lg sm:text-xl font-black text-white leading-tight">
                Travaux Pratiques sur Switchs & Équipements Réels
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Nos étudiants s'exercent directement sur des baies de brassage, routeurs Cisco et ordinateurs connectés en réseau gigabit dédié.
              </p>
            </div>
          </div>

          <div 
            className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-md bg-slate-900 group min-h-[240px] sm:min-h-[260px] flex flex-col justify-end p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
          >
            <img
              src="https://www.ipaim.sn/wp-content/uploads/2018/10/INSERTION.png"
              alt="Insertion Professionnelle IPAIM"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            
            <div className="relative z-10 space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#0066bf] text-white text-[10px] font-black uppercase tracking-wider">
                Insertion Professionnelle
              </span>
              <h4 className="text-lg sm:text-xl font-black text-white leading-tight">
                Accompagnement Vers le Marché du Travail
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Des conventions de stages actives avec les entreprises et industries majeures de Thiès, de la Petite Côte et de Dakar.
              </p>
            </div>
          </div>

        </div>

        {/* Entreprises Partenaires - Simple et propre */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Ils accueillent nos stagiaires et diplômés à Thiès et Dakar :
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {PARTNERS.map((p, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs hover:shadow-xs transition-transform duration-200 hover:-translate-y-0.5 cursor-default inline-block"
              >
                {p.name}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              onClick={onOpenRegistration}
              className="px-5 py-2.5 text-xs font-black text-slate-950 bg-[#ebe727] hover:bg-[#deda1b] border border-[#d6d21f] rounded-xl shadow-xs transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Rejoindre la prochaine promotion</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
};
