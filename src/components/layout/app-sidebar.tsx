"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { BookText, FlaskConical, Home, Info, Mail, Notebook, Users, Globe, ClipboardList, Bot, HelpCircle, Youtube } from 'lucide-react';
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarSeparator } from '@/components/ui/sidebar';
import { IEMLogo } from '@/components/iem-logo';

const mainMenuItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: Info },
  { href: '/faculties', label: 'Faculties', icon: Users },
  { href: '/syllabus', label: 'Syllabus', icon: BookText },
  { href: '/notes', label: 'Notes', icon: Notebook },
  { href: '/assignments', label: 'Assignments', icon: ClipboardList },
  { href: '/lab-experiments', label: 'Lab Experiments', icon: FlaskConical },
  { href: '/youtube-channel', label: 'YouTube', icon: Youtube },
];

const secondaryMenuItems = [
  { href: '/ai-agent', label: 'AI Agent', icon: Bot },
  { href: '/help', label: 'Help', icon: HelpCircle },
  { href: '/contact', label: 'Contact', icon: Mail },
  { href: 'https://iem.edu.in/', label: 'Official Website', icon: Globe },
]

export function AppSidebar() {
  const pathname = usePathname();

  const renderMenuItems = (items: typeof mainMenuItems) => {
    return items.map((item) => {
      const isExternal = item.href.startsWith('http');
      const content = (
        <>
          <item.icon />
          <span>{item.label}</span>
        </>
      );

      return (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton
            asChild
            isActive={!isExternal && pathname === item.href}
            tooltip={item.label}
          >
            {isExternal ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <Link href={item.href}>
                {content}
              </Link>
            )}
          </SidebarMenuButton>
        </SidebarMenuItem>
      );
    });
  }

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2">
          <IEMLogo className="h-8 w-8" width={32} height={32} />
          <h1 className="font-headline text-lg font-semibold text-sidebar-foreground">IEM PHYSICS APP</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {renderMenuItems(mainMenuItems)}
        </SidebarMenu>
        <SidebarSeparator />
        <SidebarMenu>
          {renderMenuItems(secondaryMenuItems)}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
