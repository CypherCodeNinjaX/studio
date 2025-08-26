import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail } from 'lucide-react';

const faculties = [
  {
    name: 'Prof. Dr. Saswati Barman',
    qualification: 'Ph.D. in Condensed Matter Physics',
    experience: '15+ Years',
    researchArea: 'Nanomaterials, Spintronics',
    email: 'anirban.ghosh@iem.edu.in',
  },
  {
    name: 'Prof. Subrata Das',
    qualification: 'M.Sc. in Theoretical Physics',
    experience: '12 Years',
    researchArea: 'Quantum Field Theory, Cosmology',
    email: 'subrata.das@iem.edu.in',
  },
  {
    name: 'Dr. Priya Sharma',
    qualification: 'Ph.D. in Optics & Photonics',
    experience: '10 Years',
    researchArea: 'Fiber Optics, Laser Physics',
    email: 'priya.sharma@iem.edu.in',
  },
  {
    name: 'Dr. Rajesh Kumar',
    qualification: 'Ph.D. in High Energy Physics',
    experience: '8 Years',
    researchArea: 'Particle Physics, String Theory',
    email: 'rajesh.kumar@iem.edu.in',
  },
  {
    name: 'Dr. Meena Iyer',
    qualification: 'Ph.D. in Astrophysics',
    experience: '11 Years',
    researchArea: 'Stellar Evolution, Black Holes',
    email: 'meena.iyer@iem.edu.in',
  },
  {
    name: 'Prof. Alok Nath',
    qualification: 'M.Tech in Nuclear Engineering',
    experience: '18 Years',
    researchArea: 'Nuclear Reactor Physics',
    email: 'alok.nath@iem.edu.in',
  },
  {
    name: 'Dr. Sneha Verma',
    qualification: 'Ph.D. in Biophysics',
    experience: '7 Years',
    researchArea: 'Molecular Dynamics, Protein Folding',
    email: 'sneha.verma@iem.edu.in',
  },
  {
    name: 'Dr. Vijay Singh',
    qualification: 'Ph.D. in Plasma Physics',
    experience: '9 Years',
    researchArea: 'Fusion Energy, Plasma Diagnostics',
    email: 'vijay.singh@iem.edu.in',
  },
  {
    name: 'Prof. Ritu Bose',
    qualification: 'M.Sc. in Solid State Physics',
    experience: '14 Years',
    researchArea: 'Semiconductor Devices',
    email: 'ritu.bose@iem.edu.in',
  },
  {
    name: 'Dr. Sandeep Reddy',
    qualification: 'Ph.D. in Acoustics',
    experience: '6 Years',
    researchArea: 'Ultrasonics, Noise Control',
    email: 'sandeep.reddy@iem.edu.in',
  },
  {
    name: 'Dr. Neha Kapoor',
    qualification: 'Ph.D. in Medical Physics',
    experience: '10 Years',
    researchArea: 'Radiation Therapy, Medical Imaging',
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
            <CardDescription>{faculty.qualification}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground">Experience</p>
              <p>{faculty.experience}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground">Research Area</p>
              <Badge variant="secondary">{faculty.researchArea}</Badge>
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
