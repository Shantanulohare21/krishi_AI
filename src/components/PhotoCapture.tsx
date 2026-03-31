import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Upload, X, CheckCircle, AlertTriangle } from 'lucide-react';
import { VoiceSupport } from './VoiceSupport';

interface PhotoCaptureProps {
  onPhotoAnalyzed: (result: any) => void;
  analysisType: 'crop-recommendation' | 'disease-detection';
  title: string;
}

export const PhotoCapture: React.FC<PhotoCaptureProps> = ({ 
  onPhotoAnalyzed, 
  analysisType, 
  title 
}) => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment', width: 1280, height: 720 } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setShowCamera(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('कैमरा एक्सेस करने में समस्या / Camera access error');
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL('image/jpeg', 0.8);
        setCapturedImage(imageData);
        stopCamera();
        analyzePhoto(imageData);
      }
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
    }
    setShowCamera(false);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target?.result as string;
        setCapturedImage(imageData);
        analyzePhoto(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzePhoto = async (imageData: string) => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockResults = {
      'crop-recommendation': {
        recommendedCrops: [
          { name: 'कापूस / Cotton', confidence: 92, reason: 'विदर्भातील काळी माती कापसासाठी उत्तम / Vidarbha black soil is perfect for cotton' },
          { name: 'सोयाबीन / Soybean', confidence: 88, reason: 'मध्यम पाऊस आणि सुपीक जमीन / Moderate rain and fertile soil' },
          { name: 'संत्रा / Orange', confidence: 85, reason: 'नागपूर हवामान आणि माती अनुकूल / Nagpur climate and soil suitable' }
        ],
        soilAnalysis: {
          ph: 6.8,
          moisture: 45,
          nitrogen: 'मध्यम / Moderate',
          phosphorus: 'चांगला / Good',
          potassium: 'उच्च / High'
        }
      },
      'disease-detection': {
        diseaseDetected: true,
        diseaseName: 'कापसाची बोंडअळी / Pink Bollworm (Cotton)',
        severity: 'गंभीर / High',
        treatment: [
          'कामगंध सापळे लावा / Use Pheromone traps',
          'निम अर्क फवारणी / Spray Neem extract',
          'रोगग्रस्त बोंडे नष्ट करा / Destroy infected bolls'
        ],
        prevention: [
          'वेळेवर पेरणी / Timely sowing',
          'पीक फेरपालट / Crop rotation',
          'प्रमाणित बियाणे वापरा / Use certified seeds'
        ]
      }
    };

    setIsAnalyzing(false);
    onPhotoAnalyzed(mockResults[analysisType]);
  };

  const resetCapture = () => {
    setCapturedImage(null);
    setIsAnalyzing(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-strong">
      <CardHeader className="bg-gradient-primary text-primary-foreground">
        <CardTitle className="flex items-center text-lg">
          <Camera className="mr-2 h-5 w-5" />
          {title}
        </CardTitle>
        <VoiceSupport text={title} className="mt-2" />
      </CardHeader>

      <CardContent className="p-6">
        {!showCamera && !capturedImage && (
          <div className="space-y-4">
            <div className="text-center text-sm text-muted-foreground mb-4">
              फसल या खेत की तस्वीर लें / Take photo of crop or field
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              <Button 
                onClick={startCamera}
                className="h-16 bg-primary hover:bg-primary-light text-white"
                size="lg"
              >
                <Camera className="mr-2 h-6 w-6" />
                कैमरा खोलें / Open Camera
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="h-16"
                size="lg"
              >
                <Upload className="mr-2 h-6 w-6" />
                गैलरी से चुनें / Select from Gallery
              </Button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
        )}

        {showCamera && (
          <div className="space-y-4">
            <div className="relative bg-black rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <Button 
                  onClick={capturePhoto}
                  size="lg"
                  className="bg-primary hover:bg-primary-light rounded-full w-16 h-16"
                >
                  <Camera className="h-6 w-6" />
                </Button>
                <Button 
                  onClick={stopCamera}
                  variant="outline"
                  size="lg"
                  className="bg-white rounded-full w-16 h-16"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <canvas ref={canvasRef} className="hidden" />
          </div>
        )}

        {capturedImage && (
          <div className="space-y-4">
            <div className="relative">
              <img 
                src={capturedImage} 
                alt="Captured" 
                className="w-full h-64 object-cover rounded-lg"
              />
              {!isAnalyzing && (
                <Button
                  onClick={resetCapture}
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2 bg-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {isAnalyzing && (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                <p className="text-sm text-muted-foreground">
                  AI विश्लेषण हो रहा है... / AI analyzing...
                </p>
              </div>
            )}

            {!isAnalyzing && (
              <div className="flex space-x-2">
                <Button 
                  onClick={() => analyzePhoto(capturedImage)}
                  className="flex-1 bg-primary hover:bg-primary-light"
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  विश्लेषण करें / Analyze
                </Button>
                <Button 
                  onClick={resetCapture}
                  variant="outline"
                  className="flex-1"
                >
                  दोबारा लें / Retake
                </Button>
              </div>
            )}
          </div>
        )}

        <div className="mt-4 p-3 bg-accent rounded-lg">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-4 w-4 text-amber-600 mt-1 flex-shrink-0" />
            <div className="text-xs text-muted-foreground">
              <p className="font-medium mb-1">सुझाव / Tips:</p>
              <ul className="space-y-1">
                <li>• अच्छी रोशनी में फोटो लें / Take photo in good light</li>
                <li>• फसल को पास से दिखाएं / Show crop closely</li>
                <li>• साफ तस्वीर लें / Take clear picture</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};