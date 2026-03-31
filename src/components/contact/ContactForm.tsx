import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { MessageSquare, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ContactFormState {
  name: string;
  district: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  category: string;
}

export const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    district: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    category: ''
  });

  const districts = Object.values(t('common.states', { returnObjects: true })) as string[];
  const categoriesList = Object.values(t('contact.categories', { returnObjects: true })) as string[];

  const handleInputChange = (field: keyof ContactFormState, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Professional implementation for a portfolio would typically include form validation and submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <Card className="shadow-medium border-none bg-white/70 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center text-primary">
          <MessageSquare className="mr-2 h-5 w-5" />
          {t('contact.form.title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-text-primary">{t('contact.form.name')}</Label>
              <Input
                id="name"
                placeholder={t('contact.form.name_placeholder')}
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-text-primary">{t('contact.form.phone')}</Label>
              <Input
                id="phone"
                placeholder={t('contact.form.phone_placeholder')}
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                className="bg-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-text-primary">{t('contact.form.email')}</Label>
            <Input
              id="email"
              type="email"
              placeholder={t('contact.form.email_placeholder')}
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="bg-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="district" className="text-text-primary">{t('contact.form.district')}</Label>
              <Select onValueChange={(value) => handleInputChange('district', value)}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder={t('contact.form.district_placeholder')} />
                </SelectTrigger>
                <SelectContent>
                  {districts.map((district, i) => (
                    <SelectItem key={i} value={district}>
                      {district}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="category" className="text-text-primary">{t('contact.form.category')}</Label>
              <Select onValueChange={(value) => handleInputChange('category', value)}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder={t('contact.form.category_placeholder')} />
                </SelectTrigger>
                <SelectContent>
                  {categoriesList.map((category, i) => (
                    <SelectItem key={i} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-text-primary">{t('contact.form.subject')}</Label>
            <Input
              id="subject"
              placeholder={t('contact.form.subject_placeholder')}
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              required
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-text-primary">{t('contact.form.message')}</Label>
            <Textarea
              id="message"
              placeholder={t('contact.form.message_placeholder')}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              rows={5}
              required
              className="bg-white"
            />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary-light text-white">
            <Send className="mr-2 h-4 w-4" />
            {t('contact.form.submit')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
