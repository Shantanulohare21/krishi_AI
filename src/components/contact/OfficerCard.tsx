import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Officer {
  name: string;
  position: string;
  district: string;
  phone: string;
  email: string;
  office: string;
  availability: string;
}

interface OfficerCardProps {
  officer: Officer;
}

export const OfficerCard: React.FC<OfficerCardProps> = ({ officer }) => {
  const { t } = useTranslation();

  return (
    <div className="p-4 border rounded-lg bg-white/50 backdrop-blur-sm hover:shadow-medium transition-all group">
      <div className="flex items-center mb-3">
        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
          <User className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h4 className="font-semibold text-sm text-text-primary">{officer.name}</h4>
          <p className="text-xs text-text-secondary">{officer.position}</p>
        </div>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex items-center">
          <MapPin className="h-3 w-3 text-primary mr-2" />
          <span className="font-medium text-text-primary">{officer.district}</span>
        </div>
        <div className="flex items-center">
          <Phone className="h-3 w-3 text-primary mr-2" />
          <span className="text-text-secondary">{officer.phone}</span>
        </div>
        <div className="flex items-start">
          <Mail className="h-3 w-3 text-primary mr-2 mt-1" />
          <span className="break-all text-text-secondary">{officer.email}</span>
        </div>
        <div className="flex items-start">
          <Clock className="h-3 w-3 text-primary mr-2 mt-1" />
          <span className="text-text-secondary">{officer.availability}</span>
        </div>
      </div>
      
      <div className="mt-3 flex space-x-2">
        <Button size="sm" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-white">
          <Phone className="h-3 w-3 mr-1" />
          {t('contact.officers.call')}
        </Button>
        <Button size="sm" variant="ghost" className="flex-1 text-primary hover:bg-primary/10">
          <Mail className="h-3 w-3 mr-1" />
          {t('contact.officers.email')}
        </Button>
      </div>
    </div>
  );
};
