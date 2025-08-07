'use client';

import React from 'react';

interface FunFact {
  emoji: string;
  text: string;
}

interface FunFactsProps {
  facts?: FunFact[];
}

const defaultFacts: FunFact[] = [
  {
    emoji: "🎮",
    text: "I've been playing video games since I was 5 and they're what got me interested in programming"
  },
  {
    emoji: "📚", 
    text: "I can read Japanese manga and light novels, which has been great motivation for studying"
  },
  {
    emoji: "🌱",
    text: "I maintain a small garden and find that debugging code is surprisingly similar to diagnosing plant problems"
  },
  {
    emoji: "🎨",
    text: "I enjoy pixel art and have created all the artwork for my game development projects"
  },
  {
    emoji: "☕",
    text: "I'm a coffee enthusiast and have strong opinions about the proper way to make pour-over coffee"
  }
];

export default function FunFacts({ 
  facts = defaultFacts 
}: FunFactsProps) {
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        Fun Facts
      </h3>
      <ul className="space-y-2">
        {facts.map((fact, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-400 mr-2">{fact.emoji}</span>
            <span className="text-gray-300 text-sm">{fact.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}