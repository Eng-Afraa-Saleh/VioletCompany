import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
   
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaTwitter,
  FaFacebook
} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { JSX } from 'react';
import { CiFacebook } from 'react-icons/ci';

interface FooterLink {
  title: string;
  url: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface OfficeInfo {
  country: string;
  phones: string[];
  address: string;
}

interface FooterSection {
  title: string;
  description?: string;
  links?: FooterLink[];
  offices?: OfficeInfo[];
}

interface FooterData {
  company_info: FooterSection;
  quick_links: FooterSection;
  services: FooterSection;
  contact: FooterSection;
  social: {
    title: string;
    links: SocialLink[];
  };
  copyright: string;
}

const ModernFooter = () => {
  const { t, i18n } = useTranslation('footer');
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const isRTL = i18n.language === 'ar';
  const footerData = t('footer', { returnObjects: true }) as FooterData;

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      const isDark = JSON.parse(savedDarkMode);
      setDarkMode(isDark);
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(systemPrefersDark);
    }
  }, []);

   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

   const isCurrentPage = (url: string) => {
    return location.pathname === url;
  };

  const socialIcons: Record<string, JSX.Element> = {
    FaFacebook: <FaFacebook />,
    FaInstagram: <FaInstagram />,
    FaTwitter: <FaTwitter />
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 }
    })
  };

  return (
    <footer className={`${darkMode ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'} pt-16 pb-8 transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`}>
              {footerData.company_info.title}
            </h3>
            <p className={`${darkMode ? 'text-dark-text/80' : 'text-light-text/80'}`}>
              {footerData.company_info.description}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaGlobe className={`mt-1 ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`} />
                <a 
                  href="http://www.violetsystem.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${darkMode ? 'text-dark-text/80 hover:text-dark-primary' : 'text-light-text/80 hover:text-light-primary'} transition-colors flex items-center gap-2`}
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></span>
                  WWW.violetsystem.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className={`${darkMode ? 'text-dark-primary' : 'text-light-primary'}`} />
                <a 
                  href="mailto:Info@violetcompany.net" 
                  className={`${darkMode ? 'text-dark-text/80 hover:text-dark-primary' : 'text-light-text/80 hover:text-light-primary'} transition-colors flex items-center gap-2`}
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></span>
                  Info@violetcompany.net
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            custom={1}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className={`text-xl font-bold ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`}>
              {footerData.quick_links.title}
            </h3>
            <ul className="space-y-3">
              {footerData.quick_links.links?.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {isCurrentPage(link.url) ? (
                    <button
                      onClick={scrollToTop}
                      className={`${darkMode ? 'text-dark-text/80 hover:text-dark-primary' : 'text-light-text/80 hover:text-light-primary'} transition-colors flex items-center gap-2 group w-full text-left`}
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-125 transition-transform"></span>
                      {link.title}
                    </button>
                  ) : (
                    <Link 
                      to={link.url}
                      onClick={scrollToTop}
                      className={`${darkMode ? 'text-dark-text/80 hover:text-dark-primary' : 'text-light-text/80 hover:text-light-primary'} transition-colors flex items-center gap-2 group`}
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-125 transition-transform"></span>
                      {link.title}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            custom={2}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className={`text-xl font-bold ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`}>
              {footerData.services.title}
            </h3>
            <ul className="space-y-3">
              {footerData.services.links?.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {isCurrentPage(link.url) ? (
                    <button
                      onClick={scrollToTop}
                      className={`${darkMode ? 'text-dark-text/80 hover:text-dark-primary' : 'text-light-text/80 hover:text-light-primary'} transition-colors flex items-center gap-2 group w-full text-left`}
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-125 transition-transform"></span>
                      {link.title}
                    </button>
                  ) : (
                    <Link 
                      to={link.url}
                      onClick={scrollToTop}
                      className={`${darkMode ? 'text-dark-text/80 hover:text-dark-primary' : 'text-light-text/80 hover:text-light-primary'} transition-colors flex items-center gap-2 group`}
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-125 transition-transform"></span>
                      {link.title}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            custom={3}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className={`text-xl font-bold ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`}>
              {footerData.contact.title}
            </h3>
            
            {footerData.contact.offices?.map((office, index) => (
              <div key={index} className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-dark-primary' : 'text-light-primary'} bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-2 rounded-lg`}>
                  {office.country}
                </h4>
                <div className="space-y-2">
                  {office.phones.map((phone, phoneIndex) => (
                    <div key={phoneIndex} className="flex items-center gap-3">
                      <FaPhone className={`${darkMode ? 'text-dark-primary' : 'text-light-primary'} text-sm`} />
                      <a 
                        href={`tel:${phone}`} 
                        className={`${darkMode ? 'text-dark-text/80 hover:text-dark-primary' : 'text-light-text/80 hover:text-light-primary'} transition-colors text-sm flex items-center gap-2`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                        {phone}
                      </a>
                    </div>
                  ))}
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className={`mt-1 ${darkMode ? 'text-dark-primary' : 'text-light-primary'} text-sm`} />
                    <p className={`${darkMode ? 'text-dark-text/80' : 'text-light-text/80'} text-sm flex items-center gap-2`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                      {office.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`flex flex-col md:flex-row items-center justify-between border-t ${darkMode ? 'border-dark-card' : 'border-light-card'} mt-12 pt-8 ${darkMode ? 'text-dark-text/70' : 'text-light-text/70'}`}
        >
          <p className="mb-4 md:mb-0">{footerData.copyright}</p>

          <div className="flex items-center gap-4">
            <div className="flex gap-3">
              {footerData.social.links.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${darkMode ? 'text-dark-text/80 hover:text-dark-primary' : 'text-light-text/80 hover:text-light-primary'} text-xl p-3 rounded-full ${darkMode ? 'bg-dark-card' : 'bg-light-card'} shadow-md hover:shadow-lg transition-all`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  title={social.name}
                >
                  {socialIcons[social.icon] || null}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default ModernFooter;