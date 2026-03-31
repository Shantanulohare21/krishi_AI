const fs = require('fs');
const path = require('path');

const locales = ['en', 'hi', 'mr', 'ur'];
const localesDir = path.join(__dirname, '../src/locales');

const newTranslations = {
  en: {
    disease: {
      title: "Crop Disease Detection",
      subtitle: "Take a photo of your crop and let AI detect any diseases",
      photo_analysis: "Photo Analysis",
      take_photo_desc: "Take photo of crop leaves, stem or fruit",
      take_photo_btn: "Take Photo",
      support_title: "Support",
      helpline: "Agriculture Helpline",
      chatbot: "AI Chatbot",
      chatbot_desc: "Click icon in bottom right",
      result: {
        disease_detected: "Disease Detected",
        healthy: "Crop is Healthy",
        name: "Disease Name:",
        severity: "Severity:",
        treatment: "Treatment:",
        prevention: "Prevention:",
        healthy_desc: "Your crop looks healthy. Continue regular care."
      },
      new_analysis: "New Analysis",
      talk_expert: "Talk to Expert",
      info: {
        title: "Important Information",
        common_diseases: "Common Crop Diseases",
        disease_1: "Leaf spots",
        disease_2: "Blight",
        disease_3: "Powdery mildew",
        disease_4: "Root rot",
        prevention: "Prevention Methods",
        prev_1: "Proper watering",
        prev_2: "Cleanliness",
        prev_3: "Regular inspection",
        prev_4: "Resistant varieties"
      }
    }
  },
  hi: {
    disease: {
      title: "फसल रोग निदान",
      subtitle: "अपनी फसल की तस्वीर लें और AI से जानें कि कोई बीमारी तो नहीं",
      photo_analysis: "फोटो विश्लेषण",
      take_photo_desc: "फसल की पत्तियों, तने या फल की तस्वीर लें",
      take_photo_btn: "फोटो लें",
      support_title: "सहायता",
      helpline: "कृषि हेल्पलाइन",
      chatbot: "AI चैटबॉट",
      chatbot_desc: "नीचे दाएं कोने में आइकन दबाएं",
      result: {
        disease_detected: "रोग मिला",
        healthy: "फसल स्वस्थ है",
        name: "रोग का नाम:",
        severity: "गंभीरता:",
        treatment: "उपचार:",
        prevention: "बचाव:",
        healthy_desc: "आपकी फसल स्वस्थ दिख रही है। नियमित देखभाल जारी रखें।"
      },
      new_analysis: "नई जांच",
      talk_expert: "विशेषज्ञ से बात करें",
      info: {
        title: "महत्वपूर्ण जानकारी",
        common_diseases: "सामान्य फसल रोग",
        disease_1: "पत्तों पर धब्बे",
        disease_2: "झुलसा रोग",
        disease_3: "पाउडरी मिल्ड्यू",
        disease_4: "जड़ सड़न",
        prevention: "बचाव के तरीके",
        prev_1: "उचित पानी",
        prev_2: "स्वच्छता",
        prev_3: "नियमित निरीक्षण",
        prev_4: "प्रतिरोधी किस्में"
      }
    }
  },
  mr: {
    disease: {
      title: "पीक रोग निदान",
      subtitle: "तुमच्या पिकाचा फोटो घ्या आणि AI ला रोग शोधू द्या",
      photo_analysis: "फोटो विश्लेषण",
      take_photo_desc: "पिकाची पाने, खोड किंवा फळाचा फोटो घ्या",
      take_photo_btn: "फोटो घ्या",
      support_title: "मदत",
      helpline: "कृषी हेल्पलाइन",
      chatbot: "AI चॅटबॉट",
      chatbot_desc: "उजवीकडे खालील चिन्हावर क्लिक करा",
      result: {
        disease_detected: "रोग आढळला",
        healthy: "पीक निरोगी आहे",
        name: "रोगाचे नाव:",
        severity: "तीव्रता:",
        treatment: "उपचार:",
        prevention: "प्रतिबंध:",
        healthy_desc: "तुमचे पीक निरोगी दिसत आहे. नियमित काळजी घेत राहा."
      },
      new_analysis: "नवीन तपासणी",
      talk_expert: "तज्ञांशी बोला",
      info: {
        title: "महत्त्वाची माहिती",
        common_diseases: "सामान्य पीक रोग",
        disease_1: "पानांवरील ठिपके",
        disease_2: "करपा (Blight)",
        disease_3: "भुरी (Powdery mildew)",
        disease_4: "मूळ कुजणे",
        prevention: "प्रतिबंधात्मक उपाय",
        prev_1: "योग्य पाणी देणे",
        prev_2: "स्वच्छता",
        prev_3: "नियमित तपासणी",
        prev_4: "रोगप्रतिकारक जाती"
      }
    }
  },
  ur: {
    disease: {
      title: "فصل کی بیماری کی تشخیص",
      subtitle: "اپنی فصل کی تصویر لیں اور AI کی مدد سے بیماریوں کا پتہ لگائیں",
      photo_analysis: "تصویری تجزیہ",
      take_photo_desc: "فصل کے پتوں، تنے یا پھل کی تصویر لیں",
      take_photo_btn: "تصویر لیں",
      support_title: "مدد",
      helpline: "ایگریکلچر ہیلپ لائن",
      chatbot: "اے آئی چیٹ بوٹ",
      chatbot_desc: "نیچے دائیں کونے میں آئیکن پر کلک کریں",
      result: {
        disease_detected: "بیماری کا پتہ چلا",
        healthy: "فصل صحت مند ہے",
        name: "بیماری کا نام:",
        severity: "شدت:",
        treatment: "علاج:",
        prevention: "روک تھام:",
        healthy_desc: "آپ کی فصل صحت مند نظر آ رہی ہے۔ باقاعدہ دیکھ بھال جاری رکھیں۔"
      },
      new_analysis: "نیا تجزیہ",
      talk_expert: "ماہر سے بات کریں",
      info: {
        title: "اہم معلومات",
        common_diseases: "عام فصل کی بیماریاں",
        disease_1: "پتوں پر دھبے",
        disease_2: "بلائیٹ (جھلساؤ)",
        disease_3: "پاؤڈری ملڈیو",
        disease_4: "جڑ کی سڑن",
        prevention: "روک تھام کے طریقے",
        prev_1: "مناسب پانی دینا",
        prev_2: "صفائی",
        prev_3: "باقاعدہ معائنہ",
        prev_4: "مزاحمتی اقسام"
      }
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

console.log('Translations merged successfully!');
