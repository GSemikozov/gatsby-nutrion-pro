import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const LanguageDetectorOptions = {
  order: ["localStorage"],
  lookupLocalStorage: "i18nextLng",
  caches: ["localStorage"],
}

i18next.use(LanguageDetector).init({
  detection: LanguageDetectorOptions,
  fallbackLng: "en",
  resources: {
    en: {
      translations: require("../locales/en/translations.json"),
    },
    cz: {
      translations: require("../locales/cz/translations.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  //   ns: ['common', 'adminModule'],
  //   defaultNS: 'common',
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
})

i18next.languages = ["en", "cz"]

export default i18next
