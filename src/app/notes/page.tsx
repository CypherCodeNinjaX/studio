import { SemanticSearch } from '@/components/semantic-search';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NotebookText, MoreVertical, Pencil, Trash2 } from 'lucide-react';
import { UploadNote } from '@/components/upload-note';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';


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
            <h1 className="font-headline text-3xl font-bold">Notes & Materials</h1>
            <div className="flex items-center gap-4">
               <TabsList>
                <TabsTrigger value="theory">Theory Notes</TabsTrigger>
                <TabsTrigger value="lab">Laboratory Notes</TabsTrigger>
              </TabsList>
              <UploadNote />
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
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="absolute top-4 right-4 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Pencil className="mr-2 h-4 w-4" />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <CardHeader>
                          <div className="flex items-start justify-between pr-10">
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
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="absolute top-4 right-4 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Pencil className="mr-2 h-4 w-4" />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <CardHeader>
                          <div className="flex items-start justify-between pr-10">
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
