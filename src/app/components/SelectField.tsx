"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  error?: string;
}

export default function SelectField({ id, name, value, onChange, options, placeholder = "Select an option", error }: SelectFieldProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(() => Math.max(0, options.findIndex(o => o.value === value)));
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex(prev => Math.min(options.length - 1, prev + 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex(prev => Math.max(0, prev - 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const opt = options[activeIndex];
        if (opt) {
          onChange(opt.value);
          setOpen(false);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, activeIndex, options, onChange]);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.querySelector<HTMLElement>(`[data-index='${activeIndex}']`);
    el?.scrollIntoView({ block: "nearest" });
  }, [open, activeIndex]);

  const selected = useMemo(() => options.find(o => o.value === value) || null, [options, value]);
  const listboxId = `${id}-listbox`;

  return (
    <div className="relative" ref={containerRef}>
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-left flex items-center justify-between focus:ring-2 transition-all text-white text-base ${
          error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-600 focus:border-blue-500 focus:ring-blue-500'
        }`}
        onClick={() => setOpen(o => !o)}
      >
        <span className={selected ? "text-white" : "text-gray-400"}>
          {selected ? selected.label : placeholder}
        </span>
        <svg className={`w-5 h-5 ml-3 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-labelledby={id}
          ref={listRef}
          className="absolute z-30 mt-2 max-h-60 w-full overflow-auto rounded-lg border border-gray-700 bg-gray-800/95 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-gray-800/75"
        >
          {options.map((opt, idx) => {
            const selected = opt.value === value;
            const active = idx === activeIndex;
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={selected}
                data-index={idx}
                className={`px-4 py-2 cursor-pointer text-sm sm:text-base ${
                  selected ? 'bg-blue-500/20 text-blue-200' : active ? 'bg-gray-700/60 text-white' : 'text-gray-200'
                } hover:bg-gray-700/60`}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseDown={(e) => {
                  // Prevent button blur before click handler
                  e.preventDefault();
                }}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
      {/* Hidden input ensures name/value pairs exist for potential non-JS reads (optional) */}
      <input type="hidden" name={name} value={value} readOnly />
    </div>
  );
}
