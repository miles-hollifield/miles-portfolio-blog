"use client";

import { useMemo, useState } from "react";

interface ShareButtonProps {
  slug: string; // blog slug
}

export default function ShareButton({ slug }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const url = useMemo(() => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/blog/${slug}`;
    }
    return `/blog/${slug}`;
  }, [slug]);

  const handleCopy = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
      }
    } catch {
      // fallback below
    }
    // Fallback: use a temporary textarea
    try {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
        aria-label="Copy link to clipboard"
        title="Copy link"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
        <span>Share</span>
      </button>
      {copied && (
        <div className="absolute top-full mt-2 text-xs text-green-400 whitespace-nowrap">Link copied</div>
      )}
    </div>
  );
}
