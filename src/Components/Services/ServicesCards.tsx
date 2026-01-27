import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, type Variants } from 'framer-motion';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

 import services2 from '/assets/images/Services/services1.png';
import services1 from '/assets/images/Services/services2.png';
import services3 from '/assets/images/Services/services3.png';

interface ServiceCard {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
}

const ServicesCards = () => {
  const { t, i18n } = useTranslation('services');
  const isRTL = i18n.language === 'ar';
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services: ServiceCard[] = t('services.cards', { returnObjects: true }) as ServiceCard[];

   const serviceImages = [services1, services2, services3];
  
   const servicesWithImages = services.map((service, index) => ({
    ...service,
    image: serviceImages[index]
  }));

  const cardVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
      scale: 0.95
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const flipVariants: Variants = {
    front: {
      rotateY: 0,
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    back: {
      rotateY: 180,
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 from-light-background via-light-background to-light-primary/10 dark:bg-dark-card">
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
            {t('services.title')}
          </motion.h2>
          <motion.h3 
            className="text-xl animated-gradient-text font-bold font-primary"
            variants={fadeIn}
          >
            {t('services.subtitle')}
          </motion.h3>
        </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesWithImages.map((service, index) => (
            <motion.div 
              key={index}
              className="relative h-64 perspective-1000"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, margin: "-50px 0px -50px 0px" }}
              variants={cardVariants}
              whileHover={flippedIndex === null ? "hover" : {}}
              onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
            >
              <motion.div
                className={`relative w-full h-full rounded-2xl shadow-xl cursor-pointer ${flippedIndex === index ? 'z-10' : ''}`}
                animate={flippedIndex === index ? "back" : "front"}
                variants={flipVariants}
                style={{ transformStyle: 'preserve-3d' }}
              >
                 <div 
                  className="absolute inset-0 backface-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    display: flippedIndex === index ? 'none' : 'block'
                  }}
                >
                  <div className="group relative h-full overflow-hidden rounded-2xl">
                     <motion.div 
                      className="h-full overflow-hidden"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 hover:from-black/40 to-transparent" />
                    </motion.div>

                     <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <motion.h3 
                        className="text-2xl font-bold mb-2"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {service.title}
                      </motion.h3>
                      
                       <motion.button 
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>{isRTL ? 'عرض التفاصيل' : 'View Details'}</span>
                        <FiArrowRight className={`${isRTL ? 'rotate-180' : ''}`} />
                      </motion.button>
                    </div>
                  </div>
                </div>

                 <div 
                  className="absolute inset-0 backface-hidden bg-gradient-to-br from-dark-accent to-light-secondary dark:from-dark-card dark:to-light-secondary p-6 rounded-2xl flex flex-col"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    display: flippedIndex === index ? 'block' : 'none'
                  }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-100 flex-1 overflow-y-auto">
                    {service.fullDescription || service.description}
                  </p>
                  
                    <button 
                    className="flex items-center gap-2 px-4 py-2 text-white bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors mt-4 self-start"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlippedIndex(null);
                    }}
                  >
                    <FiArrowLeft className={`${isRTL ? 'rotate-180' : ''}`} />
                    <span>{isRTL ? 'العودة' : 'Back'}</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;