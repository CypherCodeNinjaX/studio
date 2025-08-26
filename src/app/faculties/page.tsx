import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail } from 'lucide-react';

const faculties = [
  {
    name: 'Prof. Dr. Saswati Barman',
    designation: 'Research Professor',
    qualification: 'Ph.D',
    experience: '28 years',
    researchArea: ['Condensed Matter Physics', 'Micromagnetic simulation', 'Magnetism', 'Semiconductors'],
    email: 'saswati.barman@iem.edu.in',
  },
];

export default function FacultiesPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {faculties.map((faculty, index) => (
        <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="font-headline text-xl">{faculty.name}</CardTitle>
            <CardDescription>{faculty.designation} - {faculty.qualification}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground">Experience</p>
              <p>{faculty.experience}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground">Research Area</p>
              <div className="flex flex-wrap gap-2">
                {faculty.researchArea.map((area) => (
                    <Badge key={area} variant="secondary">{area}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
          <div className="p-6 pt-0">
             <a href={`mailto:${faculty.email}`} className="text-sm flex items-center gap-2 text-primary hover:underline">
              <Mail className="w-4 h-4" />
              {faculty.email}
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
}
