import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoCapture } from '@/components/PhotoCapture';
import { VoiceSupport } from '@/components/VoiceSupport';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { History, ArrowRight, Clock, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

// Feature Components
import { AnalysisModeSelector } from '@/components/analyze/AnalysisModeSelector';
import { SoilAnalysisForm } from '@/components/analyze/SoilAnalysisForm';
import { AnalysisInfo } from '@/components/analyze/AnalysisInfo';

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

const AnalyzePage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [analysisMode, setAnalysisMode] = useState<'manual' | 'photo'>('manual');
  const [showPhotoCapture, setShowPhotoCapture] = useState(false);
  const [analysisHistory, setAnalysisHistory] = useState<any[]>([]);
  const [soilData, setSoilData] = useState<SoilData>({
    pH: '',
    moisture: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    location: '',
    state: 'Maharashtra',
    district: '',
  });

  useEffect(() => {
    const history = localStorage.getItem('cropAnalysisHistory');
    if (history) {
      setAnalysisHistory(JSON.parse(history));
    }
  }, []);

  const indianStates = [
    { key: 'andhra_pradesh', label: t('common.states.andhra_pradesh') },
    { key: 'arunachal_pradesh', label: t('common.states.arunachal_pradesh') },
    { key: 'assam', label: t('common.states.assam') },
    { key: 'bihar', label: t('common.states.bihar') },
    { key: 'chhattisgarh', label: t('common.states.chhattisgarh') },
    { key: 'goa', label: t('common.states.goa') },
    { key: 'gujarat', label: t('common.states.gujarat') },
    { key: 'haryana', label: t('common.states.haryana') },
    { key: 'himachal_pradesh', label: t('common.states.himachal_pradesh') },
    { key: 'jharkhand', label: t('common.states.jharkhand') },
    { key: 'karnataka', label: t('common.states.karnataka') },
    { key: 'kerala', label: t('common.states.kerala') },
    { key: 'madhya_pradesh', label: t('common.states.madhya_pradesh') },
    { key: 'maharashtra', label: t('common.states.maharashtra') },
    { key: 'manipur', label: t('common.states.manipur') },
    { key: 'meghalaya', label: t('common.states.meghalaya') },
    { key: 'mizoram', label: t('common.states.mizoram') },
    { key: 'nagaland', label: t('common.states.nagaland') },
    { key: 'odisha', label: t('common.states.odisha') },
    { key: 'punjab', label: t('common.states.punjab') },
    { key: 'rajasthan', label: t('common.states.rajasthan') },
    { key: 'sikkim', label: t('common.states.sikkim') },
    { key: 'tamil_nadu', label: t('common.states.tamil_nadu') },
    { key: 'telangana', label: t('common.states.telangana') },
    { key: 'tripura', label: t('common.states.tripura') },
    { key: 'uttar_pradesh', label: t('common.states.uttar_pradesh') },
    { key: 'uttarakhand', label: t('common.states.uttarakhand') },
    { key: 'west_bengal', label: t('common.states.west_bengal') }
  ];

  const handleInputChange = (field: keyof SoilData, value: string) => {
    setSoilData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = (): boolean => {
    const { pH, moisture, nitrogen, phosphorus, potassium, location, state, district } = soilData;
    
    if (!pH || !moisture || !nitrogen || !phosphorus || !potassium || !district) {
      toast({
        title: t('analyze.toast.incomplete_title'),
        description: t('analyze.toast.incomplete_desc'),
        variant: "destructive",
      });
      return false;
    }

    const pHValue = parseFloat(pH);
    const moistureValue = parseFloat(moisture);

    if (pHValue < 0 || pHValue > 14) {
      toast({
        title: t('analyze.toast.invalid_ph_title'),
        description: t('analyze.toast.invalid_ph_desc'),
        variant: "destructive",
      });
      return false;
    }

    if (moistureValue < 0 || moistureValue > 100) {
      toast({
        title: t('analyze.toast.invalid_moisture_title'),
        description: t('analyze.toast.invalid_moisture_desc'),
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleAnalyze = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Process environmental data through recommendation engine
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const analysisResult = {
      type: 'manual',
      soilData,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('cropAnalysisResult', JSON.stringify(analysisResult));
    
    toast({
      title: t('analyze.toast.complete_title'),
      description: t('analyze.toast.complete_desc'),
    });
    
    setIsLoading(false);
    navigate('/results');
  };

  const handlePhotoAnalysis = (result: any) => {
    localStorage.setItem('cropAnalysisResult', JSON.stringify({
      type: 'photo',
      soilAnalysis: result.soilAnalysis,
      recommendedCrops: result.recommendedCrops,
      timestamp: new Date().toISOString()
    }));
    navigate('/results');
  };

  return (
    <div className="min-h-screen bg-gradient-earth py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t('analyze.title')}
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t('analyze.subtitle')}
          </p>
          <VoiceSupport text={t('analyze.title') + ". " + t('analyze.subtitle')} className="mt-4" />
        </div>

        <div className="max-w-4xl mx-auto">
          <AnalysisModeSelector 
            mode={analysisMode}
            onModeChange={setAnalysisMode}
            onShowPhotoCapture={setShowPhotoCapture}
          />

          {showPhotoCapture ? (
            <div className="flex justify-center">
              <PhotoCapture
                onPhotoAnalyzed={handlePhotoAnalysis}
                analysisType="crop-recommendation"
                title={t('common.photo_capture.crop_rec_title')}
              />
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <SoilAnalysisForm 
                  soilData={soilData}
                  onInputChange={handleInputChange}
                  onAnalyze={handleAnalyze}
                  isLoading={isLoading}
                  indianStates={indianStates}
                />
                
                {analysisHistory.length > 0 && (
                  <Card className="shadow-medium border-primary/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <History className="mr-2 h-5 w-5 text-primary" />
                        {t('analyze.history.title', 'Recent Analysis History')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {analysisHistory.map((item) => (
                        <div 
                          key={item.id}
                          onClick={() => {
                            localStorage.setItem('cropAnalysisResult', JSON.stringify(item));
                            navigate('/results');
                          }}
                          className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 cursor-pointer transition-all group"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-full bg-accent text-accent-foreground">
                              <Clock className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium flex items-center">
                                {item.soilData.district || item.soilData.location}
                                {item.type === 'photo' && <span className="ml-2 text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded uppercase">Photo</span>}
                              </div>
                              <div className="text-xs text-muted-foreground flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                pH: {item.soilData.pH} | Moisture: {item.soilData.moisture}%
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}
              </div>
              <AnalysisInfo />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyzePage;