import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // <-- add this
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          /* your English translations */
        },
      },
      ger: {
        translation: {
          /* your German translations */
        },
      },
    },
    fallbackLng: "en",
    detection: {
      // The order in which user language should be detected
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      // Cache user language on
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
