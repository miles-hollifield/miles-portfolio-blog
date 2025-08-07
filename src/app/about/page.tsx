"use client";

import { useEffect, useRef, useState } from "react";
import SlideshowTimeline from "@/app/components/SlideshowTimeline";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Introduction from "../components/Introduction";
import TechnicalSkills from "@/app/components/TechnicalSkills";
import InterestsPassions from "@/app/components/InterestsPassions";
import FunFacts from "@/app/components/FunFacts";
import PersonalPhilosophy from "@/app/components/PersonalPhilosophy";
import CTASection from "@/app/components/CTASection";

export default function AboutPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState({
    introduction: false,
    timeline: false,
    experience: false,
    education: false,
    skills: false,
    interests: false,
    philosophy: false,
    funFacts: false,
    cta: false
  });
  
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const interestsRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const funFactsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createObserver = (setVisible: (visible: boolean) => void) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        { threshold: 0.1, rootMargin: "-10% 0px" }
      );
    };

    const createSectionObserver = (sectionKey: keyof typeof sectionsVisible) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setSectionsVisible(prev => ({ ...prev, [sectionKey]: true }));
          }
        },
        { threshold: 0.1, rootMargin: "-10% 0px" }
      );
    };

    const heroObserver = createObserver(setHeroVisible);
    const introObserver = createSectionObserver('introduction');
    const timelineObserver = createSectionObserver('timeline');
    const experienceObserver = createSectionObserver('experience');
    const educationObserver = createSectionObserver('education');
    const skillsObserver = createSectionObserver('skills');
    const interestsObserver = createSectionObserver('interests');
    const philosophyObserver = createSectionObserver('philosophy');
    const funFactsObserver = createSectionObserver('funFacts');
    const ctaObserver = createSectionObserver('cta');

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (introRef.current) introObserver.observe(introRef.current);
    if (timelineRef.current) timelineObserver.observe(timelineRef.current);
    if (experienceRef.current) experienceObserver.observe(experienceRef.current);
    if (educationRef.current) educationObserver.observe(educationRef.current);
    if (skillsRef.current) skillsObserver.observe(skillsRef.current);
    if (interestsRef.current) interestsObserver.observe(interestsRef.current);
    if (philosophyRef.current) philosophyObserver.observe(philosophyRef.current);
    if (funFactsRef.current) funFactsObserver.observe(funFactsRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);

    return () => {
      heroObserver.disconnect();
      introObserver.disconnect();
      timelineObserver.disconnect();
      experienceObserver.disconnect();
      educationObserver.disconnect();
      skillsObserver.disconnect();
      interestsObserver.disconnect();
      philosophyObserver.disconnect();
      funFactsObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 70; // Scroll to 80px above the section
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div 
          ref={heroRef}
          className={`cta-section transition-all duration-1000 ${
            heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
          style={{ marginTop: 0, marginBottom: '3rem' }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>About Me</h1>
          <p>
            {`Get to know more about my journey, interests, and what drives me as a developer and lifelong learner.`}
          </p>
        </div>

        {/* Table of Contents */}
        <div className={`mb-8 bg-gray-800/50 rounded-xl shadow-lg border border-gray-700 p-6 transition-all duration-1000 delay-200 ${
          heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-lg font-semibold text-white mb-4">Jump to Section</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollToSection('introduction')}
              className="px-4 py-2 text-sm bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 hover:bg-blue-500/30 hover:border-blue-400 hover:text-blue-200 transition-all duration-300"
            >
              Introduction
            </button>
            <button
              onClick={() => scrollToSection('timeline')}
              className="px-4 py-2 text-sm bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 hover:bg-purple-500/30 hover:border-purple-400 hover:text-purple-200 transition-all duration-300"
            >
              My Journey
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="px-4 py-2 text-sm bg-green-500/20 border border-green-500/30 rounded-full text-green-300 hover:bg-green-500/30 hover:border-green-400 hover:text-green-200 transition-all duration-300"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="px-4 py-2 text-sm bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-300 hover:bg-yellow-500/30 hover:border-yellow-400 hover:text-yellow-200 transition-all duration-300"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="px-4 py-2 text-sm bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 hover:bg-cyan-500/30 hover:border-cyan-400 hover:text-cyan-200 transition-all duration-300"
            >
              Technical Skills
            </button>
            <button
              onClick={() => scrollToSection('interests')}
              className="px-4 py-2 text-sm bg-red-500/20 border border-red-500/30 rounded-full text-red-300 hover:bg-red-500/30 hover:border-red-400 hover:text-red-200 transition-all duration-300"
            >
              Interests
            </button>
            <button
              onClick={() => scrollToSection('philosophy')}
              className="px-4 py-2 text-sm bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 hover:bg-indigo-500/30 hover:border-indigo-400 hover:text-indigo-200 transition-all duration-300"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollToSection('fun-facts')}
              className="px-4 py-2 text-sm bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300 hover:bg-pink-500/30 hover:border-pink-400 hover:text-pink-200 transition-all duration-300"
            >
              Fun Facts
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div 
          ref={sectionsRef}
          className="about-grid"
        >
          {/* Introduction */}
          <div 
            ref={introRef}
            className={`transition-all duration-1000 ${
              sectionsVisible.introduction ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <Introduction />
          </div>

          {/* Timeline Section - Now using the Slideshow Component */}
          <div 
            id="timeline"
            ref={timelineRef}
            className={`transition-all duration-1000 delay-100 ${
              sectionsVisible.timeline ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <SlideshowTimeline />
          </div>

          {/* Experience */}
          <div 
            id="experience"
            ref={experienceRef}
            className={`transition-all duration-1000 delay-200 ${
              sectionsVisible.experience ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <Experience />
          </div>

          {/* Education */}
          <div 
            id="education"
            ref={educationRef}
            className={`transition-all duration-1000 delay-300 ${
              sectionsVisible.education ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <Education />
          </div>

          {/* Additional Sections */}

          {/* Technical Skills */}
          <div 
            id="skills"
            ref={skillsRef}
            className={`transition-all duration-1000 delay-400 ${
              sectionsVisible.skills ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <TechnicalSkills />
          </div>

          {/* Interests & Passions */}
          <div 
            id="interests"
            ref={interestsRef}
            className={`transition-all duration-1000 delay-500 ${
              sectionsVisible.interests ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <InterestsPassions />
          </div>

          {/* Personal Philosophy */}
          <div 
            id="philosophy"
            ref={philosophyRef}
            className={`transition-all duration-1000 delay-600 ${
              sectionsVisible.philosophy ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <PersonalPhilosophy />
          </div>

          {/* Fun Facts */}
          <div 
            id="fun-facts"
            ref={funFactsRef}
            className={`transition-all duration-1000 delay-700 ${
              sectionsVisible.funFacts ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <FunFacts />
          </div>

          {/* Call to Action */}
          <div 
            ref={ctaRef}
            className={`transition-all duration-1000 delay-800 ${
              sectionsVisible.cta ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <CTASection />
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center z-50 group hover:scale-110"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
}