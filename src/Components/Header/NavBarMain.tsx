import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import LanguageSwitcher from '../../locales/LanguageSwitcher';
import { NavLink } from 'react-router-dom';

export const NavBarMain = () => {
  const { t, i18n } = useTranslation('common');
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', label: t('navbarmain.home') },
    { key: 'about', label: t('navbarmain.about') },
    { key: 'services', label: t('navbarmain.services') },
    { key: 'brand', label: t('navbarmain.brand') },
     { key: 'contact', label: t('navbarmain.contact') }
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 font-primary ${scrolled
          ? 'bg-light-background/95 dark:bg-dark-background/95 border-b border-light-primary/20 dark:border-dark-primary/20 backdrop-blur-sm py-2'
          : 'bg-light-background dark:bg-dark-background py-4'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className={`container mx-auto px-4 flex items-center justify-between ${i18n.language === 'ar' ? 'flex-row-reverse' : 'flex-row'
          }`}>
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src="./assets/images/Logo/Logo.png"
              alt="Logo"
              className="h-10 md:h-12 w-auto hover:opacity-90 transition-opacity dark:hidden"
            />
            <img
              src="./assets/images/Logo/Logo3.png"
              alt="Logo"
              className="h-10 md:h-12 w-auto hover:opacity-90 transition-opacity hidden dark:block"
            />
          </motion.div>

           <div className="hidden lg:flex flex-grow justify-center">

            <div className={`flex ${i18n.language === 'ar' ? 'flex-row' : 'flex-row'} gap-1 md:gap-2 lg:gap-4`}>
              {navItems.map((item) => (
                <motion.div
                  key={item.key}
                  className="relative"
                  onHoverStart={() => setActiveItem(item.key)}
                  onHoverEnd={() => setActiveItem(null)}
                >

                  <NavLink to={`${item.key}`}
                    className={`relative px-4 py-2 whitespace-nowrap text-sm font-medium rounded-lg transition-all
                      ${activeItem === item.key
                        ? 'text-light-primary dark:text-dark-primary'
                        : 'text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary'
                      }`}

                  >

                    {item.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-light-primary dark:bg-dark-primary"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: activeItem === item.key ? 1 : 0,
                        originX: i18n.language === 'ar' ? 1 : 0
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    />
                  </NavLink>





                  {item.label && (
                    <AnimatePresence>
                      {activeItem === item.key && (
                        <motion.div
                          className={`absolute ${i18n.language === 'ar' ? 'right-0' : 'left-0'
                            } mt-2 w-48 rounded-lg shadow-lg bg-light-card dark:bg-dark-card border border-light-primary/20 dark:border-dark-primary/20 overflow-hidden`}
                          initial={{ opacity: 0, y: 0 }}
                          exit={{ opacity: 0, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.a
                          >
                            {item.label}
                          </motion.a>

                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all flex items-center justify-center
                  bg-light-primary/10 dark:bg-dark-primary/10
                  text-light-primary dark:text-dark-primary
                  hover:bg-light-primary/20 dark:hover:bg-dark-primary/20`}
                whileHover={{ scale: 1.1, rotate: darkMode ? 20 : -20 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </motion.button>

              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:flex lg:hidden p-2 rounded-lg transition-all hover:bg-light-primary/20 dark:hover:bg-dark-primary/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ?
                <FiX size={24} className="text-light-primary dark:text-dark-primary" /> :
                <FiMenu size={24} className="text-light-text dark:text-dark-text" />
              }
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className=" w-full absolute left-0 top-full bg-light-card dark:bg-dark-card border-t border-light-primary/20 dark:border-dark-primary/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}
            >
              <div className="container mx-auto px-4 py-3">
                {navItems.map((item) => (
                  <motion.div
                    key={item.key}
                    className="relative py-[2px] border-b border-light-primary/10 dark:border-dark-primary/10 last:border-0"
                  >

                    <NavLink to={`${item.key}`}
                      className={`block px-4 py-3 text-md font-medium rounded-lg transition-all
                        ${activeItem === item.key
                          ? 'text-light-primary dark:text-dark-primary bg-light-primary/10 dark:bg-dark-primary/10'
                          : 'text-light-text dark:text-dark-text'
                        }`}

                      onClick={() => setMobileMenuOpen(false)}
                    >

                      {item.label}
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-light-primary dark:bg-dark-primary"
                        initial={{ scaleX: 0 }}
                        animate={{
                          scaleX: activeItem === item.key ? 1 : 0,
                          originX: i18n.language === 'ar' ? 1 : 0
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      />
                    </NavLink>

                  </motion.div>
                ))}

                <div className={`flex items-center justify-center gap-5 px-4 py-4 mt-2 ${i18n.language === 'ar' ? 'flex-row-reverse' : 'flex-row'
                  }`}>
                  <LanguageSwitcher />
                  <motion.button
                    onClick={toggleDarkMode}
                    className={`p-3 rounded-lg transition-all flex items-center justify-center
                      bg-light-primary/10 dark:bg-dark-primary/10
                      text-light-primary dark:text-dark-primary
                      hover:bg-light-primary/20 dark:hover:bg-dark-primary/20`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Toggle dark mode"
                  >
                    {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};