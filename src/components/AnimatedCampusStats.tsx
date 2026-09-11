import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, BarChart3, GraduationCap, Landmark, Star } from 'lucide-react';

interface StatConfig {
  id: string;
  target: number;
  suffix: string;
  label: string;
  detail: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STATS_DATA: StatConfig[] = [
  {
    id: 'experience',
    target: 18,
    suffix: '+',
    label: "Années d'expérience",
    detail: "Depuis 2006",
    icon: Users
  },
  {
    id: 'reussite',
    target: 94,
    suffix: '%',
    label: "Taux de réussite",
    detail: "aux examens officiels",
    icon: BarChart3
  },
  {
    id: 'etudiants',
    target: 3500,
    suffix: '+',
    label: "Étudiants formés",
    detail: "et accompagnés",
    icon: GraduationCap
  },
  {
    id: 'partenaires',
    target: 45,
    suffix: '+',
    label: "Entreprises partenaires",
    detail: "pour vos stages et emplois",
    icon: Landmark
  },
  {
    id: 'engagement',
    target: 100,
    suffix: '%',
    label: "Engagement pour",
    detail: "votre réussite",
    icon: Star
  }
];

interface SingleStatCardProps {
  stat: StatConfig;
  index: number;
}

const SingleStatCard: React.FC<SingleStatCardProps> = ({ stat, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-20px' });
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1800 + index * 100;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const val = Math.floor(easedProgress * stat.target);
      setCurrentNumber(val);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrentNumber(stat.target);
        setIsCompleted(true);
      }
    };

    const anim = requestAnimationFrame(step);
    return () => cancelAnimationFrame(anim);
  }, [isInView, stat.target, index]);

  const formattedDisplay = stat.target >= 1000
    ? currentNumber.toLocaleString('fr-FR').replace(/\u202F/g, ' ')
    : currentNumber.toString();

  const IconComponent = stat.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ 
        type: 'spring', 
        stiffness: 380, 
        damping: 26, 
        delay: index * 0.08 
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative bg-[#0a3174]/60 hover:bg-[#0d3b8c]/80 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-blue-400/25 hover:border-blue-300/50 shadow-sm transition-all duration-300 flex items-center gap-3.5 cursor-default select-none"
    >
      {/* Icône dans un carré bleu arrondi */}
      <div className="w-12 h-12 rounded-xl bg-[#0052a3] border border-blue-300/30 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
        <IconComponent className="w-6 h-6 text-[#ebe727]" />
      </div>

      {/* Chiffre et textes */}
      <div className="min-w-0">
        <div className="flex items-baseline gap-0.5 leading-none mb-1">
          <motion.span 
            animate={isCompleted ? { scale: [1, 1.06, 1] } : {}}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl lg:text-[32px] font-black font-['Outfit',sans-serif] text-white tracking-tight tabular-nums"
          >
            {formattedDisplay}
          </motion.span>
          <span className="text-xl sm:text-2xl font-black font-['Outfit',sans-serif] text-white">
            {stat.suffix}
          </span>
        </div>
        <div className="text-xs sm:text-[13px] font-bold text-white truncate">
          {stat.label}
        </div>
        <div className="text-[10px] sm:text-[11px] text-blue-200/80 font-normal truncate">
          {stat.detail}
        </div>
      </div>
    </motion.div>
  );
};

export const AnimatedCampusStats: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#031d4d] via-[#002d72] to-[#031d4d] py-7 sm:py-9 px-4 sm:px-6 lg:px-8 border-t-4 border-[#ebe727] shadow-xl">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Grille des 5 cartes statistiques exactes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {STATS_DATA.map((stat, idx) => (
            <SingleStatCard key={stat.id} stat={stat} index={idx} />
          ))}
        </div>

        {/* Slogan manuscrit avec filets dorés */}
        <div className="pt-2 flex items-center justify-center gap-3 sm:gap-4 text-center">
          <div className="h-1 w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#ebe727] rounded-full" />
          <p className="font-['Caveat',cursive] text-lg sm:text-2xl text-white tracking-wide drop-shadow-sm select-none">
            IPAIM, plus qu'une école, <span className="text-[#ebe727] underline decoration-[#ebe727]/60 underline-offset-4">un tremplin vers votre avenir !</span>
          </p>
          <div className="h-1 w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#ebe727] rounded-full" />
        </div>

      </div>
    </div>
  );
};
