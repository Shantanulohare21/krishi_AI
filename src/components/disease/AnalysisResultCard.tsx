import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VoiceSupport } from '@/components/VoiceSupport';
import { AlertTriangle, CheckCircle, Leaf } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface DiseaseResult {
  diseaseDetected: boolean;
  diseaseName?: string;
  severity?: string;
  treatment?: string[];
  prevention?: string[];
}

interface AnalysisResultCardProps {
  result: DiseaseResult;
}

export const AnalysisResultCard: React.FC<AnalysisResultCardProps> = ({ result }) => {
  const { t } = useTranslation();

  return (
    <Card className="shadow-strong">
      <CardHeader className={`${
        result.diseaseDetected 
          ? 'bg-red-100 border-red-200' 
          : 'bg-green-100 border-green-200'
      }`}>
        <CardTitle className={`flex items-center ${
          result.diseaseDetected ? 'text-red-800' : 'text-green-800'
        }`}>
          {result.diseaseDetected ? (
            <AlertTriangle className="mr-2 h-5 w-5" />
          ) : (
            <CheckCircle className="mr-2 h-5 w-5" />
          )}
          {result.diseaseDetected 
            ? t('disease.result.disease_detected')
            : t('disease.result.healthy')
          }
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {result.diseaseDetected ? (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-text-primary mb-2">
                {t('disease.result.name')}
              </h3>
              <Badge variant="destructive" className="text-sm">
                {result.diseaseName}
              </Badge>
            </div>
            
            <div>
              <h3 className="font-semibold text-text-primary mb-2">
                {t('disease.result.severity')}
              </h3>
              <Badge variant="secondary" className="text-sm">
                {result.severity}
              </Badge>
            </div>

            {result.treatment && (
              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  {t('disease.result.treatment')}
                </h3>
                <ul className="space-y-2">
                  {result.treatment.map((treatment, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-text-secondary">{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {result.prevention && (
              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  {t('disease.result.prevention')}
                </h3>
                <ul className="space-y-2">
                  {result.prevention.map((prevention, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-text-secondary">{prevention}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-4">
            <Leaf className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <p className="text-text-secondary">
              {t('disease.result.healthy_desc')}
            </p>
          </div>
        )}

        <VoiceSupport 
          text={result.diseaseDetected 
            ? `${t('disease.result.disease_detected')} ${result.diseaseName} ${t('disease.result.severity')} ${result.severity}`
            : t('disease.result.healthy')
          }
          className="mt-4"
        />
      </CardContent>
    </Card>
  );
};
