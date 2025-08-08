'use client';

import React from 'react';

interface Interest {
  title: string;
  description: string;
}

interface InterestsPassionsProps {
  interests?: Interest[];
}

const defaultInterests: Interest[] = [
  {
    title: "AI System Design",
    description: "Designing and implementing AI-powered software solutions that solve real problems. Focused on integrating AI capabilities into traditional software architectures for enhanced user experiences."
  },
  {
    title: "Full-Stack Development",
    description: "Building end-to-end software solutions from responsive frontends to scalable backend systems. Passionate about creating seamless user experiences backed by robust architecture."
  },
  {
    title: "Japanese Language & Culture",
    description: "Studying Japanese, from video games and anime enthusiasm to academic pursuit. Currently working toward N4 proficiency."
  },
  {
    title: "Game Industry Enthusiast",
    description: "Passionate about video games and the gaming industry. Enjoys exploring game design, development, and the cultural impact of games."
  },
  {
    title: "Educational Technology",
    description: "Building software tools that make learning more personalized and effective, particularly in language learning. Combining AI with educational principles to create adaptive learning experiences."
  }
];

export default function InterestsPassions({ 
  interests = defaultInterests 
}: InterestsPassionsProps) {
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
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        Interests & Passions
      </h3>
      <div className="space-y-3">
        {interests.map((interest, index) => (
          <div key={index}>
            <h4 className="font-semibold text-white">
              {interest.title}
            </h4>
            <p className="text-gray-300 text-sm">
              {interest.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}