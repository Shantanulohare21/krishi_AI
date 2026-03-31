import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface VoiceSupportProps {
  text: string;
  language?: 'hi-IN' | 'en-IN';
  className?: string;
}

export const VoiceSupport: React.FC<VoiceSupportProps> = ({ 
  text, 
  language = 'hi-IN',
  className = '' 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { toast } = useToast();

  const speakText = () => {
    if ('speechSynthesis' in window) {
      // Stop any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language;
      utterance.rate = 0.8;
      utterance.pitch = 1;
      
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => {
        setIsPlaying(false);
        toast({
          title: "वॉइस सपोर्ट एरर / Voice Error",
          description: "आवाज़ सुनने में समस्या है / Unable to play audio",
          variant: "destructive",
        });
      };
      
      window.speechSynthesis.speak(utterance);
    } else {
      toast({
        title: "वॉइस सपोर्ट उपलब्ध नहीं / Voice Not Available",
        description: "आपका ब्राउज़र वॉइस सपोर्ट नहीं करता / Your browser doesn't support voice",
        variant: "destructive",
      });
    }
  };

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={isPlaying ? stopSpeech : speakText}
      className={`bg-accent hover:bg-accent-light ${className}`}
      disabled={!text}
    >
      {isPlaying ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      <span className="ml-2">
        {isPlaying ? 'रोकें / Stop' : 'सुनें / Listen'}
      </span>
    </Button>
  );
};