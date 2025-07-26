'use client';

import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceProps {
  experiences?: ExperienceItem[];
}

const defaultExperiences: ExperienceItem[] = [
  {
    title: "Software Engineering Intern",
    company: "Siemens",
    period: "May 2024 – Aug 2024",
    description: "Developed enterprise-grade applications using React, FastAPI, SQL Server, and Azure Entra ID. Worked on tools like SEAK (an AI-powered knowledge platform), JT Catalog (3D model system with SAP/Salesforce), and SPIN DB (revisioned parts management system)."
  },
  {
    title: "Solution Architect Intern",
    company: "Zift Solutions / Unifyr",
    period: "May 2023 – Dec 2023",
    description: "Built Angular-based client portals and integrated Salesforce data pipelines using Workato/Blendr. Focused on system architecture and enterprise integrations."
  }
];

export default function Experience({ 
  experiences = defaultExperiences 
}: ExperienceProps) {
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
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2"
            />
          </svg>
        </div>
        Experience
      </h3>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={`exp-${index}`}>
            <h4 className="font-semibold text-gray-900">
              {exp.title}
            </h4>
            <p className="text-sm text-gray-600 mb-2">
              {exp.company} • {exp.period}
            </p>
            <p className="text-gray-700 text-sm">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
