"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { chat } from '@/ai/flows/chat-flow';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Send, User, Bot } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { UEMLogo } from '@/components/uem-logo';
import { IEMLogo } from '@/components/iem-logo';

const formSchema = z.object({
  message: z.string().min(1, { message: 'Message cannot be empty.' }),
});

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function AIAgentPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { message: '' },
  });

  useEffect(() => {
    if (scrollAreaRef.current) {
        // Using `querySelector` to get the viewport element inside ScrollArea
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);
  

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const userMessage: Message = { role: 'user', content: values.message };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    form.reset();

    try {
      const response = await chat({ message: values.message, history: messages });
      const assistantMessage: Message = { role: 'assistant', content: response.response };
      setMessages([...newMessages, assistantMessage]);
    } catch (e) {
      console.error(e);
      const errorMessage: Message = { role: 'assistant', content: "Sorry, I'm having trouble connecting. Please try again later." };
      setMessages([...newMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <Card className="flex-grow flex flex-col animate-fade-in-up">
        <CardHeader className="border-b">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-full border">
                <Bot className="w-8 h-8 text-primary" />
            </div>
            <div>
                <CardTitle className="font-headline text-2xl">AI Physics Assistant</CardTitle>
                <CardDescription>Your personal AI agent for all things physics at IEM.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-0">
          <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
            <div className="space-y-6">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground pt-16">
                  <Bot className="w-12 h-12 mx-auto mb-4" />
                  <p className="font-semibold">Ask me anything!</p>
                  <p className="text-sm">I can help with physics concepts, lab procedures, and more.</p>
                </div>
              )}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-start gap-3',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  {message.role === 'assistant' && (
                    <Avatar className="w-8 h-8 border">
                       <div className="bg-background w-full h-full flex items-center justify-center">
                            <IEMLogo className="w-6 h-6" width={24} height={24} />
                       </div>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      'max-w-[75%] rounded-lg p-3 text-sm whitespace-pre-wrap',
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    )}
                  >
                    {message.content}
                  </div>
                   {message.role === 'user' && (
                    <Avatar className="w-8 h-8 border">
                      <div className="bg-background w-full h-full flex items-center justify-center">
                        <User className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </Avatar>
                  )}
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-start gap-3 justify-start">
                    <Avatar className="w-8 h-8 border">
                        <div className="bg-background w-full h-full flex items-center justify-center">
                            <IEMLogo className="w-6 h-6" width={24} height={24} />
                        </div>
                    </Avatar>
                    <div className="bg-muted rounded-lg p-3 flex items-center space-x-2">
                        <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Thinking...</span>
                    </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
        <div className="border-t p-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormControl>
                      <Input
                        placeholder="Ask about anything related to physics..."
                        {...field}
                        autoComplete="off"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} size="icon" className="shrink-0">
                <Send className="w-4 h-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </Form>
        </div>
      </Card>
    </div>
  );
}
