import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface TimelineEvent {
  place: string;
  tenure: string;
  role: string;
  detail: string;
}

const Timeline = () => {
  const { t, i18n } = useTranslation(['about', 'common']);
  const isRTL = i18n.language === 'ar';
  const timelineRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const history = t('about:common.history', { returnObjects: true }) as {
    title: string;
    subtitle: string;
    events: TimelineEvent[];
  };

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    { damping: 20, stiffness: 100 }
  );

  // تأثيرات الحركة لكل عنصر
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // تفعيل الحركات بناءً على تقدم السكرول
  useEffect(() => {
    const handleScroll = () => {
      if (scrollYProgress.get() > 0.1) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    const unsubscribeScroll = scrollYProgress.on("change", handleScroll);
    
    return () => {
      unsubscribeScroll();
    };
  }, [controls, scrollYProgress]);

  if (!history?.events || history.events.length === 0) {
    return (
      <section className="py-20 px-4 bg-light-background dark:bg-dark-background">
        <div className="container mx-auto text-center">
          <p>{t('common:no_data')}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-light-background dark:bg-dark-background" ref={timelineRef}>
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className={`text-start mb-16 ${isRTL ? 'text-right' : 'text-left'}`}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-light-accent dark:text-dark-accent pb-6"
            variants={fadeIn}
          >
            {history.title}
          </motion.h2>
          <motion.h3 
            className="text-xl animated-gradient-text font-bold font-primary"
            variants={fadeIn}
          >
            {history.subtitle}
          </motion.h3>
        </motion.div>

        <div className="relative">
          <div className={`absolute h-full w-1 bg-transparent ${isRTL ? 'right-1/2' : 'left-1/2'} transform -translate-x-1/2`}></div>
          
          <motion.div 
            className={`absolute w-1 shadow-md shadow-light-accent bg-light-accent dark:shadow-dark-primary  dark:bg-dark-primary ${isRTL ? 'right-1/2' : 'left-1/2'} transform -translate-x-1/2`}
            style={{ 
              height: lineHeight,
              top: 0,
            }}
          />

          <div className="space-y-12">
            {history.events.map((event, index) => {
              const itemProgress = useTransform(
                scrollYProgress,
                [index / history.events.length, (index + 0.5) / history.events.length],
                [0, 1]
              );
              
              const itemAnimation = useAnimation();
              
              useEffect(() => {
                const unsubscribe = itemProgress.onChange((value) => {
                  if (value > 0.1) {
                    itemAnimation.start("visible");
                  } else {
                    itemAnimation.start("hidden");
                  }
                });
                return () => unsubscribe();
              }, [itemProgress, itemAnimation]);

              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={itemAnimation}
                  variants={fadeIn}
                  custom={index}
                  className={`relative  flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <motion.div
                    className={`absolute top-6 h-5 w-5  rounded-full border-4 shadow-lg shadow-light-accent dark:shadow-dark-secondary border-light-accent dark:border-dark-primary ${isRTL ? 'right-1/2 mr-[-6px]' : 'left-1/2 ml-[-10px]'} transform -translate-x-1/2`}
                    variants={{
                      hidden: { scale: 0.8, opacity: 0 },
                      visible: { 
                        scale: 1,
                        opacity: 1,
                        transition: { duration: 0.5 }
                      }
                    }}
                  />

                  <motion.div
                    className={`w-full md:w-5/12 p-6  rounded-2xl shadow-lg backdrop-blur-sm ${index % 2 === 0 ? (isRTL ? 'mr-8' : 'ml-8') : (isRTL ? 'ml-8' : 'mr-8')} bg-white/80 dark:bg-dark-background/80 border border-light-accent/10 dark:border-dark-accent/10`}
                    variants={{
                      hidden: { opacity: 0, x: isRTL ? (index % 2 === 0 ? 50 : -50) : (index % 2 === 0 ? -50 : 50) },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { duration: 0.6 }
                      }
                    }}
                  >
                    <div className={`flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
                      <span className="text-sm font-medium text-light-primary dark:text-dark-primary">
                        {event.tenure}
                      </span>
                      <h3 className="text-xl font-bold text-light-text dark:text-dark-text mt-1">
                        {event.role}
                      </h3>
                      <p className="text-sm text-light-text/70 dark:text-dark-text/70 mt-1">
                        {event.place}
                      </p>
                      <p className="mt-3 text-light-text dark:text-dark-text">
                        {event.detail}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;