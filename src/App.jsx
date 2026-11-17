import { useCallback, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { usePointerSupport } from './hooks/usePointerSupport';
import { PR_DATA } from './data/gymData';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutBenefitsSection from './components/AboutBenefitsSection';
import ProgramsSection from './components/ProgramsSection';
import EquipmentSection from './components/EquipmentSection';
import NutritionSection from './components/NutritionSection';
import TrainersSection from './components/TrainersSection';
import MembershipSection from './components/MembershipSection';
import ContactCtaSection from './components/ContactCtaSection';
import Footer from './components/Footer';
import ProgramModal from './components/ProgramModal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const { reducedMotion } = usePointerSupport();
  const lenisRef = useRef(null);

  const [selectedPlan, setSelectedPlan] = useState('');
  const [preselectedProgram, setPreselectedProgram] = useState('');
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (reducedMotion) return;
    const lenis = new Lenis({
      duration: 0.95,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reducedMotion]);

  const scrollToTarget = useCallback(
    (selector) => {
      const target = document.querySelector(selector);
      if (!target) return;
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, { offset: -64 });
      } else {
        target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
      }
    },
    [reducedMotion]
  );

  const handleExploreProgram = (prog) => {
    setModalData({
      eyebrow: prog.category,
      title: prog.title,
      body: prog.desc,
      programTitle: prog.title
    });
  };

  const handleEnquireTrainer = (tr) => {
    setModalData({
      eyebrow: `${tr.specialty} • ${tr.experience}`,
      title: `Coach ${tr.name}`,
      body: `${tr.bio} Book a complimentary consultation using the trial form below.`,
      programTitle: 'Personal Training'
    });
  };

  const handleOpenLegal = (type) => {
    const isPrivacy = type === 'privacy';
    setModalData({
      eyebrow: 'Demonstration Notice',
      title: isPrivacy ? 'Privacy Policy' : 'Terms of Use',
      body: isPrivacy
        ? `${PR_DATA.brand.name} is a frontend demonstration site. No personal data is collected or transmitted to a server.`
        : `Sample INR pricing, coach profiles, and hours displayed on this page are editable demonstration placeholders.`
    });
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar onNavigate={scrollToTarget} reducedMotion={reducedMotion} />

      <main id="main-content">
        <Hero onNavigate={scrollToTarget} reducedMotion={reducedMotion} />
        <AboutBenefitsSection reducedMotion={reducedMotion} />
        <ProgramsSection
          onExploreProgram={handleExploreProgram}
          onJoinClick={() => scrollToTarget('#contact')}
        />
        <EquipmentSection />
        <NutritionSection />
        <TrainersSection onEnquireTrainer={handleEnquireTrainer} />
        <MembershipSection
          reducedMotion={reducedMotion}
          onSelectPlan={(planLabel) => {
            setSelectedPlan(planLabel);
            scrollToTarget('#contact');
          }}
        />
        <ContactCtaSection selectedPlan={selectedPlan} preselectedProgram={preselectedProgram} />
      </main>

      <Footer onNavigate={scrollToTarget} onOpenLegal={handleOpenLegal} />

      <ProgramModal
        modalData={modalData}
        onClose={() => setModalData(null)}
        onBookProgram={(progTitle) => {
          setPreselectedProgram(progTitle);
          setModalData(null);
          scrollToTarget('#contact');
        }}
      />
    </>
  );
}
