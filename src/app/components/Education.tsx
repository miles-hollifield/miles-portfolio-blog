'use client';

import React from 'react';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location?: string;
  gpa?: string;
  description: string;
  achievements?: string[];
  activities?: string[];
}

interface EducationProps {
  education?: EducationItem[];
}

const defaultEducation: EducationItem[] = [
  {
    institution: "North Carolina State University",
    degree: "Bachelor of Science - Computer Science",
    period: "Jan 2023 - May 2026",
    location: "Raleigh, North Carolina",
    gpa: "3.53 / 4.00",
    description: "Pursuing a comprehensive Computer Science degree with a focus on software engineering, AI/ML, and system design.",
    achievements: [
      "Goodnight Scholarship Program Recipient, Mentor, and Program Ambassador (Aug 2023 - Present)",
      "Minor in Japan Studies demonstrating cross-cultural academic excellence",
      "Maintained strong academic performance while balancing internships and leadership roles"
    ],
    activities: [
      "Video Game Development Club - Member (Jan 2023 - May 2024)",
      "App Development Club - Member (Jan 2023 - Dec 2023)",
      "Goodnight Scholarship Program - Recipient, Mentor, Program Ambassador"
    ]
  },
  {
    institution: "Asheville-Buncombe Technical Community College",
    degree: "Associate of Science - Computer Science",
    period: "Jun 2021 - Dec 2022",
    location: "Asheville, North Carolina",
    gpa: "3.9 / 4.0",
    description: "Completed transfer-focused computer science curriculum while working as a Web Assistant and private tutor, demonstrating exceptional time management and academic dedication.",
    achievements: [
      "Served as Private Calculus 1 and 2 tutor, helping fellow students succeed in challenging mathematics courses",
      "Maintained near-perfect GPA while working part-time as Web Assistant",
      "Successfully prepared for transfer to NC State University"
    ],
    activities: [
      "The National Society of Leadership and Success - Member",
      "Private Mathematics Tutor - Calculus 1 and 2",
      "Web Assistant - Work Study Position"
    ]
  },
  {
    institution: "Asheville-Buncombe Technical Community College",
    degree: "Associate in Applied Science - Information Technology: Software and Web Development",
    period: "Aug 2019 - May 2021",
    location: "Asheville, North Carolina", 
    gpa: "4.0 / 4.0",
    description: "Achieved perfect academic performance in intensive software and web development program, building foundational skills in programming, web technologies, and system administration.",
    achievements: [
      "Perfect 4.0 GPA demonstrating mastery of technical curriculum",
      "Completed comprehensive software development coursework including programming fundamentals, web development, and database design",
      "Built strong foundation in multiple programming languages and web technologies"
    ],
    activities: [
      "The National Society of Leadership and Success - Member"
    ]
  }
];

export default function Education({ 
  education = defaultEducation 
}: EducationProps) {
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
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        Education
      </h3>
      
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={`edu-${index}`} className="relative">
            {/* Timeline indicator */}
            {index < education.length && (
              <div className="absolute left-0 top-8 w-px h-full bg-gradient-to-b from-green-200 to-transparent ml-2"></div>
            )}
            
            <div className="relative pl-8">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-md"></div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                {/* Header */}
                <div className="mb-4">
                  <h4 className="text-lg font-bold text-white mb-1">
                    {edu.institution}
                  </h4>
                  <div className="flex flex-col gap-1 text-sm">
                    <span className="font-medium text-gray-200">{edu.degree}</span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400">
                      <span>{edu.period}</span>
                      {edu.location && (
                        <>
                          <span className="hidden sm:inline">•</span>
                          <span>{edu.location}</span>
                        </>
                      )}
                      {edu.gpa && (
                        <>
                          <span className="hidden sm:inline">•</span>
                          <span className="font-medium text-green-400">GPA: {edu.gpa}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {edu.description}
                </p>
                
                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-white mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-sm text-gray-300">
                          <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Activities */}
                {edu.activities && edu.activities.length > 0 && (
                  <div>
                    <h5 className="text-sm font-semibold text-white mb-3">Activities & Organizations:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.activities.map((activity, actIndex) => (
                        <span 
                          key={actIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 border border-blue-500/30 text-blue-300"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
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