import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { FileText, Calendar, Download, Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UploadAssignment } from '@/components/upload-assignment';

const assignments: any[] = [
  // Example assignment
  // { 
  //   title: 'Assignment 1: Kinematics', 
  //   description: 'Solve the problems related to one-dimensional motion.', 
  //   dueDate: '2024-09-15',
  //   fileUrl: '#'
  // },
];

export default function AssignmentsPage() {
  const isFaculty = true; // Placeholder for future authentication

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center animate-fade-in-up">
        <div>
          <h1 className="font-headline text-3xl font-bold">Assignments</h1>
          <p className="text-muted-foreground">View and download course assignments uploaded by faculty.</p>
        </div>
        {isFaculty && <UploadAssignment />}
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
        {assignments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignments.map((assignment, index) => (
              <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow relative group">
                {isFaculty && (
                  <div className="absolute top-2 right-2 z-10 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
                      <Pencil className="w-4 h-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="destructive" size="icon" className="h-8 w-8">
                      <Trash2 className="w-4 h-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle>{assignment.title}</CardTitle>
                    <FileText className="w-6 h-6 text-muted-foreground"/>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">{assignment.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-semibold mr-1">Due:</span> 
                    {assignment.dueDate ? new Date(assignment.dueDate).toLocaleDateString() : 'Not specified'}
                  </div>
                </CardContent>
                <CardFooter>
                   <Button asChild className="w-full">
                    <a href={assignment.fileUrl} download target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Download Assignment
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardHeader>
              <CardTitle>No Assignments Yet</CardTitle>
              <CardDescription>
                {isFaculty
                  ? 'Click "Upload Assignment" to add the first one.'
                  : 'There are currently no assignments uploaded. Please check back later.'}
              </CardDescription>
            </CardHeader>
          </Card>
        )}
      </div>
    </div>
  );
}
