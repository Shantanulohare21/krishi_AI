import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gauge, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SoilData {
  pH: string;
  moisture: string;
  nitrogen: string;
  phosphorus: string;
  potassium: string;
  location: string;
  state: string;
  district: string;
}

interface SoilSummaryCardProps {
  soilData: SoilData;
  soilHealth: {
    status: string;
    color: string;
    text: string;
  };
}

export const SoilSummaryCard: React.FC<SoilSummaryCardProps> = ({ soilData, soilHealth }) => {
  const { t } = useTranslation();

  return (
    <Card className="mb-8 shadow-medium">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Gauge className="mr-2 h-5 w-5 text-primary" />
          {t('results.summary.title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">{soilData.pH}</div>
            <div className="text-sm text-muted-foreground">{t('results.summary.ph_level')}</div>
            <Badge variant={parseFloat(soilData.pH) >= 6.0 && parseFloat(soilData.pH) <= 7.5 ? 'default' : 'secondary'}>
              {parseFloat(soilData.pH) >= 6.0 && parseFloat(soilData.pH) <= 7.5 ? t('results.summary.ideal') : t('results.summary.adjust')}
            </Badge>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary mb-2">{soilData.moisture}%</div>
            <div className="text-sm text-muted-foreground">{t('results.summary.moisture')}</div>
            <Badge variant={parseFloat(soilData.moisture) >= 40 ? 'default' : 'secondary'}>
              {parseFloat(soilData.moisture) >= 40 ? t('results.summary.good') : t('results.summary.low')}
            </Badge>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-accent mb-2">
              N: {soilData.nitrogen}<br />
              P: {soilData.phosphorus}<br />
              K: {soilData.potassium}
            </div>
            <div className="text-sm text-muted-foreground">{t('results.summary.nutrients')}</div>
          </div>
          <div className="text-center">
            <div className="flex flex-col items-center justify-center mb-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-primary" />
                <span className="font-semibold">{soilData.district}</span>
              </div>
              <span className="text-xs text-muted-foreground">{soilData.location}</span>
            </div>
            <div className="text-sm font-medium text-text-primary">{soilData.state}</div>
            <Badge variant="outline" className="mt-1">{t('results.summary.location')}</Badge>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Badge 
            variant={soilHealth.status === 'excellent' ? 'default' : soilHealth.status === 'good' ? 'secondary' : 'outline'}
            className="text-lg px-4 py-2"
          >
            {t('results.summary.health')}{soilHealth.text}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
