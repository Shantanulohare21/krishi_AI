import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Eye, 
  Share, 
  Bookmark, 
  Clock,
  AlertTriangle,
  Info,
  TrendingUp
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
}

interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news, featured = false }) => {
  const { t, i18n } = useTranslation();

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-red-100 text-red-800">{t('news.badges.urgent')}</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800">{t('news.badges.normal')}</Badge>;
      case 'low':
        return <Badge className="bg-green-100 text-green-800">{t('news.badges.info')}</Badge>;
      default:
        return null;
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'medium':
        return <Info className="h-5 w-5 text-yellow-500" />;
      case 'low':
        return <TrendingUp className="h-5 w-5 text-green-500" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  const formattedDate = new Date(news.date).toLocaleDateString(
    i18n.language === 'hi' ? 'hi-IN' : i18n.language === 'mr' ? 'mr-IN' : 'en-IN'
  );

  if (featured) {
    return (
      <Card className="mb-8 shadow-medium border-l-4 border-l-red-500 overflow-hidden">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <Badge className="bg-red-100 text-red-800">{t('news.badges.featured')}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              {formattedDate}
            </div>
          </div>
          <CardTitle className="text-2xl text-primary mb-2">
            {news.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {news.summary}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {news.readTime}
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                {news.views} {t('news.labels.views')}
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="default">
                {t('news.labels.read_full')}
              </Button>
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4 mr-1" />
                {t('news.labels.share')}
              </Button>
              <Button variant="ghost" size="sm">
                <Bookmark className="h-4 w" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-medium hover:shadow-strong transition-shadow h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            {getPriorityIcon(news.priority)}
            {getPriorityBadge(news.priority)}
          </div>
          <Badge variant="outline">{news.category}</Badge>
        </div>
        <CardTitle className="text-xl text-primary mb-1 line-clamp-2">
          {news.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {news.summary}
        </p>
        <div className="mt-auto">
          <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {formattedDate}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {news.readTime}
              </div>
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              {news.views}
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="flex-1">
              {t('news.labels.read')}
            </Button>
            <Button variant="ghost" size="sm">
              <Share className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
