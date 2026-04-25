import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

 import form1 from '/assets/images/Brand/form1.png';
import form2 from '/assets/images/Brand/form2.png';
import form3 from '/assets/images/Brand/form3.png';
import form4 from '/assets/images/Brand/form4.png';
import form5 from '/assets/images/Brand/form5.png';

interface SlideData {
  image: string;
  [key: string]: any; 
}

const BrandSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const { t, i18n } = useTranslation('brand');
  const isRTL = i18n.language === 'ar';

   const importedImages = [form1, form2, form3, form4, form5];
  
   const brandData = t('brandslider.cards', { returnObjects: true }) as SlideData[];
  
   const slidesWithImages = brandData.map((slide, index) => ({
    ...slide,
    image: importedImages[index] || slide.image
  }));

  useEffect(() => {
    if (slidesWithImages.length === 0) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slidesWithImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slidesWithImages.length]);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? (isRTL ? '-100%' : '100%') : (isRTL ? '100%' : '-100%'),
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? (isRTL ? '-100%' : '100%') : (isRTL ? '100%' : '-100%'),
      opacity: 0,
      transition: { duration: 0.5 }
    })
  };

  if (!slidesWithImages || slidesWithImages.length === 0) {
    return <div className="w-full h-64 md:h-96 bg-gray-200 rounded-2xl"></div>;
  }

  return (
    <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 }
          }}
          className="absolute inset-0"
        >
          <img
            src={slidesWithImages[currentSlide].image}
            alt={`Brand slide ${currentSlide + 1}`}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      {slidesWithImages.length > 1 && (
        <div className={`absolute bottom-6 ${isRTL ? 'right-6' : 'left-6'} flex gap-2 z-20`}>
          {slidesWithImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-6'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {slidesWithImages.length > 1 && (
        <>
          <button
            onClick={() => {
              setDirection(-1);
              setCurrentSlide((prev) => (prev - 1 + slidesWithImages.length) % slidesWithImages.length);
            }}
            className={`absolute top-1/2 ${isRTL ? 'right-4' : 'left-4'} z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors`}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isRTL ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
              />
            </svg>
          </button>
          <button
            onClick={() => {
              setDirection(1);
              setCurrentSlide((prev) => (prev + 1) % slidesWithImages.length);
            }}
            className={`absolute top-1/2 ${isRTL ? 'left-4' : 'right-4'} z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors`}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default BrandSlider;