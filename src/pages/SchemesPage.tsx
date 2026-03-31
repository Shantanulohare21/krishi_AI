import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { VoiceSupport } from '@/components/VoiceSupport';
import { FileText, Phone, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Feature Components
import { SchemeStats } from '@/components/schemes/SchemeStats';
import { SchemeCard } from '@/components/schemes/SchemeCard';

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

const SchemesPage: React.FC = () => {
  const { t } = useTranslation();
  const schemes = t('schemes.list', { returnObjects: true }) as Scheme[];

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-earth">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 text-center text-text-primary">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t('schemes.title')}
          </h1>
          <p className="text-lg text-text-secondary mb-4">
            {t('schemes.subtitle')}
          </p>
          <VoiceSupport text={t('schemes.voice')} />
        </div>

        <SchemeStats />

        <div className="space-y-6">
          {schemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>

        <Card className="mt-8 shadow-medium bg-gradient-accent">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-accent-foreground mb-4">
              {t('schemes.help.title')}
            </h3>
            <p className="text-accent-foreground mb-6 max-w-2xl mx-auto opacity-90">
              {t('schemes.help.desc')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center text-accent-foreground">
                <Phone className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <div className="font-semibold">{t('schemes.help.helpline')}</div>
                <div className="text-sm">{t('schemes.help.helpline_value')}</div>
              </div>
              <div className="text-center text-accent-foreground">
                <FileText className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <div className="font-semibold">{t('schemes.help.portal')}</div>
                <a 
                  href={t('schemes.help.portal_url')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm underline hover:opacity-80 transition-opacity"
                >
                  {t('schemes.help.portal')}
                </a>
              </div>
              <div className="text-center text-accent-foreground">
                <Users className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <div className="font-semibold">{t('schemes.help.office')}</div>
                <div className="text-sm">{t('schemes.help.days')}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SchemesPage;