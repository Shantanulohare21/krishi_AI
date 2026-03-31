import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { VoiceSupport } from '@/components/VoiceSupport';
import { 
  TrendingUp, 
  IndianRupee, 
  Calendar,
  CheckCircle,
  Lightbulb
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CropRecommendation {
  name: string;
  translatedName: string;
  suitability: number;
  expectedYield: string;
  profitEstimate: string;
  season: string;
  reasons: string[];
  tips: string[];
}

interface RecommendationCardProps {
  crop: CropRecommendation;
  isBest: boolean;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({ crop, isBest }) => {
  const { t } = useTranslation();

  return (
    <Card className="shadow-medium hover:shadow-strong transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">
            {crop.translatedName}
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant={crop.suitability >= 90 ? 'default' : crop.suitability >= 80 ? 'secondary' : 'outline'}>
              {crop.suitability}{t('results.recommendations.suitability')}
            </Badge>
            {isBest && (
              <Badge variant="default">
                <CheckCircle className="h-3 w-3 mr-1" />
                {t('results.recommendations.best')}
              </Badge>
            )}
          </div>
        </div>
        <Progress value={crop.suitability} className="w-full h-2" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 text-success mr-2" />
            <div>
              <div className="font-semibold">{t('results.recommendations.yield')}</div>
              <div className="text-sm text-muted-foreground">{crop.expectedYield}</div>
            </div>
          </div>
          <div className="flex items-center">
            <IndianRupee className="h-5 w-5 text-accent mr-2" />
            <div>
              <div className="font-semibold">{t('results.recommendations.profit')}</div>
              <div className="text-sm text-muted-foreground">{crop.profitEstimate}</div>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-secondary mr-2" />
            <div>
              <div className="font-semibold">{t('results.recommendations.season')}</div>
              <div className="text-sm text-muted-foreground">{crop.season}</div>
            </div>
          </div>
          <div className="flex items-center">
            <VoiceSupport 
              text={t('results.recommendations.voice_template', {
                name: crop.translatedName,
                yield: crop.expectedYield,
                profit: crop.profitEstimate,
                season: crop.season
              })}
              className="text-xs"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 flex items-center">
              <CheckCircle className="h-4 w-4 text-success mr-2" />
              {t('results.recommendations.reasons')}
            </h4>
            <ul className="space-y-1">
              {crop.reasons.map((reason, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-success mr-2">•</span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 flex items-center">
              <Lightbulb className="h-4 w-4 text-accent mr-2" />
              {t('results.recommendations.tips')}
            </h4>
            <ul className="space-y-1">
              {crop.tips.map((tip, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
