"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
      "React", "FastAPI", "PostgreSQL", "Redis", 
      "Material-UI", "SQLAlchemy", "Alembic", "Docker",
      "OpenAI API", "Anthropic API", "Google OAuth", "Vite"
    ],
    status: "In Development",
    links: {
      github: "https://github.com/miles-hollifield/KakitoriAPP",
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
      "Python", "MediaPipe", "OpenCV", "Pyo Audio", 
      "NumPy", "SciPy", "Computer Vision", "Real-time Processing"
    ],
    status: "Completed",
    links: {
      github: "https://github.com/miles-hollifield/VirtualDJ-HandController",
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
    longDescription: "This very site! A carefully crafted portfolio and blog platform showcasing modern web development practices. Built with Next.js 15's App Router, featuring an interactive slideshow timeline component, advanced MDX blog system with gray-matter frontmatter parsing, and a custom CSS theme with gradient animations and backdrop effects. The site demonstrates sophisticated component architecture, responsive design principles, and attention to user experience details.",
    technologies: [
      "NextJS", "React", "TypeScript", "MDX", "Tailwind CSS", 
      "Gray-matter", "CSS Animations", "App Router", "next-mdx-remote"
    ],
    status: "Live",
    links: {
      live: "https://milescript.net",
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

export default function ProjectsPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(
    projects.map(() => false)
  );
  const [ctaVisible, setCtaVisible] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
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

    const createProjectObserver = (index: number) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setProjectsVisible(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        { threshold: 0.1, rootMargin: "-10% 0px" }
      );
    };

    const heroObserver = createObserver(setHeroVisible);
    const statsObserver = createObserver(setStatsVisible);
    const ctaObserver = createObserver(setCtaVisible);
    const projectObservers = projects.map((_, index) => createProjectObserver(index));

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (statsRef.current) statsObserver.observe(statsRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);
    
    projectRefs.current.forEach((ref, index) => {
      if (ref && projectObservers[index]) {
        projectObservers[index].observe(ref);
      }
    });

    return () => {
      heroObserver.disconnect();
      statsObserver.disconnect();
      ctaObserver.disconnect();
      projectObservers.forEach(observer => observer.disconnect());
    };
  }, []);

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
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Projects</h1>
          <p>
            {`A collection of software engineering and AI-powered projects I've built. Each project represents a step forward in my journey as a developer, showcasing everything from full-stack web applications to innovative AI integrations.`}
          </p>
        </div>

        {/* Project Stats */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 transition-all duration-1000 delay-200 ${
            statsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-700">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">{projects.length}</p>
              <p className="text-gray-300">Total Projects</p>
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-700">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">{projects.filter(p => p.status === "Live").length}</p>
              <p className="text-gray-300">Live Projects</p>
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-700">
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-400">{projects.filter(p => p.status === "In Development").length}</p>
              <p className="text-gray-300">In Development</p>
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-700">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-400">{[...new Set(projects.flatMap(p => p.technologies))].length}</p>
              <p className="text-gray-300">Technologies</p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              ref={el => { projectRefs.current[index] = el; }}
              className={`bg-gray-800/50 rounded-xl shadow-lg border border-gray-700 p-8 hover:bg-gray-800/70 transition-all duration-1000 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 ${
                projectsVisible[index] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white mb-2 sm:mb-0">{project.title}</h3>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium cursor-default ${
                    project.status === "Live" ? "bg-green-500/20 text-green-300 border border-green-500/30" :
                    project.status === "In Development" ? "bg-orange-500/20 text-orange-300 border border-orange-500/30" :
                    "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  }`}>
                    {project.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700/50 text-gray-300 border border-gray-600 cursor-default">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.longDescription}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start text-gray-300">
                      <svg className="w-4 h-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Home Page
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium border border-gray-600 shadow-lg hover:shadow-gray-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium border border-gray-600 shadow-lg hover:shadow-gray-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
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
        <div 
          ref={ctaRef}
          className={`cta-section transition-all duration-1000 delay-1000 ${
            ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2>Interested in collaborating?</h2>
          <p>
            {`I'm always open to discussing new projects, opportunities, or just chatting about technology and development.`}
          </p>
          <div className="cta-buttons">
            <Link href="/about" className="cta-button secondary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Learn About Me
            </Link>
            <Link href="/blog" className="cta-button secondary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Read My Blog
            </Link>
            <Link href="/contact" className="cta-button secondary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}