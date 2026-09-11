import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Building
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-[#f4f7fb] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0066bf] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Contact & Campus
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
            Nous Contacter à Thiès
          </h2>
          <p className="text-slate-600 text-sm">
            Venez visiter notre campus ou contactez directement notre secrétariat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Coordinates Card */}
          <div 
            className="md:col-span-6 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-5"
          >
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 font-['Outfit',sans-serif]">
              <Building className="w-5 h-5 text-[#0066bf]" />
              Secrétariat & Campus de Thiès
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0066bf] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Adresse :</strong>
                  <span>318, Rue 14, Quartier Carrière (derrière l'Inspection d'Académie), Thiès, Sénégal</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#1a1a8c] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Téléphones directs :</strong>
                  <a href="tel:+221339514484" className="text-[#0066bf] hover:underline block">Fixe : 33 951 4484</a>
                  <a href="tel:+221775643790" className="text-[#0066bf] hover:underline block">Cell : 77 564 37 90 - 77 125 56 56 - 77 125 57 57</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#0066bf] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Email :</strong>
                  <a href="mailto:Od5361@gmail.com" className="text-[#0066bf] hover:underline">Od5361@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Horaires :</strong>
                  <span>Lundi au Vendredi : 08h00 - 18h30 • Samedi : 08h30 - 13h00</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <div className="pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                href="https://wa.me/221775643790"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#ebe727] hover:bg-[#deda1b] text-slate-950 border border-[#d6d21f] rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-slate-950" />
                <span>Discuter directement sur WhatsApp (+221 77 564 37 90)</span>
              </motion.a>
            </div>
          </div>

          {/* Simple Inquiry Form */}
          <div 
            className="md:col-span-6 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-base font-bold text-slate-900 mb-1 font-['Outfit',sans-serif]">
              Laisser un message
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Une question ? Notre secrétariat vous répond dans les plus brefs délais.
            </p>

            {isSubmitted ? (
              <div className="p-6 text-center bg-blue-50 border border-blue-200 rounded-xl space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#0066bf] mx-auto" />
                <h4 className="text-sm font-bold text-slate-900">Message bien reçu !</h4>
                <p className="text-xs text-slate-600">
                  Merci {formData.name}. Nous vous recontacterons au {formData.phone}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs sm:text-sm">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Votre Nom *</label>
                  <input
                    type="text"
                    required
                    placeholder="Nom et prénom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0066bf] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Téléphone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+221 77 000 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0066bf] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Votre question *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Posez votre question sur les formations, diplômes ou tarifs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0066bf] focus:outline-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                  type="submit"
                  className="w-full py-2.5 text-xs font-bold text-white bg-[#0066bf] hover:bg-blue-700 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Envoyer mon Message</span>
                </motion.button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
