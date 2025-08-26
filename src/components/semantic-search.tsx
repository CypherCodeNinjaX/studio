"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { semanticSearch, type SemanticSearchInput } from '@/ai/flows/semantic-search';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Search } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const formSchema = z.object({
  query: z.string().min(3, { message: 'Search query must be at least 3 characters.' }),
});

type SemanticSearchComponentProps = {
  documentType: SemanticSearchInput['documentType'];
  placeholder: string;
};

export function SemanticSearch({ documentType, placeholder }: SemanticSearchComponentProps) {
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { query: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setResults([]);

    try {
      const searchInput: SemanticSearchInput = { query: values.query, documentType };
      const response = await semanticSearch(searchInput);
      setResults(response.results);
    } catch (e) {
      setError('An error occurred during the search. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Semantic Search</CardTitle>
          <CardDescription>
            Use AI to search for concepts within {documentType.replace(/([A-Z])/g, ' $1').toLowerCase()}. The search understands context, not just keywords.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-2">
              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormControl>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder={placeholder} {...field} className="pl-10" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? <Loader2 className="animate-spin" /> : 'Search'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {isLoading && (
        <div className="flex justify-center items-center text-muted-foreground">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
            <p className="ml-2 font-semibold">Searching for insights...</p>
        </div>
      )}
      
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Search Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {results.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Search Results</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc pl-5 text-sm">
              {results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
