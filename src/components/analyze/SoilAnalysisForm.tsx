import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { VoiceSupport } from '@/components/VoiceSupport';
import { Loader2, MapPin, Droplets, TestTube, Gauge, Beaker, Mic } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { VoiceInput } from './VoiceInput';

interface SoilData {
  pH: string;
  moisture: string;
  nitrogen: string;
  phosphorus: string;
  potassium: string;
  location: string;
  state: string;
  district: string;
}

interface SoilAnalysisFormProps {
  soilData: SoilData;
  onInputChange: (field: keyof SoilData, value: string) => void;
  onAnalyze: () => void;
  isLoading: boolean;
  indianStates: { key: string; label: string }[];
}

export const SoilAnalysisForm: React.FC<SoilAnalysisFormProps> = ({
  soilData,
  onInputChange,
  onAnalyze,
  isLoading,
  indianStates,
}) => {
  const { t } = useTranslation();

  return (
    <Card className="shadow-strong">
      <CardHeader className="bg-gradient-primary text-primary-foreground">
        <CardTitle className="flex items-center text-xl">
          <Beaker className="mr-2 h-5 w-5" />
          {t('analyze.form.title')}
        </CardTitle>
        <VoiceSupport text={t('analyze.form.title')} />
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="ph" className="flex items-center text-text-primary">
            <Gauge className="mr-2 h-4 w-4" />
            {t('analyze.form.ph_level')}
          </Label>
          <div className="flex space-x-2">
            <Input
              id="ph"
              type="number"
              step="0.1"
              min="0"
              max="14"
              value={soilData.pH}
              onChange={(e) => onInputChange('pH', e.target.value)}
              placeholder="6.5"
              className="flex-1"
            />
            <VoiceInput onTranscript={(v) => onInputChange('pH', v.replace(/[^0-9.]/g, ''))} />
          </div>
          <p className="text-xs text-text-secondary">
            {t('analyze.form.ph_normal')}
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="moisture" className="flex items-center text-text-primary">
            <Droplets className="mr-2 h-4 w-4" />
            {t('analyze.form.moisture')}
          </Label>
          <div className="flex space-x-2">
            <Input
              id="moisture"
              type="number"
              min="0"
              max="100"
              value={soilData.moisture}
              onChange={(e) => onInputChange('moisture', e.target.value)}
              placeholder="45"
              className="flex-1"
            />
            <VoiceInput onTranscript={(v) => onInputChange('moisture', v.replace(/[^0-9]/g, ''))} />
          </div>
          <p className="text-xs text-text-secondary">
            {t('analyze.form.moisture_normal')}
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="nitrogen" className="flex items-center text-text-primary">
            <TestTube className="mr-2 h-4 w-4" />
            {t('analyze.form.nitrogen')}
          </Label>
          <Select value={soilData.nitrogen} onValueChange={(value) => onInputChange('nitrogen', value)}>
            <SelectTrigger>
              <SelectValue placeholder={t('analyze.form.select_placeholder')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">{t('analyze.form.low')}</SelectItem>
              <SelectItem value="medium">{t('analyze.form.medium')}</SelectItem>
              <SelectItem value="high">{t('analyze.form.high')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phosphorus" className="flex items-center text-text-primary">
            <TestTube className="mr-2 h-4 w-4" />
            {t('analyze.form.phosphorus')}
          </Label>
          <Select value={soilData.phosphorus} onValueChange={(value) => onInputChange('phosphorus', value)}>
            <SelectTrigger>
              <SelectValue placeholder={t('analyze.form.select_placeholder')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">{t('analyze.form.low')}</SelectItem>
              <SelectItem value="medium">{t('analyze.form.medium')}</SelectItem>
              <SelectItem value="high">{t('analyze.form.high')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="potassium" className="flex items-center text-text-primary">
            <TestTube className="mr-2 h-4 w-4" />
            {t('analyze.form.potassium')}
          </Label>
          <Select value={soilData.potassium} onValueChange={(value) => onInputChange('potassium', value)}>
            <SelectTrigger>
              <SelectValue placeholder={t('analyze.form.select_placeholder')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">{t('analyze.form.low')}</SelectItem>
              <SelectItem value="medium">{t('analyze.form.medium')}</SelectItem>
              <SelectItem value="high">{t('analyze.form.high')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location" className="flex items-center text-text-primary">
            <MapPin className="mr-2 h-4 w-4" />
            {t('analyze.form.location')}
          </Label>
          <div className="flex space-x-2">
            <Input
              id="location"
              value={soilData.location}
              onChange={(e) => onInputChange('location', e.target.value)}
              placeholder={t('analyze.form.location_placeholder')}
              className="flex-1"
            />
            <VoiceInput onTranscript={(v) => onInputChange('location', v)} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="state" className="text-text-primary">
              {t('analyze.form.state')}
            </Label>
            <Input
              id="state"
              value={t('analyze.form.state')}
              disabled
              className="bg-muted"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="district" className="text-text-primary">
              {t('analyze.form.district')}
            </Label>
            <Select 
              value={soilData.district} 
              onValueChange={(value) => onInputChange('district', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder={t('analyze.form.district_placeholder')} />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(t('location.districts', { returnObjects: true })).map(([key, label]) => (
                  <SelectItem key={key} value={label as string}>
                    {label as string}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button 
          onClick={onAnalyze}
          className="w-full bg-primary hover:bg-primary-light text-primary-foreground py-3"
          disabled={isLoading}
          size="lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t('analyze.form.analyzing')}
            </>
          ) : (
            t('analyze.form.analyze')
          )}
        </Button>
      </CardContent>
    </Card>
  );
};
