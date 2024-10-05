import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import englishDictionary from "./dictionaries/eng.json"
import arabicDictionary from "./dictionaries/ar.json"

const resources = {
    en: {
      translation: englishDictionary,
    },
    ar: {
      translation: arabicDictionary,
    },
  };

i18n.use(initReactI18next).init({
 resources,
 lng: "en",    
 fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
});


export default i18n;