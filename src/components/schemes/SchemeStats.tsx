import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Calendar, Users, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const SchemeStats: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card className="shadow-medium">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600">3</div>
          <div className="text-sm text-muted-foreground">{t('schemes.stats.active')}</div>
        </CardContent>
      </Card>

      <Card className="shadow-medium">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Calendar className="h-6 w-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600">1</div>
          <div className="text-sm text-muted-foreground">{t('schemes.stats.upcoming')}</div>
        </CardContent>
      </Card>

      <Card className="shadow-medium">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Users className="h-6 w-6 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-purple-600">50,000+</div>
          <div className="text-sm text-muted-foreground">{t('schemes.stats.beneficiaries')}</div>
        </CardContent>
      </Card>

      <Card className="shadow-medium">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <DollarSign className="h-6 w-6 text-yellow-600" />
          </div>
          <div className="text-2xl font-bold text-yellow-600">₹30Cr+</div>
          <div className="text-sm text-muted-foreground">{t('schemes.stats.distributed')}</div>
        </CardContent>
      </Card>
    </div>
  );
};
