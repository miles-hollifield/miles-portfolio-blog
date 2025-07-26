"use client";

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
    <div className="page-container">
      <div className="max-w-6xl mx-auto page-content">
        {/* Hero Section */}
        <div className="page-hero">
          <h1>About Me</h1>
          <p>
            {`Get to know more about my journey, interests, and what drives me as a developer and lifelong learner.`}
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Jump to Section</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => scrollToSection('introduction')}
              className="px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors duration-200"
            >
              Introduction
            </button>
            <button
              onClick={() => scrollToSection('timeline')}
              className="px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors duration-200"
            >
              My Journey
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors duration-200"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors duration-200"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors duration-200"
            >
              Technical Skills
            </button>
            <button
              onClick={() => scrollToSection('interests')}
              className="px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors duration-200"
            >
              Interests
            </button>
            <button
              onClick={() => scrollToSection('philosophy')}
              className="px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors duration-200"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollToSection('fun-facts')}
              className="px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors duration-200"
            >
              Fun Facts
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="about-grid">
          {/* Introduction */}
          <div>
            <Introduction />
          </div>

          {/* Timeline Section - Now using the Slideshow Component */}
          <div id="timeline">
            <SlideshowTimeline />
          </div>

          {/* Experience */}
          <div id="experience">
            <Experience />
          </div>

          {/* Education */}
          <div id="education">
            <Education />
          </div>

          {/* Additional Sections */}

          {/* Technical Skills */}
          <div id="skills">
            <TechnicalSkills />
          </div>

          {/* Interests & Passions */}
          <div id="interests">
            <InterestsPassions />
          </div>

          {/* Personal Philosophy */}
          <div id="philosophy">
            <PersonalPhilosophy />
          </div>

          {/* Fun Facts */}
          <div id="fun-facts">
            <FunFacts />
          </div>

          {/* Call to Action */}
          <CTASection />
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 group"
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