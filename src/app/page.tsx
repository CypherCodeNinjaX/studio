import { IEMLogo } from '@/components/iem-logo';
import { UEMLogo } from '@/components/uem-logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="relative w-full h-[50vh] rounded-lg overflow-hidden shadow-lg animate-fade-in-up">
        <Image
          src="https://picsum.photos/1200/800"
          alt="Abstract physics background"
          data-ai-hint="abstract physics"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/20 flex flex-col items-center justify-center text-center p-4">
          <div className="flex items-center gap-4 mb-4">
            <IEMLogo className="w-16 h-16" width={64} height={64} />
            <UEMLogo className="w-16 h-16" width={64} height={64} />
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary-foreground drop-shadow-lg">
            Welcome to the IEM Physics App
          </h1>
        </div>
      </section>

      <section className="text-center space-y-2 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">INSTITUTE OF ENGINEERING AND MANAGEMENT, SALT LAKE SECTOR V</h2>
        <h3 className="text-xl md:text-2xl font-semibold text-primary">PHYSICS(BSCPH101)</h3>
        <h4 className="text-lg md:text-xl text-muted-foreground">Department of Basic Science and Humanities</h4>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
        <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
          <CardHeader>
            <CardTitle className="font-headline">Faculty Profiles</CardTitle>
            <CardDescription>Meet the brilliant minds shaping our department.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Explore qualifications, research interests, and contact information for our esteemed faculty members.</p>
            <Button asChild variant="link" className="px-0 mt-4">
              <Link href="/faculties">View Faculties <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
          <CardHeader>
            <CardTitle className="font-headline">Syllabus & Notes</CardTitle>
            <CardDescription>Stay ahead with course materials.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access detailed syllabus documents and notes uploaded by faculties to support your learning journey.</p>
            <div className="flex space-x-4">
              <Button asChild variant="link" className="px-0 mt-4">
                <Link href="/syllabus">View Syllabus <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="link" className="px-0 mt-4">
                <Link href="/notes">View Notes <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
          <CardHeader>
            <CardTitle className="font-headline">Lab Experiments</CardTitle>
            <CardDescription>Practical knowledge at your fingertips.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Review lab procedures, see experiment photos, and find links to virtual labs to enhance your practical skills.</p>
            <Button asChild variant="link" className="px-0 mt-4">
              <Link href="/lab-experiments">Explore Labs <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
