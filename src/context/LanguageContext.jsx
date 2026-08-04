import { createContext, useContext, useEffect, useState } from "react";
import i18n from "@/i18n";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(i18n.resolvedLanguage || "az");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  
  useEffect(() => {
    const onLanguageChanged = (lng) => {
      setLang(lng);
    };

    i18n.on("languageChanged", onLanguageChanged);

    return () => {
      i18n.off("languageChanged", onLanguageChanged);
    };
  }, []);

  return <LanguageContext.Provider value={{ lang, changeLanguage }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
