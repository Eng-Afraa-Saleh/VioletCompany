import { useTranslation } from 'react-i18next';
import { motion, type Variants, } from 'framer-motion';
import { FiArrowRightCircle } from 'react-icons/fi';
import HeroSlider from './HeroSlider';

export const Hero = () => {
  const { t, i18n } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  const stats = [
    { id: 'clients', value: t('hero.stats.clients.value'), label: t('hero.stats.clients.label') },
    { id: 'projects', value: t('hero.stats.projects.value'), label: t('hero.stats.projects.label') },
    { id: 'experience', value: t('hero.stats.experience.value'), label: t('hero.stats.experience.label') }
  ];

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const
      } 
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.3 
      }
    }
  };

  return (
    <section className="relative overflow-hidden py-8  px-4 bg-gradient-to-br from-light-background via-light-background to-light-primary/10 dark:from-dark-background  dark:via-dark-background dark:to-dark-card">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('./assets/images/patterns/grid.svg')] opacity-10 dark:opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-light-primary/5 dark:bg-dark-primary/5 blur-3xl"></div>
      </div>

      <div className={`container mx-auto flex flex-col ${isRTL ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-16 relative z-10`}>
        <motion.div 
          className="md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold my-10 leading-tight font-primary
              bg-gradient-to-r from-light-primary via-light-accent to-light-highlight 
              dark:from-dark-primary dark:via-dark-accent dark:to-dark-highlight
              bg-clip-text text-transparent animated-gradient-text ${isRTL ? 'text-right pb-16' : 'text-left'}`}
            variants={fadeIn}
          >
            {t('hero.title')}
          </motion.h1>

           <motion.p 
            className={`text-lg md:text-xl text-light-text/80 dark:text-dark-text/80 mb-8 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}
            variants={fadeIn}
          >
            {t('hero.description')}
          </motion.p>

           <motion.div 
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}
            variants={fadeIn}
          >
            {stats.map((stat) => (
              <motion.div 
                key={stat.id}
                className="bg-white/80 dark:bg-dark-card/90 p-4 rounded-xl shadow-lg backdrop-blur-sm border border-light-primary/10 dark:border-dark-primary/10 hover:shadow-xl transition-all"
                whileHover={{ y: -8, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                variants={fadeIn}
              >
                <div className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-light-text/70 dark:text-dark-text/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

           <motion.div
            variants={fadeIn}
            className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}
          >
            <motion.button
              className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all group
                bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent
                text-white font-medium shadow-lg hover:shadow-xl relative overflow-hidden`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">{t('hero.contact_btn')}</span>
              <FiArrowRightCircle className="h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-gradient-to-r from-light-primary/80 to-light-accent/80 dark:from-dark-primary/80 dark:to-dark-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </motion.div>
        </motion.div>
        
         <motion.div 
          className="md:w-1/2 w-full h-[350px] md:h-[500px]"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <HeroSlider />
        </motion.div>
      </div>
    </section>
  );
};