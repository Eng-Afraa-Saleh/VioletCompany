import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiChevronDown, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
          bg-light-primary/10 dark:bg-dark-primary/10
          hover:bg-light-primary/20 dark:hover:bg-dark-primary/20
          text-light-text dark:text-dark-text`}
      >
        <span className="text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
        <FiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} size={16} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`absolute top-12 ${i18n.language === 'ar' ? 'left-0' : 'right-0'} 
            w-40 bg-white dark:bg-dark-background rounded-lg shadow-lg z-50 overflow-hidden`}
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full px-4 py-2 text-left flex items-center justify-between
                hover:bg-light-primary/10 dark:hover:bg-dark-primary/10
                ${i18n.language === language.code ? 'text-light-primary dark:text-dark-primary' : 'text-light-text dark:text-dark-text'}`}
            >
              <span>{language.name}</span>
              {i18n.language === language.code && <FiCheck size={16} />}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default LanguageSwitcher;