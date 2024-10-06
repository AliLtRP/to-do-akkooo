import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import englishDictionary from "./dictionaries/eng.json";
import arabicDictionary from "./dictionaries/ar.json";
import { useMemo } from "react";

const useI18n = () => {
  const resources = useMemo(() => ({
    en: {
      translation: englishDictionary,
    },
    ar: {
      translation: arabicDictionary,
    },
  }), []);

  useMemo(() => {
    i18n.use(initReactI18next).init({
      resources,
      lng: "en",
      fallbackLng: "ar",
      interpolation: {
        escapeValue: false,
      },
    });
  }, [resources]);

  return i18n;  // Return the i18n instance so you can use it in components
};

export default useI18n;