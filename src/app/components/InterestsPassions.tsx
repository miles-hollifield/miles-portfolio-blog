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
    title: "Japanese Language & Culture",
    description: "Five years of studying Japanese, from anime enthusiasm to academic pursuit. Currently working toward N2 proficiency and planning to study abroad in Japan."
  },
  {
    title: "Game Development",
    description: "Creating indie games that blend storytelling with gameplay mechanics. Currently developing a guild management game with dating sim elements."
  },
  {
    title: "AI & Language Learning",
    description: "Exploring how AI can make language learning more personalized and effective. Building tools that adapt to individual learning styles and needs."
  },
  {
    title: "Writing & Documentation",
    description: "Passionate about clear technical writing and knowledge sharing. I believe good documentation is as important as good code."
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