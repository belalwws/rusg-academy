import React from 'react';
import { Header } from './components/sections/Header';
import { HeroSection } from './components/sections/HeroSection';
import { CourseCategoriesSection } from './components/sections/CourseCategoriesSection';
import { LearningMethodsSection } from './components/sections/LearningMethodsSection';
import { WhyRushdSection } from './components/sections/WhyRushdSection';
import { AboutSection } from './components/sections/AboutSection';
import { CTASection } from './components/sections/CTASection';
import { LearningToolsSection } from './components/sections/LearningToolsSection';
import { Footer } from './components/sections/Footer';
import { FloatingContact } from './components/sections/FloatingContact';

function App() {
  return (
    <div className="min-h-screen bg-background-light">
      <Header />
      <main>
        <HeroSection />
        <CourseCategoriesSection />
        <LearningMethodsSection />
        <WhyRushdSection />
        <AboutSection />
        <CTASection />
        <LearningToolsSection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
