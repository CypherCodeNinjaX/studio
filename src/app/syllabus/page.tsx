import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

const syllabus = {
  theory: [
    { title: 'Physics I (PH101)', code: 'PH101', format: 'PDF', fileUrl: 'https://drive.google.com/uc?export=download&id=1ThzzF_MSiaQxO6Aea4BA-2icn74TPyA3' },
  ],
  lab: [
    { title: 'Physics I Lab (PH191)', code: 'PH191', format: 'PDF', fileUrl: 'https://drive.google.com/uc?export=download&id=1qKtKvVNMnu0v1-NDF6nkg0ulKnw10Nbt' },
  ],
};

export default function SyllabusPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-headline text-2xl font-bold mb-4">Theory Syllabus</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {syllabus.theory.map((doc) => (
            <Card key={doc.code} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <FileText className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground">{doc.code} - {doc.format} Document</p>
                  </div>
                </div>
                <Button asChild size="icon" variant="ghost">
                  <a href={doc.fileUrl} download target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5" />
                    <span className="sr-only">Download</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-headline text-2xl font-bold mb-4">Lab Syllabus</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {syllabus.lab.map((doc) => (
            <Card key={doc.code} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <FileText className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground">{doc.code} - {doc.format} Document</p>
                  </div>
                </div>
                <Button asChild size="icon" variant="ghost">
                  <a href={doc.fileUrl} download target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5" />
                    <span className="sr-only">Download</span>
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
