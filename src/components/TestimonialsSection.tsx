import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, Award, GraduationCap } from 'lucide-react';
import { TESTIMONIALS } from '../data/campusData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0066bf] text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#0066bf]" />
            Réussite de nos Diplômés
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
            Témoignages de nos Anciens Étudiants
          </h2>
          <p className="text-slate-600 text-sm">
            Ils ont étudié à l'IPAIM Thiès et travaillent aujourd'hui dans de grandes entreprises au Sénégal.
          </p>
        </div>

        {/* Testimonials Grid avec Spring Physics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-200/80 hover:border-[#0066bf] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Liseré supérieur aux couleurs officielles */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                idx % 2 === 0 ? 'bg-[#ebe727]' : 'bg-[#0066bf]'
              }`} />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-black text-slate-900 bg-[#ebe727]/30 border border-[#ebe727] px-2.5 py-0.5 rounded-full">
                    {item.promoYear}
                  </span>
                </div>

                <div className="relative pl-6">
                  <Quote className="w-5 h-5 text-[#0066bf]/30 absolute top-0 left-0 -scale-x-100" />
                  <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    « {item.highlight} »
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {item.quote}
                </p>
              </div>

              {/* Author info avec vraie photo mise en valeur */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-4">
                <div className="relative shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#0066bf] shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute -bottom-1 -right-1 bg-emerald-600 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full border-2 border-white shadow-xs">
                    Certifié
                  </span>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-[#0066bf] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs font-bold text-[#0066bf]">
                    {item.role}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {item.program} • <span className="text-slate-700">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
