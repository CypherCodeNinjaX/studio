"use client";

import { usePathname } from 'next/navigation';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { UEMLogo } from '@/components/uem-logo';

const pageTitles: { [key: string]: string } = {
  '/': 'Home',
  '/about': 'About Us',
  '/faculties': 'Our Faculties',
  '/syllabus': 'Syllabus',
  '/notes': 'Notes & Materials',
  '/assignments': 'Assignments',
  '/lab-experiments': 'Lab Experiments',
  '/contact': 'Contact Us',
  '/ai-agent': 'AI Agent',
  '/help': 'Help Center',
};

export function AppHeader() {
  const pathname = usePathname();
  const title = pageTitles[pathname] ?? 'IEM Physics App';

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <h1 className="font-headline text-xl font-bold">{title}</h1>
      </div>
      <UEMLogo className="h-10 w-10" width={40} height={40} />
    </header>
  );
}
