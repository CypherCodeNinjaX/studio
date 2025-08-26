import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">About the Department</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-base">
          <p>
            Welcome to the Department of Physics at the Institute of Engineering & Management (IEM). Our department is dedicated to fostering a deep understanding of the fundamental principles of physics and their application in the world of engineering and technology.
          </p>
          <p>
            Established with the vision of providing top-tier physics education, we aim to equip students with strong analytical, problem-solving, and experimental skills. Our curriculum is designed to be comprehensive, covering classical mechanics, electromagnetism, quantum mechanics, thermodynamics, and modern physics.
          </p>
        </CardContent>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our mission is to inspire a passion for physics, encourage critical thinking, and prepare students for successful careers in science, engineering, and research. We strive to create an environment of academic excellence and intellectual curiosity.
            </p>
          </CardContent>
        </Card>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image src="https://storage.googleapis.com/aifire-us-app-sandbox-dev-02-a/user-assets/e60742d4-dd68-4171-8409-90696f5b7454_optim_4096.jpg" alt="IEM college campus" data-ai-hint="college campus" width={600} height={400} className="w-full h-auto object-cover" />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-lg overflow-hidden shadow-lg order-last md:order-first">
          <Image src="https://storage.googleapis.com/aifire-us-app-sandbox-dev-02-a/user-assets/e2b26c71-26c7-4603-96e0-94d7b7c53e8d_optim_4096.jpg" alt="IEM basketball court" data-ai-hint="basketball court" width={600} height={400} className="w-full h-auto object-cover" />
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We envision being a center of excellence in physics education and research, recognized for our innovative teaching methods, cutting-edge research, and significant contributions to the scientific community.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
