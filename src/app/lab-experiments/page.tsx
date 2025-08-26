import { SemanticSearch } from '@/components/semantic-search';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FlaskConical, PlayCircle } from 'lucide-react';
import Image from 'next/image';

const experiments = [
    {
      title: "Newton's Ring",
      description: "Determine the radius of curvature of a Plano-convex lens by formation of Newton's ring.",
      youtubeUrl: 'https://yt.openinapp.co/6ed7e',
    },
    {
      title: 'Diffraction Grating',
      description: 'To determine the wavelengths of a given light source by diffraction grating method.',
      youtubeUrl: 'https://www.youtube.com/watch?v=k-H7S_e-w3A',
    },
    {
      title: 'Franck-Hertz Experiment',
      description: 'Determination of the excitation potential of a given gas by Franck-Hertz experiment.',
      youtubeUrl: 'https://yt.openinapp.co/znkc2',
    },
    {
      title: "Young's Modulus",
      description: "To determine the Young's Modulus of material of a bar by Flexure method.",
      youtubeUrl: 'https://www.youtube.com/watch?v=FOfp29-JpY4',
    },
    {
      title: 'Band-gap of a Semiconductor',
      description: 'Determination of the band-gap of a semiconductor by measuring the resistivity at different temperatures by four-probe method.',
      youtubeUrl: 'https://yt.openinapp.co/mk7bx',
    },
    {
      title: "Carey Foster's Bridge",
      description: "To determine the resistance per unit length of a given bridge wire and hence to determine the very low unknown resistance by using Carey Foster's bridge.",
      youtubeUrl: 'https://yt.openinapp.co/51cp9',
    },
    {
      title: 'Modulus of Rigidity (Static)',
      description: 'To determine the Modulus of rigidity of a material of a rod by static method.',
      youtubeUrl: 'https://yt.openinapp.co/ax1vp',
    },
    {
      title: 'Modulus of Rigidity (Dynamic)',
      description: 'To determine the Modulus of rigidity of a material of a wire by dynamic method.',
      youtubeUrl: 'https://www.youtube.com/watch?v=gT8yB0-yH3I',
    },
    {
      title: 'Solar Cell Characteristics',
      description: 'To study the different characteristics of a solar cell.',
      youtubeUrl: 'https://www.youtube.com/watch?v=h27jok3wL2s',
    },
    {
      title: 'e/m by Thomson method',
      description: 'Determining electronic charge by its mass (e/m) by JJ Thomson method.',
      youtubeUrl: 'https://www.youtube.com/watch?v=O6b2w5nEJsA',
    },
    {
      title: 'Particle Accelerator',
      description: 'Deflection of charged particle under electric field and magnetic field.',
      youtubeUrl: 'https://www.youtube.com/watch?v=pYl1QG7Sg-Y',
    },
    {
      title: 'Piezoelectric Effect',
      description: 'Conversion of vibration to voltage using piezoelectric materials.',
      youtubeUrl: 'https://www.youtube.com/watch?v=acn461iG5gE',
    },
    {
      title: 'Thermoelectric Effect',
      description: 'Conversion of thermal energy into voltage using thermoelectric modules.',
      youtubeUrl: 'https://www.youtube.com/watch?v=hHjN3SpD2PA',
    },
    {
      title: 'Cymatics',
      description: 'Cymatics visualization experiments with sand and water.',
      youtubeUrl: 'https://www.youtube.com/watch?v=Q3oItpVa9fs',
    },
    {
      title: 'Numerical Aperture of Optical Fiber',
      description: 'To determine the numerical aperture of a given optical fiber.',
      youtubeUrl: 'https://www.youtube.com/watch?v=n-S5ZpG3hM4',
    },
    {
      title: 'Black Body Radiation',
      description: 'To study the black body radiation and to verify Stefan’s law.',
      youtubeUrl: 'https://www.youtube.com/watch?v=4y6-SA2I06k',
    },
    {
      title: 'Seebeck Effect',
      description: 'To study the Seebeck effect and to calibrate a thermocouple.',
      youtubeUrl: 'https://www.youtube.com/watch?v=B06L0BPEGi0',
    },
    {
      title: 'Compton Scattering',
      description: 'Demonstration of the Compton scattering of gamma rays.',
      youtubeUrl: 'https://www.youtube.com/watch?v=JtV5Gv7Sgws',
    },
    {
      title: 'Optical Emission Spectra',
      description: 'Optical Emission Spectra of Hydrogenic Atoms.',
      youtubeUrl: 'https://www.youtube.com/watch?v=d12iRj_I39I',
    },
    {
      title: "Schrodinger's Equation",
      description: 'Solve Schrodinger equation for a 1-dimensional infinite potential well and plot the wave function for ground state and first two excited states.',
      youtubeUrl: 'https://www.youtube.com/watch?v=U3F6n6h4A2E',
    },
    {
      title: 'Demonstration of Slide/Vernier Callipers',
      description: 'To understand the working principle and measurement technique of slide and vernier callipers.',
      youtubeUrl: 'https://www.youtube.com/watch?v=4b8x9vN9d-4',
    },
    {
      title: 'Demonstration of Screw Gauge',
      description: 'To understand the working principle and measurement technique of a screw gauge.',
      youtubeUrl: 'https://www.youtube.com/watch?v=6WDb-y0y3o4',
    },
  ];

export default function LabExperimentsPage() {
  return (
    <div className="space-y-8">
      <div className="animate-fade-in-up">
        <SemanticSearch
          documentType="labExperiments"
          placeholder="e.g., Young's double slit, Hall effect..."
        />
      </div>


      <div className="animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-headline text-2xl font-bold">Lab Experiments</h2>
          <Button asChild>
            <a href="https://vlab.amrita.edu/?sub=1" target="_blank" rel="noopener noreferrer">
              <FlaskConical className="mr-2 h-4 w-4" />
              Virtual Lab
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((exp, index) => (
            <a key={index} href={exp.youtubeUrl} target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg hover:border-primary transition-all">
                <div className="relative w-full h-48 bg-secondary border-b flex items-center justify-center text-muted-foreground">
                   <p className="text-sm">Image Coming Soon</p>
                   <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="w-16 h-16 text-white/80" />
                   </div>
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription>{exp.description}</CardDescription>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
