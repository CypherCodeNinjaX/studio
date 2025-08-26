import { SemanticSearch } from '@/components/semantic-search';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NotebookText } from 'lucide-react';
import { UploadNote } from '@/components/upload-note';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const theoryNotes: any[] = [
  // { title: 'Introduction to Electrodynamics', author: 'Dr. Anirban Ghosh', topic: 'Electromagnetism' },
];

const labNotes: any[] = [
  // { title: 'Lab Manual - Newton\'s Ring', author: 'Mr. Sayan Paul', topic: 'Optics' },
];


export default function NotesPage() {
  return (
    <div className="space-y-8">
      <div className="animate-fade-in-up">
        <SemanticSearch 
          documentType="notes"
          placeholder="e.g., Maxwell's equations, Schrodinger's cat..."
        />
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
        <Tabs defaultValue="theory">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="theory">Theory Notes</TabsTrigger>
              <TabsTrigger value="lab">Laboratory Notes</TabsTrigger>
            </TabsList>
            <UploadNote />
          </div>
          <TabsContent value="theory">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Theory Notes</CardTitle>
                <CardDescription>Notes and materials for theoretical concepts.</CardDescription>
              </CardHeader>
              <CardContent>
                {theoryNotes.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {theoryNotes.map((note, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <CardTitle>{note.title}</CardTitle>
                            <NotebookText className="w-6 h-6 text-muted-foreground"/>
                          </div>
                          <CardDescription>By {note.author}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm font-semibold text-primary">{note.topic}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No theory notes have been uploaded yet.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="lab">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Laboratory Notes</CardTitle>
                <CardDescription>Manuals, procedures, and notes for lab experiments.</CardDescription>
              </CardHeader>
              <CardContent>
                {labNotes.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {labNotes.map((note, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <CardTitle>{note.title}</CardTitle>
                            <NotebookText className="w-6 h-6 text-muted-foreground"/>
                          </div>
                          <CardDescription>By {note.author}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm font-semibold text-primary">{note.topic}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No laboratory notes have been uploaded yet.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
