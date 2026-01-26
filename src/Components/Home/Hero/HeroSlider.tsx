import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: './assets/images/Home/slider1.png',
            alt: 'Business Solutions 1'
        },
        {
            image: './assets/images/Home/slider2.png',
            alt: 'Business Solutions 2'
        },
        {
            image: './assets/images/Home/slider3.png',
            alt: 'Business Solutions 3'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            {/* Slides */}
            <div className="relative h-full">
                {slides.map((slide, index) => (
                    <motion.div
                        key={index}
                        className={`absolute inset-0 ${index === currentSlide ? 'z-10' : 'z-0'}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ 
                            opacity: index === currentSlide ? 1 : 0,
                            scale: index === currentSlide ? 1 : 0.95
                        }}
                        transition={{ 
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <img
                            src={slide.image}
                            alt={slide.alt}
                            className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </motion.div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-light-primary dark:bg-dark-primary w-6'
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;