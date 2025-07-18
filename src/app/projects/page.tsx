import Link from "next/link";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: "Live" | "In Development" | "Completed";
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  highlights: string[];
  category: "Web App" | "Game" | "Website" | "Tool";
}

const projects: Project[] = [
  {
    title: "Kakitori",
    description: "AI-powered Japanese grammar practice app with personalized sentence drills",
    longDescription: "A web application that uses OpenAI's GPT-4 to generate unique, contextually appropriate Japanese sentences for grammar practice. Unlike traditional textbooks with static examples, Kakitori provides endless variety to help learners truly master grammar patterns.",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Vercel"],
    status: "In Development",
    links: {
      github: "https://github.com/yourusername/kakitori",
      demo: "https://kakitori-demo.vercel.app"
    },
    highlights: [
      "AI-generated grammar drills with contextual variety",
      "Adaptive difficulty based on user level",
      "Progress tracking and spaced repetition",
      "Mobile-responsive design for practice on-the-go"
    ],
    category: "Web App"
  },
  {
    title: "Guild Game",
    description: "Indie game combining adventurer management, dating sim, and dungeon crawling",
    longDescription: "A unique indie game that blends multiple genres - manage a guild of adventurers, build relationships through dating sim mechanics, and explore dangerous dungeons. Built with modern game development tools and featuring hand-crafted pixel art.",
    technologies: ["Unity", "C#", "Aseprite", "FMOD", "Steam SDK"],
    status: "In Development",
    links: {
      github: "https://github.com/yourusername/guild-game"
    },
    highlights: [
      "Multi-genre gameplay combining management, RPG, and dating sim",
      "Hand-crafted pixel art and animations",
      "Dynamic relationship system affecting gameplay",
      "Procedurally generated dungeon content"
    ],
    category: "Game"
  },
  {
    title: "Portfolio + Blog",
    description: "Personal portfolio and blog built with modern web technologies",
    longDescription: "This very website! A modern, responsive portfolio and blog built with Next.js 15 and the new App Router. Features MDX for blog posts, Tailwind CSS for styling, and TypeScript for type safety. Designed to be fast, accessible, and easy to maintain.",
    technologies: ["Next.js 15", "TypeScript", "MDX", "Tailwind CSS", "React"],
    status: "Live",
    links: {
      live: "https://miles-portfolio.vercel.app",
      github: "https://github.com/yourusername/portfolio"
    },
    highlights: [
      "Built with Next.js 15 App Router",
      "MDX integration for rich blog content",
      "Responsive design with Tailwind CSS",
      "TypeScript for type safety and better DX"
    ],
    category: "Website"
  },
  {
    title: "Japanese Learning Tools",
    description: "Collection of utilities for Japanese language study",
    longDescription: "A suite of small tools I've built to help with Japanese language learning, including kanji practice apps, vocabulary flashcards, and grammar reference tools. Each tool addresses specific challenges I've encountered in my own language learning journey.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    status: "Completed",
    links: {
      github: "https://github.com/yourusername/japanese-tools"
    },
    highlights: [
      "Multiple focused learning tools",
      "Kanji stroke order practice",
      "Vocabulary spaced repetition",
      "Grammar pattern reference"
    ],
    category: "Tool"
  }
];

const statusColors = {
  "Live": "status-live",
  "In Development": "status-development",
  "Completed": "status-completed"
};

export default function ProjectsPage() {
  return (
    <div className="page-container">
      <div className="max-w-6xl mx-auto page-content">
        {/* Hero Section */}
        <div className="page-hero">
          <h1>Projects</h1>
          <p>
            {`A collection of projects I've built, ranging from web applications to games. Each project represents a learning journey and a step forward in my development as a software engineer.`}
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">{projects.length}</p>
              <p className="text-gray-600">Total Projects</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">{projects.filter(p => p.status === "Live").length}</p>
              <p className="text-gray-600">Live Projects</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600">{projects.filter(p => p.status === "In Development").length}</p>
              <p className="text-gray-600">In Development</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">{[...new Set(projects.flatMap(p => p.technologies))].length}</p>
              <p className="text-gray-600">Technologies</p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Header */}
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-badges">
                  <span className={`project-badge ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                  <span className="project-badge bg-gray-100 text-gray-700">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="project-description">
                {project.longDescription}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Technologies</h4>
                <div className="tech-stack">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="project-features">
                <h4>Key Features</h4>
                <ul>
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="project-links">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Site
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link secondary"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5-8V3a1 1 0 011-1h1a1 1 0 011 1v3M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Demo
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <h2>Interested in collaborating?</h2>
          <p>
            {`I'm always open to discussing new projects, opportunities, or just chatting about technology and development.`}
          </p>
          <div className="cta-buttons">
            <Link href="/blog" className="cta-button primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Read My Blog
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