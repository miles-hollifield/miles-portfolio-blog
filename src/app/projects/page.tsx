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
    description: "Comprehensive Japanese learning platform with AI-powered tutoring and structured practice modules",
    longDescription: "A full-stack Japanese language learning platform featuring an intelligent AI tutor, kanji practice systems, vocabulary building tools, and progress analytics. Built with a modern React frontend and FastAPI backend, Kakitori provides personalized learning experiences through AI integration and comprehensive study tools. The platform includes Google OAuth authentication, PostgreSQL data persistence, and Redis caching for optimal performance.",
    technologies: [
      "React 19.1", "FastAPI", "PostgreSQL", "Redis", 
      "Material-UI", "SQLAlchemy", "Alembic", "Docker",
      "OpenAI API", "Anthropic API", "Google OAuth", "Vite"
    ],
    status: "In Development",
    links: {
      github: "https://github.com/miles-hollifield/KakitoriAPP",
      demo: "https://kakitori-demo.vercel.app"
    },
    highlights: [
      "AI-powered Japanese tutor with chat interface using OpenAI/Anthropic APIs",
      "Comprehensive kanji learning system with JLPT integration",
      "Modern full-stack architecture with React frontend and FastAPI backend",
      "Google OAuth authentication and user progress tracking",
      "Docker containerized development environment with PostgreSQL and Redis",
      "Material-UI based responsive design with sophisticated analytics dashboard",
      "Structured learning modules including vocabulary, grammar, and conversation practice",
      "Database-driven content management with Alembic migrations"
    ],
    category: "Web App"
  },
  {
    title: "Virtual DJ Hand Controller",
    description: "Computer vision-based DJ interface controlled entirely through hand gestures and webcam tracking",
    longDescription: "An innovative application that transforms natural hand movements into real-time audio control parameters. Using MediaPipe for hand landmark detection and Pyo for audio processing, the system enables touchless DJ control through intuitive gestures. The interface maps hand distances to volume, pinch gestures to speed and pitch control, and hand twists to track navigation, creating a natural and immersive DJ experience.",
    technologies: [
      "Python 3.8+", "MediaPipe", "OpenCV", "Pyo Audio", 
      "NumPy", "SciPy", "Computer Vision", "Real-time Processing"
    ],
    status: "Completed",
    links: {
      github: "https://github.com/miles-hollifield/VirtualDJ-HandController",
      demo: "https://github.com/miles-hollifield/virtual-dj-hand-controller/blob/main/docs/demo_screenshot.png"
    },
    highlights: [
      "Real-time hand landmark detection and gesture recognition using MediaPipe",
      "Advanced audio processing with pitch shifting, speed control, and volume manipulation",
      "Intuitive gesture mapping: distance for volume, pinch for tempo/pitch, twist for tracks",
      "Custom algorithms for hand twist detection using vector mathematics",
      "Visual feedback system with on-screen parameter visualization",
      "Robust gesture recognition with cooldown systems to prevent false triggers",
      "Cross-platform compatibility with webcam integration",
      "Mathematical audio transformations using frequency domain processing"
    ],
    category: "Tool"
  },
  {
    title: "Portfolio + Blog",
    description: "Modern portfolio website featuring interactive timeline, advanced blog system, and sophisticated UI/UX design",
    longDescription: "A carefully crafted portfolio and blog platform showcasing modern web development practices. Built with Next.js 15's App Router, featuring an interactive slideshow timeline component, advanced MDX blog system with gray-matter frontmatter parsing, and a custom CSS theme with gradient animations and backdrop effects. The site demonstrates sophisticated component architecture, responsive design principles, and attention to user experience details.",
    technologies: [
      "Next.js 15", "TypeScript", "React 19", "MDX", "Tailwind CSS 4", 
      "Gray-matter", "CSS Animations", "App Router", "next-mdx-remote"
    ],
    status: "Live",
    links: {
      live: "https://miles-portfolio.vercel.app",
      github: "https://github.com/miles-hollifield/miles-portfolio-blog"
    },
    highlights: [
      "Interactive slideshow timeline component with smooth transitions and storytelling",
      "Advanced MDX blog system with frontmatter parsing and dynamic routing", 
      "Custom CSS theme system with gradient animations and backdrop effects",
      "Sophisticated component architecture with TypeScript interfaces",
      "Next.js 15 App Router with static generation and optimized performance",
      "Responsive design with attention to accessibility and user experience",
      "Advanced blog features: breadcrumbs, metadata, post navigation, and SEO optimization",
      "Custom gradient animations and smooth hover effects throughout the interface"
    ],
    category: "Website"
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
            <a href="mailto:mileshollifieldgfp@gmail.com" className="cta-button secondary">
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