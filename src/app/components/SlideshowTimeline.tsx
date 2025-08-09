"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const timelineStories = [
  {
    period: "2024 - Present",
    title: "Enterprise Innovation at Siemens",
    subtitle: "Building AI-Powered Enterprise Tools",
    story:
      "Currently developing cutting-edge enterprise applications at Siemens, where I work with React, FastAPI, and Azure to build tools like SEAK (an AI-powered knowledge platform) and JT Catalog (3D model integration with SAP/Salesforce). This role has pushed me to think at enterprise scale while maintaining my passion for clean, user-centered design.",
    highlights: [
      "AI/Semantic Search Integration",
      "3D Model Systems",
      "Azure Cloud Infrastructure",
      "Enterprise-Scale Applications",
    ],
    color: "bg-blue-600",
    accentColor: "blue",
    image: "/timeline-images/miles-siemens.jpg",
  },
  {
    period: "2023",
    title: "Software Engineering Deep Dive",
    subtitle: "Mastering Full-Stack Integration",
    story:
      "At Unifyr, I dove deep into the world of software engineering, building Angular-based client portals and complex Salesforce integrations. This experience taught me how different systems talk to each other and how to design solutions that scale. Working with Workato/Blendr for data pipelines was like solving puzzles at an enterprise level.",
    highlights: [
      "Angular Client Portals",
      "Salesforce Integration",
      "Data Pipeline Architecture",
      "System Reliability",
    ],
    color: "bg-purple-600",
    accentColor: "purple",
    image: "/timeline-images/miles-wolfpack-shirt.jpg",
  },
  {
    period: "2022 - The Juggling Act",
    title: "NASA, Jobs, and Transfer Dreams",
    subtitle: "The Year I Did Everything",
    story:
      "2022 was my most challenging year yet. I was simultaneously working on a NASA lunar rover mission design, pulling logistics duty at Biltmore in extreme summer heat, testing wastewater at Pace Analytical, AND completing my transfer requirements for NC State. It sounds impossible, but each role taught me something different about problem-solving and resilience.",
    highlights: [
      "NASA NCAS Research Program",
      "Biltmore Event Logistics",
      "Lab Analysis & Testing",
      "NC State Transfer Prep",
    ],
    color: "bg-orange-600",
    accentColor: "orange",
    image: "/timeline-images/miles-nasa.jpg",
  },
  {
    period: "2021-2022",
    title: "Finding My Voice in Web Development",
    subtitle: "From College Web Assistant to Freelancer",
    story:
      "While finishing my degree at AB Tech, I discovered my love for web development through my role as Web Assistant. Managing the college's Drupal site taught me about accessibility and SEO, but freelancing taught me about clients, deadlines, and turning technical skills into real-world solutions. Building custom WordPress sites for local businesses was incredibly rewarding.",
    highlights: [
      "Drupal CMS Management",
      "SEO & Accessibility",
      "Freelance Client Work",
      "PHP & WordPress Development",
    ],
    color: "bg-green-600",
    accentColor: "green",
    image: "/timeline-images/miles-2021.jpg",
  },
  {
    period: "2019-2021",
    title: "The Foundation Years",
    subtitle: "Working Full-Time While Building My Future",
    story:
      "This is where it all began. While working full-time as a Shift Lead at a locally-owned bakery in Asheville, North Carolina, I was building my programming skills at Asheville-Buncombe Technical Community College. Those early morning shifts before class and late-night coding sessions taught me more about time management and determination than any textbook ever could. Every day was about balancing the immediate (working my day job) with the future (becoming a developer).",
    highlights: [
      "Full-Time Bakery Job",
      "AAS - Software & Web Development",
      "Time Management Mastery",
      "Foundation Programming Skills",
    ],
    color: "bg-amber-600",
    accentColor: "amber",
    image: "/timeline-images/miles-foundation.jpeg",
  },
];

