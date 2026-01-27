import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import aboutImage from '/public/assets/images/About/about1.png'; 
import { Parallax } from 'react-parallax';

export const AboutSection = () => {
  const { t, i18n } = useTranslation('about');
  const isRTL = i18n.language === 'ar';

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-4 bg-light-background dark:bg-dark-background" id="about">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "0px 0px -100px 0px" }} 
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className={`text-start mb-16 ${isRTL ? 'text-right' : 'text-left'}`}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-light-accent dark:text-dark-accent pb-6"
            variants={fadeIn}
          >
            {t('about.title')}
          </motion.h2>
          <motion.h3 
            className="text-xl animated-gradient-text font-bold font-primary"
            variants={fadeIn}
          >
            {t('about.subtitle')}
          </motion.h3>
        </motion.div>

        <div className={`flex flex-col lg:flex-row gap-12 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}  
            variants={{
              hidden: { opacity: 0, x: isRTL ? 50 : -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
          >
            <div className={`space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              <p className="text-lg text-light-text dark:text-dark-text">
                {t('about.description')}
              </p>
              <div className="relative w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent dark:via-blue-400 rounded-full" />
              <p className="text-lg text-light-text dark:text-dark-text">
                {t('about.company_info')}
              </p>
            </div>
          </motion.div>

          {/* الميزات */}
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }} // تغيير once إلى false
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <div className="abou-company-image">
              <Parallax bgImage={aboutImage} strength={400}>
                <div style={{ height: '400px'}}>
                  <div style={{
                    color: 'white',
                    padding: '50px',
                    textAlign: 'center',
                  }}>
                  </div>
                </div>
              </Parallax>
            </div>
          </motion.div>
        </div>

        {/* تأثير بصري */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }} // تغيير once إلى false
          className="mt-20 flex justify-center"
        >
        </motion.div>
      </div>
    </section>
  );
};