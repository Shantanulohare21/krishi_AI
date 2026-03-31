import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { VoiceSupport } from '@/components/VoiceSupport';
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Wind, 
  Thermometer, 
  Droplets,
  Eye,
  MapPin,
  Search,
  Calendar
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  forecast: Array<{
    day: string;
    high: number;
    low: number;
    condition: string;
    rainfall: number;
  }>;
}

const WeatherPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchLocation, setSearchLocation] = useState('');
  const [weatherData] = useState<WeatherData>({
    location: t('weather.location_default'),
    temperature: 28,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    visibility: 10,
    forecast: [
      { day: t('weather.days.today'), high: 32, low: 22, condition: 'Sunny', rainfall: 0 },
      { day: t('weather.days.tomorrow'), high: 30, low: 20, condition: 'Cloudy', rainfall: 5 },
      { day: t('weather.days.day_after'), high: 28, low: 18, condition: 'Rainy', rainfall: 15 },
      { day: t('weather.days.friday'), high: 26, low: 16, condition: 'Rainy', rainfall: 25 },
      { day: t('weather.days.saturday'), high: 29, low: 19, condition: 'Partly Cloudy', rainfall: 2 }
    ]
  });

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny': return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'cloudy':
      case 'partly cloudy': return <Cloud className="h-8 w-8 text-gray-500" />;
      case 'rainy': return <CloudRain className="h-8 w-8 text-blue-500" />;
      default: return <Sun className="h-8 w-8 text-yellow-500" />;
    }
  };

  const weatherAdvice = t('weather.advisory_voice');

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('weather.title')}
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            {t('weather.subtitle')}
          </p>
          <VoiceSupport text={t('weather.voice')} />
        </div>

        {/* Search */}
        <Card className="mb-8 shadow-medium">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder={t('weather.search_placeholder')}
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="text-lg"
                />
              </div>
              <Button variant="default" size="lg">
                <Search className="mr-2 h-5 w-5" />
                {t('weather.search_btn')}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Current Weather */}
        <Card className="mb-8 shadow-medium bg-gradient-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <MapPin className="mr-2 h-6 w-6" />
              {weatherData.location}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {getWeatherIcon(weatherData.condition)}
                </div>
                <div className="text-4xl font-bold">{weatherData.temperature}°C</div>
                <div className="opacity-90">{weatherData.condition}</div>
              </div>
              
              <div className="flex items-center">
                <Droplets className="h-8 w-8 mr-3" />
                <div>
                  <div className="text-2xl font-bold">{weatherData.humidity}%</div>
                  <div className="opacity-90">{t('weather.humidity')}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Wind className="h-8 w-8 mr-3" />
                <div>
                  <div className="text-2xl font-bold">{weatherData.windSpeed}</div>
                  <div className="opacity-90">km/h {t('weather.wind')}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Eye className="h-8 w-8 mr-3" />
                <div>
                  <div className="text-2xl font-bold">{weatherData.visibility}</div>
                  <div className="opacity-90">km {t('weather.visibility')}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 5-Day Forecast */}
        <Card className="mb-8 shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-primary" />
              {t('weather.forecast_title')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {weatherData.forecast.map((day, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-muted">
                  <div className="font-semibold mb-2">{day.day}</div>
                  <div className="flex justify-center mb-2">
                    {getWeatherIcon(day.condition)}
                  </div>
                  <div className="text-lg font-bold">{day.high}°/{day.low}°</div>
                  <div className="text-sm text-muted-foreground">{day.condition}</div>
                  {day.rainfall > 0 && (
                    <div className="text-sm text-blue-600 mt-1">
                      <Droplets className="inline h-3 w-3 mr-1" />
                      {day.rainfall}mm
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Agricultural Advisory */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-green-600">
                {t('weather.advisory.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Thermometer className="h-5 w-5 text-orange-500 mr-2 mt-1" />
                  <span>{t('weather.advisory.item_1')}</span>
                </li>
                <li className="flex items-start">
                  <Droplets className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                  <span>{t('weather.advisory.item_2')}</span>
                </li>
                <li className="flex items-start">
                  <Wind className="h-5 w-5 text-gray-500 mr-2 mt-1" />
                  <span>{t('weather.advisory.item_3')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-blue-600">
                {t('weather.warning.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <div className="font-semibold text-yellow-800">{t('weather.warning.alert')}</div>
                  <p className="text-yellow-700">{t('weather.warning.alert_desc')}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">{t('weather.warning.recommendations')}</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• {t('weather.warning.rec_1')}</li>
                    <li>• {t('weather.warning.rec_2')}</li>
                    <li>• {t('weather.warning.rec_3')}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;