import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VoiceSupport } from '@/components/VoiceSupport';
import { Newspaper, Megaphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Feature Components
import { NewsCard } from '@/components/news/NewsCard';

interface NewsItem {
  id: string;
  title: string;
  titleHindi: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  priority: 'high' | 'medium' | 'low';
  views: number;
  image?: string;
}

const NewsPage: React.FC = () => {
  const { t } = useTranslation();
  const newsItems = t('news.list', { returnObjects: true }) as NewsItem[];

  const categories = [
    t('news.categories.all'),
    t('news.categories.weather'),
    t('news.categories.schemes'),
    t('news.categories.training'),
    t('news.categories.market')
  ];

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-earth">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 text-center text-text-primary">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t('news.title')}
          </h1>
          <p className="text-lg text-text-secondary mb-4">
            {t('news.subtitle')}
          </p>
          <VoiceSupport text={t('news.voice')} />
        </div>

        <Card className="mb-8 shadow-medium border-none bg-white/70 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex items-center space-x-4">
                <Megaphone className="h-6 w-6 text-primary" />
                <span className="font-semibold text-text-primary">{t('news.labels.categories')}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat, i) => (
                  <Badge 
                    key={i} 
                    variant={i === 0 ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {newsItems.length > 0 && (
          <div className="mb-8">
            <NewsCard news={newsItems[0]} featured />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {newsItems.slice(1).map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        <Card className="shadow-medium bg-gradient-primary text-primary-foreground border-none">
          <CardContent className="p-8 text-center">
            <Newspaper className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-4">
              {t('news.newsletter.title')}
            </h3>
            <p className="mb-6 max-w-2xl mx-auto opacity-90">
              {t('news.newsletter.desc')}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="text-lg font-bold bg-white/20 px-4 py-2 rounded-lg">
                {t('news.newsletter.sms')}
              </div>
              <div className="text-lg font-bold bg-white/20 px-4 py-2 rounded-lg">
                {t('news.newsletter.whatsapp')}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewsPage;