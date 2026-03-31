import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { VoiceSupport } from '@/components/VoiceSupport';
import { 
  Target, 
  Users, 
  Lightbulb, 
  Shield, 
  Heart, 
  Award,
  Mail,
  Phone,
  MapPin,
  Sprout
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import farmerTechImage from '@/assets/farmer-tech.jpg';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Target,
      title: t('about.features.accurate.title'),
      description: t('about.features.accurate.desc')
    },
    {
      icon: Users,
      title: t('about.features.farmer_focused.title'),
      description: t('about.features.farmer_focused.desc')
    },
    {
      icon: Shield,
      title: t('about.features.reliable.title'),
      description: t('about.features.reliable.desc')
    },
    {
      icon: Lightbulb,
      title: t('about.features.innovation.title'),
      description: t('about.features.innovation.desc')
    }
  ];

  const team = [
    {
      name: t('about.team.member_1.name'),
      role: t('about.team.member_1.role'),
      description: t('about.team.member_1.desc')
    },
    {
      name: t('about.team.member_2.name'),
      role: t('about.team.member_2.role'),
      description: t('about.team.member_2.desc')
    },
    {
      name: t('about.team.member_3.name'),
      role: t('about.team.member_3.role'),
      description: t('about.team.member_3.desc')
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-earth">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sprout className="h-10 w-10 md:h-12 md:w-12 text-primary mr-3 md:mr-4" />
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              {t('brand.name')}
            </h1>
          </div>
          <h2 className="text-xl md:text-3xl font-semibold text-primary mb-4 px-2">
            {t('about.title')}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 px-4">
            {t('about.subtitle')}
          </p>
          <VoiceSupport text={t('about.voice')} />
        </div>

        {/* Mission Section */}
        <Card className="mb-12 shadow-medium border-none bg-white/70 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Heart className="h-6 w-6 text-primary mr-3" />
                  {t('about.mission.title')}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {t('about.mission.desc')}
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Link to="/analyze">
                    <Button variant="default" size="lg" className="w-full sm:w-auto">
                      <Sprout className="mr-2 h-5 w-5" />
                      {t('common.start_now')}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src={farmerTechImage} 
                  alt="Farmer with technology" 
                  className="rounded-xl shadow-strong w-full h-auto object-cover max-h-[300px] lg:max-h-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center px-4">
            {t('about.features.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-all border-none bg-white/80">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg md:text-xl">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-10 text-center px-4">
            {t('about.team.title')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-medium border-none bg-white/90 hover:-translate-y-1 transition-transform">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h4>
                  <p className="text-primary font-semibold text-sm mb-4 uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <Card className="mb-16 shadow-medium bg-primary text-primary-foreground border-none">
          <CardContent className="p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-10 text-center">
              {t('about.achievements.title')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold">10,000+</div>
                <div className="text-xs md:text-sm opacity-80 uppercase tracking-wide">{t('about.achievements.farmers')}</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold">36</div>
                <div className="text-xs md:text-sm opacity-80 uppercase tracking-wide">{t('about.achievements.districts')}</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold">95%</div>
                <div className="text-xs md:text-sm opacity-80 uppercase tracking-wide">{t('about.achievements.accuracy')}</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold">30%</div>
                <div className="text-xs md:text-sm opacity-80 uppercase tracking-wide">{t('about.achievements.income')}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="shadow-medium border-none bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center text-2xl">
              <Mail className="h-6 w-6 text-primary mr-3" />
              {t('about.contact.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="font-bold text-lg mb-1">{t('about.contact.email_label')}</div>
                <div className="text-muted-foreground text-sm">{t('about.contact.email_value')}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="font-bold text-lg mb-1">{t('about.contact.helpline_label')}</div>
                <div className="text-muted-foreground text-sm">{t('about.contact.helpline_value')}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="font-bold text-lg mb-1">{t('about.contact.address_label')}</div>
                <div className="text-muted-foreground text-sm">{t('about.contact.address_value')}</div>
              </div>
            </div>
            
            <div className="text-center pt-6 border-t border-primary/10">
              <p className="text-muted-foreground mb-8">
                {t('about.contact.availability')}
              </p>
              <Link to="/analyze">
                <Button variant="default" size="lg" className="w-full sm:w-auto px-10 py-6 h-auto text-lg shadow-lg hover:shadow-xl transition-all">
                  <Award className="mr-2 h-6 w-6" />
                  {t('about.contact.start_today')}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;