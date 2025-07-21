'use client';

import React from 'react';

interface PersonalPhilosophyProps {
  title?: string;
  paragraphs?: string[];
}

const defaultParagraphs = [
  "I believe that the best software is built with empathy — understanding not just what users need, but how they think and feel. This perspective has been shaped by my cross-cultural studies and language learning experiences.",
  "In my work, I strive to balance technical excellence with user-centered design. I'm constantly learning new technologies and methodologies, but I never forget that behind every line of code is a human being trying to accomplish something meaningful.",
  "Whether I'm debugging a complex system, learning a new framework, or helping a fellow student understand a concept, I approach each challenge with curiosity, patience, and a commitment to continuous improvement."
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