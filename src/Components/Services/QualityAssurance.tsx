import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiCheck, FiShield, FiCode, FiMonitor, FiBarChart2 } from 'react-icons/fi';

interface QASectionData {
  title: string;
  subtitle: string;
  content: string;
  image: string;
}

interface QAFeaturesData extends Array<string> {}

const QualityAssurance = () => {
  const { t, i18n } = useTranslation('brand');
  const isRTL = i18n.language === 'ar';
  const qaData = t('brand.qa_section', { returnObjects: true }) as QASectionData;
  const qaFeatures = t('brand.qa_features', { returnObjects: true }) as QAFeaturesData;

  const featureIcons = [FiCode, FiMonitor, FiShield, FiBarChart2, FiCheck];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
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
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
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
            {qaData.title}
          </motion.h2>
          <motion.h3 
            className="text-xl animated-gradient-text font-bold font-primary"
            variants={fadeIn}
          >
            {qaData.subtitle}
          </motion.h3>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
              {qaData.content}
            </p>
            
          
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="relative flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={qaData.image}
                alt="Quality Assurance"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <FiShield className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-2xl font-bold">{qaData.title}</h3>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 animated-gradient-text">
            {isRTL ? 'عمليات ضمان الجودة' : 'QA Processes'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {qaFeatures.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center"
                >
                  <div className="p-3 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {feature}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualityAssurance;