import Link from "next/link";

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
              {`I'm Miles — a software engineer, writer, and adventurer. I'm passionate about building thoughtful software, learning Japanese, and exploring the intersection of creativity and code.`}
            </p>
            <p>
              {`Currently, I study Computer Science with a minor in Japan Studies at NC State University. I've had the privilege of interning at Siemens, working as a mentor and ambassador, and pursuing various side projects that combine my technical skills with my diverse interests.`}
            </p>
            <p>
              {`What excites me most about software development is the ability to create tools that genuinely help people. Whether it's building AI-powered language learning apps or crafting user-friendly web experiences, I believe technology should make life better and more accessible for everyone.`}
            </p>
          </div>

          {/* Experience & Education */}
          <div className="about-card">
            <h3>
              <div className="icon">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0v-4a2 2 0 011-1h1m0 0V9a2 2 0 011-1h2a2 2 0 011 1v10M9 21h10M9 21H5" />
                </svg>
              </div>
              Experience & Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Software Engineering Intern</h4>
                <p className="text-sm text-gray-600 mb-2">Siemens • Summer 2024</p>
                <p className="text-gray-700 text-sm">
                  Contributed to industrial IoT platforms, worked with C#/.NET, React, and Azure cloud services. 
                  Gained experience with enterprise-level software development and agile methodologies.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Computer Science Student</h4>
                <p className="text-sm text-gray-600 mb-2">NC State University • 2022 - Present</p>
                <p className="text-gray-700 text-sm">
                  Pursuing a BS in Computer Science with a minor in Japan Studies. 
                  Focusing on software engineering, AI/ML, and cross-cultural technology applications.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="about-card">
            <h3>
              <div className="icon">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              Technical Skills
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Languages & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'C#', 'Java'].map((skill) => (
                    <span key={skill} className="tech-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'Azure', 'Vercel', 'Tailwind CSS', 'Unity', 'Figma', 'VS Code'].map((skill) => (
                    <span key={skill} className="tech-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interests & Hobbies */}
          <div className="about-card">
            <h3>
              <div className="icon">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              Interests & Passions
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900">Japanese Language & Culture</h4>
                <p className="text-gray-700 text-sm">
                  {`Five years of studying Japanese, from anime enthusiasm to academic pursuit. Currently working toward N2 proficiency and planning to study abroad in Japan.`}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Game Development</h4>
                <p className="text-gray-700 text-sm">
                  {`Creating indie games that blend storytelling with gameplay mechanics. Currently developing a guild management game with dating sim elements.`}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">AI & Language Learning</h4>
                <p className="text-gray-700 text-sm">
                  {`Exploring how AI can make language learning more personalized and effective. Building tools that adapt to individual learning styles and needs.`}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Writing & Documentation</h4>
                <p className="text-gray-700 text-sm">
                  {`Passionate about clear technical writing and knowledge sharing. I believe good documentation is as important as good code.`}
                </p>
              </div>
            </div>
          </div>

          {/* Personal Philosophy */}
          <div className="content-section">
            <h2>My Approach</h2>
            <p>
              {`I believe that the best software is built with empathy — understanding not just what users need, but how they think and feel. This perspective has been shaped by my cross-cultural studies and language learning experiences.`}
            </p>
            <p>
              {`In my work, I strive to balance technical excellence with user-centered design. I'm constantly learning new technologies and methodologies, but I never forget that behind every line of code is a human being trying to accomplish something meaningful.`}
            </p>
            <p>
              {`Whether I'm debugging a complex system, learning a new framework, or helping a fellow student understand a concept, I approach each challenge with curiosity, patience, and a commitment to continuous improvement.`}
            </p>
          </div>

          {/* Fun Facts */}
          <div className="about-card">
            <h3>
              <div className="icon">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              Fun Facts
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🎮</span>
                <span className="text-gray-700 text-sm">{`I've been playing video games since I was 5 and they're what got me interested in programming`}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">📚</span>
                <span className="text-gray-700 text-sm">{`I can read Japanese manga and light novels, which has been great motivation for studying`}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🌱</span>
                <span className="text-gray-700 text-sm">{`I maintain a small garden and find that debugging code is surprisingly similar to diagnosing plant problems`}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🎨</span>
                <span className="text-gray-700 text-sm">{`I enjoy pixel art and have created all the artwork for my game development projects`}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">☕</span>
                <span className="text-gray-700 text-sm">{`I'm a coffee enthusiast and have strong opinions about the proper way to make pour-over coffee`}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <h2>{`Let's Connect!`}</h2>
          <p>
            {`I'm always excited to meet new people, discuss interesting projects, or just chat about technology, languages, or game development.`}
          </p>
          <div className="cta-buttons">
            <Link href="/blog" className="cta-button primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Read My Blog
            </Link>
            <Link href="/projects" className="cta-button secondary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View My Projects
            </Link>
            <a href="mailto:your.email@example.com" className="cta-button secondary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}