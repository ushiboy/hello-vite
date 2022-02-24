import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_en from "./translations/en/common.json";
import common_ja from "./translations/ja/common.json";
import error_en from "./translations/en/error.json";
import error_ja from "./translations/ja/error.json";

const resources = {
  en: {
    common: common_en,
    error: error_en,
  },
  ja: {
    common: common_ja,
    error: error_ja,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ja",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
