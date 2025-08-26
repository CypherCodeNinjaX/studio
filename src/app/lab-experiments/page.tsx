import { SemanticSearch } from '@/components/semantic-search';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';

const experiments = [
  {
    title: "Verification of Ohm's Law",
    image: 'https://picsum.photos/400/300',
    aiHint: 'circuit board',
    description: 'Determine the resistance of a given wire using a simple circuit.',
    virtualLabUrl: '#',
  },
  {
    title: 'Study of a Simple Pendulum',
    image: 'https://picsum.photos/401/300',
    aiHint: 'pendulum physics',
    description: 'Determine the acceleration due to gravity (g) by measuring the time period of a simple pendulum.',
    virtualLabUrl: '#',
  },
  {
    title: 'Diffraction Grating Spectrometer',
    image: 'https://picsum.photos/400/301',
    aiHint: 'laser prism',
    description: 'Measure the wavelength of different spectral lines of a mercury light source.',
    virtualLabUrl: '#',
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
                <Button asChild>
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
