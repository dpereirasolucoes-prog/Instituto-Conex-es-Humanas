import React from 'react';

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTag({ children, className = '' }: SectionTagProps) {
  return (
    <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent ${className}`}>
      {children}
    </p>
  );
}
