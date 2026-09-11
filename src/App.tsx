/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgramsSection } from './components/ProgramsSection';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { TuitionCalculator } from './components/TuitionCalculator';
import { OfficialVideoSection } from './components/OfficialVideoSection';
import { CampusLife } from './components/CampusLife';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FloatingAI } from './components/FloatingAI';
import { Program } from './types';

export default function App() {
  const [selectedProgramForModal, setSelectedProgramForModal] = useState<Program | null>(null);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [registrationPreSelect, setRegistrationPreSelect] = useState<{
    programId?: string;
    sessionTime?: 'jour' | 'soir';
  }>({});

  const handleOpenRegistration = (programId?: string, sessionTime?: 'jour' | 'soir') => {
    setRegistrationPreSelect({
      programId,
      sessionTime: sessionTime || 'jour'
    });
    setIsRegistrationOpen(true);
  };

  const handleOpenCalculator = () => {
    const calcEl = document.getElementById('simulateur');
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb]/40 text-slate-900 flex flex-col selection:bg-[#0066bf] selection:text-white font-sans">
      {/* Navigation Bar */}
      <Navbar
        onOpenRegistration={() => handleOpenRegistration()}
        onOpenCalculator={handleOpenCalculator}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenRegistration={() => handleOpenRegistration()}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* Programs / Filières Catalog */}
        <ProgramsSection
          onSelectProgram={(program) => setSelectedProgramForModal(program)}
          onApplyProgram={(programId) => handleOpenRegistration(programId)}
        />

        {/* Tuition Calculator */}
        <TuitionCalculator
          onPreFillRegistration={(programId, sessionTime) => handleOpenRegistration(programId, sessionTime)}
        />

        {/* Official Video & Campus Showcase from ipaim.sn */}
        <OfficialVideoSection
          onOpenRegistration={() => handleOpenRegistration()}
        />

        {/* Campus Life, Labs & Stages */}
        <CampusLife
          onOpenRegistration={() => handleOpenRegistration()}
        />

        {/* Alumni Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact & Campus Location in Thiès */}
        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer
        onOpenRegistration={() => handleOpenRegistration()}
        onOpenCalculator={handleOpenCalculator}
      />

      {/* Program Details Modal */}
      <AnimatePresence>
        {selectedProgramForModal && (
          <ProgramDetailModal
            program={selectedProgramForModal}
            onClose={() => setSelectedProgramForModal(null)}
            onApply={(programId) => handleOpenRegistration(programId)}
            onOpenCalculator={handleOpenCalculator}
          />
        )}
      </AnimatePresence>

      {/* Pre-Registration Modal (Fast & Simple) */}
      <AnimatePresence>
        {isRegistrationOpen && (
          <RegistrationModal
            isOpen={isRegistrationOpen}
            onClose={() => setIsRegistrationOpen(false)}
            preSelectedProgramId={registrationPreSelect.programId}
            preSelectedSession={registrationPreSelect.sessionTime}
          />
        )}
      </AnimatePresence>

      {/* Floating Buttons */}
      <FloatingWhatsApp />
      <FloatingAI />
    </div>
  );
}
