'use client';

import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  achievements?: string[];
}

interface ExperienceProps {
  experiences?: ExperienceItem[];
}

const defaultExperiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Siemens",
    period: "May 2024 - Present · 1 yr 3 mos",
    location: "Wendell, North Carolina",
    description: "Built and scaled internal apps that modernized parts, knowledge, and 3D model workflows across engineering teams.",
    achievements: [
      "Shipped SPIN DB and JT Catalog to replace legacy workflows",
      "Cut 3D model search time by ~70% via indexed metadata",
      "Implemented Azure Entra ID SSO with role‑based access"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Unifyr",
    period: "May 2023 - Dec 2023 · 8 mos",
    location: "Cary, North Carolina",
    description: "Delivered client‑facing portal features and enterprise integrations, balancing velocity with maintainability.",
    achievements: [
      "Built Angular partner‑portal modules used by enterprise clients",
      "Automated Salesforce↔Zift sync with Blendr/Workato",
      "Reached ~80% Apex test coverage on updated code"
    ]
  },
  {
    title: "Web Analyst",
    company: "The Sprinter",
    period: "Jan 2022 - Jun 2022 · 6 mos",
    location: "Asheville, North Carolina",
    description: "Delivered end‑to‑end web solutions—from UI to data—focused on clear outcomes for small‑business clients.",
    achievements: [
      "Built PHP/JS features backed by MySQL schemas",
      "Managed WordPress content with SEO and accessibility",
      "Deployed and maintained sites for reliability and UX"
    ]
  },
  {
    title: "Web Assistant - Work Study Student",
    company: "Asheville-Buncombe Technical Community College",
    period: "Jan 2021 - Jun 2022 · 1 yr 6 mos",
    location: "Asheville, North Carolina",
    description: "Maintained the college web presence in Drupal with a focus on accuracy, accessibility, and search visibility.",
    achievements: [
      "Updated and QA’d Drupal pages for accuracy and uptime",
      "Applied accessibility and SEO best practices",
      "Streamlined content requests with reusable patterns"
    ]
  }
];

export default function Experience({ 
  experiences = defaultExperiences 
}: ExperienceProps) {
  return (
    <div className="about-card">
      <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-6">
        <div className="icon">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2"
            />
          </svg>
        </div>
        Professional Experience
      </h3>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={`exp-${index}`} className="relative">
            {/* Timeline indicator */}
            {index < experiences.length && (
              <div className="absolute left-0 top-8 w-px h-full bg-gradient-to-b from-blue-200 to-transparent ml-2"></div>
            )}
            
            <div className="relative pl-8">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800 shadow-md"></div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                {/* Header */}
                <div className="mb-4">
                  <h4 className="text-lg font-bold text-white mb-1">
                    {exp.title}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-400">
                    <span className="font-medium text-gray-200">{exp.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{exp.period}</span>
                    {exp.location && (
                      <>
                        <span className="hidden sm:inline">•</span>
                        <span className="text-gray-400">{exp.location}</span>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                {/* Achievements */}
                {exp.achievements && (
                  <div>
                    <h5 className="text-sm font-semibold text-white mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-sm text-gray-300">
                          <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}