import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import hiTranslation from './locales/hi.json';
import mrTranslation from './locales/mr.json';
import urTranslation from './locales/ur.json';

const resources = {
  en: { translation: enTranslation },
  hi: { translation: hiTranslation },
  mr: { translation: mrTranslation },
  ur: { translation: urTranslation }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'mr',
    fallbackLng: 'mr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
