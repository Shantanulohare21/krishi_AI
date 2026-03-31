import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { VoiceSupport } from '@/components/VoiceSupport';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

// Feature Components
import { SoilSummaryCard } from '@/components/results/SoilSummaryCard';
import { RecommendationCard } from '@/components/results/RecommendationCard';
import { MAHARASHTRA_DISTRICTS } from '@/data/maharashtra';
import { Card, CardContent } from '@/components/ui/card';
import { Info } from 'lucide-react';

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

interface CropRecommendation {
  name: string;
  translatedName: string;
  suitability: number;
  expectedYield: string;
  profitEstimate: string;
  season: string;
  reasons: string[];
  tips: string[];
}

const ResultsPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [soilData, setSoilData] = useState<SoilData | null>(null);
  const [recommendations, setRecommendations] = useState<CropRecommendation[]>([]);

  useEffect(() => {
    const savedResult = localStorage.getItem('cropAnalysisResult');
    if (!savedResult) {
      toast({
        title: t('results.no_data.title'),
        description: t('results.no_data.desc'),
        variant: "destructive",
      });
      navigate('/analyze');
      return;
    }

    const { soilData: data, soilAnalysis, recommendedCrops, type, timestamp } = JSON.parse(savedResult);
    
    // Normalize data structure for both manual and photo types
    const currentSoilData = type === 'manual' ? data : soilAnalysis;
    const currentRecommendations = type === 'manual' ? null : recommendedCrops;

    setSoilData(currentSoilData);
    
    if (type === 'manual') {
      generateRecommendations(currentSoilData);
    } else {
      setRecommendations(currentRecommendations);
    }

    // Save to history
    const saveToHistory = () => {
      const historyStr = localStorage.getItem('cropAnalysisHistory') || '[]';
      const history = JSON.parse(historyStr);
      
      const newEntry = {
        id: Date.now().toString(),
        soilData: currentSoilData,
        type,
        timestamp: timestamp || new Date().toISOString(),
        // For photo analysis, we store the top crop name
        topCrop: type === 'manual' ? null : recommendedCrops?.[0]?.name
      };

      // Avoid duplicates based on timestamp/data
      const isDuplicate = history.some((h: any) => h.timestamp === newEntry.timestamp);
      if (!isDuplicate) {
        const updatedHistory = [newEntry, ...history].slice(0, 5);
        localStorage.setItem('cropAnalysisHistory', JSON.stringify(updatedHistory));
      }
    };

    saveToHistory();
  }, [navigate, toast, t]);

  const generateRecommendations = (data: SoilData) => {
    // Recommendation engine processing based on environmental parameters
    const pH = parseFloat(data.pH);
    const moisture = parseFloat(data.moisture);
    const districtInfo = data.district ? MAHARASHTRA_DISTRICTS[data.district] : null;
    const primaryCrops = districtInfo?.primaryCrops || [];
    
    const reco: CropRecommendation[] = [];

    const cropsData = t('results.crops', { returnObjects: true }) as any;

    if (moisture > 60 && pH >= 6.0 && pH <= 7.5) {
      const isPrimary = primaryCrops.includes('Rice') || primaryCrops.includes('Paddy');
      reco.push({
        name: "Rice",
        translatedName: cropsData.rice.name,
        suitability: isPrimary ? 98 : 92,
        expectedYield: cropsData.rice.expectedYield,
        profitEstimate: cropsData.rice.profitEstimate,
        season: cropsData.rice.season,
        reasons: [
          ...cropsData.rice.reasons || [],
          isPrimary ? t('results.reasons.regional_match', 'Perfect match for {{region}} regional profile', { region: districtInfo?.region }) : null
        ].filter(Boolean) as string[],
        tips: cropsData.rice.tips || []
      });
    }

    if (moisture >= 35 && moisture <= 65 && pH >= 6.5 && pH <= 8.0) {
      reco.push({
        name: "Wheat",
        translatedName: cropsData.wheat.name,
        suitability: 88,
        expectedYield: cropsData.wheat.expectedYield,
        profitEstimate: cropsData.wheat.profitEstimate,
        season: cropsData.wheat.season,
        reasons: cropsData.wheat.reasons || [],
        tips: cropsData.wheat.tips || []
      });
    }

    if (moisture > 50 && pH >= 6.0 && pH <= 7.5) {
      const isPrimary = primaryCrops.includes('Sugarcane');
      reco.push({
        name: "Sugarcane",
        translatedName: cropsData.sugarcane.name,
        suitability: isPrimary ? 90 : 82,
        expectedYield: cropsData.sugarcane.expectedYield,
        profitEstimate: cropsData.sugarcane.profitEstimate,
        season: cropsData.sugarcane.season,
        reasons: [
          ...cropsData.sugarcane.reasons || [],
          isPrimary ? t('results.reasons.regional_match', 'Historically high yield in {{district}}', { district: data.district }) : null
        ].filter(Boolean) as string[],
        tips: cropsData.sugarcane.tips || []
      });
    }

    if (pH >= 6.0 && pH <= 7.0 && moisture >= 40) {
      reco.push({
        name: "Tomato",
        translatedName: cropsData.tomato.name,
        suitability: 75,
        expectedYield: cropsData.tomato.expectedYield,
        profitEstimate: cropsData.tomato.profitEstimate,
        season: cropsData.tomato.season,
        reasons: cropsData.tomato.reasons || [],
        tips: cropsData.tomato.tips || []
      });
    }

    setRecommendations(reco.sort((a, b) => b.suitability - a.suitability));
  };

  const getSoilHealthStatus = () => {
    const defaultRes = { status: 'unknown', color: 'gray', text: t('results.health.unknown') };
    if (!soilData) return defaultRes;
    
    const pH = parseFloat(soilData.pH);
    const moisture = parseFloat(soilData.moisture);
    
    if (pH >= 6.0 && pH <= 7.5 && moisture >= 40 && moisture <= 70) {
      return { status: 'excellent', color: 'success', text: t('results.health.excellent') };
    } else if (pH >= 5.5 && pH <= 8.0 && moisture >= 30 && moisture <= 80) {
      return { status: 'good', color: 'accent', text: t('results.health.good') };
    } else {
      return { status: 'needs-improvement', color: 'secondary', text: t('results.health.needs_improvement') };
    }
  };

  if (!soilData) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  const soilHealth = getSoilHealthStatus();
  const districtInfo = soilData?.district ? MAHARASHTRA_DISTRICTS[soilData.district] : null;
  const resultsText = t('results.header.voice', { health: soilHealth.text, count: recommendations.length });

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-earth">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t('results.header.title')}
          </h1>
          <p className="text-lg text-text-secondary mb-4">
            {t('results.header.subtitle')}
          </p>
          <VoiceSupport text={resultsText} />
        </div>

        <SoilSummaryCard soilData={soilData} soilHealth={soilHealth} />

        {districtInfo && (
          <Card className="mb-8 border-accent/20 bg-accent/5">
            <CardContent className="p-4 flex items-start space-x-4">
              <div className="p-2 rounded-full bg-accent text-accent-foreground mt-1">
                <Info className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1">
                  {t('results.regional.title', '{{region}} Regional Insights', { region: districtInfo.region })}
                </h3>
                <p className="text-sm text-text-secondary">
                  {t('results.regional.desc', 'In {{district}}, the prevalent {{soil}} is ideal for cultivation of crops like {{crops}}.', {
                    district: soilData.district,
                    soil: districtInfo.soilType,
                    crops: districtInfo.primaryCrops.join(', ')
                  })}
                </p>
                {districtInfo.region === 'Vidarbha' && (
                  <p className="text-xs text-primary font-medium mt-2">
                    {t('results.regional.tip_vidarbha', '💡 Pro Tip: Cotton harvesting is best completed before the late-October chill.')}
                  </p>
                )}
                {districtInfo.region === 'Konkan' && (
                  <p className="text-xs text-primary font-medium mt-2">
                    {t('results.regional.tip_konkan', '💡 Pro Tip: Ensure proper drainage for Mango orchards during the intense monsoon.')}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            {t('results.recommendations.title')}
          </h2>
          
          {recommendations.length > 0 ? (
            recommendations.map((crop, index) => (
              <RecommendationCard 
                key={index} 
                crop={crop} 
                isBest={index === 0} 
              />
            ))
          ) : (
            <div className="text-center py-12 bg-white/50 rounded-xl">
              <p className="text-lg text-text-secondary">{t('results.no_recommendations')}</p>
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/analyze" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-10">
              {t('results.actions.new_analysis')}
            </Button>
          </Link>
          <Button 
            variant="default" 
            size="lg"
            className="w-full sm:w-auto px-10"
            onClick={() => {
              const shareData = {
                title: t('results.actions.share_title'),
                text: resultsText,
                url: window.location.href,
              };
              if (navigator?.share) {
                navigator.share(shareData);
              } else {
                navigator.clipboard.writeText(window.location.href);
                toast({
                  title: t('results.actions.copied'),
                  description: t('results.actions.copied_desc'),
                });
              }
            }}
          >
            {t('results.actions.share')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;