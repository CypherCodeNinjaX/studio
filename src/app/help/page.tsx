import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I find the syllabus for my course?",
    answer: "You can find the official syllabus documents on the 'Syllabus' page. They are separated into Theory and Lab sections for easy access. You can view and download them directly from the page."
  },
  {
    question: "Where can I find notes and study materials?",
    answer: "All course notes and study materials uploaded by faculty are available on the 'Notes' page. You can switch between 'Theory Notes' and 'Laboratory Notes' using the tabs provided."
  },
  {
    question: "How does the Semantic Search work?",
    answer: "The Semantic Search on the 'Notes' and 'Lab Experiments' pages uses AI to understand the context and meaning of your query, not just keywords. This allows you to find more relevant information even if you don't know the exact terms used in the documents."
  },
  {
    question: "How do I use the AI Agent?",
    answer: "The AI Agent is a powerful chatbot designed to assist you with your physics-related questions. Simply go to the 'AI Agent' page, type your question in the input box, and the AI will provide a real-time response. You can ask about concepts, formulas, lab procedures, or even get help with homework problems."
  },
  {
    question: "Can I view lab experiments online?",
    answer: "Yes! The 'Lab Experiments' page contains a list of all lab experiments. Each entry includes a description and a link to a YouTube video demonstrating the experiment. This is a great resource for pre-lab preparation."
  },
  {
    question: "How do I contact a faculty member?",
    answer: "You can find contact information for all department faculty on the 'Faculties' page. Each profile includes their name, designation, research interests, and email address."
  }
];

export default function HelpPage() {
  return (
    <div className="space-y-8">
      <Card className="animate-fade-in-up">
        <CardHeader>
          <div className="flex items-center gap-4">
             <div className="p-2 bg-primary/10 rounded-full border">
                <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <div>
                <CardTitle className="font-headline text-3xl">Help Center</CardTitle>
                <CardDescription>Find answers to frequently asked questions about using the IEM Physics App.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
