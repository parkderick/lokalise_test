import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import TRANSLATIONS_EN from "./locale/en.json"
import TRANSLATIONS_ES from "./locale/es.json";
 
i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: {
     en: {
       translation: TRANSLATIONS_EN
     },
     es: {
       translation: TRANSLATIONS_ES
     }
   }
 });

export default i18n
// i18n.changeLanguage("zh");