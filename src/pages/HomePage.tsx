import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout, BarChart3, TrendingUp, Users, Shield, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-agriculture.jpg';
import farmerTechImage from '@/assets/farmer-tech.jpg';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: BarChart3,
      title: t('home.features.soil_analysis'),
      description: t('home.features.soil_analysis_desc')
    },
    {
      icon: Sprout,
      title: t('home.features.crop_rec'),
      description: t('home.features.crop_rec_desc')
    },
    {
      icon: TrendingUp,
      title: t('home.features.profit'),
      description: t('home.features.profit_desc')
    },
    {
      icon: Users,
      title: t('home.features.easy'),
      description: t('home.features.easy_desc')
    },
    {
      icon: Shield,
      title: t('home.features.reliable'),
      description: t('home.features.reliable_desc')
    },
    {
      icon: Zap,
      title: t('home.features.instant'),
      description: t('home.features.instant_desc')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('home.hero_title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {t('home.hero_subtitle')}
            </p>
            <Link to="/analyze">
              <Button variant="hero" size="lg" className="text-xl px-8 py-4">
                <BarChart3 className="mr-2 h-6 w-6" />
                {t('home.start_analysis')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('home.services_title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('home.services_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-none shadow-medium hover:shadow-strong transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('home.how_it_works')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t('home.steps.step1_title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('home.steps.step1_desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t('home.steps.step2_title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('home.steps.step2_desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t('home.steps.step3_title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('home.steps.step3_desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <img 
                src={farmerTechImage} 
                alt="Farmer using technology" 
                className="rounded-lg shadow-strong w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('home.cta_title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('home.cta_subtitle')}
          </p>
          <Link to="/analyze">
            <Button variant="accent" size="lg" className="text-lg px-8 py-4">
              <Sprout className="mr-2 h-6 w-6" />
              {t('home.cta_button')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;