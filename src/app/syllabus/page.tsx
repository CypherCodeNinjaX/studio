import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Pencil, Trash2 } from 'lucide-react';
import { UploadSyllabus } from '@/components/upload-syllabus';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const syllabus: any[] = [
  { title: 'PHYSICS THEORY SYLLABUS', code: 'BSCPH101', format: 'PDF', fileUrl: 'https://drive.google.com/uc?export=download&id=1ThzzF_MSiaQxO6Aea4BA-2icn74TPyA3', type: 'theory' },
  { title: 'PHYSICS LAB SYLLABUS', code: 'BSCPH191', format: 'PDF', fileUrl: 'https://drive.google.com/uc?export=download&id=1qKtKvVNMnu0v1-NDF6nkg0ulKnw10Nbt', type: 'lab' },
];

export default function SyllabusPage() {
  const isFaculty = true; // Placeholder for future authentication

  const theoryDocs = syllabus.filter(doc => doc.type === 'theory');
  const labDocs = syllabus.filter(doc => doc.type === 'lab');

  const renderSyllabusList = (docs: any[], title: string) => (
    <div>
      <h2 className="font-headline text-2xl font-bold mb-4">{title}</h2>
      {docs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {docs.map((doc) => (
            <Card key={doc.code} className="hover:shadow-md transition-shadow relative group">
              {isFaculty && (
                <div className="absolute top-2 right-2 z-10 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="outline" size="icon" className="h-7 w-7 bg-background/80 backdrop-blur-sm">
                    <Pencil className="w-4 h-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button variant="destructive" size="icon" className="h-7 w-7">
                    <Trash2 className="w-4 h-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              )}
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <FileText className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground">{doc.code} - {doc.format} Document</p>
                  </div>
                </div>
                <Button asChild size="icon" variant="ghost" className="shrink-0">
                  <a href={doc.fileUrl} download target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5" />
                    <span className="sr-only">Download</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="text-center py-8">
          <CardContent>
            <p className="text-muted-foreground">
              No {title.toLowerCase()} documents have been uploaded yet.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center animate-fade-in-up">
        <div>
            <h1 className="font-headline text-3xl font-bold">Syllabus</h1>
            <p className="text-muted-foreground">View and download official course syllabus documents.</p>
        </div>
        {isFaculty && <UploadSyllabus />}
      </div>
      
      {syllabus.length > 0 ? (
        <>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
                {renderSyllabusList(theoryDocs, 'Theory Syllabus')}
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
                {renderSyllabusList(labDocs, 'Lab Syllabus')}
            </div>
        </>
      ) : (
        <Card className="text-center py-12 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <CardHeader>
              <CardTitle>No Syllabus Uploaded</CardTitle>
              <CardDescription>
                {isFaculty
                  ? 'Click "Upload Syllabus" to add the first document.'
                  : 'Syllabus documents will appear here once uploaded by faculty.'}
              </CardDescription>
            </CardHeader>
          </Card>
      )}
    </div>
  );
}
