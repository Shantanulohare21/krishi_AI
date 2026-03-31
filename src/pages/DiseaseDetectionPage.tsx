import React, { useState } from 'react';
import { PhotoCapture } from '@/components/PhotoCapture';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { VoiceSupport } from '@/components/VoiceSupport';
import { 
  Stethoscope, 
  Phone,
  MessageCircle,
  Camera
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Feature Components
import { AnalysisResultCard } from '@/components/disease/AnalysisResultCard';

interface DiseaseResult {
  diseaseDetected: boolean;
  diseaseName?: string;
  severity?: string;
  treatment?: string[];
  prevention?: string[];
}

const DiseaseDetectionPage: React.FC = () => {
  const { t } = useTranslation();
  const [analysisResult, setAnalysisResult] = useState<DiseaseResult | null>(null);
  const [showPhotoCapture, setShowPhotoCapture] = useState(false);

  const handlePhotoAnalysis = (result: DiseaseResult) => {
    setAnalysisResult(result);
    setShowPhotoCapture(false);
  };

  const resetAnalysis = () => {
    setAnalysisResult(null);
    setShowPhotoCapture(false);
  };

  return (
    <div className="min-h-screen bg-gradient-earth py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            <Stethoscope className="inline-block mr-3 h-8 w-8 text-primary" />
            {t('disease.title')}
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t('disease.subtitle')}
          </p>
          <VoiceSupport 
            text={t('disease.title') + ". " + t('disease.subtitle')} 
            className="mt-4"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          {!showPhotoCapture && !analysisResult && (
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-strong border-none bg-white/70 backdrop-blur-sm">
                <CardHeader className="bg-gradient-primary text-primary-foreground">
                  <CardTitle className="flex items-center">
                    <Camera className="mr-2 h-5 w-5" />
                    {t('disease.photo_analysis')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Camera className="h-10 w-10 text-primary" />
                    </div>
                    <p className="text-text-secondary">
                      {t('disease.take_photo_desc')}
                    </p>
                    <Button 
                      onClick={() => setShowPhotoCapture(true)}
                      className="w-full h-12 bg-primary hover:bg-primary-light text-white"
                      size="lg"
                    >
                      {t('disease.take_photo_btn')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-strong border-none bg-white/70 backdrop-blur-sm">
                <CardHeader className="bg-accent">
                  <CardTitle className="flex items-center text-text-primary">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {t('disease.support_title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-text-primary">{t('disease.helpline')}</h4>
                        <p className="text-sm text-text-secondary">1800-123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MessageCircle className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-text-primary">{t('disease.chatbot')}</h4>
                        <p className="text-sm text-text-secondary">{t('disease.chatbot_desc')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {showPhotoCapture && (
            <div className="flex justify-center">
              <PhotoCapture
                onPhotoAnalyzed={handlePhotoAnalysis}
                analysisType="disease-detection"
                title={t('common.photo_capture.disease_det_title')}
              />
            </div>
          )}

          {analysisResult && (
            <div className="space-y-6">
              <AnalysisResultCard result={analysisResult} />

              <div className="flex justify-center space-x-4">
                <Button onClick={resetAnalysis} variant="outline" size="lg">
                  {t('disease.new_analysis')}
                </Button>
                <Button 
                  onClick={() => window.location.href = '/contact'} 
                  className="bg-primary hover:bg-primary-light"
                  size="lg"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {t('disease.talk_expert')}
                </Button>
              </div>
            </div>
          )}

          {/* Information Section */}
          <Card className="mt-8 shadow-soft border-none bg-white/70 backdrop-blur-sm">
            <CardHeader className="bg-accent">
              <CardTitle className="text-text-primary">
                {t('disease.info.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">
                    {t('disease.info.common_diseases')}
                  </h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• {t('disease.info.disease_1')}</li>
                    <li>• {t('disease.info.disease_2')}</li>
                    <li>• {t('disease.info.disease_3')}</li>
                    <li>• {t('disease.info.disease_4')}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">
                    {t('disease.info.prevention')}
                  </h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• {t('disease.info.prev_1')}</li>
                    <li>• {t('disease.info.prev_2')}</li>
                    <li>• {t('disease.info.prev_3')}</li>
                    <li>• {t('disease.info.prev_4')}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetectionPage;