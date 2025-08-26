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
    name: 'Prof. Ritu Bose',
    designation: 'Associate Professor',
    qualification: 'M.Sc. in Solid State Physics',
    experience: '14 Years',
    researchArea: ['Semiconductor Devices'],
    email: 'ritu.bose@iem.edu.in',
  },
  {
    name: 'Dr. Sandeep Reddy',
    designation: 'Assistant Professor',
    qualification: 'Ph.D. in Acoustics',
    experience: '6 Years',
    researchArea: ['Ultrasonics', 'Noise Control'],
    email: 'sandeep.reddy@iem.edu.in',
  },
  {
    name: 'Dr. Neha Kapoor',
    designation: 'Professor',
    qualification: 'Ph.D. in Medical Physics',
    experience: '10 Years',
    researchArea: ['Radiation Therapy', 'Medical Imaging'],
    email: 'neha.kapoor@iem.edu.in',
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
