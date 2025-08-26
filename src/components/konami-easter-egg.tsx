"use client";

import { useKonamiCode } from "@/hooks/use-konami-code";
import { useToast } from "@/hooks/use-toast";
import { useCallback } from "react";

export function KonamiEasterEgg() {
    const { toast } = useToast();
    const onKonamiCode = useCallback(() => {
        toast({
            title: "Achievement Unlocked!",
            description: "You found the Konami Code! Have a great day! ✨",
        });
    }, [toast]);
    
    useKonamiCode(onKonamiCode);

    return null;
}
