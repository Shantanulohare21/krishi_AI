import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { VoiceSupport } from '@/components/VoiceSupport';
import { 
  TrendingUp, 
  MapPin, 
  Calendar,
  Wheat
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Feature Components
import { MarketStats } from '@/components/market/MarketStats';
import { PriceTable } from '@/components/market/PriceTable';
import { MAHARASHTRA_DISTRICTS } from '@/data/maharashtra';

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

const MarketPage: React.FC = () => {
  const { t } = useTranslation();
  const districts = Object.keys(MAHARASHTRA_DISTRICTS);
  const [selectedDistrict, setSelectedDistrict] = useState(districts[districts.indexOf('Nagpur')] || districts[0]);

  const marketPrices: MarketPrice[] = [
    {
      crop: 'Cotton',
      cropHindi: t('market.crops.cotton'),
      currentPrice: 8250,
      previousPrice: 8100,
      market: `${selectedDistrict} ${t('market.mandi')}`,
      date: new Date().toISOString().split('T')[0],
      unit: '100 kg',
      change: 1.8
    },
    {
      crop: 'Soybean',
      cropHindi: t('market.crops.soybean'),
      currentPrice: 4920,
      previousPrice: 4850,
      market: `${selectedDistrict} ${t('market.mandi')}`,
      date: new Date().toISOString().split('T')[0],
      unit: '100 kg',
      change: 1.4
    },
    {
      crop: 'Orange',
      cropHindi: t('market.crops.orange'),
      currentPrice: 3800,
      previousPrice: 3500,
      market: `${selectedDistrict} ${t('market.mandi')}`,
      date: new Date().toISOString().split('T')[0],
      unit: '100 kg',
      change: 8.5
    },
    {
      crop: 'Sugarcane',
      cropHindi: t('market.crops.sugarcane'),
      currentPrice: 325,
      previousPrice: 325,
      market: `${selectedDistrict} ${t('market.mandi')}`,
      date: new Date().toISOString().split('T')[0],
      unit: '100 kg',
      change: 0
    },
    {
      crop: 'Rice',
      cropHindi: t('market.crops.rice'),
      currentPrice: 2850,
      previousPrice: 2900,
      market: `${selectedDistrict} ${t('market.mandi')}`,
      date: new Date().toISOString().split('T')[0],
      unit: '100 kg',
      change: -1.7
    },
    {
      crop: 'Onion',
      cropHindi: t('market.crops.onion'),
      currentPrice: 2400,
      previousPrice: 2150,
      market: `${selectedDistrict} ${t('market.mandi')}`,
      date: new Date().toISOString().split('T')[0],
      unit: '100 kg',
      change: 11.6
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-earth">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 text-center text-text-primary">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t('market.title')}
          </h1>
          <p className="text-lg text-text-secondary mb-4">
            {t('market.subtitle')}
          </p>
          <VoiceSupport text={t('market.voice')} />
        </div>

        <Card className="mb-8 shadow-medium border-none bg-white/70 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="font-semibold text-text-primary">{t('market.select_district')}</span>
              </div>
              <Select onValueChange={setSelectedDistrict} defaultValue={selectedDistrict}>
                <SelectTrigger className="w-full md:w-64 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {districts.map((district) => (
                    <SelectItem key={district} value={district}>
                      {district}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex items-center text-sm text-text-secondary">
                <Calendar className="h-4 w-4 mr-1" />
                {t('market.updated')}
              </div>
            </div>
          </CardContent>
        </Card>

        <MarketStats />

        <PriceTable marketPrices={marketPrices} selectedDistrict={selectedDistrict} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-medium border-none bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-primary">
                {t('market.tips.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-text-secondary">{t('market.tips.tip_1')}</span>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-text-secondary">{t('market.tips.tip_2')}</span>
                </li>
                <li className="flex items-start">
                  <Wheat className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-text-secondary">{t('market.tips.tip_3')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-none bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-primary">
                {t('market.contact.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">{t('market.contact.office')}</h4>
                  <p className="text-sm text-text-secondary">{t('market.contact.phone')}</p>
                  <p className="text-sm text-text-secondary">{t('market.contact.time')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">{t('market.contact.officer')}</h4>
                  <p className="text-sm text-text-secondary">{t('market.contact.mobile')}</p>
                  <p className="text-sm text-text-secondary">{t('market.contact.email')}</p>
                </div>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  <MapPin className="mr-2 h-4 w-4" />
                  {t('market.contact.address')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;