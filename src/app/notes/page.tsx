import { SemanticSearch } from '@/components/semantic-search';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NotebookText } from 'lucide-react';

const notes = [
  { title: 'Introduction to Electrodynamics', author: 'Dr. Anirban Ghosh', topic: 'Electromagnetism' },
  { title: 'Lecture Notes on Quantum Mechanics', author: 'Prof. Subrata Das', topic: 'Quantum Physics' },
  { title: 'Thermodynamics Cheat Sheet', author: 'Dr. Priya Sharma', topic: 'Thermodynamics' },
  { title: 'Notes on Special Relativity', author: 'Dr. Rajesh Kumar', topic: 'Relativity' },
];

export default function NotesPage() {
  return (
    <div className="space-y-8">
      <SemanticSearch 
        documentType="notes"
        placeholder="e.g., Maxwell's equations, Schrodinger's cat..."
      />

      <div>
        <h2 className="font-headline text-2xl font-bold mb-4">Available Notes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => (
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
      </div>
    </div>
  );
}
