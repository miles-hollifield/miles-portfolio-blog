'use client';

import React from 'react';
import Link from 'next/link';

interface CTAButton {
  text: string;
  href: string;
  type: 'primary' | 'secondary';
  icon?: React.ReactNode;
}

interface CTASectionProps {
  title?: string;
  description?: string;
  buttons?: CTAButton[];
}

const defaultButtons: CTAButton[] = [
  {
    text: "Read My Blog",
    href: "/blog",
    type: "secondary",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    text: "View My Projects",
    href: "/projects", 
    type: "secondary",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    text: "Get In Touch",
    href: "/contact",
    type: "secondary", 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function CTASection({ 
  title = "Let's Connect!",
  description = "I'm always excited to meet new people, discuss interesting projects, or just chat about technology, languages, or game development.",
  buttons = defaultButtons 
}: CTASectionProps) {
  return (
    <div className="cta-section">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="cta-buttons">
        {buttons.map((button, index) => (
          <Link key={index} href={button.href} className={`cta-button ${button.type}`}>
            {button.icon}
            {button.text}
          </Link>
        ))}
      </div>
    </div>
  );
}