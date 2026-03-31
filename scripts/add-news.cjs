const fs = require('fs');
const path = require('path');

const locales = ['en', 'hi', 'mr', 'ur'];
const localesDir = path.join(__dirname, '../src/locales');

const newTranslations = {
  en: {
    news: {
      title: "Agricultural News",
      subtitle: "Government of Jharkhand - Agriculture Department",
      voice: "Agriculture News: New crop insurance scheme launched, heavy rainfall warning, digital agriculture training program available. Read news for more information.",
      badges: {
        featured: "Featured News",
        urgent: "Urgent",
        normal: "Normal",
        info: "Info"
      },
      labels: {
        views: "views",
        read_full: "Read Full",
        share: "Share",
        read: "Read",
        categories: "News Categories:"
      },
      categories: {
        all: "All",
        weather: "Weather",
        schemes: "Schemes",
        training: "Training",
        market: "Market"
      },
      newsletter: {
        title: "Newsletter Subscription",
        desc: "Get latest agricultural news, government scheme updates and weather alerts directly on your mobile",
        sms: "SMS Service",
        whatsapp: "WhatsApp",
        note: "Free service - only SMS charges apply"
      },
      contact: {
        title: "News Tips or Suggestions",
        desc: "Want to share important information?",
        submit: "Submit News",
        contactus: "Contact Us: news@jharkhand-agri.gov.in"
      },
      list: [
        {
          id: '1',
          title: 'New Crop Insurance Scheme Launched',
          titleHindi: 'Pradhan Mantri Fasal Bima',
          summary: 'Jharkhand government has launched a new crop insurance scheme for farmers that provides better protection against natural calamities.',
          content: 'Detailed content about the new crop insurance scheme...',
          category: 'Government Scheme',
          date: '2024-01-15',
          readTime: '3 min',
          priority: 'high',
          views: 1250
        },
        {
          id: '2',
          title: 'Weather Alert: Heavy Rainfall Expected',
          titleHindi: 'Heavy Rainfall Warning',
          summary: 'Heavy rainfall expected in many districts of Jharkhand in the next 48 hours. Farmers are advised to protect their crops.',
          content: 'Weather alert details and precautionary measures...',
          category: 'Weather',
          date: '2024-01-14',
          readTime: '2 min',
          priority: 'high',
          views: 890
        },
        {
          id: '3',
          title: 'Digital Agriculture Training Program',
          titleHindi: 'Digital Training Program',
          summary: 'Free digital agriculture training program launched for farmers. Learn to increase production using modern techniques.',
          content: 'Details about digital agriculture training...',
          category: 'Training',
          date: '2024-01-13',
          readTime: '4 min',
          priority: 'medium',
          views: 654
        },
        {
          id: '4',
          title: 'Record Rice Production This Year',
          titleHindi: 'Record Rice Yield',
          summary: 'Rice production in Jharkhand has reached record levels this year. Farmers achieved higher yield using better techniques.',
          content: 'Details about record rice production...',
          category: 'Production',
          date: '2024-01-12',
          readTime: '3 min',
          priority: 'medium',
          views: 432
        },
        {
          id: '5',
          title: 'Organic Farming Subsidy Increased',
          titleHindi: 'Organic Farming Subsidy',
          summary: 'The state government has increased subsidy rates to encourage organic farming. Farmers will now get up to 50% subsidy.',
          content: 'Details about organic farming subsidy...',
          category: 'Government Scheme',
          date: '2024-01-11',
          readTime: '2 min',
          priority: 'low',
          views: 321
        }
      ]
    }
  },
  hi: {
    news: {
      title: "कृषि समाचार",
      subtitle: "झारखंड सरकार - कृषि विभाग",
      voice: "कृषि समाचार: नई फसल बीमा योजना शुरू, भारी बारिश की चेतावनी, डिजिटल कृषि प्रशिक्षण कार्यक्रम उपलब्ध। अधिक जानकारी के लिए समाचार पढ़ें।",
      badges: {
        featured: "मुख्य समाचार",
        urgent: "जरूरी",
        normal: "सामान्य",
        info: "सूचना"
      },
      labels: {
        views: "बार देखा गया",
        read_full: "पूरा पढ़ें",
        share: "साझा करें",
        read: "पढ़ें",
        categories: "समाचार श्रेणी:"
      },
      categories: {
        all: "सभी",
        weather: "मौसम",
        schemes: "योजनाएं",
        training: "प्रशिक्षण",
        market: "बाजार"
      },
      newsletter: {
        title: "समाचार सेवा",
        desc: "नवीनतम कृषि समाचार, सरकारी योजनाओं की जानकारी और मौसम अपडेट सीधे अपने मोबाइल पर पाएं",
        sms: "SMS सेवा",
        whatsapp: "व्हाट्सऐप",
        note: "मुफ्त सेवा - केवल SMS शुल्क लागू"
      },
      contact: {
        title: "समाचार टिप या सुझाव",
        desc: "कोई महत्वपूर्ण जानकारी साझा करना चाहते हैं?",
        submit: "समाचार भेजें",
        contactus: "संपर्क करें: news@jharkhand-agri.gov.in"
      },
      list: [
        {
          id: '1',
          title: 'नई फसल बीमा योजना शुरू',
          titleHindi: 'नई फसल बीमा योजना शुरू',
          summary: 'झारखंड सरकार ने किसानों के लिए नई फसल बीमा योजना की शुरुआत की है जो प्राकृतिक आपदाओं से बेहतर सुरक्षा प्रदान करती है।',
          content: 'Detailed content about the new crop insurance scheme...',
          category: 'सरकारी योजना',
          date: '2024-01-15',
          readTime: '3 मिनट',
          priority: 'high',
          views: 1250
        },
        {
          id: '2',
          title: 'मौसम चेतावनी: भारी बारिश की संभावना',
          titleHindi: 'मौसम चेतावनी: भारी बारिश की संभावना',
          summary: 'अगले 48 घंटों में झारखंड के कई जिलों में भारी बारिश की संभावना। किसानों को सलाह दी गई है कि वे अपनी फसल की सुरक्षा करें।',
          content: 'Weather alert details and precautionary measures...',
          category: 'मौसम',
          date: '2024-01-14',
          readTime: '2 मिनट',
          priority: 'high',
          views: 890
        },
        {
          id: '3',
          title: 'डिजिटल कृषि प्रशिक्षण कार्यक्रम',
          titleHindi: 'डिजिटल कृषि प्रशिक्षण कार्यक्रम',
          summary: 'किसानों के लिए मुफ्त डिजिटल कृषि प्रशिक्षण कार्यक्रम शुरू। आधुनिक तकनीकों का उपयोग करके उत्पादन बढ़ाना सीखें।',
          content: 'Details about digital agriculture training...',
          category: 'प्रशिक्षण',
          date: '2024-01-13',
          readTime: '4 मिनट',
          priority: 'medium',
          views: 654
        },
        {
          id: '4',
          title: 'इस साल रिकॉर्ड धान उत्पादन',
          titleHindi: 'इस साल रिकॉर्ड धान उत्पादन',
          summary: 'झारखंड में इस साल धान का उत्पादन रिकॉर्ड स्तर पर पहुंचा है। राज्य के किसानों ने बेहतर तकनीकों का उपयोग करके अधिक उत्पादन प्राप्त किया।',
          content: 'Details about record rice production...',
          category: 'उत्पादन',
          date: '2024-01-12',
          readTime: '3 मिनट',
          priority: 'medium',
          views: 432
        },
        {
          id: '5',
          title: 'जैविक खेती सब्सिडी बढ़ाई गई',
          titleHindi: 'जैविक खेती सब्सिडी बढ़ाई गई',
          summary: 'जैविक खेती को प्रोत्साहित करने के लिए राज्य सरकार ने सब्सिडी की दर बढ़ाई है। अब किसानों को 50% तक सब्सिडी मिलेगी।',
          content: 'Details about organic farming subsidy...',
          category: 'सरकारी योजना',
          date: '2024-01-11',
          readTime: '2 मिनट',
          priority: 'low',
          views: 321
        }
      ]
    }
  },
  mr: {
    news: {
      title: "कृषी बातम्या",
      subtitle: "झारखंड सरकार - कृषी विभाग",
      voice: "कृषी बातम्या: नवीन पीक विमा योजना सुरू, मुसळधार पावसाचा इशारा, डिजिटल कृषी प्रशिक्षण कार्यक्रम. अधिक माहितीसाठी बातम्या वाचा.",
      badges: {
        featured: "मुख्य बातम्या",
        urgent: "तातडीचे",
        normal: "सामान्य",
        info: "माहिती"
      },
      labels: {
        views: "वेळा पाहिले गेले",
        read_full: "पूर्ण वाचा",
        share: "शेअर करा",
        read: "वाचा",
        categories: "बातम्यांचे प्रकार:"
      },
      categories: {
        all: "सर्व",
        weather: "हवामान",
        schemes: "योजना",
        training: "प्रशिक्षण",
        market: "बाजारभाव"
      },
      newsletter: {
        title: "न्यूजलेटर सदस्यता",
        desc: "नवीनतम कृषी बातम्या, सरकारी योजनांची माहिती आणि हवामान अपडेट्स थेट तुमच्या मोबाईलवर मिळवा",
        sms: "SMS सेवा",
        whatsapp: "व्हॉट्सॲप",
        note: "मोफत सेवा - केवळ SMS शुल्क लागू"
      },
      contact: {
        title: "बातम्यांच्या टिप्स किंवा सूचना",
        desc: "काही महत्त्वाची माहिती शेअर करायची आहे का?",
        submit: "बातमी पाठवा",
        contactus: "संपर्क साधा: news@jharkhand-agri.gov.in"
      },
      list: [
        {
          id: '1',
          title: 'नवीन पीक विमा योजना सुरू',
          titleHindi: 'नवीन पीक विमा योजना सुरू',
          summary: 'झारखंड सरकारने शेतकऱ्यांसाठी नवीन पीक विमा योजना सुरू केली आहे ज्यामुळे नैसर्गिक आपत्तींपासून चांगले संरक्षण मिळते.',
          content: 'Detailed content about the new crop insurance scheme...',
          category: 'सरकारी योजना',
          date: '2024-01-15',
          readTime: '३ मिनिटे',
          priority: 'high',
          views: 1250
        },
        {
          id: '2',
          title: 'हवामान इशारा: मुसळधार पावसाची शक्यता',
          titleHindi: 'हवामान इशारा: मुसळधार पावसाची शक्यता',
          summary: 'पुढील ४८ तासांत झारखंडच्या अनेक जिल्ह्यांमध्ये मुसळधार पावसाची शक्यता आहे. शेतकऱ्यांनी पिकांचे रक्षण करण्याचे आवाहन केले आहे.',
          content: 'Weather alert details and precautionary measures...',
          category: 'हवामान',
          date: '2024-01-14',
          readTime: '२ मिनिटे',
          priority: 'high',
          views: 890
        },
        {
          id: '3',
          title: 'डिजिटल कृषी प्रशिक्षण कार्यक्रम',
          titleHindi: 'डिजिटल कृषी प्रशिक्षण कार्यक्रम',
          summary: 'शेतकऱ्यांसाठी मोफत डिजिटल कृषी प्रशिक्षण कार्यक्रम सुरू. आधुनिक तंत्राचा वापर करून उत्पादन वाढवायला शिका.',
          content: 'Details about digital agriculture training...',
          category: 'प्रशिक्षण',
          date: '2024-01-13',
          readTime: '४ मिनिटे',
          priority: 'medium',
          views: 654
        },
        {
          id: '4',
          title: 'या वर्षी विक्रमी तांदूळ उत्पादन',
          titleHindi: 'या वर्षी विक्रमी तांदूळ उत्पादन',
          summary: 'झारखंडमध्ये या वर्षी तांदूळ उत्पादन विक्रमी पातळीवर पोहोचले आहे. शेतकऱ्यांनी सुधारित तंत्राचा वापर करून अधिक उत्पादन घेतले.',
          content: 'Details about record rice production...',
          category: 'उत्पादन',
          date: '2024-01-12',
          readTime: '३ मिनिटे',
          priority: 'medium',
          views: 432
        },
        {
          id: '5',
          title: 'सेंद्रिय शेती अनुदान वाढवले',
          titleHindi: 'सेंद्रिय शेती अनुदान वाढवले',
          summary: 'सेंद्रिय शेतीला प्रोत्साहन देण्यासाठी राज्य सरकारने अनुदान दर वाढवले आहेत. शेतकऱ्यांना आता ५०% पर्यंत अनुदान मिळेल.',
          content: 'Details about organic farming subsidy...',
          category: 'सरकारी योजना',
          date: '2024-01-11',
          readTime: '२ मिनिटे',
          priority: 'low',
          views: 321
        }
      ]
    }
  },
  ur: {
    news: {
      title: "زرعی خبریں",
      subtitle: "حکومت جھارکھنڈ - محکمہ زراعت",
      voice: "زرعی خبریں: نئی فصل انشورنس اسکیم شروع، شدید بارش کی وارننگ، ڈیجیٹل زرعی تربیتی پروگرام دستیاب ہے۔ مزید معلومات کے لیے خبریں پڑھیں۔",
      badges: {
        featured: "اہم خبریں",
        urgent: "اربنٹ",
        normal: "نارمل",
        info: "معلومات"
      },
      labels: {
        views: "بار دیکھا گیا",
        read_full: "پورا پڑھیں",
        share: "شیئر کریں",
        read: "پڑھیں",
        categories: "خبروں کی اقسام:"
      },
      categories: {
        all: "تمام",
        weather: "موسم",
        schemes: "اسکیمیں",
        training: "تربیت",
        market: "مارکیٹ"
      },
      newsletter: {
        title: "نیوز لیٹر سبسکرپشن",
        desc: "تازہ ترین زرعی خبریں، سرکاری اسکیموں کی اپ ڈیٹس اور موسم کی وارننگز براہ راست اپنے موبائل پر حاصل کریں",
        sms: "SMS سروس",
        whatsapp: "واٹس ایپ",
        note: "مفت سروس - صرف SMS چارجز لاگو ہوں گے"
      },
      contact: {
        title: "خبروں کی ٹپس یا تجاویز",
        desc: "کیا آپ کوئی اہم معلومات شیئر کرنا چاہتے ہیں؟",
        submit: "خبریں جمع کریں",
        contactus: "ہم سے رابطہ کریں: news@jharkhand-agri.gov.in"
      },
      list: [
        {
          id: '1',
          title: 'نئی فصل انشورنس اسکیم شروع کی گئی',
          titleHindi: 'نئی فصل انشورنس اسکیم شروع کی گئی',
          summary: 'حکومت جھارکھنڈ نے کسانوں کے لیے نئی فصل انشورنس اسکیم کا آغاز کیا ہے جو قدرتی آفات کے خلاف بہتر تحفظ فراہم کرتی ہے۔',
          content: 'Detailed content about the new crop insurance scheme...',
          category: 'سرکاری اسکیم',
          date: '2024-01-15',
          readTime: '3 منٹ',
          priority: 'high',
          views: 1250
        },
        {
          id: '2',
          title: 'موسم کی وارننگ: شدید بارش متوقع',
          titleHindi: 'موسم کی وارننگ: شدید بارش متوقع',
          summary: 'اگلے 48 گھنٹوں میں جھارکھنڈ کے کئی اضلاع میں شدید بارش متوقع ہے۔ کسانوں کو اپنی فصل کی حفاظت کرنے کا مشورہ دیا گیا ہے۔',
          content: 'Weather alert details and precautionary measures...',
          category: 'موسم',
          date: '2024-01-14',
          readTime: '2 منٹ',
          priority: 'high',
          views: 890
        },
        {
          id: '3',
          title: 'ڈیجیٹل زرعی تربیتی پروگرام',
          titleHindi: 'ڈیجیٹل زرعی تربیتی پروگرام',
          summary: 'کسانوں کے لیے مفت ڈیجیٹل زرعی تربیتی پروگرام کا آغاز۔ جدید تکنیکوں کا استعمال کرتے ہوئے پیداوار بڑھانا سیکھیں۔',
          content: 'Details about digital agriculture training...',
          category: 'تربیت',
          date: '2024-01-13',
          readTime: '4 منٹ',
          priority: 'medium',
          views: 654
        },
        {
          id: '4',
          title: 'اس سال چاول کی ریکارڈ پیداوار',
          titleHindi: 'اس سال چاول کی ریکارڈ پیداوار',
          summary: 'جھارکھنڈ میں اس سال چاول کی پیداوار ریکارڈ سطح پر پہنچ گئی ہے۔ کسانوں نے بہتر تکنیک کے ذریعے زیادہ پیداوار حاصل کی۔',
          content: 'Details about record rice production...',
          category: 'پیداوار',
          date: '2024-01-12',
          readTime: '3 منٹ',
          priority: 'medium',
          views: 432
        },
        {
          id: '5',
          title: 'نامیاتی کاشتکاری سبسڈی میں اضافہ',
          titleHindi: 'نامیاتی کاشتکاری سبسڈی میں اضافہ',
          summary: 'ریاستی حکومت نے نامیاتی کاشتکاری کی حوصلہ افزائی کے لیے سبسڈی کی شرح بڑھا دی ہے۔ کسانوں کو اب 50% تک سبسڈی ملے گی۔',
          content: 'Details about organic farming subsidy...',
          category: 'سرکاری اسکیم',
          date: '2024-01-11',
          readTime: '2 منٹ',
          priority: 'low',
          views: 321
        }
      ]
    }
  }
};

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object && key in target) {
      Object.assign(source[key], deepMerge(target[key], source[key]));
    }
  }
  Object.assign(target || {}, source);
  return target;
}

locales.forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  let currentKeys = {};
  if (fs.existsSync(filePath)) {
    currentKeys = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  const updatedKeys = deepMerge(currentKeys, newTranslations[lang] || {});
  fs.writeFileSync(filePath, JSON.stringify(updatedKeys, null, 2), 'utf8');
});
