import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Video, 
  Trophy, 
  Award, 
  Sparkles, 
  Building, 
  Users, 
  Maximize2, 
  X, 
  CheckCircle2,
  ExternalLink,
  GraduationCap
} from 'lucide-react';

interface OfficialVideoSectionProps {
  onOpenRegistration: () => void;
}

interface PhotoItem {
  url: string;
  title: string;
  subtitle: string;
  category: string;
  badge?: string;
  details?: string;
}

export const OfficialVideoSection: React.FC<OfficialVideoSectionProps> = ({ onOpenRegistration }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const campusPhotos: PhotoItem[] = [
    {
      url: 'https://www.ipaim.sn/wp-content/uploads/2018/10/presentation-ipaim1.png',
      title: 'Façade & Entrée Principale du Campus',
      subtitle: 'Bâtiment d\'enseignement moderne au centre-ville de Thiès',
      category: 'Infrastructures',
      badge: 'Campus Thiès',
      details: 'Salles climatisées, groupe électrogène de secours et accès direct depuis les grands axes de transport de Thiès.'
    },
    {
      url: 'https://www.ipaim.sn/wp-content/uploads/2018/10/etudiants-ipaim-thies.png',
      title: 'Étudiants en Salle de Cours Climatisée',
      subtitle: 'Ambiance de travail studieuse et encadrement rigoureux',
      category: 'Vie Étudiante',
      badge: 'Cours du Jour & Soir',
      details: 'Classes à effectifs maîtrisés favorisant l\'échange direct avec le professeur et le suivi personnalisé.'
    },
    {
      url: 'https://www.ipaim.sn/wp-content/uploads/2018/10/administration-r%C3%A9seau-IPAIM.jpg',
      title: 'Laboratoire Informatique & Switchs Cisco',
      subtitle: 'Travaux pratiques de câblage, administration et sécurité',
      category: 'Laboratoires',
      badge: '100% Pratique',
      details: 'Plus de 60 ordinateurs connectés en réseau Gigabit, fibre optique dédiée et simulateurs réseaux avancés.'
    }
  ];

  const lauréats: PhotoItem[] = [
    {
      url: '/students/fatimetou.jpg',
      title: 'Fatimetou Gueye',
      subtitle: '1ère du Sénégal au BTS d\'État',
      category: 'Banque Finance Assurance',
      badge: 'Major Nationale',
      details: 'Classée 1ère nationale à l\'examen officiel du BTS d\'État délivré par le Ministère de l\'Enseignement Supérieur.'
    },
    {
      url: '/students/zakaria.jpg',
      title: 'Zakaria Oubah',
      subtitle: '1er du Jury 1 • Mention Assez Bien',
      category: 'Marketing & Action Commerciale',
      badge: 'Major de Jury',
      details: 'Brillant parcours sanctionné par la première place du jury officiel d\'État au BTS Marketing.'
    },
    {
      url: '/students/atou.jpg',
      title: 'Atou Ndiaye',
      subtitle: 'Major de Promotion',
      category: 'Commerce International',
      badge: 'Excellence',
      details: 'Lauréate en Commerce International, aujourd\'hui en poste dans le secteur maritime et douanier.'
    },
    {
      url: '/students/khayatou.jpg',
      title: 'Khayatou Dabo',
      subtitle: 'Lauréate d\'Honneur',
      category: 'Finance & Comptabilité',
      badge: 'SYSCOHADA Expert',
      details: 'Excellents résultats aux examens officiels et intégration réussie en cabinet d\'expertise comptable.'
    }
  ];

  return (
    <section id="presentation" className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section prestigieux */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#0066bf] text-xs font-black uppercase tracking-wider border border-blue-100 shadow-2xs">
            <Video className="w-3.5 h-3.5" />
            <span>Campus, Vidéo & Galerie Officielle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-['Outfit',sans-serif] tracking-tight">
            Découvrez la Vie & l'Excellence à l'<span className="text-[#0066bf]">IPAIM Thiès</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Notre credo historique : <strong className="text-[#602959] font-black">« Étudier et réussir à Thiès »</strong>. Visitez en vidéo nos salles climatisées, nos laboratoires réseaux et rencontrez nos lauréats officiels.
          </p>
        </div>

        {/* 1. DUO MAJEUR : LECTEUR VIDÉO OFFICIEL (7 cols) + DUO PHOTOS ÉTUDIANTS/CAMPUS (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Lecteur Vidéo YouTube Officiel Haute Résolution */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0066bf] bg-slate-950 aspect-video group flex-1">
              {!isPlaying ? (
                <div 
                  className="relative w-full h-full flex items-center justify-center cursor-pointer select-none" 
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src="https://www.ipaim.sn/wp-content/uploads/2019/04/header2.jpg"
                    alt="Présentation Vidéo IPAIM Thiès"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  
                  {/* Dégradé cinéma */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
                  
                  {/* Badge Haut : Officiel YouTube */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-[11px] font-black shadow-lg">
                      <Play className="w-3 h-3 fill-white" />
                      Vidéo Officielle
                    </span>
                    <span className="text-[11px] font-mono font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                      Chaîne IPAIM
                    </span>
                  </div>

                  {/* Bouton Play animé or */}
                  <div className="absolute flex flex-col items-center gap-3">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                      aria-label="Lancer la vidéo"
                      className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#ebe727] text-slate-950 flex items-center justify-center shadow-2xl group-hover:bg-[#deda1b] transition-colors cursor-pointer border-4 border-white"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-slate-950 ml-1.5 text-slate-950" />
                    </motion.button>
                    <span className="text-white font-bold text-xs sm:text-sm bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-md">
                      Cliquez pour lancer la vidéo de présentation
                    </span>
                  </div>

                  {/* Titre en bas */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <p className="text-[#ebe727] text-xs font-black uppercase tracking-wider">
                      Reportage sur le campus de Thiès
                    </p>
                    <h3 className="text-white font-black text-sm sm:text-base md:text-lg drop-shadow-sm">
                      Institut Privé Africain en Informatique et Management
                    </h3>
                  </div>
                </div>
              ) : (
                <video
                  src="/presentation-video.mp4"
                  title="Présentation Officielle de l'IPAIM Thiès"
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                />
              )}
            </div>

            {/* 3 Garanties sous la vidéo */}
            <div className="grid grid-cols-3 gap-2 mt-3 pt-2 text-center text-slate-700">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <Building className="w-4 h-4 text-[#0066bf] mx-auto mb-1" />
                <span className="text-[11px] font-bold block text-slate-900">Campus Thiès</span>
                <span className="text-[10px] text-slate-500">Centre-ville</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <Users className="w-4 h-4 text-[#602959] mx-auto mb-1" />
                <span className="text-[11px] font-bold block text-slate-900">Cours Jour & Soir</span>
                <span className="text-[10px] text-slate-500">Flexibilité horaire</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <Trophy className="w-4 h-4 text-[#dba05e] mx-auto mb-1" />
                <span className="text-[11px] font-bold block text-slate-900">BTS d'État</span>
                <span className="text-[10px] text-slate-500">100% Officiel</span>
              </div>
            </div>
          </div>

          {/* Colonne Droite : 2 Grandes Photos Magnifiques du Campus et des Salles */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Photo 1 : Bâtiment et Campus Thiès */}
            <div 
              onClick={() => setActivePhoto(campusPhotos[0])}
              className="group relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 bg-slate-900 cursor-pointer flex-1 min-h-[190px]"
            >
              <img
                src={campusPhotos[0].url}
                alt={campusPhotos[0].title}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
              
              {/* Badge supérieur */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full bg-[#0066bf] text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                  {campusPhotos[0].badge}
                </span>
              </div>

              {/* Bouton d'agrandissement */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-900 shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Légende en bas */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="font-bold text-sm sm:text-base leading-tight drop-shadow-xs">
                  {campusPhotos[0].title}
                </h4>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                  {campusPhotos[0].subtitle}
                </p>
              </div>
            </div>

            {/* Photo 2 : Étudiants en situation de cours */}
            <div 
              onClick={() => setActivePhoto(campusPhotos[1])}
              className="group relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 bg-slate-900 cursor-pointer flex-1 min-h-[190px]"
            >
              <img
                src={campusPhotos[1].url}
                alt={campusPhotos[1].title}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
              
              {/* Badge supérieur */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full bg-[#602959] text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                  {campusPhotos[1].badge}
                </span>
              </div>

              {/* Bouton d'agrandissement */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-900 shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Légende en bas */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="font-bold text-sm sm:text-base leading-tight drop-shadow-xs">
                  {campusPhotos[1].title}
                </h4>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                  {campusPhotos[1].subtitle}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* 2. LE MUR D'HONNEUR DES LAURÉATS : DISPOSITION ÉLÉGANTE ET MAGNIFIQUE */}
        <div id="resultats" className="mt-14 pt-10 border-t border-slate-200 scroll-mt-20">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-50 text-amber-900 text-xs font-black uppercase tracking-wider border border-amber-200">
                <Trophy className="w-3.5 h-3.5 text-[#dba05e]" />
                Tableau d'Honneur Officiel
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit',sans-serif] mt-1">
                Les Majors Nationaux & Lauréats de l'IPAIM
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                La preuve par l'excellence : chaque année, les étudiants de l'IPAIM Thiès trustent les premières places nationales au BTS d'État.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              onClick={onOpenRegistration}
              className="px-4 py-2 text-xs font-black text-slate-950 bg-[#ebe727] hover:bg-[#deda1b] border border-[#d6d21f] rounded-xl shadow-xs transition-colors self-start sm:self-auto cursor-pointer text-center"
            >
              Rejoindre l'élite pour 2025 - 2026
            </motion.button>
          </div>

          {/* Grille des 4 Lauréats avec Photos Officielles Magnifiquement Présentées */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {lauréats.map((laureat, idx) => (
              <div
                key={idx}
                onClick={() => setActivePhoto(laureat)}
                className="group bg-white rounded-2xl border-2 border-slate-200 hover:border-[#0066bf] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-4 flex flex-col items-center text-center cursor-pointer relative overflow-hidden"
              >
                {/* Liseré haut coloré */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                  idx === 0 ? 'bg-[#ebe727]' : idx === 1 ? 'bg-[#0066bf]' : idx === 2 ? 'bg-[#EA4138]' : 'bg-[#602959]'
                }`} />

                {/* Photo de profil haute qualité avec halo */}
                <div className="relative my-2">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#0066bf] via-[#ebe727] to-[#602959] shadow-md group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={laureat.url}
                      alt={laureat.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover rounded-full bg-slate-100"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 bg-[#0066bf] text-white text-[10px] font-black px-2 py-0.5 rounded-full border-2 border-white shadow-xs">
                    {laureat.badge}
                  </span>
                </div>

                {/* Nom et statut */}
                <h4 className="text-base font-black text-slate-900 font-['Outfit',sans-serif] mt-1 group-hover:text-[#0066bf] transition-colors">
                  {laureat.title}
                </h4>
                
                <p className="text-xs font-black text-[#0066bf] mt-0.5">
                  {laureat.subtitle}
                </p>

                <p className="text-[11px] font-semibold text-slate-500 mt-1">
                  {laureat.category}
                </p>

                <div className="mt-3 pt-3 border-t border-slate-100 w-full flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-600 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    BTS d'État
                  </span>
                  <span className="group-hover:text-[#0066bf] font-medium flex items-center gap-0.5">
                    Voir détails <Maximize2 className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bannière Officielle du Meilleur Résultat BTS d'État */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 relative shadow-md">
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-[#ebe727] uppercase tracking-wider">
                  Session Officielle BTS Sénégal
                </span>
                <h4 className="text-lg sm:text-xl font-black text-white">
                  Meilleur Résultat de la Région de Thiès & du Sénégal
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                  Grâce à la rigueur de ses enseignants et à son cadre de travail, l'IPAIM maintient un taux de réussite moyen de <strong>96,4%</strong> aux examens d'État.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                onClick={onOpenRegistration}
                className="px-5 py-2.5 rounded-xl bg-[#ebe727] text-slate-950 font-black text-xs sm:text-sm hover:bg-[#deda1b] transition-colors shadow-md whitespace-nowrap cursor-pointer shrink-0"
              >
                Inscrivez-vous dès maintenant
              </motion.button>
            </div>
          </div>

        </div>

      </div>

      {/* 3. MODALE LIGHTBOX / VISUALISEUR PLEIN ÉCRAN POUR ADMIRER LES PHOTOS AVEC ANIMATEPRESENCE */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: 'spring', stiffness: 450, damping: 30 }}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header de la modale */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#0066bf] uppercase tracking-wider">
                    {activePhoto.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-slate-900">
                    {activePhoto.title}
                  </h3>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActivePhoto(null)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Photo haute définition */}
              <div className="relative max-h-[60vh] overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src={activePhoto.url}
                  alt={activePhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[60vh] object-contain"
                />
              </div>

              {/* Légende & Détails */}
              <div className="p-5 space-y-3 bg-slate-50">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#ebe727] text-slate-950 text-xs font-black">
                    {activePhoto.badge || 'IPAIM Thiès'}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-800">
                    {activePhoto.subtitle}
                  </p>
                </div>

                {activePhoto.details && (
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activePhoto.details}
                  </p>
                )}

                <div className="pt-2 flex items-center justify-end gap-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                    onClick={() => {
                      setActivePhoto(null);
                      onOpenRegistration();
                    }}
                    className="px-4 py-2 bg-[#0066bf] text-white text-xs font-bold rounded-xl hover:bg-[#0055a5] transition-colors cursor-pointer"
                  >
                    Postuler à l'IPAIM Thiès
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
