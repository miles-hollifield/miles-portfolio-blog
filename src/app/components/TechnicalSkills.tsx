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
    title: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "SQL", "Java", "C++"]
  },
  {
    title: "Frameworks",
    skills: ["React", "FastAPI", "SvelteKit", "Material UI", "Bootstrap", "Tailwind"]
  },
  {
    title: "Databases",
    skills: ["Microsoft SQL Server", "Vector Databases", "SQLAlchemy", "SQLModel"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Azure (DevOps, Entra ID, Container Apps, Blob Storage)", "Docker", "Kubernetes", "CI/CD Pipelines"]
  },
  {
    title: "Tools",
    skills: ["Git", "Figma", "Postman", "Swagger/OpenAPI", "JWT Authentication"]
  },
  {
    title: "Integrations",
    skills: ["SAP", "Salesforce", "Azure OpenAI", "SharePoint", "Confluence"]
  }
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
            <h4 className="font-semibold text-gray-900 mb-2">
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