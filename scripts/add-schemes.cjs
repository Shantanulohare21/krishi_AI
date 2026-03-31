const fs = require('fs');
const path = require('path');

const locales = ['en', 'hi', 'mr', 'ur'];
const localesDir = path.join(__dirname, '../src/locales');

const newTranslations = {
  en: {
    schemes: {
      title: "Government Schemes",
      subtitle: "Government of Jharkhand - Agriculture Department",
      voice: "Various schemes of the Jharkhand government: Kisan Samman Nidhi 6000 rupees annually, Kisan Credit Card at low interest, crop insurance scheme, and solar pump subsidy are available.",
      stats: {
        active: "Active Schemes",
        upcoming: "Upcoming",
        beneficiaries: "Beneficiaries",
        distributed: "Amount Distributed"
      },
      status: {
        active: "Active",
        upcoming: "Upcoming",
        closed: "Closed"
      },
      labels: {
        description: "Description",
        benefit: "Benefit",
        amount: "Amount",
        eligibility: "Eligibility",
        documents: "Required Documents",
        deadline: "Deadline"
      },
      buttons: {
        apply: "Apply Now",
        details: "More Details",
        helpline: "Helpline"
      },
      help: {
        title: "Need Help?",
        desc: "Contact for more information about schemes or help with applications",
        helpline: "Helpline",
        portal: "Online Portal",
        office: "District Office",
        days: "Mon-Fri"
      },
      list: [
        {
          id: "1",
          name: "PM-KISAN",
          nameHindi: "Pradhan Mantri Kisan Samman Nidhi",
          description: "Income support for small and marginal farmers",
          benefit: "₹6,000 per year in three installments",
          eligibility: [
            "Farmers with up to 2 hectares land",
            "Indian citizen",
            "Aadhaar card required"
          ],
          documents: ["Aadhaar Card", "Land Documents", "Bank Passbook"],
          amount: "₹6,000/year",
          deadline: "December 31, 2024",
          category: "Income Support",
          status: "active"
        },
        {
          id: "2",
          name: "Kisan Credit Card",
          nameHindi: "Kisan Credit Card",
          description: "Low interest credit facility for farmers",
          benefit: "Low interest rate (4% per annum)",
          eligibility: [
            "Land owning farmers",
            "Tenant farmers",
            "Share croppers"
          ],
          documents: ["Land Documents", "Aadhaar Card", "PAN Card"],
          amount: "Based on crop",
          deadline: "Available year-round",
          category: "Credit",
          status: "active"
        },
        {
          id: "3",
          name: "Pradhan Mantri Fasal Bima Yojana",
          nameHindi: "Pradhan Mantri Fasal Bima Yojana",
          description: "Protection against natural calamities",
          benefit: "Compensation for crop loss",
          eligibility: [
            "All farmers",
            "Growing insured crops",
            "Timely premium payment"
          ],
          documents: ["Aadhaar Card", "Land Documents", "Bank Passbook"],
          amount: "Premium 2% (Kharif)",
          deadline: "July 15, 2024",
          category: "Insurance",
          status: "active"
        },
        {
          id: "4",
          name: "Solar Pump Subsidy",
          nameHindi: "Solar Pump Subsidy Scheme",
          description: "Subsidy for solar pump installation",
          benefit: "Up to 75% subsidy",
          eligibility: [
            "Farmer land owner",
            "Water availability",
            "Meet technical criteria"
          ],
          documents: ["Land Documents", "Electricity Connection", "Aadhaar Card"],
          amount: "Up to ₹75,000",
          deadline: "June 30, 2024",
          category: "Energy",
          status: "upcoming"
        }
      ]
    }
  },
  hi: {
    schemes: {
      title: "सरकारी योजनाएं",
      subtitle: "झारखंड सरकार - कृषि विभाग",
      voice: "झारखंड सरकार की विभिन्न योजनाएं: किसान सम्मान निधि 6000 रुपये सालाना, किसान क्रेडिट कार्ड कम ब्याज पर, फसल बीमा योजना, और सोलर पंप सब्सिडी उपलब्ध है।",
      stats: {
        active: "सक्रिय योजनाएं",
        upcoming: "आने वाली",
        beneficiaries: "लाभार्थी",
        distributed: "वितरित राशि"
      },
      status: {
        active: "सक्रिय",
        upcoming: "आने वाला",
        closed: "बंद"
      },
      labels: {
        description: "विवरण",
        benefit: "लाभ",
        amount: "राशि",
        eligibility: "पात्रता",
        documents: "आवश्यक दस्तावेज",
        deadline: "अंतिम तिथि"
      },
      buttons: {
        apply: "आवेदन करें",
        details: "और जानकारी",
        helpline: "हेल्पलाइन"
      },
      help: {
        title: "सहायता चाहिए?",
        desc: "योजनाओं के बारे में अधिक जानकारी या आवेदन में सहायता के लिए संपर्क करें",
        helpline: "हेल्पलाइन",
        portal: "ऑनलाइन पोर्टल",
        office: "जिला कार्यालय",
        days: "सोमवार से शुक्रवार"
      },
      list: [
        {
          id: "1",
          name: "PM-KISAN",
          nameHindi: "प्रधानमंत्री किसान सम्मान निधि",
          description: "छोटे और सीमांत किसानों को आय सहायता प्रदान करने हेतु",
          benefit: "₹6,000 प्रति वर्ष तीन किस्तों में",
          eligibility: [
            "2 हेक्टेयर तक भूमि वाले किसान",
            "भारतीय नागरिक",
            "आधार कार्ड आवश्यक"
          ],
          documents: ["आधार कार्ड", "भूमि दस्तावेज", "बैंक पासबुक"],
          amount: "₹6,000/वर्ष",
          deadline: "31 दिसंबर 2024",
          category: "आय सहायता",
          status: "active"
        },
        {
          id: "2",
          name: "Kisan Credit Card",
          nameHindi: "किसान क्रेडिट कार्ड",
          description: "किसानों को कम ब्याज दर पर ऋण उपलब्ध कराने हेतु",
          benefit: "कम ब्याज दर (4% प्रति वर्ष)",
          eligibility: [
            "भूमि स्वामी किसान",
            "काश्तकार किसान",
            "शेयर क्रॉपर"
          ],
          documents: ["भूमि दस्तावेज", "आधार कार्ड", "पैन कार्ड"],
          amount: "फसल के आधार पर",
          deadline: "साल भर उपलब्ध",
          category: "ऋण",
          status: "active"
        },
        {
          id: "3",
          name: "Pradhan Mantri Fasal Bima Yojana",
          nameHindi: "प्रधानमंत्री फसल बीमा योजना",
          description: "प्राकृतिक आपदाओं से होने वाले नुकसान से सुरक्षा",
          benefit: "फसल नुकसान की भरपाई",
          eligibility: [
            "सभी किसान",
            "बीमित फसल उगाने वाले",
            "समय पर प्रीमियम भुगतान"
          ],
          documents: ["आधार कार्ड", "भूमि दस्तावेज", "बैंक पासबुक"],
          amount: "प्रीमियम 2% (खरीफ)",
          deadline: "15 जुलाई 2024",
          category: "बीमा",
          status: "active"
        },
        {
          id: "4",
          name: "Solar Pump Subsidy",
          nameHindi: "सोलर पंप सब्सिडी योजना",
          description: "सोलर पंप लगाने के लिए सब्सिडी",
          benefit: "75% तक सब्सिडी",
          eligibility: [
            "किसान भूमि स्वामी",
            "पानी की उपलब्धता",
            "तकनीकी मापदंड पूरे करना"
          ],
          documents: ["भूमि दस्तावेज", "बिजली कनेक्शन", "आधार कार्ड"],
          amount: "₹75,000 तक",
          deadline: "30 जून 2024",
          category: "ऊर्जा",
          status: "upcoming"
        }
      ]
    }
  },
  mr: {
    schemes: {
      title: "सरकारी योजना",
      subtitle: "झारखंड सरकार - कृषी विभाग",
      voice: "झारखंड सरकारच्या विविध योजना: किसान सन्मान निधी वर्षाला ६००० रुपये, किसान क्रेडिट कार्ड कमी व्याजावर, पीक विमा योजना आणि सोलर पंप सबसिडी उपलब्ध आहे.",
      stats: {
        active: "सक्रिय योजना",
        upcoming: "आगामी",
        beneficiaries: "लाभार्थी",
        distributed: "वितरित रक्कम"
      },
      status: {
        active: "सक्रिय",
        upcoming: "आगामी",
        closed: "बंद"
      },
      labels: {
        description: "तपशील",
        benefit: "फायदा",
        amount: "रक्कम",
        eligibility: "पात्रता",
        documents: "आवश्यक कागदपत्रे",
        deadline: "अंतिम तारीख"
      },
      buttons: {
        apply: "अर्ज करा",
        details: "अधिक माहिती",
        helpline: "हेल्पलाइन"
      },
      help: {
        title: "मदत हवी आहे?",
        desc: "योजनांबद्दल अधिक माहितीसाठी किंवा अर्ज करण्यास मदतीसाठी संपर्क साधा",
        helpline: "हेल्पलाइन",
        portal: "ऑनलाइन पोर्टल",
        office: "जिल्हा कार्यालय",
        days: "सोमवार ते शुक्रवार"
      },
      list: [
        {
          id: "1",
          name: "PM-KISAN",
          nameHindi: "प्रधानमंत्री किसान सन्मान निधी",
          description: "लहान आणि अल्पभूधारक शेतकऱ्यांना उत्पन्न समर्थन",
          benefit: "वर्षाला रु. ६,००० तीन हप्त्यात",
          eligibility: [
            "२ हेक्टरपर्यंत जमीन असलेले शेतकरी",
            "भारतीय नागरिक",
            "आधार कार्ड आवश्यक"
          ],
          documents: ["आधार कार्ड", "जमिनीची कागदपत्रे", "बँक पासबुक"],
          amount: "रु. ६,०००/वर्ष",
          deadline: "३१ डिसेंबर २०२४",
          category: "उत्पन्न समर्थन",
          status: "active"
        },
        {
          id: "2",
          name: "Kisan Credit Card",
          nameHindi: "किसान क्रेडिट कार्ड",
          description: "शेतकऱ्यांसाठी कमी व्याजदरात कर्ज सुविधा",
          benefit: "कमी व्याजदर (४% प्रति वर्ष)",
          eligibility: [
            "जमीन मालक शेतकरी",
            "कुळ शेतकरी",
            "भागिदारीने शेती करणारे"
          ],
          documents: ["जमिनीची कागदपत्रे", "आधार कार्ड", "पॅन कार्ड"],
          amount: "पिकानुसार",
          deadline: "वर्षभर उपलब्ध",
          category: "कर्ज",
          status: "active"
        },
        {
          id: "3",
          name: "Pradhan Mantri Fasal Bima Yojana",
          nameHindi: "प्रधानमंत्री पीक विमा योजना",
          description: "नैसर्गिक आपत्तींपासून संरक्षण",
          benefit: "पीक नुकसानीची भरपाई",
          eligibility: [
            "सर्व शेतकरी",
            "विमा उतरवलेले पीक घेणारे",
            "वेळेवर प्रीमियम भरणारे"
          ],
          documents: ["आधार कार्ड", "जमिनीची कागदपत्रे", "बँक पासबुक"],
          amount: "प्रीमियम २% (खरीप)",
          deadline: "१५ जुलै २०२४",
          category: "विमा",
          status: "active"
        },
        {
          id: "4",
          name: "Solar Pump Subsidy",
          nameHindi: "सोलर पंप सबसिडी योजना",
          description: "सोलर पंप बसवण्यासाठी सबसिडी",
          benefit: "७५% पर्यंत सबसिडी",
          eligibility: [
            "शेतकरी जमीन मालक",
            "पाण्याची उपलब्धता",
            "तांत्रिक निकषांची पूर्तता"
          ],
          documents: ["जमिनीची कागदपत्रे", "वीज जोडणी", "आधार कार्ड"],
          amount: "रु. ७५,००० पर्यंत",
          deadline: "३० जून २०२४",
          category: "ऊर्जा",
          status: "upcoming"
        }
      ]
    }
  },
  ur: {
    schemes: {
      title: "سرکاری اسکیمیں",
      subtitle: "حکومت جھارکھنڈ - محکمہ زراعت",
      voice: "حکومت جھارکھنڈ کی مختلف اسکیمیں: کسان سمان ندھی کے تحت سالانہ 6000 روپے، کسان کریڈٹ کارڈ کم سود پر، فصل کی انشورنس کی اسکیم اور سولر پمپ پر سبسڈی دستیاب ہے۔",
      stats: {
        active: "فعال اسکیمیں",
        upcoming: "آنے والی",
        beneficiaries: "مستفید ہونے والے",
        distributed: "تقسیم شدہ رقم"
      },
      status: {
        active: "فعال",
        upcoming: "آنے والا",
        closed: "بند"
      },
      labels: {
        description: "تفصیل",
        benefit: "فائدہ",
        amount: "رقم",
        eligibility: "اہلیت",
        documents: "مطلوبہ دستاویزات",
        deadline: "آخری تاریخ"
      },
      buttons: {
        apply: "ابھی اپلائی کریں",
        details: "مزید تفصیلات",
        helpline: "ہیلپ لائن"
      },
      help: {
        title: "مدد چاہیے؟",
        desc: "اسکیموں کے بارے میں مزید معلومات یا درخواست کے ساتھ مدد کے لیے رابطہ کریں",
        helpline: "ہیلپ لائن",
        portal: "آن لائن پورٹل",
        office: "ضلعی دفتر",
        days: "پیر سے جمعہ"
      },
      list: [
        {
          id: "1",
          name: "PM-KISAN",
          nameHindi: "پردھان منتری کسان سمان ندھی",
          description: "چھوٹے اور کم زمین والے کسانوں کو آمدنی میں مدد فراہم کرنے کے لیے",
          benefit: "تین قسطوں میں 6,000 روپے سالانہ",
          eligibility: [
            "2 ہیکٹر تک اراضی والے کسان",
            "ہندوستانی شہری",
            "آدھار کارڈ لازمی"
          ],
          documents: ["آدھار کارڈ", "زمین کے کاغذات", "بینک پاس بک"],
          amount: "₹6,000/سال",
          deadline: "31 دسمبر 2024",
          category: "Income Support",
          status: "active"
        },
        {
          id: "2",
          name: "Kisan Credit Card",
          nameHindi: "کسان کریڈٹ کارڈ",
          description: "کسانوں کو کم سود پر قرض فراہم کرنے کے لیے",
          benefit: "کم شرح سود (4% سالانہ)",
          eligibility: [
            "زمین کے مالک کسان",
            "مزارع کسان",
            "شیئر کراپرز"
          ],
          documents: ["زمین کے کاغذات", "آدھار کارڈ", "پین کارڈ"],
          amount: "فصل کی بنیاد پر",
          deadline: "سال بھر دستیاب",
          category: "Credit",
          status: "active"
        },
        {
          id: "3",
          name: "Pradhan Mantri Fasal Bima Yojana",
          nameHindi: "پردھان منتری فصل بیمہ یوجنا",
          description: "قدرتی آفات کے خلاف تحفظ",
          benefit: "فصل کے نقصان کا معاوضہ",
          eligibility: [
            "تمام کسان",
            "پالیسی والی فصل اگانا",
            "بروقت پریمیم کی ادائیگی"
          ],
          documents: ["آدھار کارڈ", "زمین کے کاغذات", "بینک پاس بک"],
          amount: "پریمیم 2% (خریف)",
          deadline: "15 جولائی 2024",
          category: "Insurance",
          status: "active"
        },
        {
          id: "4",
          name: "Solar Pump Subsidy",
          nameHindi: "سولر پمپ سبسڈی اسکیم",
          description: "سولر پمپ کی تنصیب کے لیے سبسڈی",
          benefit: "75% تک سبسڈی",
          eligibility: [
            "زمین کا مالک کسان",
            "پانی کی دستیابی",
            "تکنیکی معیار پر پورا اترنا"
          ],
          documents: ["زمین کے کاغذات", "بجلی کا کنکشن", "آدھار کارڈ"],
          amount: "75,000 روپے تک",
          deadline: "30 جون 2024",
          category: "Energy",
          status: "upcoming"
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
