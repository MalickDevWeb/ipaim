import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Laptop, 
  Cpu, 
  Calendar, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  CreditCard, 
  Play, 
  Sparkles,
  Trophy,
  Volume2,
  VolumeX,
  Maximize
} from 'lucide-react';
import { AnimatedCampusStats } from './AnimatedCampusStats';

interface HeroProps {
  onOpenRegistration: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRegistration,
  onOpenCalculator
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (videoRef.current) {
      videoRef.current.volume = 1;
      
      const tryPlay = () => {
        if (!videoRef.current) return;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn("Autoplay avec son bloqué par le navigateur:", error);
            
            // Si bloqué, on écoute la PREMIÈRE interaction de l'utilisateur sur la page
            const playOnInteract = () => {
              if (videoRef.current && videoRef.current.paused) {
                videoRef.current.play().catch(() => {});
              }
              // On nettoie les écouteurs d'événements après le premier déclenchement
              ['click', 'touchstart', 'scroll', 'keydown'].forEach(event => {
                window.removeEventListener(event, playOnInteract);
              });
            };

            ['click', 'touchstart', 'scroll', 'keydown'].forEach(event => {
              window.addEventListener(event, playOnInteract, { once: true });
            });
          });
        }
      };

      // Attendre 3 secondes sur la photo de couverture avant de lancer
      timeoutId = setTimeout(tryPlay, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) { /* Safari */
        (videoRef.current as any).webkitRequestFullscreen();
      }
    }
  };

  const scrollToPresentation = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('presentation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featureItems = [
    {
      icon: GraduationCap,
      title: "BTS d'État",
      detail: "(Bac+2 à Bac+3)"
    },
    {
      icon: Laptop,
      title: "Licences LMD",
      detail: "(Bac+3)"
    },
    {
      icon: Cpu,
      title: "2 Salles machines",
      detail: "& Lab Réseaux Cisco"
    },
    {
      icon: Calendar,
      title: "Stage conventionné",
      detail: "garanti dès la 2e année"
    },
    {
      icon: Clock,
      title: "Cours du jour",
      detail: "(08h-14h) & Soir (17h30-21h)"
    }
  ];

  return (
    <section 
      id="accueil" 
      className="relative pt-20 sm:pt-24 bg-white overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 sm:pb-12">
        
        {/* Section Principale : Texte à gauche + Composition Visuelle à droite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Colonne Gauche : Titres, Atouts & Boutons d'Action (En 2ème sur mobile, 1er sur desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-6 xl:col-span-6 space-y-6">
            
            {/* Badge Jaune arrondi conforme à la maquette */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fef9c3] border border-[#fde047] text-slate-900 text-xs sm:text-sm font-black shadow-2xs select-none"
            >
              <GraduationCap className="w-4 h-4 text-slate-900" />
              <span>Inscriptions Ouvertes 2025 - 2026 à Thiès</span>
            </motion.div>

            {/* Titre Principal exact */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-[54px] font-black tracking-tight text-[#0b1a3d] font-['Outfit',sans-serif] leading-[1.12]"
            >
              L’Institut d’Élite en <br />
              <span className="text-[#0066bf]">Informatique</span>{' '}
              <span className="text-[#eab308] drop-shadow-xs">&</span>{' '}
              <span className="text-[#0066bf]">Management</span>
            </motion.h1>

            {/* Paragraphe descriptif */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl"
            >
              Depuis 2006 à Thiès, l'<strong>IPAIM</strong> forme les meilleurs techniciens supérieurs et cadres du pays. Nos étudiants se distinguent régulièrement comme <strong>1ers du Sénégal (Majors Nationaux)</strong> aux examens officiels du BTS d'État.
            </motion.p>

            {/* Ligne des 5 Atouts Majeurs avec cercles jaunes */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-5 pt-2"
            >
              {featureItems.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center gap-2 group w-[45%] sm:w-[30%] xl:w-auto">
                    <div className="w-10 h-10 rounded-full bg-[#fef08a] border border-[#facc15]/60 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-slate-900" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <h4 className="text-xs sm:text-[13px] font-black text-slate-900 leading-tight">
                        {feat.title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                        {feat.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* 3 Boutons d'action conformes à la maquette */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-3"
            >
              {/* Bouton 1 : Jaune Pill avec flèche noire circulaire */}
              <motion.button
                id="hero-pre-inscription-btn"
                onClick={onOpenRegistration}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                className="px-6 py-3.5 text-sm sm:text-base font-black text-slate-950 bg-[#ebe727] hover:bg-[#deda1b] border border-[#d6d21f] rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-slate-950 text-white flex items-center justify-center shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Pré-inscription en Ligne</span>
              </motion.button>

              {/* Bouton 2 : Blanc contour bleu avec icône livre */}
              <motion.a
                href="#formations"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-3.5 text-sm sm:text-base font-bold text-[#0066bf] bg-white hover:bg-blue-50/60 border-2 border-[#0066bf] rounded-full transition-colors flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-[#0066bf]" />
                <span>Voir les Formations</span>
              </motion.a>

              {/* Bouton 3 : Blanc contour ardoise avec icône carte */}
              <motion.button
                onClick={onOpenCalculator}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-3.5 text-sm sm:text-base font-bold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-300 rounded-full transition-colors flex items-center gap-2 cursor-pointer"
              >
                <CreditCard className="w-4 h-4 text-slate-600" />
                <span>Frais de scolarité</span>
              </motion.button>
            </motion.div>

          </div>

          {/* Colonne Droite : Composition Graphique Vidéo (En 1er sur mobile, 2ème sur desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-6 xl:col-span-6 relative mt-4 lg:mt-0 mb-6 lg:mb-0">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none h-[320px] sm:h-[400px] md:h-[480px] lg:h-[520px] flex items-center justify-center">
              
              {/* Grand coup de pinceau dynamique jaune en arrière-plan */}
              <div 
                className="absolute inset-0 -right-4 -top-4 w-full h-full bg-gradient-to-tr from-[#ebe727] via-[#ffd000] to-[#f59e0b] rounded-[40px] opacity-95 transform rotate-2 scale-95 shadow-xl"
                style={{
                  clipPath: 'polygon(15% 0%, 100% 5%, 95% 90%, 5% 100%, 0% 18%)'
                }}
              />

              {/* Image de fond : Campus Moderne IPAIM avec palmiers */}
              <div 
                className="absolute inset-2 sm:inset-3 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-slate-900"
              >
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                  alt="Campus IPAIM Thiès"
                  className="w-full h-full object-cover opacity-35 filter brightness-105"
                  referrerPolicy="no-referrer"
                />

                {/* Dégradé doux pour faire ressortir les étudiants */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a3d]/90 via-[#0b1a3d]/30 to-transparent" />
                
                {/* Enseigne du Campus */}
                <div className="absolute top-5 right-6 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-lg border border-slate-200 shadow-sm">
                  <span className="text-xs font-black text-[#0066bf] tracking-wider font-['Outfit',sans-serif]">CAMPUS IPAIM THIÈS</span>
                </div>
              </div>

              {/* Vidéo centrale de présentation (remplace l'image statique) */}
              <div className="relative z-10 w-full h-full flex items-end justify-center pb-2 px-4 overflow-hidden rounded-[32px] group/video">
                <video
                  ref={videoRef}
                  src="/presentation-video.mp4"
                  poster="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                  className="h-[88%] sm:h-[92%] w-full object-cover object-center drop-shadow-2xl rounded-2xl cursor-pointer"
                  onClick={() => {
                    if (videoRef.current?.paused) {
                      videoRef.current.play();
                    }
                  }}
                  loop
                  muted={isMuted}
                  playsInline
                />

                {/* Contrôles Vidéo (Son & Plein Écran) */}
                <div className="absolute bottom-16 sm:bottom-20 right-10 sm:right-16 flex flex-col gap-2 z-30 sm:opacity-0 sm:group-hover/video:opacity-100 opacity-100 transition-opacity">
                  
                  {/* Bouton Plein Écran */}
                  <button
                    onClick={toggleFullScreen}
                    className="w-10 h-10 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full border border-white/20 shadow-lg flex items-center justify-center text-white transition-all cursor-pointer"
                    aria-label="Mode plein écran"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>

                  {/* Bouton Son */}
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full border border-white/20 shadow-lg flex items-center justify-center text-white transition-all cursor-pointer"
                    aria-label={isMuted ? "Activer le son" : "Couper le son"}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-[#ebe727]" />}
                  </button>

                </div>

                {/* Sceau officiel IPAIM incrusté sur le classeur/support */}
                <div className="absolute bottom-16 sm:bottom-20 left-10 sm:left-16 bg-[#002b66] p-1.5 rounded-full border-2 border-[#ebe727] shadow-lg">
                  <img
                    src="/logo-ipaim.svg"
                    alt="Emblème IPAIM"
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                  />
                </div>
              </div>

              {/* Écriture manuscrite cyan avec étoiles : "Votre avenir commence ici !" */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20 pointer-events-none select-none">
                <div className="relative">
                  <span className="font-['Caveat',cursive] text-2xl sm:text-4xl font-bold text-[#00b4d8] drop-shadow-md transform -rotate-6 inline-block">
                    Votre avenir commence ici !
                  </span>
                  <Sparkles className="w-5 h-5 text-[#ffd000] absolute -top-3 -right-2 animate-pulse" />
                </div>
              </div>

              {/* Bouton Vidéo Circulaire : "Découvrez notre campus" */}
              <motion.a
                href="#presentation"
                onClick={scrollToPresentation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-6 -left-2 sm:-left-6 z-20 flex items-center gap-2 bg-[#003884] hover:bg-[#002b66] pl-1 pr-4 py-1.5 rounded-full shadow-2xl border-2 border-white text-white cursor-pointer transition-colors group select-none"
              >
                {/* Cercle noir avec liseré doré et flèche lecture jaune */}
                <div className="w-10 h-10 rounded-full bg-slate-950 border-2 border-[#ebe727] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 text-[#ebe727] fill-[#ebe727] ml-0.5" />
                </div>
                <div className="text-left pr-1">
                  <span className="block text-xs sm:text-sm font-bold leading-tight">Découvrez</span>
                  <span className="block text-[10px] sm:text-[11px] text-blue-200 font-medium leading-tight">notre campus</span>
                </div>
                <Sparkles className="w-3.5 h-3.5 text-[#ebe727]" />
              </motion.a>

              {/* Carte Flottante Lauréats & Majors Nationaux avec Drapeau du Sénégal */}
              <motion.div
                initial={{ y: 15, opacity: 0, x: "-50%" }}
                animate={{ y: 0, opacity: 1, x: "-50%" }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute -bottom-6 left-1/2 z-20 w-max max-w-[95%] bg-white rounded-2xl p-3 sm:p-4 shadow-2xl border border-slate-100 flex items-center gap-3 select-none"
              >
                {/* Couronne de laurier dorée avec trophée */}
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0 text-[#eab308]">
                  <Trophy className="w-6 h-6 fill-[#eab308] text-[#eab308]" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
                    Meilleurs résultats du Sénégal
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-semibold">
                    <span>(Majors Nationaux)</span>
                    <span className="text-sm">🇸🇳</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

      </div>

      {/* Bandeau Inférieur de Statistiques en Bleu Royal Profond - Exactement conforme à la maquette */}
      <AnimatedCampusStats />

    </section>
  );
};
