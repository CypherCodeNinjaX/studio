"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { BookText, FlaskConical, Home, Info, Mail, Notebook, Users } from 'lucide-react';
import { Sidebar, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { IEMLogo } from '@/components/iem-logo';

const menuItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: Info },
  { href: '/faculties', label: 'Faculties', icon: Users },
  { href: '/syllabus', label: 'Syllabus', icon: BookText },
  { href: '/notes', label: 'Notes', icon: Notebook },
  { href: '/lab-experiments', label: 'Lab Experiments', icon: FlaskConical },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2">
          <IEMLogo className="h-8 w-8" />
          <h1 className="font-headline text-lg font-semibold text-sidebar-foreground">IEM PHYSICS APP</h1>
        </Link>
      </SidebarHeader>
      <SidebarMenu>
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.href}>
            <SidebarMenuButton
              asChild
              isActive={pathname === item.href}
              tooltip={item.label}
            >
              <Link href={item.href}>
                <item.icon />
                <span>{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </Sidebar>
  );
}
