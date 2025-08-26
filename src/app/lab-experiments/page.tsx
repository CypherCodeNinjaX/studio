import { SemanticSearch } from '@/components/semantic-search';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';

const experiments = [
    {
      title: "Newton's Ring",
      description: "Determine the radius of curvature of a Plano-convex lens by formation of Newton's ring.",
      image: 'https://picsum.photos/400/300',
      aiHint: 'newtons rings',
      virtualLabUrl: 'https://1oau.vlabs.ac.in/laseroptics/Newtons%20Rings%20Wavelength%20of%20light/experiment.html',
    },
    {
      title: 'Diffraction Grating',
      description: 'To determine the wavelengths of a given light source by diffraction grating method.',
      image: 'https://picsum.photos/401/300',
      aiHint: 'diffraction grating',
      virtualLabUrl: 'https://ovau.vlabs.ac.in/optics/Diffraction%20Grating/',
    },
    {
      title: 'Franck-Hertz Experiment',
      description: 'Determination of the excitation potential of a given gas by Franck-Hertz experiment.',
      image: 'https://picsum.photos/400/301',
      aiHint: 'atomic excitation',
      virtualLabUrl: 'https://www.laboratoriovirtual.fisica.ufc.br/experimento-de-frank-hertz?lang=en',
    },
    {
      title: "Young's Modulus",
      description: "To determine the Young's Modulus of material of a bar by Flexure method.",
      image: 'https://picsum.photos/400/302',
      aiHint: 'material science',
      virtualLabUrl: 'https://amv-au.vlabs.ac.in/advanced-mechanics/Youngs_Modulus_Uniform_Bending/',
    },
    {
      title: 'Band-gap of a Semiconductor',
      description: 'Determination of the band-gap of a semiconductor by measuring the resistivity at different temperatures by four-probe method.',
      image: 'https://picsum.photos/402/300',
      aiHint: 'semiconductor physics',
      virtualLabUrl: 'https://bopiitk.vlabs.ac.in/exp/energy-bandgap/index.html',
    },
    {
      title: "Carey Foster's Bridge",
      description: "To determine the resistance per unit length of a given bridge wire and hence to determine the very low unknown resistance by using Carey Foster's bridge.",
      image: 'https://picsum.photos/400/303',
      aiHint: 'wheatstone bridge',
      virtualLabUrl: 'https://bopiitk.vlabs.ac.in/exp/carey-fosterbridge/index.html',
    },
    {
      title: 'Modulus of Rigidity (Static)',
      description: 'To determine the Modulus of rigidity of a material of a rod by static method.',
      image: 'https://picsum.photos/403/300',
      aiHint: 'material testing',
      virtualLabUrl: 'https://amv-au.vlabs.ac.in/advanced-mechanics/Rigidity_Modulus/experiment.html',
    },
    {
      title: 'Modulus of Rigidity (Dynamic)',
      description: 'To determine the Modulus of rigidity of a material of a wire by dynamic method.',
      image: 'https://picsum.photos/400/304',
      aiHint: 'torsion pendulum',
      virtualLabUrl: 'https://amv-au.vlabs.ac.in/advanced-mechanics/Rigidity_Modulus_Torsion_Pendulum/',
    },
    {
      title: 'Solar Cell Characteristics',
      description: 'To study the different characteristics of a solar cell.',
      image: 'https://picsum.photos/404/300',
      aiHint: 'solar panel',
      virtualLabUrl: 'https://vlab.amrita.edu/?sub=1&brch=195&sim=360&cnt=1',
    },
    {
      title: 'e/m by Thomson method',
      description: 'Determining electronic charge by its mass (e/m) by JJ Thomson method.',
      image: 'https://picsum.photos/400/305',
      aiHint: 'electron charge',
      virtualLabUrl: 'https://in.mathworks.com/matlabcentral/fileexchange/94540-virtual-measurement-of-e-m-lab?s_tid=srchtitle_site_search_4_Physics%20lab',
    },
    {
      title: 'Particle Accelerator',
      description: 'Deflection of charged particle under electric field and magnetic field.',
      image: 'https://picsum.photos/401/301',
      aiHint: 'particle accelerator',
      virtualLabUrl: '',
    },
    {
      title: 'Piezoelectric Effect',
      description: 'Conversion of vibration to voltage using piezoelectric materials.',
      image: 'https://picsum.photos/402/302',
      aiHint: 'piezoelectricity',
      virtualLabUrl: '',
    },
    {
      title: 'Thermoelectric Effect',
      description: 'Conversion of thermal energy into voltage using thermoelectric modules.',
      image: 'https://picsum.photos/403/303',
      aiHint: 'thermoelectricity',
      virtualLabUrl: '',
    },
    {
      title: 'Cymatics',
      description: 'Cymatics visualization experiments with sand and water.',
      image: 'https://picsum.photos/404/304',
      aiHint: 'wave patterns',
      virtualLabUrl: '',
    },
    {
      title: 'Numerical Aperture of Optical Fiber',
      description: 'To determine the numerical aperture of a given optical fiber.',
      image: 'https://picsum.photos/400/305',
      aiHint: 'fiber optics',
      virtualLabUrl: 'https://vlab.amrita.edu/?sub=1&brch=189&sim=343&cnt=4',
    },
    {
      title: 'Black Body Radiation',
      description: 'To study the black body radiation and to verify Stefan’s law.',
      image: 'https://picsum.photos/405/300',
      aiHint: 'thermal radiation',
      virtualLabUrl: 'https://htv-au.vlabs.ac.in/heat-thermodynamics/Black_Body_Radiation/experiment.html',
    },
    {
      title: 'Seebeck Effect',
      description: 'To study the Seebeck effect and to calibrate a thermocouple.',
      image: 'https://picsum.photos/400/306',
      aiHint: 'thermoelectricity',
      virtualLabUrl: 'https://htv-au.vlabs.ac.in/heat-thermodynamics/Thermo_Couple_Seebeck_Effect/experiment.html',
    },
    {
      title: 'Compton Scattering',
      description: '',
      image: 'https://picsum.photos/401/302',
      aiHint: 'quantum physics',
      virtualLabUrl: 'https://www.geogebra.org/m/dgx8uSXI',
    },
    {
      title: 'Optical Emission Spectra',
      description: 'Optical Emission Spectra of Hydrogenic Atoms.',
      image: 'https://picsum.photos/402/303',
      aiHint: 'atomic spectra',
      virtualLabUrl: 'https://javalab.org/en/spectrum_of_hydrogen_en/',
    },
    {
      title: "Schrodinger's Equation",
      description: 'Solve Schrodinger equation for a 1-dimensional infinite potential well and plot the wave function for ground state and first two excited states.',
      image: 'https://picsum.photos/403/304',
      aiHint: 'quantum mechanics',
      virtualLabUrl: 'https://in.mathworks.com/matlabcentral/fileexchange/75495-schrodinger-s-equation-in-the-1-dimensional-potential-well?s_tid=srchtitle_site_search_1_schrodinger%20equation',
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
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
