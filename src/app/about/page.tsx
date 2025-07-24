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
              {`I'm Miles, a software engineer, writer, and lifelong learner. My journey into tech began when I was five, playing Pokémon Yellow on a Game Boy Color. That early spark of curiosity eventually grew into a deep passion for building technology that connects, empowers, and inspires.`}
            </p>
            <p>
              {`Today, I'm a Software Engineering Intern at Siemens and a Computer Science student at NC State University, where I'm also minoring in Japan Studies. As a Goodnight Scholar, I serve as both a mentor and program ambassador. My work spans full-stack development, AI experimentation, and creative software projects, including indie games and language learning tools.`}
            </p>
            <p>
              {`Over the years, I’ve taken on many roles—from leading a bakery team while in school, to maintaining a college website, to freelancing as a Web Analyst and Developer. I’ve interned at a startup as a Solution Architect and contributed to enterprise-grade systems at Siemens. Every experience has helped shape my perspective as a developer who values both utility and user experience.`}
            </p>
            <p>
              {`I'm especially interested in tech that creates real-world impact, particularly in education, gaming, and language learning. I'm actively pursuing opportunities in Software Engineering and ML/AI Engineering, and I enjoy supporting small businesses as a freelancer while working toward my goal of launching a software company.`}
            </p>
            <p>
              {`If you’re building something meaningful in tech, AI, education, or games—or just want to connect—I’d love to hear from you.`}
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