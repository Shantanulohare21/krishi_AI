import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { VoiceSupport } from '@/components/VoiceSupport';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  MessageSquare,
  AlertCircle,
  Users
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Feature Components
import { ContactForm } from '@/components/contact/ContactForm';
import { OfficerCard } from '@/components/contact/OfficerCard';

interface Officer {
  name: string;
  position: string;
  district: string;
  phone: string;
  email: string;
  office: string;
  availability: string;
}

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const officers = (t('contact.officers.list', { returnObjects: true }) || []) as Officer[];

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-earth">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 text-center text-text-primary">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-text-secondary mb-4">
            {t('contact.subtitle')}
          </p>
          <VoiceSupport text={t('contact.voice')} />
        </div>

        <Card className="mb-8 shadow-medium border-l-4 border-l-red-500 bg-white/70 backdrop-blur-sm border-none overflow-hidden relative">
           <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
              <h3 className="text-xl font-bold text-red-600">
                {t('contact.emergency.title')}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-red-500" />
                </div>
                <div className="font-semibold text-text-primary">{t('contact.emergency.helpline')}</div>
                <div className="text-xl font-bold text-red-600">1800-120-8040</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-8 w-8 text-blue-500" />
                </div>
                <div className="font-semibold text-text-primary">{t('contact.emergency.whatsapp')}</div>
                <div className="text-xl font-bold text-blue-600">+91-98765-43210</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8 text-green-500" />
                </div>
                <div className="font-semibold text-text-primary">{t('contact.emergency.email')}</div>
                <div className="text-md font-bold text-green-600 break-all">agrihelpline.mah@gov.in</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />

          <div className="space-y-6">
            <Card className="shadow-medium border-none bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Building className="mr-2 h-5 w-5" />
                  {t('contact.hq.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary mb-1">{t('contact.hq.address')}</div>
                      <div className="text-text-secondary whitespace-pre-line text-sm leading-relaxed">
                        {t('contact.hq.address_value')}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary mb-1">{t('contact.hq.phone')}</div>
                      <div className="text-text-secondary text-sm">020-25510656</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary mb-1">{t('contact.hq.email')}</div>
                      <div className="text-text-secondary text-sm">info.agri-mah@gov.in</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary mb-1">{t('contact.hq.hours')}</div>
                      <div className="text-text-secondary text-sm whitespace-pre-line leading-relaxed">
                        {t('contact.hq.hours_value')}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-none bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Users className="mr-2 h-5 w-5" />
                  {t('contact.quick.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 border border-primary/20 rounded-lg text-center hover:bg-primary/5 transition-colors cursor-pointer">
                    <Phone className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="text-xs font-semibold text-text-primary">{t('contact.quick.missed')}</div>
                  </div>
                  <div className="p-3 border border-primary/20 rounded-lg text-center hover:bg-primary/5 transition-colors cursor-pointer">
                    <MessageSquare className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="text-xs font-semibold text-text-primary">{t('contact.quick.sms')}: 56767</div>
                  </div>
                  <div className="p-3 border border-primary/20 rounded-lg text-center hover:bg-primary/5 transition-colors cursor-pointer sm:col-span-2">
                    <Mail className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="text-xs font-semibold text-text-primary">{t('contact.quick.complaint')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mt-8 shadow-medium border-none bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-primary">
              <Users className="mr-2 h-5 w-5" />
              {t('contact.officers.title')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {officers.map((officer, index) => (
                <OfficerCard key={index} officer={officer} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 shadow-medium bg-gradient-primary border-none">
          <CardContent className="p-10 text-center text-primary-foreground">
            <Clock className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-6">
              {t('contact.response.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Badge className="bg-red-500 text-white mb-3 border-none">{t('contact.response.emergency')}</Badge>
                <div className="font-semibold">{t('contact.response.immediate')}</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Badge className="bg-yellow-500 text-white mb-3 border-none">{t('contact.response.normal')}</Badge>
                <div className="font-semibold">{t('contact.response.hours24')}</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Badge className="bg-blue-500 text-white mb-3 border-none">{t('contact.response.info')}</Badge>
                <div className="font-semibold">{t('contact.response.hours48')}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;