import { SemanticSearch } from '@/components/semantic-search';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NotebookText } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


const theoryNotes: any[] = [
  // { title: 'Introduction to Electrodynamics', author: 'Dr. Anirban Ghosh', topic: 'Electromagnetism' },
];

const labNotes: any[] = [
  // { title: 'Lab Manual - Newton\'s Ring', author: 'Mr. Sayan Paul', topic: 'Optics' },
];


export default function NotesPage() {
  const isFaculty = false; // Placeholder for future authentication

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
            <h1 className="font-headline text-3xl font-bold">Notes & Materials</h1>
            <div className="flex items-center gap-4">
               <TabsList>
                <TabsTrigger value="theory">Theory Notes</TabsTrigger>
                <TabsTrigger value="lab">Laboratory Notes</TabsTrigger>
              </TabsList>
              {/* The UploadNote component will be shown conditionally in a real app */}
              {/* <UploadNote /> */}
            </div>
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
                      <Card key={index} className="hover:shadow-lg transition-shadow relative group">
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
                   <div className="text-center py-12">
                     <p className="text-muted-foreground">No theory notes have been uploaded yet.</p>
                   </div>
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
                      <Card key={index} className="hover:shadow-lg transition-shadow relative group">
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
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No laboratory notes have been uploaded yet.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}