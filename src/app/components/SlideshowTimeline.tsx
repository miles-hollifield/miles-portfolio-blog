'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const timelineStories = [
  {
    period: "2024 - Present",
    title: "Enterprise Innovation at Siemens",
    subtitle: "Building AI-Powered Enterprise Tools",
    story: "Currently developing cutting-edge enterprise applications at Siemens, where I work with React, FastAPI, and Azure to build tools like SEAK (an AI-powered knowledge platform) and JT Catalog (3D model integration with SAP/Salesforce). This role has pushed me to think at enterprise scale while maintaining my passion for clean, user-centered design.",
    highlights: ["AI/Semantic Search Integration", "3D Model Systems", "Azure Cloud Infrastructure", "Enterprise-Scale Applications"],
    color: "bg-blue-600",
    accentColor: "blue",
    image: "/timeline-images/siemens-2024.svg"
  },
  {
    period: "2023",
    title: "Solution Architecture Deep Dive",
    subtitle: "Mastering Full-Stack Integration",
    story: "At Unifyr, I dove deep into the world of solution architecture, building Angular-based client portals and complex Salesforce integrations. This experience taught me how different systems talk to each other and how to design solutions that scale. Working with Workato/Blendr for data pipelines was like solving puzzles at an enterprise level.",
    highlights: ["Angular Client Portals", "Salesforce Integration", "Data Pipeline Architecture", "System Reliability"],
    color: "bg-purple-600",
    accentColor: "purple",
    image: "/timeline-images/unifyr-2023.svg"
  },
  {
    period: "2022 - The Juggling Act",
    title: "NASA, Jobs, and Transfer Dreams",
    subtitle: "The Year I Did Everything",
    story: "2022 was my most challenging year yet. I was simultaneously working on a NASA lunar rover mission design, pulling logistics duty at Biltmore in extreme summer heat, testing wastewater at Pace Analytical, AND completing my transfer requirements for NC State. It sounds impossible, but each role taught me something different about problem-solving and resilience.",
    highlights: ["NASA NCAS Research Program", "Biltmore Event Logistics", "Lab Analysis & Testing", "NC State Transfer Prep"],
    color: "bg-orange-600",
    accentColor: "orange",
    image: "/timeline-images/miles-nasa.jpg"
  },
  {
    period: "2021-2022",
    title: "Finding My Voice in Web Development",
    subtitle: "From College Web Assistant to Freelancer",
    story: "While finishing my degree at AB Tech, I discovered my love for web development through my role as Web Assistant. Managing the college's Drupal site taught me about accessibility and SEO, but freelancing taught me about clients, deadlines, and turning technical skills into real-world solutions. Building custom WordPress sites for local businesses was incredibly rewarding.",
    highlights: ["Drupal CMS Management", "SEO & Accessibility", "Freelance Client Work", "PHP & WordPress Development"],
    color: "bg-green-600",
    accentColor: "green",
    image: "/timeline-images/miles-2021.jpg"
  },
  {
    period: "2019-2021",
    title: "The Foundation Years",
    subtitle: "Working Full-Time While Building My Future",
    story: "This is where it all began. While working full-time as a Shift Lead at a locally-owned bakery in Asheville, North Carolina, I was building my programming skills at Asheville-Buncombe Technical Community College. Those early morning shifts before class and late-night coding sessions taught me more about time management and determination than any textbook ever could. Every day was about balancing the immediate (working my day job) with the future (becoming a developer).",
    highlights: ["Full-Time Bakery Job", "AAS - Software & Web Development", "Time Management Mastery", "Foundation Programming Skills"],
    color: "bg-amber-600",
    accentColor: "amber",
    image: "/timeline-images/wellbred.jpg"
  }
];

export default function SlideshowTimeline() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = timelineStories.length;

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

  return (
    <div className="about-card">
      <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-6">
        <div className="icon">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        My Journey in Stories
        <span className="text-sm font-normal text-gray-600 ml-2">
          — {currentSlide + 1} of {totalSlides}
        </span>
      </h3>

      {/* Main slideshow area */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 min-h-[400px] overflow-hidden">
        {/* Background decoration */}
        <div className={`absolute top-0 right-0 w-32 h-32 ${currentStory.color} opacity-10 rounded-full blur-2xl transform translate-x-8 -translate-y-8`}></div>
        
        {/* Two-column layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Content column */}
          <div className="flex flex-col justify-center">
            {/* Period badge */}
            <div className={`inline-block px-3 py-1 ${currentStory.color} text-white text-sm font-medium rounded-full mb-4 w-fit`}>
              {currentStory.period}
            </div>

            {/* Title and subtitle */}
            <h4 className="text-2xl font-bold text-gray-900 mb-2">{currentStory.title}</h4>
            <p className="text-lg text-gray-600 mb-6">{currentStory.subtitle}</p>

            {/* Story content */}
            <p className="text-gray-700 leading-relaxed mb-6 text-base">
              {currentStory.story}
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              <h5 className="font-semibold text-gray-900">Key Highlights:</h5>
              <div className="grid grid-cols-1 gap-2">
                {currentStory.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-2 h-2 ${currentStory.color} rounded-full flex-shrink-0`}></div>
                    <span className="text-sm text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image 
                src={currentStory.image} 
                alt={`${currentStory.title} - ${currentStory.period}`}
                width={300}
                height={200}
                className="w-full max-w-sm h-auto rounded-lg shadow-lg border-2 border-white"
              />
              {/* Image frame effect */}
              <div className={`absolute -inset-1 ${currentStory.color} opacity-20 rounded-lg blur-sm -z-10`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-between mt-6">
        {/* Previous button */}
        <button
          onClick={prevSlide}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors group"
        >
          <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800">Previous</span>
        </button>

        {/* Slide indicators */}
        <div className="flex gap-2">
          {timelineStories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
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
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors group"
        >
          <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800">Next</span>
          <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Auto-play option (optional) */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          Click the dots or use the arrows to navigate • {totalSlides} stories total
        </p>
      </div>
    </div>
  );
}