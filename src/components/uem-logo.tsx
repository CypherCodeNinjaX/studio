import React from 'react';

export function UEMLogo(props: React.SVGProps<SVGSVGElement>) {
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" stroke="none" />
      <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="8" fill="var(--background)" className="font-headline font-bold">UEM</text>
    </svg>
  );
}
