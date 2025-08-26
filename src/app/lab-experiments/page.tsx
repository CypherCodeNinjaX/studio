import { SemanticSearch } from '@/components/semantic-search';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FlaskConical, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';

const experiments = [
    {
      title: "Newton's Ring",
      description: "Determine the radius of curvature of a Plano-convex lens by formation of Newton's ring.",
    },
    {
      title: 'Diffraction Grating',
      description: 'To determine the wavelengths of a given light source by diffraction grating method.',
    },
    {
      title: 'Franck-Hertz Experiment',
      description: 'Determination of the excitation potential of a given gas by Franck-Hertz experiment.',
    },
    {
      title: "Young's Modulus",
      description: "To determine the Young's Modulus of material of a bar by Flexure method.",
    },
    {
      title: 'Band-gap of a Semiconductor',
      description: 'Determination of the band-gap of a semiconductor by measuring the resistivity at different temperatures by four-probe method.',
    },
    {
      title: "Carey Foster's Bridge",
      description: "To determine the resistance per unit length of a given bridge wire and hence to determine the very low unknown resistance by using Carey Foster's bridge.",
    },
    {
      title: 'Modulus of Rigidity (Static)',
      description: 'To determine the Modulus of rigidity of a material of a rod by static method.',
    },
    {
      title: 'Modulus of Rigidity (Dynamic)',
      description: 'To determine the Modulus of rigidity of a material of a wire by dynamic method.',
    },
    {
      title: 'Solar Cell Characteristics',
      description: 'To study the different characteristics of a solar cell.',
    },
    {
      title: 'e/m by Thomson method',
      description: 'Determining electronic charge by its mass (e/m) by JJ Thomson method.',
    },
    {
      title: 'Particle Accelerator',
      description: 'Deflection of charged particle under electric field and magnetic field.',
    },
    {
      title: 'Piezoelectric Effect',
      description: 'Conversion of vibration to voltage using piezoelectric materials.',
    },
    {
      title: 'Thermoelectric Effect',
      description: 'Conversion of thermal energy into voltage using thermoelectric modules.',
    },
    {
      title: 'Cymatics',
      description: 'Cymatics visualization experiments with sand and water.',
    },
    {
      title: 'Numerical Aperture of Optical Fiber',
      description: 'To determine the numerical aperture of a given optical fiber.',
    },
    {
      title: 'Black Body Radiation',
      description: 'To study the black body radiation and to verify Stefan’s law.',
    },
    {
      title: 'Seebeck Effect',
      description: 'To study the Seebeck effect and to calibrate a thermocouple.',
    },
    {
      title: 'Compton Scattering',
      description: '',
    },
    {
      title: 'Optical Emission Spectra',
      description: 'Optical Emission Spectra of Hydrogenic Atoms.',
    },
    {
      title: "Schrodinger's Equation",
      description: 'Solve Schrodinger equation for a 1-dimensional infinite potential well and plot the wave function for ground state and first two excited states.',
    },
  ];

export default function LabExperimentsPage() {
  return (
    <div className="space-y-8">
      <SemanticSearch
        documentType="labExperiments"
        placeholder="e.g., Young's double slit, Hall effect..."
      />

      <div>
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
            <Card key={index} className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-secondary border-b flex items-center justify-center text-muted-foreground">
                <p className="text-sm">Image Coming Soon</p>
              </div>
              <CardHeader className="flex-grow">
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>{exp.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
