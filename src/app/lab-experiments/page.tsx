import { SemanticSearch } from '@/components/semantic-search';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';

const experiments = [
  {
    title: "Newton's Ring",
    image: 'https://picsum.photos/400/300',
    aiHint: 'newtons rings',
    description: "Determine the radius of curvature of a Plano-convex lens by formation of Newton's ring.",
    virtualLabUrl: 'https://1oau.vlabs.ac.in/laseroptics/Newtons%20Rings%20Wavelength%20of%20light/experiment.html',
  },
  {
    title: 'Diffraction Grating',
    image: 'https://picsum.photos/401/300',
    aiHint: 'diffraction grating',
    description: 'To determine the wavelengths of a given light source by diffraction grating method.',
    virtualLabUrl: 'https://ovau.vlabs.ac.in/optics/Diffraction%20Grating/',
  },
  {
    title: 'Franck-Hertz Experiment',
    image: 'https://picsum.photos/400/301',
    aiHint: 'atomic excitation',
    description: 'Determination of the excitation potential of a given gas by Franck-Hertz experiment.',
    virtualLabUrl: 'https://www.laboratoriovirtual.fisica.ufc.br/experimento-de-frank-hertz?lang=en',
  },
  {
    title: "Young's Modulus",
    image: 'https://picsum.photos/400/302',
    aiHint: 'material science',
    description: "To determine the Young's Modulus of material of a bar by Flexure method.",
    virtualLabUrl: 'https://amv-au.vlabs.ac.in/advanced-mechanics/Youngs_Modulus_Uniform_Bending/',
  },
  {
    title: 'Band-gap of a Semiconductor',
    image: 'https://picsum.photos/402/300',
    aiHint: 'semiconductor physics',
    description: 'Determination of the band-gap of a semiconductor by measuring the resistivity at different temperatures by four-probe method.',
    virtualLabUrl: 'https://bopiitk.vlabs.ac.in/exp/energy-bandgap/index.html',
  },
  {
    title: "Carey Foster's Bridge",
    image: 'https://picsum.photos/400/303',
    aiHint: 'wheatstone bridge',
    description: "To determine the resistance per unit length of a given bridge wire and hence to determine the very low unknown resistance by using Carey Foster's bridge.",
    virtualLabUrl: 'https://bopiitk.vlabs.ac.in/exp/carey-fosterbridge/index.html',
  },
  {
    title: 'Modulus of Rigidity (Static)',
    image: 'https://picsum.photos/403/300',
    aiHint: 'material testing',
    description: 'To determine the Modulus of rigidity of a material of a rod by static method.',
    virtualLabUrl: 'https://amv-au.vlabs.ac.in/advanced-mechanics/Rigidity_Modulus/experiment.html',
  },
  {
    title: 'Modulus of Rigidity (Dynamic)',
    image: 'https://picsum.photos/400/304',
    aiHint: 'torsion pendulum',
    description: 'To determine the Modulus of rigidity of a material of a wire by dynamic method.',
    virtualLabUrl: 'https://amv-au.vlabs.ac.in/advanced-mechanics/Rigidity_Modulus_Torsion_Pendulum/',
  },
  {
    title: 'Solar Cell Characteristics',
    image: 'https://picsum.photos/404/300',
    aiHint: 'solar panel',
    description: 'To study the different characteristics of a solar cell.',
    virtualLabUrl: 'https://vlab.amrita.edu/?sub=1&brch=195&sim=360&cnt=1',
  },
  {
    title: 'Numerical Aperture of Optical Fiber',
    image: 'https://picsum.photos/400/305',
    aiHint: 'fiber optics',
    description: 'To determine the numerical aperture of a given optical fiber.',
    virtualLabUrl: 'https://vlab.amrita.edu/?sub=1&brch=189&sim=343&cnt=4',
  },
  {
    title: 'Black Body Radiation',
    image: 'https://picsum.photos/405/300',
    aiHint: 'thermal radiation',
    description: 'To study the black body radiation and to verify Stefan’s law.',
    virtualLabUrl: 'https://htv-au.vlabs.ac.in/heat-thermodynamics/Black_Body_Radiation/experiment.html',
  },
  {
    title: 'Seebeck Effect',
    image: 'https://picsum.photos/400/306',
    aiHint: 'thermoelectricity',
    description: 'To study the Seebeck effect and to calibrate a thermocouple.',
    virtualLabUrl: 'https://htv-au.vlabs.ac.in/heat-thermodynamics/Thermo_Couple_Seebeck_Effect/experiment.html',
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
        <h2 className="font-headline text-2xl font-bold mb-4">Lab Experiments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((exp, index) => (
            <Card key={index} className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
              <Image
                src={exp.image}
                alt={exp.title}
                data-ai-hint={exp.aiHint}
                width={400}
                height={225}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="flex-grow">
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>{exp.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild disabled={!exp.virtualLabUrl || exp.virtualLabUrl === '#'}>
                  <a href={exp.virtualLabUrl} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Virtual Lab Link
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
