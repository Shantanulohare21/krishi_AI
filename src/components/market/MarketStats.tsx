import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, BarChart3, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const MarketStats: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card className="shadow-medium">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600">4</div>
          <div className="text-sm text-muted-foreground">{t('market.summary.rising')}</div>
        </CardContent>
      </Card>
      
      <Card className="shadow-medium">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <TrendingDown className="h-6 w-6 text-red-600" />
          </div>
          <div className="text-2xl font-bold text-red-600">2</div>
          <div className="text-sm text-muted-foreground">{t('market.summary.falling')}</div>
        </CardContent>
      </Card>
      
      <Card className="shadow-medium">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <BarChart3 className="h-6 w-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600">6</div>
          <div className="text-sm text-muted-foreground">{t('market.summary.total_crops')}</div>
        </CardContent>
      </Card>
      
      <Card className="shadow-medium">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <DollarSign className="h-6 w-6 text-yellow-600" />
          </div>
          <div className="text-2xl font-bold text-yellow-600">₹2,225</div>
          <div className="text-sm text-muted-foreground">{t('market.summary.avg_price')}</div>
        </CardContent>
      </Card>
    </div>
  );
};
