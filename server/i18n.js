const i18next = require("i18next");
const Backend = require("i18next-fs-backend");
const LanguageDetector = require("i18next-http-middleware").LanguageDetector;
const { defaultNS, resources } = require("./locales/resources");

i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: ["ko", "en"],
    debug: process.env.NODE_ENV !== "production",
    defaultNS,
    resources,
    lowerCaseLng: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: __dirname + "./locales/{{lng}}/common.js",
    },
    detection: {
      order: ["header", "querystring", "cookie"],
      caches: ["cookie"],
    },
  });

module.exports = i18next;
