const fs = require('fs');
const path = require('path');

const locales = ['en', 'hi', 'mr', 'ur'];
const localesDir = path.join(__dirname, '../src/locales');

const newTranslations = {
  en: {
    market: {
      title: "Market Prices",
      subtitle: "Government of Jharkhand - Agricultural Marketing Board",
      voice: "Today's market prices: Rice 2850 INR, Wheat 2420 INR, Maize 2150 INR per quintal. Please contact your local mandi before selling your crop.",
      select_district: "Select District:",
      updated: "Updated: Today",
      summary: {
        rising: "Rising Prices",
        falling: "Falling Prices",
        total_crops: "Total Crops",
        avg_price: "Average Price"
      },
      table: {
        title: "Today's Market Prices",
        per: "per",
        from_yesterday: "from yesterday",
        up: "UP",
        down: "DOWN"
      },
      tips: {
        title: "Selling Tips",
        tip_1: "Rice and sugarcane prices rising, good time to sell",
        tip_2: "Best prices available at market between 8-10 AM",
        tip_3: "Better quality crops fetch higher prices"
      },
      contact: {
        title: "Contact Information",
        office: "Market Office",
        phone: "Phone: 0651-2234567",
        time: "Time: 6 AM to 6 PM",
        officer: "Agricultural Officer",
        mobile: "Mobile: +91-9876543210",
        email: "Email: agri.ranchi@jharkhand.gov.in",
        address: "Market Address"
      },
      crops: {
        rice: "Rice",
        wheat: "Wheat",
        maize: "Maize",
        sugarcane: "Sugarcane",
        potato: "Potato",
        onion: "Onion"
      },
      districts: {
        ranchi: "Ranchi",
        dhanbad: "Dhanbad",
        jamshedpur: "Jamshedpur",
        bokaro: "Bokaro",
        deoghar: "Deoghar",
        hazaribagh: "Hazaribagh",
        giridih: "Giridih",
        ramgarh: "Ramgarh",
        chatra: "Chatra"
      },
      mandi: "Mandi"
    }
  },
  hi: {
    market: {
      title: "बाजार भाव",
      subtitle: "झारखंड सरकार - कृषि विपणन बोर्ड",
      voice: "आज के बाजार भाव: धान 2850 रुपये, गेहूं 2420 रुपये, मक्का 2150 रुपये प्रति क्विंटल। कृपया अपनी फसल बेचने से पहले स्थानीय मंडी से संपर्क करें।",
      select_district: "जिला चुनें:",
      updated: "अपडेट: आज",
      summary: {
        rising: "बढ़ते भाव",
        falling: "गिरते भाव",
        total_crops: "कुल फसलें",
        avg_price: "औसत भाव"
      },
      table: {
        title: "आज के बाजार भाव",
        per: "प्रति",
        from_yesterday: "पिछले दिन से",
        up: "बढ़त",
        down: "गिरावट"
      },
      tips: {
        title: "बेचने की सलाह",
        tip_1: "धान और गन्ने की कीमत बढ़ रही है, बेचने का अच्छा समय",
        tip_2: "सुबह 8-10 बजे मंडी में सबसे अच्छे भाव मिलते हैं",
        tip_3: "फसल की गुणवत्ता बनाए रखने से बेहतर दाम मिलते हैं"
      },
      contact: {
        title: "संपर्क जानकारी",
        office: "मंडी कार्यालय",
        phone: "फोन: 0651-2234567",
        time: "समय: सुबह 6 बजे से शाम 6 बजे",
        officer: "कृषि अधिकारी",
        mobile: "मोबाइल: +91-9876543210",
        email: "ईमेल: agri.ranchi@jharkhand.gov.in",
        address: "मंडी का पता"
      },
      crops: {
        rice: "धान",
        wheat: "गेहूं",
        maize: "मक्का",
        sugarcane: "गन्ना",
        potato: "आलू",
        onion: "प्याज"
      },
      districts: {
        ranchi: "रांची",
        dhanbad: "धनबाद",
        jamshedpur: "जमशेदपुर",
        bokaro: "बोकारो",
        deoghar: "देवघर",
        hazaribagh: "हजारीबाग",
        giridih: "गिरिडीह",
        ramgarh: "रामगढ़",
        chatra: "चतरा"
      },
      mandi: "मंडी"
    }
  },
  mr: {
    market: {
      title: "बाजार भाव",
      subtitle: "झारखंड सरकार - कृषी पणन मंडळ",
      voice: "आजचे बाजार भाव: भात 2850 रुपये, गहू 2420 रुपये, मका 2150 रुपये प्रति क्विंटल. कृपया आपले पीक विकण्यापूर्वी स्थानिक बाजार समितीशी संपर्क साधा.",
      select_district: "जिल्हा निवडा:",
      updated: "अपडेट: आज",
      summary: {
        rising: "वाढते भाव",
        falling: "घसरते भाव",
        total_crops: "एकूण पिके",
        avg_price: "सरासरी भाव"
      },
      table: {
        title: "आजचे बाजार भाव",
        per: "प्रति",
        from_yesterday: "कालच्या तुलनेत",
        up: "वाढ",
        down: "घट"
      },
      tips: {
        title: "विक्रीचा सल्ला",
        tip_1: "भात आणि ऊसाचे भाव वाढत आहेत, विक्रीसाठी चांगली वेळ",
        tip_2: "सकाळी 8-10 दरम्यान बाजार समितीत सर्वोत्तम भाव मिळतात",
        tip_3: "पिकाची गुणवत्ता उत्तम ठेवल्यास चांगला भाव मिळतो"
      },
      contact: {
        title: "संपर्क माहिती",
        office: "बाजार समिती कार्यालय",
        phone: "फोन: 0651-2234567",
        time: "वेळ: सकाळी 6 ते संध्याकाळी 6 पर्यंत",
        officer: "कृषी अधिकारी",
        mobile: "मोबाईल: +91-9876543210",
        email: "ईमेल: agri.ranchi@jharkhand.gov.in",
        address: "बाजार समितीचा पत्ता"
      },
      crops: {
        rice: "भात",
        wheat: "गहू",
        maize: "मका",
        sugarcane: "ऊस",
        potato: "बटाटा",
        onion: "कांदा"
      },
      districts: {
        ranchi: "रांची",
        dhanbad: "धनबाद",
        jamshedpur: "जमशेदपूर",
        bokaro: "बोकारो",
        deoghar: "देवघर",
        hazaribagh: "हजारीबाग",
        giridih: "गिरिडीह",
        ramgarh: "रामगढ",
        chatra: "चतरा"
      },
      mandi: "मंडी"
    }
  },
  ur: {
    market: {
      title: "مارکیٹ کی قیمتیں",
      subtitle: "حکومت جھارکھنڈ - زرعی مارکیٹنگ بورڈ",
      voice: "آج کی مارکیٹ قیمتیں: دھان 2850 روپے، گندم 2420 روپے، مکئی 2150 روپے فی کوئنٹل۔ براہ کرم اپنی فصل فروخت کرنے سے پہلے مقامی منڈی سے رابطہ کریں۔",
      select_district: "ضلع کا انتخاب کریں:",
      updated: "اپ ڈیٹ: آج",
      summary: {
        rising: "بڑھتی قیمتیں",
        falling: "گرتی قیمتیں",
        total_crops: "کل فصلیں",
        avg_price: "اوسط قیمت"
      },
      table: {
        title: "آج کی مارکیٹ قیمتیں",
        per: "فی",
        from_yesterday: "کل سے",
        up: "اضافہ",
        down: "کمی"
      },
      tips: {
        title: "فروخت کے مشورے",
        tip_1: "دھان اور گنے کی قیمتیں بڑھ رہی ہیں، فروخت کرنے کا اچھا وقت ہے",
        tip_2: "صبح 8 سے 10 بجے کے درمیان منڈی میں بہترین قیمتیں ملتی ہیں",
        tip_3: "بہتر معیار کی فصلوں کی اچھی قیمت ملتی ہے"
      },
      contact: {
        title: "رابطے کی معلومات",
        office: "مارکیٹ کا دفتر",
        phone: "فون: 0651-2234567",
        time: "وقت: صبح 6 بجے سے شام 6 بجے تک",
        officer: "زرعی افسر",
        mobile: "موبائل: +91-9876543210",
        email: "ای میل: agri.ranchi@jharkhand.gov.in",
        address: "مارکیٹ کا پتہ"
      },
      crops: {
        rice: "دھان",
        wheat: "گندم",
        maize: "مکئی",
        sugarcane: "گنا",
        potato: "آلو",
        onion: "پیاز"
      },
      districts: {
        ranchi: "رانچی",
        dhanbad: "دھنباد",
        jamshedpur: "جمشید پور",
        bokaro: "بوکارو",
        deoghar: "دیوگھر",
        hazaribagh: "ہزاری باغ",
        giridih: "گیریڈیہہ",
        ramgarh: "رام گڑھ",
        chatra: "چترا"
      },
      mandi: "منڈی"
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
