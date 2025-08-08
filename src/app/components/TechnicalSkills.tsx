'use client';

import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

interface TechnicalSkillsProps {
  skillCategories?: SkillCategory[];
}

const defaultSkillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "C++",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      "Git",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "AWS",
      "Azure",
      "Postman",
      "Jira"
    ],
  },
  {
    title: "Libraries/Frameworks",
    skills: [
      // Web/UI
      "ReactJS",
      "NextJS",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      // APIs & Backend
      "NodeJS",
      "FastAPI",
      "PostgreSQL"
    ],
  },
];

export default function TechnicalSkills({ 
  skillCategories = defaultSkillCategories 
}: TechnicalSkillsProps) {
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
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
        Technical Skills
      </h3>
      <div className="space-y-4">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h4 className="font-semibold text-white mb-2">
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="tech-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}