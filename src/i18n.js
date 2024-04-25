import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import deTranslations from './locales/de.json';
import enTranslations from './locales/en.json';
import itTranslations from './locales/it.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: deTranslations },
      en: { translation: enTranslations },
      it: { translation: itTranslations },
    },
    lng: 'de', // Lingua predefinita
    fallbackLng: 'de', // Lingua di fallback
    interpolation: {
      escapeValue: false, // Non escapare HTML nei testi
    },
  });

export default i18n;
