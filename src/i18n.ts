import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './locales/en/common.json';
import arCommon from './locales/ar/common.json';
import enAbout from './locales/en/about.json';
import arAbout from './locales/ar/about.json';
import enServices from './locales/en/services.json';
import arServices from './locales/ar/services.json';
import enBrand from './locales/en/brand.json';
import arBrand from './locales/ar/brand.json';
import enfooter from './locales/en/footer.json';
import arfooter from './locales/ar/footer.json';
import enContact from './locales/en/contact.json';
import arContact from './locales/ar/contact.json';
i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: {
      common: enCommon,
      about: enAbout,
      services: enServices,
      brand: enBrand,
      contact:enContact,
      footer:enfooter



    },
    ar: {
      common: arCommon,
      about: arAbout,
      services: arServices,
      brand: arBrand,
       contact:arContact,
      footer:arfooter


    }
  },
  interpolation: {
    escapeValue: false
  },
  ns: ['common', 'about', 'services', 'brand', 'footer'],  

  defaultNS: 'common'  
});

export default i18n;