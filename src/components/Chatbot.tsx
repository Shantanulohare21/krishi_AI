import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  Send, 
  X, 
  Minimize2, 
  Maximize2, 
  Bot,
  User,
  Mic,
  MicOff
} from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
}

interface ChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'नमस्कार! मैं कृषि AI सहायक हूं। मैं आपकी कृषि संबंधी समस्याओं में मदद कर सकता हूं। / Hello! I am Krishi AI Assistant. I can help you with agriculture-related queries.',
      sender: 'bot',
      timestamp: new Date(),
      suggestions: [
        'फसल सुझाव / Crop Recommendation',
        'मौसम की जानकारी / Weather Info',
        'सरकारी योजनाएं / Government Schemes',
        'बाजार भाव / Market Prices'
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const botResponses = {
    'फसल सुझाव': 'मिट्टी विश्लेषण के लिए /analyze पेज पर जाएं। वहां आप अपनी मिट्टी की जानकारी दे सकते हैं। / For soil analysis, visit the /analyze page where you can enter your soil information.',
    'मौसम': 'मौसम की जानकारी के लिए /weather पेज देखें। वहां आपको 5 दिन का मौसम पूर्वानुमान मिलेगा। / Check the /weather page for weather information including 5-day forecast.',
    'योजना': 'सरकारी योजनाओं की जानकारी /schemes पेज पर उपलब्ध है। PM-KISAN, फसल बीमा आदि की जानकारी मिलेगी। / Government schemes information is available on /schemes page including PM-KISAN, crop insurance etc.',
    'बाजार': 'बाजार भाव /market पेज पर देख सकते हैं। सभी मुख्य फसलों के आज के भाव उपलब्ध हैं। / Market prices are available on /market page with today\'s rates for all major crops.',
    'संपर्क': 'संपर्क जानकारी /contact पेज पर है। आपातकाल के लिए 1800-123-4567 पर कॉल करें। / Contact information is on /contact page. For emergency call 1800-123-4567.'
  };

  const quickSuggestions = [
    'धान की खेती / Rice farming',
    'खाद की जानकारी / Fertilizer info', 
    'PM-KISAN योजना / PM-KISAN scheme',
    'मौसम अलर्ट / Weather alert',
    'कृषि अधिकारी संपर्क / Officer contact',
    'फसल बीमा / Crop insurance'
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key.toLowerCase()) || 
          lowerMessage.includes(key.split(' / ')[0].toLowerCase()) ||
          lowerMessage.includes(key.split(' / ')[1]?.toLowerCase() || '')) {
        return response;
      }
    }

    // Default responses for common patterns
    if (lowerMessage.includes('हेल्लो') || lowerMessage.includes('नमस्कार') || lowerMessage.includes('hello')) {
      return 'नमस्कार! कृषि AI में आपका स्वागत है। मैं आपकी कैसे सहायता कर सकता हूं? / Hello! Welcome to Krishi AI. How can I help you?';
    }
    
    if (lowerMessage.includes('धन्यवाद') || lowerMessage.includes('thanks')) {
      return 'आपका स्वागत है! कोई और सवाल हो तो पूछिए। / You\'re welcome! Feel free to ask if you have any other questions.';
    }

    return 'मैं आपकी मदद करना चाहता हूं। कृपया अधिक स्पष्ट करें कि आप क्या जानना चाहते हैं। नीचे दिए गए सुझावों का उपयोग करें। / I want to help you. Please be more specific about what you want to know. Use the suggestions below.';
  };

  const handleSendMessage = (message: string = inputMessage) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateBotResponse(message),
        sender: 'bot',
        timestamp: new Date(),
        suggestions: quickSuggestions.slice(0, 4)
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const toggleVoiceRecognition = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.lang = 'hi-IN';
      recognition.continuous = false;
      recognition.interimResults = false;

      if (isListening) {
        recognition.stop();
        setIsListening(false);
      } else {
        recognition.start();
        setIsListening(true);

        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInputMessage(transcript);
          setIsListening(false);
        };

        recognition.onerror = () => {
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };
      }
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-strong bg-primary hover:bg-primary-light"
        size="lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className={`fixed bottom-6 right-6 z-50 w-96 shadow-strong transition-all duration-300 ${
      isMinimized ? 'h-16' : 'h-[32rem]'
    }`}>
      <CardHeader className="p-4 bg-gradient-primary text-primary-foreground rounded-t-lg">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center text-lg">
            <Bot className="mr-2 h-5 w-5" />
            कृषि AI सहायक / Krishi AI Assistant
            <Badge className="ml-2 bg-green-100 text-green-800 text-xs">ऑनलाइन / Online</Badge>
          </CardTitle>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-primary-foreground hover:bg-primary-light h-8 w-8 p-0"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="text-primary-foreground hover:bg-primary-light h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="p-0 flex flex-col h-[calc(32rem-4rem)]">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-earth">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground ml-4'
                      : 'bg-white shadow-soft mr-4'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && <Bot className="h-4 w-4 text-primary mt-1" />}
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <div className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString('hi-IN', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </div>
                    </div>
                    {message.sender === 'user' && <User className="h-4 w-4 text-primary-foreground mt-1" />}
                  </div>
                  
                  {message.suggestions && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {message.suggestions.map((suggestion, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-xs h-7 px-2"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t bg-white">
            <div className="flex space-x-2">
              <Input
                placeholder="अपना सवाल यहाँ लिखें / Type your question here..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
                className="flex-1"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleVoiceRecognition}
                className={`${isListening ? 'text-red-500' : 'text-muted-foreground'} h-10 w-10 p-0`}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>
              <Button 
                onClick={() => handleSendMessage()}
                className="h-10 w-10 p-0"
                disabled={!inputMessage.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-xs text-muted-foreground mt-2 text-center">
              बोलकर भी सवाल पूछ सकते हैं / You can also ask questions by voice
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};