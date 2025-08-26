import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="animate-fade-in-up">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-muted-foreground">
                Institute of Engineering & Management<br/>
                Management House, D-1, Sector-V, Saltlake Electronics Complex<br/>
                Kolkata - 700091, West Bengal, India
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-muted-foreground">
                +91 33 2357 2059 / 2969
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-muted-foreground">
                <a href="mailto:bsh@iem.edu.in" className="hover:underline text-primary">bsh@iem.edu.in</a>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="h-full min-h-[400px] animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
         <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.237229560136!2d88.42858541543789!3d22.57037093863795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275f3a9a135a5%3A0x6645380556f8749a!2sInstitute%20of%20Engineering%20%26%20Management%20(IEM)!5e0!3m2!1sen!2sin!4v1678886456789"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-b-lg md:rounded-lg"
          title="IEM Location"
        ></iframe>
      </Card>
    </div>
  );
}
