import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import LanguageSwitcher from './locales/LanguageSwitcher';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import ThemeToggle from './Components/Reuse/ThemeToggle';
import { AnimatedComponent } from './Components/Reuse/AnimatedComponent';


const HomePage = () => {
    const { t } = useTranslation(['home', 'common']);

    return (
        <div className="">
            <LanguageSwitcher />
            <ThemeToggle />

            <h1 className="text-3xl font-bold mb-4">{t('home:welcome')}</h1>
            <p className="text-lg mb-6">{t('home:description')}</p>

            <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Test Section</h2>
                <p>Current language: <strong>{t('common:language_switcher.' + i18n.language)}</strong></p>
            </div>

            <div className="flex items-center justify-center gap-2 p-4">
                <FaArrowAltCircleLeft className="h-8 w-8 text-purple-500" />

                <AnimatedComponent animationType="fade" duration={1} delay={0.3}>
                    <h1 className="text-4xl font-bold animated-gradient-text">
                        نحو آفاق أعمالٍ لا حدود لها
                    </h1>
                </AnimatedComponent>
            </div>
        </div>
    );
};

export default HomePage;