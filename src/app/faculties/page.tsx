import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, User, MoreVertical, Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

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
        <Card
          key={index}
          className="flex flex-col hover:shadow-lg transition-shadow animate-fade-in-up relative group"
          style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Pencil className="mr-2 h-4 w-4" />
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <CardHeader className="text-center flex-grow items-center pt-6">
            <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center mb-4">
              <User className="w-16 h-16 text-muted-foreground" />
            </div>
            <CardTitle className="font-headline text-xl">{faculty.name}</CardTitle>
            <CardDescription>{faculty.designation}{faculty.qualification ? ` - ${faculty.qualification}` : ''}</CardDescription>
          </CardHeader>
          <CardContent className="w-full space-y-4 px-6">
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
