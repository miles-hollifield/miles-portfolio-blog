"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [whatIDoVisible, setWhatIDoVisible] = useState(false);
  const [recentWorkVisible, setRecentWorkVisible] = useState(false);
  
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const whatIDoRef = useRef<HTMLDivElement>(null);
  const recentWorkRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const createObserver = (setVisible: (visible: boolean) => void) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        { threshold: 0.1, rootMargin: "-15% 0px" }
      );
    };

    const aboutMeObserver = createObserver(setAboutMeVisible);
    const whatIDoObserver = createObserver(setWhatIDoVisible);
    const recentWorkObserver = createObserver(setRecentWorkVisible);

    if (aboutMeRef.current) aboutMeObserver.observe(aboutMeRef.current);
    if (whatIDoRef.current) whatIDoObserver.observe(whatIDoRef.current);
    if (recentWorkRef.current) recentWorkObserver.observe(recentWorkRef.current);

    return () => {
      aboutMeObserver.disconnect();
      whatIDoObserver.disconnect();
      recentWorkObserver.disconnect();
    };
  }, []);

  const onHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
  };

  const onHeroMouseLeave = () => {
    const el = spotlightRef.current;
    if (!el) return;
    el.style.removeProperty('--mx');
    el.style.removeProperty('--my');
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section
        ref={spotlightRef}
        onMouseMove={onHeroMouseMove}
        onMouseLeave={onHeroMouseLeave}
        className="relative spotlight-hover px-4 pt-6 sm:pt-8 sm:px-6 lg:px-8 lg:pt-12 min-h-[calc(100vh-160px)] sm:min-h-[calc(100vh-160px)] lg:min-h-[calc(100vh-160px)] max-h-none sm:max-h-[1000px] flex items-center justify-center overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '30px 30px sm:50px sm:50px'
            }}></div>
          </div>
          
          {/* Floating Code Elements */}
          {/* <div className="absolute top-10 left-4 sm:top-20 sm:left-10 text-cyan-400/30 text-xs sm:text-sm font-mono transform rotate-12 hidden sm:block pointer-events-none">
            {'import torch'}
          </div>
          <div className="absolute top-16 right-4 sm:top-32 sm:right-20 text-purple-400/30 text-xs font-mono transform -rotate-6 hidden sm:block pointer-events-none">
            model.train()
          </div>
          <div className="absolute bottom-20 left-4 sm:bottom-40 sm:left-20 text-yellow-400/30 text-sm sm:text-lg font-mono transform rotate-45 hidden sm:block pointer-events-none">
            →
          </div>
          <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-32 text-green-400/30 text-xs sm:text-sm font-mono transform -rotate-12 hidden sm:block pointer-events-none">
            tf.keras
          </div>
          <div className="absolute top-20 left-16 sm:top-40 sm:left-32 text-red-400/30 text-xs font-mono transform rotate-6 hidden lg:block pointer-events-none">
            async/await
          </div> */}
        </div>

        <div className="mx-auto max-w-6xl w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8 text-left relative z-10 order-2 lg:order-1 animate-fade-in-up">
              {/* Status Badge */}
              {/* <div className="inline-flex items-center space-x-2 bg-green-400/10 border border-green-400/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Available for new projects</span>
              </div> */}

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 animate-fade-in-up animation-delay-200">
                <span className="text-white">Miles </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Hollifield
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 max-w-4xl leading-relaxed animate-fade-in-up animation-delay-400">
                Software Engineer/AI Engineer who creates 
                <span className="text-cyan-400"> intelligent applications</span>, 
                <span className="text-purple-400"> robust software systems</span>, and 
                <span className="text-yellow-400"> AI-powered solutions</span> that deliver real-world impact.
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-10 animate-fade-in-up animation-delay-600 select-none cursor-default">
                <span className="px-2 sm:px-2 lg:px-3 py-1 sm:py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-xs sm:text-xs lg:text-sm font-medium hover:bg-blue-500/30 hover:border-blue-400 hover:text-blue-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  Python & Web Development
                </span>
                <span className="px-2 sm:px-2 lg:px-3 py-1 sm:py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-xs sm:text-xs lg:text-sm font-medium hover:bg-purple-500/30 hover:border-purple-400 hover:text-purple-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  AI Integration
                </span>
                <span className="px-2 sm:px-2 lg:px-3 py-1 sm:py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs sm:text-xs lg:text-sm font-medium hover:bg-green-500/30 hover:border-green-400 hover:text-green-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                  Full-Stack Development
                </span>
                <span className="px-2 sm:px-2 lg:px-3 py-1 sm:py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-xs sm:text-xs lg:text-sm font-medium hover:bg-yellow-500/30 hover:border-yellow-400 hover:text-yellow-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300">
                  Cloud & DevOps
                </span>
                <span className="px-2 sm:px-2 lg:px-3 py-1 sm:py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-xs sm:text-xs lg:text-sm font-medium hover:bg-red-500/30 hover:border-red-400 hover:text-red-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                  LLMs & NLP
                </span>
                <span className="px-2 sm:px-2 lg:px-3 py-1 sm:py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs sm:text-xs lg:text-sm font-medium hover:bg-cyan-500/30 hover:border-cyan-400 hover:text-cyan-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                  API Development
                </span>
              </div>

              {/* CTA Buttons */}
              
            </div>

            {/* Right Column - Visual Elements */}
            <div className="lg:col-span-4 relative order-1 lg:order-2 mb-12 lg:mb-0 animate-fade-in-up animation-delay-300">
              <div className="relative flex justify-center lg:justify-flex-end">
                {/* Main Profile Image with Glow */}
                <div className="relative w-56 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 xl:w-96 xl:h-[420px] 2xl:w-[420px] 2xl:h-[480px] group transition-transform duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-30 animate-pulse group-hover:opacity-50 group-hover:blur-2xl transition-all duration-500"></div>
                  
                  {/* Offset White Border */}
                  <div className="absolute top-5 left-5 w-full h-full rounded-xl border-4 border-white opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative w-full h-full rounded-xl overflow-hidden border-1 backdrop-blur-sm bg-gray-800/50 group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500">
                    <Image 
                      src="/timeline-images/miles-2021.jpg" 
                      alt="Miles Hollifield" 
                      width={350} 
                      height={420} 
                      className="object-cover w-full h-full" 
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Navigation Section */}
      <section className="bg-gray-900 border-t border-gray-800">
        <div className="relative flex justify-center items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-4 lg:py-6">
          {/* Left Side - Design/Code/Engage */}
          <div className="absolute left-4 sm:left-6 lg:left-8 text-gray-400 text-xs sm:text-sm">
            {`// Design, Code,`}<br />Deploy
          </div>

          {/* Center - Social Icons in slim pill */}
          <div className="bg-gray-800 rounded-full border border-gray-700 px-5 py-2 sm:px-4 sm:py-2">
            <div className="flex items-center space-x-3 sm:space-x-3">
              <SocialIcon href="https://github.com/miles-hollifield" icon="github" />
              <SocialIcon href="https://linkedin.com/in/mileshollifield" icon="linkedin" />
            </div>
          </div>

          {/* Right Side - Email Icon */}
          <div className="absolute right-4 sm:right-6 lg:right-8">
            <a 
              href="mailto:fieldofmiles@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-700 hover:border-gray-600 flex items-center"
            >
              {/* Mobile: Icon only */}
              <div className="block sm:hidden p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              {/* Desktop: Icon + Email text */}
              <div className="hidden sm:flex items-center px-3 py-2 space-x-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">fieldofmiles@gmail.com</span>
              </div>
            </a>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" ref={aboutMeRef}>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Mini About Me */}
            <div className={`lg:col-span-2 space-y-6 sm:space-y-8 transition-all duration-1000 ${
              aboutMeVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  About Me
                </h2>
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                  I&apos;m a software engineer with a passion for building AI-powered applications. 
                  <span className="text-cyan-400"> My journey combines traditional software development with modern AI capabilities</span>, 
                  creating solutions that bridge cutting-edge technology with practical user needs.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me studying Japanese, keeping up with the Video Game industry, 
                  or writing about my experiences in tech, helpful articles in professional development, or life in general. I believe in practical innovation 
                  and creating technology that genuinely improves people&apos;s lives.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-400">Currently Working On</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">▸</span>
                    AI-powered Japanese language learning applications
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">▸</span>
                    Integrating LLMs into practical software solutions
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">▸</span>
                    Building scalable web applications with AI features
                  </li>
                </ul>
              </div>

              <div className="pt-4 sm:pt-8">
                <Link 
                  href="/about" 
                  className="flex w-full sm:inline-flex sm:w-auto items-center justify-center text-center px-4 sm:px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 text-sm sm:text-base"
                >
                  Learn More About My Journey
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column - Quick Facts */}
            <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-200 ${
              aboutMeVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              <div className="relative bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 hover:bg-gray-800/70 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25">
                <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="hover:bg-gray-700/30 rounded-lg p-2 transition-colors duration-200">
                    <span className="text-gray-400 text-sm">Location</span>
                    <p className="text-white group-hover:text-gray-100">North Carolina, USA</p>
                  </div>
                  <div className="hover:bg-gray-700/30 rounded-lg p-2 transition-colors duration-200">
                    <span className="text-gray-400 text-sm">Years of Experience</span>
                    <p className="text-white group-hover:text-gray-100">2+</p>
                  </div>
                  <div className="hover:bg-gray-700/30 rounded-lg p-2 transition-colors duration-200">
                    <span className="text-gray-400 text-sm">Interests</span>
                    <p className="text-white group-hover:text-gray-100">AI Applications, Japanese Language, Game Development</p>
                  </div>
                  <div className="hover:bg-gray-700/30 rounded-lg p-2 transition-colors duration-200">
                    <span className="text-gray-400 text-sm">Current Focus</span>
                    <p className="text-white group-hover:text-gray-100">AI-Enhanced Web Applications</p>
                  </div>
                </div>

                {/* Lightning bolt icon - positioned to hover over top right */}
                <div className="absolute -top-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg z-10 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-yellow-500/50 transition-all duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 bg-gray-900 border-t border-gray-800" ref={whatIDoRef}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Section Header */}
            <div className={`space-y-6 transition-all duration-1000 ${
              whatIDoVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              
              {/* Section Header */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">What I Do</h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I create intelligent software solutions that combine robust engineering with practical AI capabilities, 
                    building applications that understand and adapt to user needs.
                  </p>
                  
                  <p className="text-base text-gray-400 leading-relaxed">
                    From responsive web applications to AI-powered tools, I focus on creating technology that solves real problems. 
                    My approach blends traditional software engineering principles with modern AI integration techniques.
                  </p>
                  
                  <p className="text-base text-gray-400 leading-relaxed">
                    I specialize in full-stack development, API design, and incorporating AI features like natural language processing 
                    and intelligent automation into everyday applications. I believe in building software that&apos;s both powerful and accessible.
                  </p>
                </div>
                
                {/* CTA Button */}
                <div className="pt-6">
                  <Link 
                    href="/projects" 
                    className="flex w-full sm:inline-flex sm:w-auto items-center justify-center text-center px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 text-sm sm:text-base"
                  >
                    View My Projects
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Main Services */}
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${
              whatIDoVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              
              {/* Software Engineering */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Software Engineering</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Building scalable, maintainable applications using modern frameworks and best practices. 
                      I focus on creating robust software architectures that deliver exceptional user experiences and solve real-world problems.
                    </p>
                    <div className="flex flex-wrap gap-2 select-none cursor-default">
                      <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-blue-300 text-xs">React & Next.js</span>
                      <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-blue-300 text-xs">JavaScript/TypeScript</span>
                      <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-blue-300 text-xs">Node.js</span>
                      <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-blue-300 text-xs">Python</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Engineering */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">AI Engineering</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Integrating artificial intelligence into practical applications that enhance user experiences. 
                      I work with LLMs, NLP, and AI APIs to create intelligent features that add genuine value to software products.
                    </p>
                    <div className="flex flex-wrap gap-2 select-none cursor-default">
                      <span className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-green-300 text-xs">LLM Integration</span>
                      <span className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-green-300 text-xs">OpenAI APIs</span>
                      <span className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-green-300 text-xs">NLP Applications</span>
                      <span className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-green-300 text-xs">AI Product Development</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Game Industry & Occasional Writing */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Game Industry Enthusiast */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg group-hover:scale-110 transition-transform duration-300 mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">Game Industry Enthusiast</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      Passionate about interactive entertainment, game development, and industry trends.
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center select-none cursor-default">
                      <span className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-purple-300 text-xs">Unreal Engine</span>
                      <span className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-purple-300 text-xs">Game Design</span>
                    </div>
                  </div>
                </div>

                {/* Occasional Writer */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg group-hover:scale-110 transition-transform duration-300 mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">Occasional Writer</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      Writing about tech, dev logs, life experiences, how-to guides, and general thoughts as inspiration strikes.
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center select-none cursor-default">
                      <span className="px-2 py-1 bg-orange-500/20 border border-orange-500/30 rounded text-orange-300 text-xs">Dev Logs</span>
                      <span className="px-2 py-1 bg-orange-500/20 border border-orange-500/30 rounded text-orange-300 text-xs">How-to Guides</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Preview */}
      <section className="py-16 bg-gray-900 border-t border-gray-800" ref={recentWorkRef}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left column: Section header and context */}
            <div className={`space-y-4 transition-all duration-1000 ${
              recentWorkVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-3xl font-bold text-white">Recent Work</h2>
              <p className="text-lg text-gray-300">A quick look at my latest projects — AI-powered apps and full‑stack builds designed for real-world impact.</p>
              <p className="text-base text-gray-400">You can also explore my recent writings, where I share implementation notes, my experience in tech, and lessons learned along the way.</p>
            </div>

            {/* Right column: Featured items stacked */}
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${
              recentWorkVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              {/* Featured Project */}
              <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 group border border-gray-700 hover:border-blue-500/50 hover:scale-105 cursor-default">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Kakitori</h3>
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium group-hover:bg-blue-500/30 group-hover:border-blue-400 group-hover:text-blue-300 transition-all duration-300">AI-Powered</span>
                  </div>
                  <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                    An AI-powered Japanese language learning app that adapts to individual user needs for effective learning.
                  </p>
                  <Link href="/projects" className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">View Project</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Featured Blog Post */}
              <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 group border border-gray-700 hover:border-green-500/50 hover:scale-105 cursor-default">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">Latest Blog Post</h3>
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium group-hover:bg-green-500/30 group-hover:border-green-400 group-hover:text-green-300 transition-all duration-300">New</span>
                  </div>
                  <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                    The Future of Entertainment Is Interactive
                  </p>
                  <Link href="/blog/the-future-of-entertainment-is-interactive" className="flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                    <span className="text-sm font-medium">Read Article</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Social Icon Component
function SocialIcon({ href, icon }: { href: string; icon: string }) {
  const getIcon = () => {
    switch (icon) {
      case 'github':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'email':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'blog':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        );
      case 'behance':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.504 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.76-.62.16-1.25.24-1.90.24H0V4.51h6.938v-.007zM3.495 8.42h2.876c.606 0 1.05-.15 1.34-.45.29-.3.435-.74.435-1.32 0-.32-.05-.6-.15-.84-.1-.24-.25-.43-.44-.58-.19-.15-.42-.26-.69-.35-.27-.09-.57-.13-.91-.13H3.495v3.67zm0 7.17h3.40c.33 0 .64-.04.93-.12.29-.08.54-.2.75-.36.21-.16.37-.37.48-.63.11-.26.17-.56.17-.9 0-.74-.17-1.26-.52-1.56-.35-.3-.85-.45-1.51-.45H3.495v4.02zm9.52-11.83c.77 0 1.45.11 2.05.34.6.23 1.11.54 1.53.94.42.4.74.88.96 1.44.22.56.33 1.16.33 1.80 0 .67-.14 1.27-.42 1.80-.28.53-.66.97-1.14 1.32-.48.35-1.04.61-1.67.78-.63.17-1.3.26-2.01.26H9.45V4.51h3.565v.06zm-.01 7.54c.73 0 1.30-.15 1.71-.45.41-.3.62-.77.62-1.42 0-.3-.04-.56-.13-.79-.09-.23-.21-.42-.38-.57-.17-.15-.37-.26-.61-.33-.24-.07-.50-.10-.78-.10H9.45v3.66h3.045zm7.53-1.64c0-.81-.1-1.49-.3-2.04-.2-.55-.48-.99-.84-1.32-.36-.33-.78-.57-1.26-.72-.48-.15-.99-.23-1.53-.23-.54 0-1.05.08-1.53.23-.48.15-.90.39-1.26.72-.36.33-.64.77-.84 1.32-.2.55-.3 1.23-.3 2.04v.01c0 .82.1 1.51.3 2.07.2.56.48 1.01.84 1.35.36.34.78.58 1.26.73.48.15.99.23 1.53.23.54 0 1.05-.08 1.53-.23.48-.15.90-.39 1.26-.73.36-.34.64-.79.84-1.35.2-.56.3-1.25.3-2.07v-.01zm-4.63-.01c0-.48.07-.89.2-1.23.13-.34.31-.61.53-.81.22-.2.48-.34.77-.42.29-.08.60-.12.93-.12.33 0 .64.04.93.12.29.08.55.22.77.42.22.2.40.47.53.81.13.34.2.75.2 1.23v.01c0 .48-.07.89-.2 1.23-.13.34-.31.61-.53.81-.22.2-.48.34-.77.42-.29.08-.60.12-.93.12-.33 0-.64-.04-.93-.12-.29-.08-.55-.22-.77-.42-.22-.2-.40-.47-.53-.81-.13-.34-.2-.75-.2-1.23v-.01z"/>
          </svg>
        );
      case 'dribbble':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.314 5.717-.653-.139-1.44-.277-2.362-.416-.175-4.3-1.109-7.795-2.314-9.301 1.5 1.5 2.362 3.5 2.362 4zm-2.638-.069c1.245 1.245 2.314 3.963 2.314 8.093-.97-.208-2.07-.416-3.241-.624-.416-3.726-1.454-6.901-2.638-9.469h3.565zm-1.454 1.454c1.176 2.57 2.07 5.648 2.5 9.374-2.292-.416-4.792-.832-7.292-1.248-.624-2.292-1.454-4.376-2.5-6.251 2.5 0 4.792-.416 7.292-1.875zm-8.749 1.245c1.045 1.875 1.875 3.96 2.5 6.251-3.309-.624-6.251-1.454-8.749-2.5 1.875-1.875 3.96-2.5 6.249-3.751zm-6.249 5.648c2.498 1.046 5.44 1.876 8.749 2.5-.625 2.292-1.455 4.376-2.5 6.251-2.289-1.251-4.374-2.376-6.249-3.751v-5zm8.125 8.125c1.045-1.875 1.875-3.959 2.5-6.251 2.5.416 5 .832 7.292 1.248-.416 2.708-1.454 5.232-2.638 7.376-2.292-.832-4.792-1.665-7.154-2.373zm9.374-2.708c-.624-2.292-1.454-4.376-2.5-6.251 2.498 1.046 5.44 1.876 8.749 2.5-1.875 1.875-3.96 2.5-6.249 3.751z"/>
          </svg>
        );
      case 'discord':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.120.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <a
      href={href}
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      className="text-gray-400 hover:text-white transition-colors duration-300 p-1.5 sm:p-1 rounded-full hover:bg-gray-700"
    >
      <div className="w-5 h-5 sm:w-5 sm:h-5">
        {getIcon()}
      </div>
    </a>
  );
}