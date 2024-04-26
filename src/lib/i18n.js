
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../../public/locales/en/translation.json';
import translationES from '../../public/locales/es/translation.json';

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
    },
    fallbackLng: 'en', // Default language fallback
    debug: true, // Enable debug mode
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;