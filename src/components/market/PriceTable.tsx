import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wheat, Sprout, TrendingUp, TrendingDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface MarketPrice {
  crop: string;
  cropHindi: string;
  currentPrice: number;
  previousPrice: number;
  market: string;
  date: string;
  unit: string;
  change: number;
}

interface PriceTableProps {
  marketPrices: MarketPrice[];
  selectedDistrict: string;
}

export const PriceTable: React.FC<PriceTableProps> = ({ marketPrices, selectedDistrict }) => {
  const { t } = useTranslation();

  const getTrendIcon = (change: number) => {
    return change >= 0 ? 
      <TrendingUp className="h-4 w-4 text-green-600" /> : 
      <TrendingDown className="h-4 w-4 text-red-600" />;
  };

  const getTrendColor = (change: number) => {
    return change >= 0 ? 'text-green-600' : 'text-red-600';
  };

  return (
    <Card className="mb-8 shadow-medium">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Wheat className="mr-2 h-5 w-5 text-primary" />
          {t('market.table.title')} {selectedDistrict}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="grid gap-4">
            {marketPrices.map((price, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Sprout className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">
                      {price.cropHindi} / {price.crop}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {price.market}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">
                    ₹{price.currentPrice}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t('market.table.per')} {price.unit}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`flex items-center ${getTrendColor(price.change)}`}>
                    {getTrendIcon(price.change)}
                    <span className="ml-1 font-semibold">
                      {price.change > 0 ? '+' : ''}{price.change.toFixed(1)}%
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t('market.table.from_yesterday')}
                  </div>
                </div>
                
                <div>
                  <Badge variant={price.change >= 0 ? "default" : "destructive"}>
                    {price.change >= 0 ? t('market.table.up') : t('market.table.down')}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
