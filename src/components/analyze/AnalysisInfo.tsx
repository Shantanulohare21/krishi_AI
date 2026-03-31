import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { VoiceSupport } from '@/components/VoiceSupport';
import { useTranslation } from 'react-i18next';
import cropsImage from '@/assets/crops-collage.jpg';

export const AnalysisInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card className="shadow-soft">
      <CardHeader className="bg-accent">
        <CardTitle className="text-text-primary">
          {t('analyze.info.title')}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-4">
          <img 
            src={cropsImage} 
            alt="Various crops collage" 
            className="w-full h-48 object-cover rounded-lg shadow-soft"
          />
        </div>
        <div className="space-y-4 text-text-secondary">
          <div>
            <h4 className="font-semibold text-text-primary mb-2">{t('analyze.info.benefits_title')}</h4>
            <ul className="text-sm space-y-1">
              <li>• {t('analyze.info.benefit_1')}</li>
              <li>• {t('analyze.info.benefit_2')}</li>
              <li>• {t('analyze.info.benefit_3')}</li>
              <li>• {t('analyze.info.benefit_4')}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary mb-2">{t('analyze.info.tips_title')}</h4>
            <ul className="text-sm space-y-1">
              <li>• {t('analyze.info.tip_1')}</li>
              <li>• {t('analyze.info.tip_2')}</li>
              <li>• {t('analyze.info.tip_3')}</li>
            </ul>
          </div>
        </div>
        <VoiceSupport 
          text={t('analyze.info.benefits_title')} 
          className="mt-4"
        />
      </CardContent>
    </Card>
  );
};
