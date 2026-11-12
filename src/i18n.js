import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) 
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    fallbackLng: "az",
    supportedLngs: ["az", "en", "ru"],
    // debug: true, // Konsolda debug mesajları görmək üçün
    interpolation: {
      escapeValue: false, 
    },
  detection: {
  order: ["localStorage", "cookie", "navigator"],
  caches: ["localStorage"],
  convertDetectedLanguage: (lng) => lng.split("-")[0],
},
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
      queryStringParams: { v: __APP_VERSION__ },
    },
  });

export default i18n;
