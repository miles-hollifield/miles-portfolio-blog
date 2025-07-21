import SlideshowTimeline from "@/app/components/SlideshowTimeline";
import ExperienceEducation from "@/app/components/ExperienceEducation";
import TechnicalSkills from "@/app/components/TechnicalSkills";
import InterestsPassions from "@/app/components/InterestsPassions";
import FunFacts from "@/app/components/FunFacts";
import PersonalPhilosophy from "@/app/components/PersonalPhilosophy";
import CTASection from "@/app/components/CTASection";

export default function AboutPage() {
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

        {/* Main Content */}
        <div className="about-grid">
          {/* Introduction */}
          <div className="content-section">
            <h2>Who I Am</h2>
            <p>
              {`I'm Miles — a software engineer, writer, and lifelong learner. My journey into tech began when I was five, playing Pokémon Yellow on a Game Boy Color. That early spark of curiosity eventually evolved into a deep passion for building technology that connects, empowers, and inspires.`}
            </p>
            <p>
              {`Currently, I'm a Software Engineering Intern at Siemens and a Computer Science student at NC State University, with a minor in Japan Studies. I'm also a proud Goodnight Scholar, where I serve as both a mentor and program ambassador. My work spans full-stack development, AI experimentation, and creative software projects — from indie games to language learning tools.`}
            </p>
            <p>
              {`Along the way, I've worn many hats — from supervising a bakery team while studying full-time, to helping manage a college website, to freelancing as a Web Analyst/Developer. I've interned at a startup as a Solution Architect and worked on enterprise-grade systems at Siemens. Every role, whether technical or not, helped shape my drive to build meaningful digital experiences.`}
            </p>
            <p>
              {`I'm passionate about tech that has real-world impact — especially in the areas of education, gaming, and language learning. I'm actively exploring roles in Software Engineering and ML/AI Engineering, and I also love helping small businesses grow their digital presence as a freelancer with long-term entrepreneurial goals of my own.`}
            </p>
            <p>
              {`If you're working on something exciting in tech, AI, education, or gaming — or just want to chat — I'd love to connect.`}
            </p>
          </div>

          {/* Timeline Section - Now using the Slideshow Component */}
          <SlideshowTimeline />

          {/* Experience & Education */}
          <ExperienceEducation />

          {/* Technical Skills */}
          <TechnicalSkills />

          {/* Interests & Passions */}
          <InterestsPassions />

          {/* Personal Philosophy */}
          <PersonalPhilosophy />

          {/* Fun Facts */}
          <FunFacts />

          {/* Call to Action */}
          <CTASection />
        </div>
      </div>
    </div>
  );
}