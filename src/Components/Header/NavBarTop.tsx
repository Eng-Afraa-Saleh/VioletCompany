import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const NavbarTop = () => {
  const { t, i18n } = useTranslation('common');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-light-background/90 dark:bg-dark-background/90 backdrop-blur-sm py-2 border-b  border-light-accent/10 dark:border-dark-accent/10' : 'bg-light-background dark:bg-dark-background py-3'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        {/* النص والأيقونة في مجموعة واحدة */}
        <div className={`flex items-center ${i18n.language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
          {/* النص */}
          <motion.span 
            className="text-sm font-medium text-light-text dark:text-dark-text"
            whileHover={{ scale: 1.05 }}
          >
            {t('navbar.slogan')}
          </motion.span>
          
          {/* أيقونة السهم مع رابط للاتصال */}
          <Link to="/contact" className= 'ml-2'>
            <motion.div
              className="p-1 rounded-full bg-light-primary/10 dark:bg-dark-primary/10 text-light-primary dark:text-dark-primary"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiArrowUpRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </div>
        
      <div className=' bg-white w-full h-[1px] my-2 mx-12'></div>
      </div>
    </motion.nav>
  );
};