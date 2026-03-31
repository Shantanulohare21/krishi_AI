const fs = require('fs');
const path = require('path');

const locales = ['en', 'hi', 'mr', 'ur'];
const localesDir = path.join(__dirname, '../src/locales');

const newTranslations = {
  en: {
    weather: {
      title: "Weather Forecast",
      subtitle: "Government of Jharkhand - Agriculture Department",
      search_placeholder: "Search District",
      search_btn: "Search",
      humidity: "Humidity",
      wind: "Wind",
      visibility: "Visibility",
      forecast_title: "5-Day Forecast",
      advisory: {
        title: "Agricultural Advisory",
        item_1: "Temperature is moderate, suitable for rice sowing",
        item_2: "Good humidity level, no irrigation needed",
        item_3: "Light wind, good time for spraying"
      },
      warning: {
        title: "Rainfall Warning",
        alert: "Alert",
        alert_desc: "Light rainfall expected in next 2 days",
        recommendations: "Recommendations:",
        rec_1: "Harvest crops early",
        rec_2: "Store fertilizer and seeds safely",
        rec_3: "Arrange proper drainage"
      },
      voice: "Today's weather is favorable for farmers. The best time for farming is from 6 to 10 AM and 4 to 6 PM.",
      days: {
        today: "Today",
        tomorrow: "Tomorrow",
        day_after: "Day After",
        friday: "Friday",
        saturday: "Saturday"
      },
      location_default: "Ranchi, Jharkhand"
    }
  },
  hi: {
    weather: {
      title: "मौसम पूर्वानुमान",
      subtitle: "झारखंड सरकार - कृषि विभाग",
      search_placeholder: "जिला खोजें",
      search_btn: "खोजें",
      humidity: "नमी",
      wind: "हवा",
      visibility: "दृश्यता",
      forecast_title: "5 दिनों का पूर्वानुमान",
      advisory: {
        title: "कृषि सलाह",
        item_1: "तापमान मध्यम है, धान की बुआई के लिए उपयुक्त",
        item_2: "नमी का स्तर अच्छा है, सिंचाई की आवश्यकता नहीं",
        item_3: "हल्की हवा, छिड़काव के लिए अच्छा समय"
      },
      warning: {
        title: "बारिश की चेतावनी",
        alert: "सतर्कता",
        alert_desc: "अगले 2 दिनों में हल्की बारिश की संभावना",
        recommendations: "सुझाव:",
        rec_1: "फसल की कटाई जल्दी करें",
        rec_2: "खाद और बीज को सुरक्षित रखें",
        rec_3: "जल निकासी की व्यवस्था करें"
      },
      voice: "आज का मौसम किसानों के लिए अनुकूल है। सुबह 6 से 10 बजे तक और शाम 4 से 6 बजे तक खेती का काम करने के लिए उत्तम समय है।",
      days: {
        today: "आज",
        tomorrow: "कल",
        day_after: "परसों",
        friday: "शुक्रवार",
        saturday: "शनिवार"
      },
      location_default: "रांची, झारखंड"
    }
  },
  mr: {
    weather: {
      title: "हवामान अंदाज",
      subtitle: "झारखंड सरकार - कृषी विभाग",
      search_placeholder: "जिल्हा शोधा",
      search_btn: "शोधा",
      humidity: "आर्द्रता",
      wind: "वारा",
      visibility: "दृश्यमानता",
      forecast_title: "५ दिवसांचा अंदाज",
      advisory: {
        title: "कृषी सल्ला",
        item_1: "तापमान मध्यम आहे, भात पेरणीसाठी योग्य",
        item_2: "आर्द्रतेची पातळी चांगली आहे, सिंचनाची आवश्यकता नाही",
        item_3: "हलका वारा, फवारणीसाठी योग्य वेळ"
      },
      warning: {
        title: "पावसाचा इशारा",
        alert: "दक्षता",
        alert_desc: "पुढील २ दिवसांत हलक्या पावसाची शक्यता",
        recommendations: "शिफारसी:",
        rec_1: "पिकाची कापणी लवकर करा",
        rec_2: "खत आणि बियाणे सुरक्षित ठेवा",
        rec_3: "पाण्याचा निचरा होण्याची योग्य व्यवस्था करा"
      },
      voice: "आजचे हवामान शेतकऱ्यांसाठी अनुकूल आहे. शेतीच्या कामासाठी सकाळी ६ ते १० आणि संध्याकाळी ४ ते ६ ही सर्वोत्तम वेळ आहे.",
      days: {
        today: "आज",
        tomorrow: "उद्या",
        day_after: "परवा",
        friday: "शुक्रवार",
        saturday: "शनिवार"
      },
      location_default: "रांची, झारखंड"
    }
  },
  ur: {
    weather: {
      title: "موسم کی پیش گوئی",
      subtitle: "حکومت جھارکھنڈ - محکمہ زراعت",
      search_placeholder: "ضلع تلاش کریں",
      search_btn: "تلاش کریں",
      humidity: "نمی",
      wind: "ہوا",
      visibility: "مرئیت",
      forecast_title: "5 دن کی پیش گوئی",
      advisory: {
        title: "زرعی مشورہ",
        item_1: "درجہ حرارت معتدل ہے، دھان کی بوائی کے لیے موزوں ہے",
        item_2: "نمی کی سطح اچھی ہے، آبپاشی کی ضرورت نہیں ہے",
        item_3: "ہلکی ہوا، چھڑکاؤ کا اچھا وقت"
      },
      warning: {
        title: "بارش کا انتباہ",
        alert: "الرٹ",
        alert_desc: "اگلے 2 دنوں میں ہلکی بارش متوقع ہے",
        recommendations: "تجاویز:",
        rec_1: "فصل جلد کاٹ لیں",
        rec_2: "کھاد اور بیج محفوظ رکھیں",
        rec_3: "پانی کی نکاسی کا مناسب انتظام کریں"
      },
      voice: "آج کا موسم کسانوں کے لیے سازگار ہے۔ کھیتی باڑی کا بہترین وقت صبح 6 سے 10 بجے اور شام 4 سے 6 بجے تک ہے۔",
      days: {
        today: "آج",
        tomorrow: "کل",
        day_after: "پرسوں",
        friday: "جمعہ",
        saturday: "ہفتہ"
      },
      location_default: "رانچی، جھارکھنڈ"
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
