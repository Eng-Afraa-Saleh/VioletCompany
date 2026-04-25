import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import BrandSlider from './BrandSlider';

 import brandLogo from '/assets/images/Brand/brandLogo.png';
 
interface BrandData {
  title: string;
  subtitle: string;
  sections: Array<{
    content: string;
    image: string;
    des: string;
  }>;
  features: string[];
  qa_section?: {
    title: string;
    subtitle: string;
    content: string;
    image: string;
  };
  qa_features?: string[];
}

const BrandPage = () => {
  const { t, i18n } = useTranslation('brand');
  const isRTL = i18n.language === 'ar';
  const brandData = t('brand', { returnObjects: true }) as BrandData; 

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

   const sectionsWithImages = brandData.sections.map((section) => ({
    ...section,
    image: brandLogo  
  }));

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
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
            {brandData.title}
          </motion.h2>
          <motion.h3
            className="text-xl animated-gradient-text font-bold font-primary"
            variants={fadeIn}
          >
            {brandData.subtitle}
          </motion.h3>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {sectionsWithImages.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-col' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <div className='w-full flex-row lg:flex items-center justify-between'>
                <div className="lg:w-1/2">
                  <motion.p
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {section.content}
                  </motion.p>
                </div>
                <div className="lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={section.image}
                      alt={`Palmyra System ${index + 1}`}
                      className="w-1/2"
                    />
                  </motion.div>
                </div>
              </div>

              <div className='w-full flex-row lg:flex items-center justify-between gap-10'>
                <div className="lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-24"
                  >
                    <BrandSlider />
                  </motion.div>
                </div>
                <div className="lg:w-1/2">
                  <motion.p
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {section.des}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12 animated-gradient-text">
            {isRTL ? 'المميزات الرئيسية' : 'Key Features'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {brandData.features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-blue-600 dark:text-blue-400 text-xl" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {feature}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

         
      </div>
    </section>
  );
};

export default BrandPage;