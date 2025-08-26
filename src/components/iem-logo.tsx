import React from 'react';

export function IEMLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" stroke="none" />
      <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="8" fill="var(--sidebar-background)" className="font-headline font-bold">IEM</text>
    </svg>
  );
}
