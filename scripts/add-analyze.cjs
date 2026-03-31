const fs = require('fs');
const path = require('path');

const locales = ['en', 'hi', 'mr', 'ur'];
const localesDir = path.join(__dirname, '../src/locales');

const newTranslations = {
  en: {
    analyze: {
      toast: {
        incomplete_title: "Incomplete Information",
        incomplete_desc: "Please fill all fields",
        invalid_ph_title: "Invalid pH Value",
        invalid_ph_desc: "pH should be between 0-14",
        invalid_moisture_title: "Invalid Moisture Value",
        invalid_moisture_desc: "Moisture should be between 0-100%",
        complete_title: "Analysis Complete",
        complete_desc: "Proceed to view results"
      },
      title: "Soil Analysis and Crop Recommendation",
      subtitle: "Provide your soil information and get the best crop recommendations from AI",
      choose_method: "Choose Analysis Method",
      manual_data: "Manual Data",
      photo_analysis: "Photo Analysis",
      form: {
        title: "Soil Analysis Form",
        ph_level: "pH Level (0-14)",
        ph_normal: "Normal: 6.0-7.5",
        moisture: "Moisture (%)",
        moisture_normal: "Normal: 40-60%",
        nitrogen: "Nitrogen",
        phosphorus: "Phosphorus",
        potassium: "Potassium",
        select_placeholder: "Select",
        low: "Low",
        medium: "Medium",
        high: "High",
        location: "Location",
        location_placeholder: "e.g., Ranchi",
        state: "State",
        state_placeholder: "Select State",
        analyze: "Analyze",
        analyzing: "AI Analyzing..."
      },
      info: {
        title: "Crop Selection Information",
        benefits_title: "Benefits of Soil Testing",
        benefit_1: "Helps choose right crops",
        benefit_2: "Correct fertilizer amount",
        benefit_3: "Higher yield",
        benefit_4: "Cost reduction",
        tips_title: "Tips",
        tip_1: "Provide accurate information",
        tip_2: "Regular soil testing",
        tip_3: "Consult local experts"
      }
    }
  },
  hi: {
    analyze: {
      toast: {
        incomplete_title: "अधूरी जानकारी",
        incomplete_desc: "कृपया सभी फील्ड भरें",
        invalid_ph_title: "गलत pH मान",
        invalid_ph_desc: "pH 0-14 के बीच होना चाहिए",
        invalid_moisture_title: "गलत नमी मान",
        invalid_moisture_desc: "नमी 0-100% के बीच होनी चाहिए",
        complete_title: "विश्लेषण पूरा",
        complete_desc: "परिणाम देखने के लिए आगे बढ़ें"
      },
      title: "मिट्टी विश्लेषण और फसल सुझाव",
      subtitle: "अपनी मिट्टी की जानकारी दें और AI से बेहतरीन फसल सुझाव पाएं",
      choose_method: "विश्लेषण का तरीका चुनें",
      manual_data: "मैनुअल डेटा",
      photo_analysis: "फोटो विश्लेषण",
      form: {
        title: "मिट्टी विश्लेषण फॉर्म",
        ph_level: "pH स्तर (0-14)",
        ph_normal: "सामान्य: 6.0-7.5",
        moisture: "नमी (%)",
        moisture_normal: "सामान्य: 40-60%",
        nitrogen: "नाइट्रोजन",
        phosphorus: "फास्फोरस",
        potassium: "पोटैशियम",
        select_placeholder: "चुनें",
        low: "कम",
        medium: "मध्यम",
        high: "उच्च",
        location: "स्थान",
        location_placeholder: "जैसे: रांची",
        state: "राज्य",
        state_placeholder: "राज्य चुनें",
        analyze: "विश्लेषण करें",
        analyzing: "AI विश्लेषण हो रहा है..."
      },
      info: {
        title: "फसल चयन की जानकारी",
        benefits_title: "मिट्टी परीक्षण के फायदे",
        benefit_1: "सही फसल चुनने में मदद",
        benefit_2: "उर्वरक की सही मात्रा",
        benefit_3: "अधिक पैदावार",
        benefit_4: "लागत में कमी",
        tips_title: "सुझाव",
        tip_1: "सटीक जानकारी दें",
        tip_2: "नियमित मिट्टी जांच कराएं",
        tip_3: "स्थानीय कृषि विशेषज्ञ से सलाह लें"
      }
    }
  },
  mr: {
    analyze: {
      toast: {
        incomplete_title: "अपूर्ण माहिती",
        incomplete_desc: "कृपया सर्व फील्ड भरा",
        invalid_ph_title: "चुकीचे pH मूल्य",
        invalid_ph_desc: "pH 0-14 दरम्यान असावे",
        invalid_moisture_title: "चुकीचे ओलावा मूल्य",
        invalid_moisture_desc: "ओलावा 0-100% दरम्यान असावा",
        complete_title: "विश्लेषण पूर्ण",
        complete_desc: "परिणाम पाहण्यासाठी पुढे जा"
      },
      title: "माती विश्लेषण आणि पीक शिफारस",
      subtitle: "तुमच्या मातीची माहिती द्या आणि AI कडून सर्वोत्तम पीक शिफारसी मिळवा",
      choose_method: "विश्लेषण पद्धत निवडा",
      manual_data: "मॅन्युअल डेटा",
      photo_analysis: "फोटो विश्लेषण",
      form: {
        title: "माती विश्लेषण फॉर्म",
        ph_level: "pH पातळी (0-14)",
        ph_normal: "सामान्य: 6.0-7.5",
        moisture: "ओलावा (%)",
        moisture_normal: "सामान्य: 40-60%",
        nitrogen: "नायट्रोजन",
        phosphorus: "फॉस्फरस",
        potassium: "पोटॅशियम",
        select_placeholder: "निवडा",
        low: "कमी",
        medium: "मध्यम",
        high: "उच्च",
        location: "स्थान",
        location_placeholder: "उदा: पुणे",
        state: "राज्य",
        state_placeholder: "राज्य निवडा",
        analyze: "विश्लेषण करा",
        analyzing: "AI विश्लेषण करत आहे..."
      },
      info: {
        title: "पीक निवड माहिती",
        benefits_title: "माती परीक्षणाचे फायदे",
        benefit_1: "योग्य पीक निवडण्यास मदत",
        benefit_2: "खताचे योग्य प्रमाण",
        benefit_3: "अधिक उत्पादन",
        benefit_4: "खर्चात कपात",
        tips_title: "टिपा",
        tip_1: "अचूक माहिती द्या",
        tip_2: "नियमित माती चाचणी करा",
        tip_3: "स्थानिक कृषी तज्ञांचा सल्ला घ्या"
      }
    }
  },
  ur: {
    analyze: {
      toast: {
        incomplete_title: "نامکمل معلومات",
        incomplete_desc: "براہ کرم تمام فیلڈز پُر کریں",
        invalid_ph_title: "غلط پی ایچ ویلیو",
        invalid_ph_desc: "پی ایچ 0-14 کے درمیان ہونا چاہئے",
        invalid_moisture_title: "غلط نمی کی قیمت",
        invalid_moisture_desc: "نمی 0-100٪ کے درمیان ہونی چاہئے",
        complete_title: "تجزیہ مکمل",
        complete_desc: "نتائج دیکھنے کے لیے آگے بڑھیں"
      },
      title: "مٹی کا تجزیہ اور فصل کی سفارش",
      subtitle: "اپنی مٹی کی معلومات فراہم کریں اور AI سے فصل کی بہترین سفارشات حاصل کریں",
      choose_method: "تجزیہ کا طریقہ منتخب کریں",
      manual_data: "دستی ڈیٹا",
      photo_analysis: "تصویری تجزیہ",
      form: {
        title: "مٹی کے تجزیہ کا فارم",
        ph_level: "پی ایچ لیول (0-14)",
        ph_normal: "نارمل: 6.0-7.5",
        moisture: "نمی (%)",
        moisture_normal: "نارمل: 40-60%",
        nitrogen: "نائٹروجن",
        phosphorus: "فاسفورس",
        potassium: "پوٹاشیم",
        select_placeholder: "منتخب کریں",
        low: "کم",
        medium: "درمیانہ",
        high: "زیادہ",
        location: "مقام",
        location_placeholder: "مثال کے طور پر: رانچی",
        state: "ریاست",
        state_placeholder: "ریاست کا انتخاب کریں",
        analyze: "تجزیہ کریں",
        analyzing: "اے آئی تجزیہ کر رہا ہے..."
      },
      info: {
        title: "فصل کے انتخاب کی معلومات",
        benefits_title: "مٹی کی جانچ کے فوائد",
        benefit_1: "صحیح فصلیں چننے میں مدد کرتا ہے",
        benefit_2: "کھاد کی صحیح مقدار",
        benefit_3: "زیادہ پیداوار",
        benefit_4: "لاگت میں کمی",
        tips_title: "تجاویز",
        tip_1: "درست معلومات فراہم کریں",
        tip_2: "مٹی کی باقاعدہ جانچ کریں",
        tip_3: "مقامی ماہرین سے مشورہ کریں"
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
