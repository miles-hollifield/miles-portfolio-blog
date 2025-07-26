'use client';

import React from 'react';

interface EducationItem {
  institution: string;
  period: string;
  description: string;
}

interface EducationProps {
  education?: EducationItem[];
}

const defaultEducation: EducationItem[] = [
  {
    institution: "NC State University",
    period: "January 2023 – May 2026",
    description: "BS Computer Science, Minor in Japan Studies. Goodnight Scholar Program participant, serving as both mentor and program ambassador."
  },
  {
    institution: "AB Technical Community College",
    period: "2019 – 2022", 
    description: "Earned AAS in Software/Web Dev and AS for university transfer. Balanced full-time coursework with bakery and tech roles."
  }
];

export default function Education({ 
  education = defaultEducation 
}: EducationProps) {
  return (
    <div className="about-card">
      <h3>
        <div className="icon">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0v-4a2 2 0 011-1h1m0 0V9a2 2 0 011-1h2a2 2 0 011 1v10M9 21h10M9 21H5"
            />
          </svg>
        </div>
        Education
      </h3>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={`edu-${index}`}>
            <h4 className="font-semibold text-gray-900">
              {edu.institution}
            </h4>
            <p className="text-sm text-gray-600 mb-2">{edu.period}</p>
            <p className="text-gray-700 text-sm">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
