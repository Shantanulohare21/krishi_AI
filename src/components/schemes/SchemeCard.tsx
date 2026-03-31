import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Gift, 
  DollarSign, 
  Calendar, 
  Users, 
  FileText, 
  Phone, 
  CheckCircle, 
  Info,
  Banknote,
  Zap
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Scheme {
  id: string;
  name: string;
  nameHindi: string;
  description: string;
  benefit: string;
  eligibility: string[];
  documents: string[];
  amount: string;
  deadline: string;
  category: string;
  status: 'active' | 'upcoming' | 'closed';
}

interface SchemeCardProps {
  scheme: Scheme;
}

export const SchemeCard: React.FC<SchemeCardProps> = ({ scheme }) => {
  const { t } = useTranslation();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">{t('schemes.status.active')}</Badge>;
      case 'upcoming':
        return <Badge className="bg-blue-100 text-blue-800">{t('schemes.status.upcoming')}</Badge>;
      case 'closed':
        return <Badge className="bg-red-100 text-red-800">{t('schemes.status.closed')}</Badge>;
      default:
        return null;
    }
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case '1':
        return <DollarSign className="h-5 w-5" />;
      case '2':
        return <Banknote className="h-5 w-5" />;
      case '3':
        return <CheckCircle className="h-5 w-5" />;
      case '4':
        return <Zap className="h-5 w-5" />;
      default:
        return <Gift className="h-5 w-5" />;
    }
  };

  return (
    <Card className="shadow-medium hover:shadow-strong transition-shadow">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <CardTitle className="flex items-center text-xl">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
              {getCategoryIcon(scheme.id)}
            </div>
            <div>
              <div className="text-primary text-xl font-bold">{scheme.nameHindi || scheme.name}</div>
              {scheme.nameHindi && scheme.nameHindi !== scheme.name && (
                <div className="text-sm font-medium text-muted-foreground">{scheme.name}</div>
              )}
            </div>
          </CardTitle>
          <div className="flex items-center gap-3">
            {getStatusBadge(scheme.status)}
            <Badge variant="outline">{scheme.category}</Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <Info className="h-4 w-4 mr-2 text-blue-500" />
                {t('schemes.labels.description')}
              </h4>
              <p className="text-muted-foreground">{scheme.description}</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <Gift className="h-4 w-4 mr-2 text-green-500" />
                {t('schemes.labels.benefit')}
              </h4>
              <p className="text-green-600 font-medium">{scheme.benefit}</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <DollarSign className="h-4 w-4 mr-2 text-yellow-500" />
                {t('schemes.labels.amount')}
              </h4>
              <p className="text-yellow-600 font-bold text-lg">{scheme.amount}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <Users className="h-4 w-4 mr-2 text-purple-500" />
                {t('schemes.labels.eligibility')}
              </h4>
              <ul className="space-y-1">
                {Array.isArray(scheme.eligibility) ? scheme.eligibility.map((criteria, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    {criteria}
                  </li>
                )) : null}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <FileText className="h-4 w-4 mr-2 text-orange-500" />
                {t('schemes.labels.documents')}
              </h4>
              <ul className="space-y-1">
                {Array.isArray(scheme.documents) ? scheme.documents.map((doc, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start">
                    <FileText className="h-3 w-3 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    {doc}
                  </li>
                )) : null}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-red-500" />
                {t('schemes.labels.deadline')}
              </h4>
              <p className="text-red-600 font-medium">{scheme.deadline}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <Button className="flex-1" variant="default">
            <FileText className="mr-2 h-4 w-4" />
            {t('schemes.buttons.apply')}
          </Button>
          <Button variant="outline" className="flex-1">
            <Info className="mr-2 h-4 w-4" />
            {t('schemes.buttons.details')}
          </Button>
          <Button variant="ghost" className="flex-1">
            <Phone className="mr-2 h-4 w-4" />
            {t('schemes.buttons.helpline')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
