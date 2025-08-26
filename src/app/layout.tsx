import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { AppHeader } from '@/components/layout/app-header';
import { KonamiEasterEgg } from '@/components/konami-easter-egg';

export const metadata: Metadata = {
  title: 'IEM Physics App',
  description: 'A comprehensive app for Physics at IEM.',
};

const developerGreeting = `
██╗███████╗███╗   ███╗     ██████╗ ██╗  ██╗██╗   ██╗██╗███████╗
██║██╔════╝████╗ ████║    ██╔═══██╗╚██╗██╔╝██║   ██║██║██╔════╝
██║█████╗  ██╔████╔██║    ██║   ██║ ╚███╔╝ ██║   ██║██║█████╗
██║██╔══╝  ██║╚██╔╝██║    ██║   ██║ ██╔██╗ ██║   ██║██║██╔══╝
██║███████╗██║ ╚═╝ ██║    ╚██████╔╝██╔╝ ██╗╚██████╔╝██║███████╗
╚═╝╚══════╝╚═╝     ╚═╝     ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝╚══════╝

Welcome, fellow developer! Thanks for checking out the code.
Let's build something amazing together.
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (typeof window !== 'undefined') {
    console.log(developerGreeting);
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <AppHeader />
              <main className="flex-1 p-4 sm:p-6 lg:p-8">
                {children}
              </main>
            </SidebarInset>
        </SidebarProvider>
        <Toaster />
        <KonamiEasterEgg />
      </body>
    </html>
  );
}
