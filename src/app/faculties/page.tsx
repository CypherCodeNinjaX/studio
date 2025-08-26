import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const faculties = [
  {
    name: 'Prof. Dr. Saswati Barman',
    designation: 'Research Professor',
    qualification: 'Ph.D',
    experience: '28 years',
    researchArea: ['Condensed Matter Physics', 'Micromagnetic simulation', 'Magnetism', 'Semiconductors'],
    email: 'saswati.barman@iem.edu.in',
  },
  {
    name: 'Prof. Dr. Subarna Datta',
    designation: 'Associate Professor',
    qualification: 'Ph.D',
    experience: '2 year',
    researchArea: ['Experimental and theoretical condensed matter physics and material science.'],
    email: 'subarna.datta@iem.edu.in',
  },
  {
    name: 'Prof. Dr. Soumyadipta Pal',
    designation: 'Associate Professor',
    qualification: 'Ph.D',
    experience: '9 years',
    researchArea: ['Condensed Matter Physics and Material Science'],
    email: 'soumyadipta.pal@iem.edu.in',
  },
  {
    name: 'Prof. Dr. Arnab Basu',
    designation: 'Associate Professor',
    qualification: 'Ph.D',
    experience: '8 years',
    researchArea: ['Theoretical Condensed Matter Physics'],
    email: 'arnab.basu@iem.edu.in',
  },
  {
    name: 'Prof. Dr. Ranabir Banik',
    designation: 'Associate Professor',
    qualification: 'Ph.D',
    experience: '5 years',
    researchArea: ['Nuclear Structure Physics', 'Gamma Ray Spectroscopy', 'Semiconductor detectors'],
    email: 'ranabir.banik@iem.edu.in',
  },
  {
    name: 'Prof. Dr. Saikat Chakraborty',
    designation: 'Associate Professor',
    qualification: 'Ph.D',
    experience: '7 year',
    researchArea: ['Nuclear Physics'],
    email: 'saikat@iem.edu.in',
  },
  {
    name: 'Mr. Sayan Paul',
    designation: 'Technical Assistant',
    qualification: 'M.Sc, Ph.D (Perusing)',
    experience: '3 years',
    researchArea: ['Condensed Matter Physics', 'X-Ray and Crystallography'],
    email: 'sayan.paul@iem.edu.in',
  },
  {
    name: 'Mr. Amit Nandi',
    designation: 'Senior Technical Assistant',
    qualification: 'M.Sc.',
    experience: '11 years',
    researchArea: ['--'],
    email: 'amit.nandi@iem.edu.in',
  },
  {
    name: 'Prof. Kaustav Pal',
    designation: 'Professor',
    qualification: '',
    experience: '--',
    researchArea: ['--'],
    email: '',
  },
  {
    name: 'Prof. Koyel Ganguly (KG)',
    designation: 'Professor',
    qualification: '',
    experience: '--',
    researchArea: ['--'],
    email: '',
  },
  {
    name: 'Prof. Sangeeta Das (SND)',
    designation: 'Professor',
    qualification: '',
    experience: '--',
    researchArea: ['--'],
    email: '',
  },
];

export default function FacultiesPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {faculties.map((faculty, index) => (
        <Card key={index} className="flex flex-col items-center pt-6 hover:shadow-lg transition-shadow">
          <Avatar className="w-24 h-24 mb-4">
            <AvatarImage src={`https://picsum.photos/seed/${faculty.name.replace(/\s/g, '')}/100`} alt={faculty.name} data-ai-hint="person portrait" />
            <AvatarFallback>
              <User className="w-12 h-12 text-muted-foreground" />
            </AvatarFallback>
          </Avatar>
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-xl">{faculty.name}</CardTitle>
            <CardDescription>{faculty.designation}{faculty.qualification ? ` - ${faculty.qualification}` : ''}</CardDescription>
          </CardHeader>
          <CardContent className="w-full flex-grow space-y-4 px-6">
            {faculty.experience && (
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Experience</p>
                <p>{faculty.experience}</p>
              </div>
            )}
            {faculty.researchArea && faculty.researchArea.length > 0 && faculty.researchArea[0] !== '--' && (
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Research Area</p>
                <div className="flex flex-wrap gap-2">
                  {faculty.researchArea.map((area) => (
                      <Badge key={area} variant="secondary">{area}</Badge>
                  ))}
                </div>
              </div>
            )}
             {faculty.researchArea && faculty.researchArea.length > 0 && faculty.researchArea[0] === '--' && (
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Research Area</p>
                <p>--</p>
              </div>
            )}
          </CardContent>
          {faculty.email && (
            <div className="p-6 pt-0">
               <a href={`mailto:${faculty.email}`} className="text-sm flex items-center gap-2 text-primary hover:underline">
                <Mail className="w-4 h-4" />
                {faculty.email}
              </a>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
