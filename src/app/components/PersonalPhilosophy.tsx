'use client';

import React from 'react';

interface PersonalPhilosophyProps {
  title?: string;
  paragraphs?: string[];
}

const defaultParagraphs = [
  "I believe that the best software is built with empathy — understanding not just what users need, but how they think and feel. This perspective has been shaped by my cross-cultural studies and experience building AI-powered solutions that adapt to human behavior.",
  "In my work, I strive to balance technical excellence with user-centered design. Whether I'm architecting scalable software systems or integrating AI capabilities, I focus on creating solutions that are both technically robust and genuinely useful for real people.",
  "Whether I'm debugging a complex distributed system, designing AI workflows, or helping a fellow student understand a concept, I approach each challenge with curiosity, patience, and a commitment to continuous learning. I believe the future lies in thoughtfully combining traditional software engineering with intelligent AI systems."
];

export default function PersonalPhilosophy({ 
  title = "My Approach",
  paragraphs = defaultParagraphs 
}: PersonalPhilosophyProps) {
  return (
    <div className="content-section">
      <h2>{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}