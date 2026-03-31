const fs = require('fs');
const path = require('path');

const locales = ['en', 'hi', 'mr', 'ur'];
const localesDir = path.join(__dirname, '../src/locales');

const newTranslations = {
  en: {
    results: {
      no_data: {
        title: "No Data Found",
        desc: "Please analyze soil first"
      },
      header: {
        title: "Analysis Results",
        subtitle: "Personalized recommendations for your soil",
        voice: "Your soil analysis is complete. Soil health is {{health}}. {{count}} crops are recommended."
      },
      summary: {
        title: "Soil Analysis Summary",
        ph_level: "pH Level",
        ideal: "Ideal",
        adjust: "Needs Adjustment",
        moisture: "Moisture",
        good: "Good",
        low: "Low",
        nutrients: "Nutrients (mg/kg)",
        location: "Location",
        health: "Soil Health: "
      },
      health: {
        unknown: "Unknown",
        excellent: "Excellent",
        good: "Good",
        needs_improvement: "Needs Improvement"
      },
      recommendations: {
        title: "Crop Recommendations",
        suitability: "% suitable",
        best: "Best",
        yield: "Expected Yield",
        profit: "Expected Profit",
        season: "Growing Season",
        reasons: "Reasons for Recommendation",
        tips: "Tips for Better Results",
        voice_template: "Recommended {{name}}. Yield {{yield}}. Profit {{profit}}. Season {{season}}."
      },
      actions: {
        new_analysis: "New Analysis",
        share: "Share Results",
        copied: "Link Copied",
        copied_desc: "Results link copied to clipboard",
        share_title: "Krishi AI - Crop Recommendation"
      },
      crops: {
        rice: {
          name: "Rice",
          expectedYield: "4-6 tons per hectare",
          profitEstimate: "₹80,000 - ₹1,20,000 per hectare",
          season: "Kharif (June-Nov)",
          reasons: [
            "Ideal for high moisture",
            "Good yield in neutral pH",
            "Traditional crop in your area"
          ],
          tips: [
            "Plant in July",
            "Maintain water level",
            "Use organic fertilizer"
          ]
        },
        wheat: {
          name: "Wheat",
          expectedYield: "3-5 tons per hectare",
          profitEstimate: "₹60,000 - ₹90,000 per hectare",
          season: "Rabi (Nov-April)",
          reasons: [
            "Suitable for your soil pH",
            "Good growth in moderate moisture",
            "Good market demand"
          ],
          tips: [
            "Sow in November",
            "Use balanced fertilizer",
            "Timely irrigation"
          ]
        },
        sugarcane: {
          name: "Sugarcane",
          expectedYield: "70-90 tons per hectare",
          profitEstimate: "₹1,50,000 - ₹2,50,000 per hectare",
          season: "Annual crop",
          reasons: [
            "Excellent for high moisture",
            "High profit potential",
            "Long-term crop"
          ],
          tips: [
            "Plant in Feb-March",
            "Regular irrigation required",
            "Focus on pest management"
          ]
        },
        tomato: {
          name: "Tomato",
          expectedYield: "40-60 tons per hectare",
          profitEstimate: "₹2,00,000 - ₹4,00,000 per hectare",
          season: "Both Rabi & Kharif",
          reasons: [
            "Suitable pH for your soil",
            "Can grow year-round",
            "High value crop"
          ],
          tips: [
            "Start with nursery",
            "Use drip irrigation",
            "Ensure market access"
          ]
        }
      }
    }
  },
  hi: {
    results: {
      no_data: {
        title: "डेटा नहीं मिला",
        desc: "कृपया पहले मिट्टी का विश्लेषण करें"
      },
      header: {
        title: "विश्लेषण परिणाम",
        subtitle: "आपकी मिट्टी के लिए व्यक्तिगत सुझाव",
        voice: "आपकी मिट्टी का विश्लेषण पूरा हो गया है। मिट्टी की स्थिति {{health}} है। {{count}} फसलों की सिफारिश की गई है।"
      },
      summary: {
        title: "मिट्टी विश्लेषण सारांश",
        ph_level: "pH स्तर",
        ideal: "आदर्श",
        adjust: "समायोजन आवश्यक",
        moisture: "नमी",
        good: "अच्छी",
        low: "कम",
        nutrients: "पोषक तत्व (mg/kg)",
        location: "स्थान",
        health: "मिट्टी की स्थिति: "
      },
      health: {
        unknown: "अज्ञात",
        excellent: "उत्कृष्ट",
        good: "अच्छी",
        needs_improvement: "सुधार की आवश्यकता"
      },
      recommendations: {
        title: "फसल सुझाव",
        suitability: "% उपयुक्त",
        best: "सर्वोत्तम",
        yield: "अनुमानित उत्पादन",
        profit: "अनुमानित मुनाफा",
        season: "उगाने का मौसम",
        reasons: "सिफारिश के कारण",
        tips: "बेहतर परिणाम के लिए टिप्स",
        voice_template: "{{name}} की सिफारिश। उत्पादन {{yield}}। मुनाफा {{profit}}। मौसम {{season}}।"
      },
      actions: {
        new_analysis: "नया विश्लेषण",
        share: "परिणाम साझा करें",
        copied: "लिंक कॉपी हो गया",
        copied_desc: "परिणाम का लिंक क्लिपबोर्ड में कॉपी हो गया",
        share_title: "कृषि एआई - फसल सुझाव"
      },
      crops: {
        rice: {
          name: "चावल / धान",
          expectedYield: "4-6 टन प्रति हेक्टेयर",
          profitEstimate: "₹80,000 - ₹1,20,000 प्रति हेक्टेयर",
          season: "खरीफ (जून-नवंबर)",
          reasons: [
            "उच्च नमी के लिए आदर्श",
            "न्यूट्रल pH में अच्छी पैदावार",
            "आपके क्षेत्र में पारंपरिक फसल"
          ],
          tips: [
            "जुलाई में रोपाई करें",
            "नियमित पानी दें",
            "जैविक खाद का उपयोग करें"
          ]
        },
        wheat: {
          name: "गेहूं",
          expectedYield: "3-5 टन प्रति हेक्टेयर",
          profitEstimate: "₹60,000 - ₹90,000 प्रति हेक्टेयर",
          season: "रबी (नवंबर-अप्रैल)",
          reasons: [
            "आपकी मिट्टी के pH के लिए उपयुक्त",
            "मध्यम नमी में अच्छी वृद्धि",
            "बाजार में अच्छी मांग"
          ],
          tips: [
            "नवंबर में बुआई करें",
            "उर्वरक का संतुलित उपयोग करें",
            "समय पर सिंचाई करें"
          ]
        },
        sugarcane: {
          name: "गन्ना",
          expectedYield: "70-90 टन प्रति हेक्टेयर",
          profitEstimate: "₹1,50,000 - ₹2,50,000 प्रति हेक्टेयर",
          season: "वार्षिक फसल",
          reasons: [
            "उच्च नमी के लिए बेहतरीन",
            "अच्छा मुनाफा देने वाली फसल",
            "दीर्घकालिक फसल"
          ],
          tips: [
            "फरवरी-मार्च में रोपाई करें",
            "नियमित सिंचाई आवश्यक",
            "कीट प्रबंधन पर ध्यान दें"
          ]
        },
        tomato: {
          name: "टमाटर",
          expectedYield: "40-60 टन प्रति हेक्टेयर",
          profitEstimate: "₹2,00,000 - ₹4,00,000 प्रति हेक्टेयर",
          season: "रबी और खरीफ दोनों",
          reasons: [
            "आपकी मिट्टी के लिए उपयुक्त pH",
            "साल भर उगा सकते हैं",
            "उच्च मूल्य वाली फसल"
          ],
          tips: [
            "नर्सरी से शुरुआत करें",
            "ड्रिप इरिगेशन का उपयोग करें",
            "बाजार तक पहुंच सुनिश्चित करें"
          ]
        }
      }
    }
  },
  mr: {
    results: {
      no_data: {
        title: "डेटा सापडला नाही",
        desc: "कृपया आधी मातीचे विश्लेषण करा"
      },
      header: {
        title: "विश्लेषण परिणाम",
        subtitle: "तुमच्या मातीसाठी वैयक्तिक शिफारसी",
        voice: "मातीचे विश्लेषण पूर्ण झाले आहे. मातीची स्थिती {{health}} आहे. {{count}} पिकांची शिफारस केली आहे."
      },
      summary: {
        title: "माती विश्लेषण सारांश",
        ph_level: "pH पातळी",
        ideal: "आदर्श",
        adjust: "बदल आवश्यक",
        moisture: "ओलावा",
        good: "चांगली",
        low: "कमी",
        nutrients: "पोषक तत्त्वे (mg/kg)",
        location: "स्थान",
        health: "मातीची स्थिती: "
      },
      health: {
        unknown: "अज्ञात",
        excellent: "उत्कृष्ट",
        good: "चांगली",
        needs_improvement: "सुधारणेची आवश्यकता"
      },
      recommendations: {
        title: "पीक शिफारसी",
        suitability: "% योग्य",
        best: "सर्वोत्तम",
        yield: "अपेक्षित उत्पादन",
        profit: "अपेक्षित नफा",
        season: "हंगाम",
        reasons: "शिफारशींची कारणे",
        tips: "अधिक उत्पादन घेण्यासाठी टिप्स",
        voice_template: "{{name}} ची शिफारस. उत्पादन {{yield}}. नफा {{profit}}. हंगाम {{season}}."
      },
      actions: {
        new_analysis: "नवीन विश्लेषण",
        share: "परिणाम सामायिक करा",
        copied: "लिंक कॉपी केली",
        copied_desc: "क्लिपबोर्डवर लिंक कॉपी केली आहे",
        share_title: "कृषी AI - पीक शिफारस"
      },
      crops: {
        rice: {
          name: "तांदूळ / भात",
          expectedYield: "4-6 टन प्रति हेक्टर",
          profitEstimate: "₹80,000 - ₹1,20,000 प्रति हेक्टर",
          season: "खरीप (जून-नोव्हेंबर)",
          reasons: [
            "उच्च ओलाव्यासाठी आदर्श",
            "तटस्थ pH मध्ये चांगले उत्पादन",
            "तुमच्या भागातील पारंपारिक पीक"
          ],
          tips: [
            "जुलैमध्ये लागवड करा",
            "पाण्याची पातळी राखणे",
            "सेंद्रिय खतांचा वापर करा"
          ]
        },
        wheat: {
          name: "गहू",
          expectedYield: "3-5 टन प्रति हेक्टर",
          profitEstimate: "₹60,000 - ₹90,000 प्रति हेक्टर",
          season: "रब्बी (नोव्हेंबर-एप्रिल)",
          reasons: [
            "तुमच्या मातीच्या pH साठी योग्य",
            "मध्यम ओलाव्यात चांगली वाढ",
            "बाजारात चांगली मागणी"
          ],
          tips: [
            "नोव्हेंबरमध्ये पेरणी करा",
            "संतुलित खतांचा वापर करा",
            "वेळेवर सिंचन करा"
          ]
        },
        sugarcane: {
          name: "ऊस",
          expectedYield: "70-90 टन प्रति हेक्टर",
          profitEstimate: "₹1,50,000 - ₹2,50,000 प्रति हेक्टर",
          season: "वार्षिक पीक",
          reasons: [
            "उच्च ओलाव्यासाठी उत्कृष्ट",
            "चांगला नफा मिळवून देणारे पीक",
            "दीर्घकालीन पीक"
          ],
          tips: [
            "फेब्रुवारी-मार्चमध्ये लागवड करा",
            "नियमित सिंचन आवश्यक",
            "कीटक व्यवस्थापनावर लक्ष केंद्रित करा"
          ]
        },
        tomato: {
          name: "टोमॅटो",
          expectedYield: "40-60 टन प्रति हेक्टर",
          profitEstimate: "₹2,00,000 - ₹4,00,000 प्रति हेक्टर",
          season: "रब्बी आणि खरीप दोन्ही",
          reasons: [
            "तुमच्या मातीसाठी योग्य pH",
            "वर्षभर पिकवता येते",
            "उच्च मूल्य असलेले पीक"
          ],
          tips: [
            "रोपवाटिकेतून सुरुवात करा",
            "ठिबक सिंचनाचा वापर करा",
            "बाजारातील प्रवेश निश्चित करा"
          ]
        }
      }
    }
  },
  ur: {
    results: {
      no_data: {
        title: "کوئی ڈیٹا نہیں ملا",
        desc: "براہ کرم پہلے مٹی کا تجزیہ کریں"
      },
      header: {
        title: "تجزیے کے نتائج",
        subtitle: "آپ کی مٹی کے لیے ذاتی نوعیت کی تجاویز",
        voice: "آپ کی مٹی کا تجزیہ مکمل ہو گیا ہے۔ مٹی کی حالت {{health}} ہے۔ {{count}} فصلوں کی سفارش کی گئی ہے۔"
      },
      summary: {
        title: "مٹی کے تجزیے کا خلاصہ",
        ph_level: "pH لیول",
        ideal: "مثالی",
        adjust: "ایڈجسٹمنٹ کی ضرورت ہے",
        moisture: "نمی",
        good: "اچھی",
        low: "کم",
        nutrients: "غذائی اجزاء (mg/kg)",
        location: "مقام",
        health: "مٹی کی حالت: "
      },
      health: {
        unknown: "نامعلوم",
        excellent: "بہترین",
        good: "اچھی",
        needs_improvement: "بہتری کی ضرورت ہے"
      },
      recommendations: {
        title: "فصل کی تجاویز",
        suitability: "% مناسب",
        best: "بہترین",
        yield: "متوقع پیداوار",
        profit: "متوقع منافع",
        season: "کاشت کا موسم",
        reasons: "سفارش کی وجوہات",
        tips: "بہتر نتائج کے لیے تجاویز",
        voice_template: "{{name}} کی سفارش۔ پیداوار {{yield}}۔ منافع {{profit}}۔ موسم {{season}}۔"
      },
      actions: {
        new_analysis: "نیا تجزیہ",
        share: "نتائج شیئر کریں",
        copied: "لنک کاپی ہو گیا",
        copied_desc: "نتائج کا لنک کلپ بورڈ میں کاپی ہو گیا ہے",
        share_title: "Krishi AI - فصل کی تجویز"
      },
      crops: {
        rice: {
          name: "چاول",
          expectedYield: "4-6 ٹن فی ہیکٹر",
          profitEstimate: "₹80,000 - ₹1,20,000 فی ہیکٹر",
          season: "خریف (جون-نومبر)",
          reasons: [
            "زیادہ نمی کے لیے مثالی",
            "غیر جانبدار pH میں اچھی پیداوار",
            "آپ کے علاقے میں روایتی فصل"
          ],
          tips: [
            "جولائی میں لگائیں",
            "پانی کی سطح کو برقرار رکھیں",
            "نامیاتی کھاد کا استعمال کریں"
          ]
        },
        wheat: {
          name: "گندم",
          expectedYield: "3-5 ٹن فی ہیکٹر",
          profitEstimate: "₹60,000 - ₹90,000 فی ہیکٹر",
          season: "ربیع (نومبر-اپریل)",
          reasons: [
            "آپ کی مٹی کے pH کے لیے موزوں",
            "درمیانی نمی میں اچھی نشوونما",
            "بازار میں اچھی مانگ"
          ],
          tips: [
            "نومبر میں بوائی کریں",
            "متوازن کھاد کا استعمال کریں",
            "بروقت آبپاشی کریں"
          ]
        },
        sugarcane: {
          name: "گنا",
          expectedYield: "70-90 ٹن فی ہیکٹر",
          profitEstimate: "₹1,50,000 - ₹2,50,000 فی ہیکٹر",
          season: "سالانہ فصل",
          reasons: [
            "زیادہ نمی کے لیے بہترین",
            "اچھا منافع بخشنے والی فصل",
            "طویل مدتی فصل"
          ],
          tips: [
            "فروری-مارچ میں لگائیں",
            "باقاعدہ آبپاشی کی ضرورت ہے",
            "کیڑوں کے کنٹرول پر توجہ دیں"
          ]
        },
        tomato: {
          name: "ٹماٹر",
          expectedYield: "40-60 ٹن فی ہیکٹر",
          profitEstimate: "₹2,00,000 - ₹4,00,000 فی ہیکٹر",
          season: "دونوں ربیع اور خریف",
          reasons: [
            "آپ کی مٹی کے لیے موزوں pH",
            "سارا سال کاشت کی جا سکتی ہے",
            "زیادہ قیمت والی فصل"
          ],
          tips: [
            "نرسری سے شروع کریں",
            "ڈرپ ایریگیشن کا استعمال کریں",
            "مارکیٹ تک رسائی کو یقینی بنائیں"
          ]
        }
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