export default function SlideshowTimeline() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedMap, setLoadedMap] = useState<Record<string, boolean>>({});
  const [expandedMap, setExpandedMap] = useState<Record<number, boolean>>({});
  const totalSlides = timelineStories.length;
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  // Preload only current, previous, and next slide images
  useEffect(() => {
    const indices = [
      currentSlide,
      (currentSlide + 1) % totalSlides,
      (currentSlide - 1 + totalSlides) % totalSlides,
    ];

    indices.forEach((i) => {
      const src = timelineStories[i].image;
      if (loadedMap[src]) return;

      const img = new window.Image();
      img.onload = () => setLoadedMap((m) => ({ ...m, [src]: true }));
      img.onerror = () => setLoadedMap((m) => ({ ...m, [src]: true })); // consider loaded to avoid spinner loop
      img.src = src;
    });
  }, [currentSlide, totalSlides, loadedMap]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentStory = timelineStories[currentSlide];

  const handleTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);
    // Horizontal swipe threshold
    if (absX > 50 && absX > absY) {
      if (dx < 0) nextSlide();
      else prevSlide();
    }
  };

  const toggleExpanded = (index: number) => {
    setExpandedMap((m) => ({ ...m, [index]: !m[index] }));
  };

  return (
    <div className="about-card">
  <div className="flex items-baseline justify-between mb-6">
    <h3 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-white">
          <div className="icon">
            <svg
      className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="leading-tight">My Journey in Stories</span>
        </h3>
        <span
          className="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-800/60 border border-gray-700 text-[10px] sm:text-xs text-gray-300 leading-none whitespace-nowrap shrink-0"
          aria-live="polite"
        >
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>

      {/* Main slideshow area */}
      <div
        className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 sm:p-8 overflow-hidden border border-gray-700 min-h-[360px] sm:min-h-[420px] lg:min-h-[520px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background decoration */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 ${currentStory.color} opacity-10 rounded-full blur-2xl transform translate-x-8 -translate-y-8`}
        ></div>

          {/* In-slide nav buttons removed to avoid overlaying content */}

        {/* Responsive layout: image on top for small screens, side-by-side on large */}
        <div
          key={currentSlide}
          className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 h-full opacity-0 animate-[fadeIn_0.5s_ease-in-out_forwards]"
        >
          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
          {/* Content column (below image on small, left on large) */}
          <div className="order-2 lg:order-1 flex flex-col justify-center lg:pr-4">
            {/* Period badge */}
            <div
              className={`inline-block px-3 py-1 ${currentStory.color} text-white text-sm font-medium rounded-full mb-4 w-fit cursor-default`}
            >
              {currentStory.period}
            </div>

            {/* Title and subtitle */}
            <h4 className="text-2xl font-bold text-white mb-2">
              {currentStory.title}
            </h4>
            <p className="text-lg text-gray-300 mb-6">
              {currentStory.subtitle}
            </p>

            {/* Story content */}
            {/* Story content with mobile truncation */}
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed text-base sm:text-base">
                {
                  expandedMap[currentSlide] || typeof window === 'undefined'
                    ? currentStory.story
                    : currentStory.story.length > 260
                      ? currentStory.story.slice(0, 260) + '…'
                      : currentStory.story
                }
              </p>
              {/* Show toggle on small screens only when truncation applied */}
              {currentStory.story.length > 260 && (
                <button
                  className="sm:hidden mt-2 text-sm text-blue-300 hover:text-blue-200 underline"
                  onClick={() => toggleExpanded(currentSlide)}
                >
                  {expandedMap[currentSlide] ? 'Show less' : 'Read more'}
                </button>
              )}
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h5 className="font-semibold text-white">Key Highlights:</h5>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => e.stopPropagation()}
              >
                {currentStory.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-800/40 border border-gray-700 px-3 py-2 rounded-lg">
                    <div className={`w-2 h-2 ${currentStory.color} rounded-full flex-shrink-0`}></div>
                    <span className="text-sm text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image column (on top for small screens) */}
          <div className="order-1 lg:order-2 flex items-center justify-center lg:pl-4">
            {/* Aspect ratio container for consistent sizing across breakpoints */}
            <div className="relative w-full max-w-full sm:max-w-xl lg:max-w-2xl aspect-[16/9] sm:aspect-[4/3] lg:aspect-[4/3]">
              {/* Loading placeholder */}
      {!loadedMap[currentStory.image] && (
                <div className="absolute inset-0 bg-gray-200 rounded-lg shadow-lg border-2 border-white flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              )}

              {/* Image - only show when all images are preloaded */}
      {loadedMap[currentStory.image] && (
                <>
                  <Image
                    src={currentStory.image}
                    alt={`${currentStory.title} - ${currentStory.period}`}
                    fill
                    className="object-cover rounded-lg shadow-lg border-2 border-white"
                    style={{ objectPosition: 'center top' }}
        priority={currentSlide === 0}
                  />
                  {/* Image frame effect */}
                  <div
                    className={`absolute -inset-1 ${currentStory.color} opacity-20 rounded-lg blur-sm -z-10`}
                  ></div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-center gap-3 mt-6">
        {/* Prev button */}
        <button
          onClick={prevSlide}
          aria-label="Previous story"
          className="w-10 h-10 sm:w-11 sm:h-11 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-gray-900"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slide indicators */}
    <div className="flex gap-2">
          {timelineStories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to story ${index + 1}`}
      className={`w-4 h-4 rounded-full transition-all ${
                index === currentSlide 
                  ? `${currentStory.color} scale-110` 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          aria-label="Next story"
          className="w-10 h-10 sm:w-11 sm:h-11 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-gray-900"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Navigation help text */}
      <div className="mt-4 text-center">
        {/* Mobile hint */}
        <p className="text-xs text-gray-400 sm:hidden">
          Swipe left or right to navigate • {totalSlides} stories
        </p>
        {/* Desktop hint */}
        <p className="hidden sm:inline text-xs text-gray-400">
          Click the dots or use the arrows to navigate • {totalSlides} stories
        </p>
      </div>
    </div>
  );
}
