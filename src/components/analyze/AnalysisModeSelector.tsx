import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { VoiceSupport } from '@/components/VoiceSupport';
import { Camera, Beaker, Settings2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AnalysisModeSelectorProps {
  mode: 'manual' | 'photo';
  onModeChange: (mode: 'manual' | 'photo') => void;
  onShowPhotoCapture: (show: boolean) => void;
}

export const AnalysisModeSelector: React.FC<AnalysisModeSelectorProps> = ({
  mode,
  onModeChange,
  onShowPhotoCapture,
}) => {
  const { t } = useTranslation();

  return (
    <Card className="mb-8 shadow-strong">
      <CardHeader className="bg-accent">
        <CardTitle className="flex items-center text-xl text-text-primary">
          <Settings2 className="mr-2 h-5 w-5" />
          {t('analyze.choose_method')}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <Button
            onClick={() => {
              onModeChange('manual');
              onShowPhotoCapture(false);
            }}
            variant={mode === 'manual' ? 'default' : 'outline'}
            className="h-20 flex-col space-y-2"
          >
            <Beaker className="h-6 w-6" />
            <span>{t('analyze.manual_data')}</span>
          </Button>
          <Button
            onClick={() => {
              onModeChange('photo');
              onShowPhotoCapture(true);
            }}
            variant={mode === 'photo' ? 'default' : 'outline'}
            className="h-20 flex-col space-y-2"
          >
            <Camera className="h-6 w-6" />
            <span>{t('analyze.photo_analysis')}</span>
          </Button>
        </div>
        <VoiceSupport 
          text={t('analyze.choose_method') + ". " + t('analyze.manual_data') + " or " + t('analyze.photo_analysis') + "."} 
          className="mt-4"
        />
      </CardContent>
    </Card>
  );
};
