'use server';
/**
 * @fileOverview A powerful AI chat agent.
 *
 * - chat - A function that handles the chat interaction.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatInputSchema = z.object({
  message: z.string().describe('The user message.'),
  history: z.array(z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string(),
  })).describe('The chat history.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string().describe('The AI response.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const {message, history} = input;

    const prompt = `You are a powerful AI assistant for the IEM Physics Department app. Your capabilities are similar to models like ChatGPT, Google Gemini, and Perplexity. Answer the user's questions about physics, the curriculum, lab experiments, or any other related topic. Be helpful, accurate, and provide real-time assistance.

Here is the chat history:
${history.map(m => `${m.role}: ${m.content}`).join('\n')}

User: ${message}
Assistant:`;

    const llmResponse = await ai.generate({
      prompt: prompt,
      model: 'googleai/gemini-2.5-flash',
      config: {
        maxOutputTokens: 1024,
      }
    });

    return {
      response: llmResponse.text,
    };
  }
);
