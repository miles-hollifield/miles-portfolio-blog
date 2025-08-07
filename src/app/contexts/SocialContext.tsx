'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface SocialContextType {
  showSocialInNav: boolean;
  setSocialSectionVisible: (visible: boolean) => void;
}

const SocialContext = createContext<SocialContextType | undefined>(undefined);

export function SocialProvider({ children }: { children: ReactNode }) {
  const [socialSectionVisible, setSocialSectionVisible] = useState(true);

  // Show social icons in nav when main social section is NOT visible
  const showSocialInNav = !socialSectionVisible;

  return (
    <SocialContext.Provider value={{
      showSocialInNav,
      setSocialSectionVisible
    }}>
      {children}
    </SocialContext.Provider>
  );
}

export function useSocial() {
  const context = useContext(SocialContext);
  if (context === undefined) {
    throw new Error('useSocial must be used within a SocialProvider');
  }
  return context;
}
