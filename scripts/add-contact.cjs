const fs = require('fs');
const path = require('path');

const locales = ['en', 'hi', 'mr', 'ur'];
const localesDir = path.join(__dirname, '../src/locales');

const newTranslations = {
  en: {
    contact: {
      title: "Contact Us",
      subtitle: "Government of Jharkhand - Agriculture Department",
      voice: "Agriculture department contact info: HQ Phone 0651-2446789, Helpline 1800-123-4567. Contact district officers directly or send a message online.",
      emergency: {
        title: "Emergency Contact",
        helpline: "24x7 Helpline",
        whatsapp: "WhatsApp",
        email: "Emergency Email"
      },
      form: {
        title: "Send Message",
        name: "Name *",
        name_placeholder: "Your Name",
        phone: "Phone *",
        phone_placeholder: "+91-XXXXX-XXXXX",
        email: "Email",
        email_placeholder: "your.email@example.com",
        district: "District *",
        district_placeholder: "Select District",
        category: "Category *",
        category_placeholder: "Select Category",
        subject: "Subject *",
        subject_placeholder: "Message Subject",
        message: "Message *",
        message_placeholder: "Write your message here",
        submit: "Send Message"
      },
      hq: {
        title: "Headquarters Contact",
        address: "Address",
        address_value: "Agriculture Bhawan, Ranchi\nJharkhand - 834001",
        phone: "Phone",
        email: "Email",
        hours: "Office Hours",
        hours_value: "Monday - Friday: 10:00 AM - 5:00 PM"
      },
      quick: {
        title: "Quick Services",
        missed: "Get info via missed call",
        sms: "SMS Service",
        complaint: "Online Complaint"
      },
      officers: {
        title: "District Agriculture Officers",
        call: "Call",
        email: "Email",
        list: [
          {
            name: "Dr. Ram Kumar Singh",
            position: "District Agriculture Officer",
            district: "Ranchi",
            phone: "+91-651-2234567",
            email: "dao.ranchi@jharkhand.gov.in",
            availability: "Mon-Fri 10:00-17:00"
          },
          {
            name: "Mrs. Sunita Devi",
            position: "District Agriculture Officer",
            district: "Dhanbad",
            phone: "+91-326-2234567",
            email: "dao.dhanbad@jharkhand.gov.in",
            availability: "Mon-Fri 10:00-17:00"
          },
          {
            name: "Mr. Ajay Kumar",
            position: "District Agriculture Officer",
            district: "Jamshedpur",
            phone: "+91-657-2234567",
            email: "dao.jamshedpur@jharkhand.gov.in",
            availability: "Mon-Fri 10:00-17:00"
          }
        ]
      },
      response: {
        title: "Response Time",
        emergency: "Emergency",
        immediate: "Immediate",
        normal: "Normal",
        hours24: "24 Hours",
        info: "Information",
        hours48: "48 Hours"
      },
      categories: {
        crop: 'Crop Recommendation',
        scheme: 'Government Scheme',
        seeds: 'Seeds and Fertilizer',
        weather: 'Weather Information',
        market: 'Market Prices',
        technical: 'Technical Support',
        complaint: 'Complaint',
        other: 'Other'
      }
    }
  },
  hi: {
    contact: {
      title: "संपर्क करें",
      subtitle: "झारखंड सरकार - कृषि विभाग",
      voice: "कृषि विभाग संपर्क जानकारी: मुख्यालय फोन 0651-2446789, हेल्पलाइन 1800-123-4567। जिला कृषि अधिकारियों से सीधे संपर्क करें या ऑनलाइन संदेश भेजें।",
      emergency: {
        title: "आपातकालीन संपर्क",
        helpline: "24x7 हेल्पलाइन",
        whatsapp: "व्हाट्सऐप",
        email: "आपातकाल ईमेल"
      },
      form: {
        title: "संदेश भेजें",
        name: "नाम *",
        name_placeholder: "आपका नाम",
        phone: "फोन *",
        phone_placeholder: "+91-XXXXX-XXXXX",
        email: "ईमेल",
        email_placeholder: "your.email@example.com",
        district: "जिला *",
        district_placeholder: "जिला चुनें",
        category: "श्रेणी *",
        category_placeholder: "श्रेणी चुनें",
        subject: "विषय *",
        subject_placeholder: "संदेश का विषय",
        message: "संदेश *",
        message_placeholder: "अपना संदेश यहाँ लिखें",
        submit: "संदेश भेजें"
      },
      hq: {
        title: "मुख्यालय संपर्क",
        address: "पता",
        address_value: "कृषि भवन, रांची\nझारखंड - 834001",
        phone: "फोन",
        email: "ईमेल",
        hours: "कार्यालय समय",
        hours_value: "सोमवार - शुक्रवार: 10:00 - 17:00"
      },
      quick: {
        title: "त्वरित सेवा",
        missed: "मिस्ड कॉल देकर जानकारी पाएं",
        sms: "SMS सेवा",
        complaint: "ऑनलाइन शिकायत"
      },
      officers: {
        title: "जिला कृषि अधिकारी",
        call: "कॉल",
        email: "ईमेल",
        list: [
          {
            name: "डॉ. राम कुमार सिंह",
            position: "जिला कृषि अधिकारी",
            district: "रांची",
            phone: "+91-651-2234567",
            email: "dao.ranchi@jharkhand.gov.in",
            availability: "सोमवार-शुक्रवार 10:00-17:00"
          },
          {
            name: "श्रीमती सुनीता देवी",
            position: "जिला कृषि अधिकारी",
            district: "धनबाद",
            phone: "+91-326-2234567",
            email: "dao.dhanbad@jharkhand.gov.in",
            availability: "सोमवार-शुक्रवार 10:00-17:00"
          },
          {
            name: "श्री अजय कुमार",
            position: "जिला कृषि अधिकारी",
            district: "जमशेदपुर",
            phone: "+91-657-2234567",
            email: "dao.jamshedpur@jharkhand.gov.in",
            availability: "सोमवार-शुक्रवार 10:00-17:00"
          }
        ]
      },
      response: {
        title: "प्रतिक्रिया समय",
        emergency: "आपातकाल",
        immediate: "तुरंत",
        normal: "सामान्य",
        hours24: "24 घंटे",
        info: "जानकारी",
        hours48: "48 घंटे"
      },
      categories: {
        crop: 'फसल सुझाव',
        scheme: 'सरकारी योजना',
        seeds: 'बीज और खाद',
        weather: 'मौसम जानकारी',
        market: 'बाजार भाव',
        technical: 'तकनीकी सहायता',
        complaint: 'शिकायत',
        other: 'अन्य'
      }
    }
  },
  mr: {
    contact: {
      title: "संपर्क साधा",
      subtitle: "झारखंड सरकार - कृषी विभाग",
      voice: "कृषी विभाग संपर्क माहिती: मुख्यालय दूरध्वनी 0651-2446789, हेल्पलाइन 1800-123-4567. जिल्हा अधिकाऱ्यांशी थेट संपर्क साधा किंवा ऑनलाइन संदेश पाठवा.",
      emergency: {
        title: "तातडीचा संपर्क",
        helpline: "24x7 हेल्पलाइन",
        whatsapp: "व्हॉट्सॲप",
        email: "तातडीचा ई-मेल"
      },
      form: {
        title: "संदेश पाठवा",
        name: "नाव *",
        name_placeholder: "तुमचे नाव",
        phone: "फोन *",
        phone_placeholder: "+91-XXXXX-XXXXX",
        email: "ई-मेल",
        email_placeholder: "your.email@example.com",
        district: "जिल्हा *",
        district_placeholder: "जिल्हा निवडा",
        category: "श्रेणी *",
        category_placeholder: "श्रेणी निवडा",
        subject: "विषय *",
        subject_placeholder: "संदेशाचा विषय",
        message: "संदेश *",
        message_placeholder: "तुमचा संदेश येथे लिहा",
        submit: "संदेश पाठवा"
      },
      hq: {
        title: "मुख्यालय संपर्क",
        address: "पत्ता",
        address_value: "कृषी भवन, रांची\nझारखंड - 834001",
        phone: "फोन",
        email: "ई-मेल",
        hours: "कार्यालयाची वेळ",
        hours_value: "सोमवार - शुक्रवार: 10:00 - 17:00"
      },
      quick: {
        title: "त्वरित सेवा",
        missed: "मिस्ड कॉलद्वारे माहिती मिळवा",
        sms: "SMS सेवा",
        complaint: "ऑनलाइन तक्रार"
      },
      officers: {
        title: "जिल्हा कृषी अधिकारी",
        call: "कॉल",
        email: "ई-मेल",
        list: [
          {
            name: "डॉ. राम कुमार सिंह",
            position: "जिल्हा कृषी अधिकारी",
            district: "रांची",
            phone: "+91-651-2234567",
            email: "dao.ranchi@jharkhand.gov.in",
            availability: "सोम-शुक्र 10:00-17:00"
          },
          {
            name: "श्रीमती सुनीता देवी",
            position: "जिल्हा कृषी अधिकारी",
            district: "धनबाद",
            phone: "+91-326-2234567",
            email: "dao.dhanbad@jharkhand.gov.in",
            availability: "सोम-शुक्र 10:00-17:00"
          },
          {
            name: "श्री अजय कुमार",
            position: "जिल्हा कृषी अधिकारी",
            district: "जमशेदपूर",
            phone: "+91-657-2234567",
            email: "dao.jamshedpur@jharkhand.gov.in",
            availability: "सोम-शुक्र 10:00-17:00"
          }
        ]
      },
      response: {
        title: "प्रतिसादाची वेळ",
        emergency: "तातडीचे",
        immediate: "त्वरित",
        normal: "सामान्य",
        hours24: "24 तास",
        info: "माहिती",
        hours48: "48 तास"
      },
      categories: {
        crop: 'पिकाचा सल्ला',
        scheme: 'सरकारी योजना',
        seeds: 'बियाणे आणि खते',
        weather: 'हवामानाची माहिती',
        market: 'बाजारभाव',
        technical: 'तांत्रिक मदत',
        complaint: 'तक्रार',
        other: 'इतर'
      }
    }
  },
  ur: {
    contact: {
      title: "ہم سے رابطہ کریں",
      subtitle: "حکومت جھارکھنڈ - محکمہ زراعت",
      voice: "محکمہ زراعت سے رابطے کی معلومات: ہیڈ کوارٹر فون 0651-2446789، ہیلپ لائن 1800-123-4567۔ ضلعی افسران سے براہ راست رابطہ کریں یا آن لائن پیغام بھیجیں۔",
      emergency: {
        title: "ہنگامی رابطہ",
        helpline: "24x7 ہیلپ لائن",
        whatsapp: "واٹس ایپ",
        email: "ہنگامی ای میل"
      },
      form: {
        title: "پیغام بھیجیں",
        name: "نام *",
        name_placeholder: "آپ کا نام",
        phone: "فون *",
        phone_placeholder: "+91-XXXXX-XXXXX",
        email: "ای میل",
        email_placeholder: "your.email@example.com",
        district: "ضلع *",
        district_placeholder: "ضلع کا انتخاب کریں",
        category: "زمرہ *",
        category_placeholder: "زمرہ منتخب کریں",
        subject: "موضوع *",
        subject_placeholder: "پیغام کا موضوع",
        message: "پیغام *",
        message_placeholder: "اپنا پیغام یہاں لکھیں",
        submit: "پیغام بھیجیں"
      },
      hq: {
        title: "ہیڈ کوارٹر سے رابطہ",
        address: "پتہ",
        address_value: "کرشی بھون، رانچی\nجھارکھنڈ - 834001",
        phone: "فون",
        email: "ای میل",
        hours: "دفتری اوقات",
        hours_value: "پیر - جمعہ: 10:00 AM - 5:00 PM"
      },
      quick: {
        title: "فوری خدمات",
        missed: "مسڈ کال کے ذریعے معلومات حاصل کریں",
        sms: "SMS سروس",
        complaint: "آن لائن شکایت"
      },
      officers: {
        title: "ضلعی زرعی افسران",
        call: "کال",
        email: "ای میل",
        list: [
          {
            name: "ڈاکٹر رام کمار سنگھ",
            position: "ضلعی زرعی افسر",
            district: "رانچی",
            phone: "+91-651-2234567",
            email: "dao.ranchi@jharkhand.gov.in",
            availability: "پیر-جمعہ 10:00-17:00"
          },
          {
            name: "مسز سنیتا دیوی",
            position: "ضلعی زرعی افسر",
            district: "دھنباد",
            phone: "+91-326-2234567",
            email: "dao.dhanbad@jharkhand.gov.in",
            availability: "پیر-جمعہ 10:00-17:00"
          },
          {
            name: "مسٹر اجے کمار",
            position: "ضلعی زرعی افسر",
            district: "جمشید پور",
            phone: "+91-657-2234567",
            email: "dao.jamshedpur@jharkhand.gov.in",
            availability: "پیر-جمعہ 10:00-17:00"
          }
        ]
      },
      response: {
        title: "جواب کا وقت",
        emergency: "ہنگامی",
        immediate: "فوری",
        normal: "عام",
        hours24: "24 گھنٹے",
        info: "معلومات",
        hours48: "48 گھنٹے"
      },
      categories: {
        crop: 'فصل کی تجویز',
        scheme: 'سرکاری اسکیم',
        seeds: 'بیج اور کھاد',
        weather: 'موسم کی معلومات',
        market: 'مارکیٹ کی قیمتیں',
        technical: 'تکنیکی مدد',
        complaint: 'شکایت',
        other: 'دیگر'
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
