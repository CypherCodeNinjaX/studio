import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Youtube, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function YoutubeChannelPage() {
  const channelUrl = 'https://yt.openinapp.co/i92gw';

  return (
    <div className="space-y-8">
      <Card className="animate-fade-in-up">
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <Image
            src="https://picsum.photos/800/200"
            alt="YouTube channel banner"
            data-ai-hint="abstract technology"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Youtube className="w-24 h-24 text-white/90" />
          </div>
        </div>
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl">Physics YouTube Channel</CardTitle>
          <CardDescription>
            Explore our official YouTube channel for video lectures, experiment demonstrations, and more.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button asChild size="lg">
            <a href={channelUrl} target="_blank" rel="noopener noreferrer">
              Visit Channel
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
