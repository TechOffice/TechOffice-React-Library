import { reactI18nextModule, withI18n } from "react-i18next";
import i18next from "i18next";
import en from './en.json';
import es from './es.json';

i18next
  .init({
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
    lng: 'en', 
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es
      },
    },
  })
export default i18next;