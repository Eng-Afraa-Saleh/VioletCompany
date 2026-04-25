import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t, i18n } = useTranslation(['contact', 'common']);
    const isRTL = i18n.language === 'ar';

    return (
        <div className={`py-16 md:py-12 px-4 min-h-screen bg-gradient-to-b from-light-background via-light-background to-light-primary/10 dark:bg-dark-card dark:from-dark-background dark:via-dark-background dark:to-dark-primary/10 ${isRTL ? 'text-right' : 'text-left'
            }`}>            <div className="max-w-7xl mx-auto">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold md:text-5xl mb-4 leading-[120%] bg-clip-text text-transparent bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent">
                        {t('contact.title')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                     <div className="space-y-6">
                         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{t('contact.phone.title')}</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">{t('contact.phone.description')}</p>
                            <a href="tel:+1234567890" className="text-2xl font-semibold text-light-primary dark:text-dark-primary hover:underline block">
                                {t('contact.phone.number')}
                            </a>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{t('contact.phone.hours')}</p>
                        </div>

                         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{t('contact.email.title')}</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">{t('contact.email.description')}</p>
                            <a href="mailto:contact@example.com" className="text-xl font-semibold text-light-primary dark:text-dark-primary hover:underline block">
                                {t('contact.email.address')}
                            </a>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{t('contact.email.response')}</p>
                        </div>
                    </div>

                     <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{t('contact.form.title')}</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">{t('contact.form.name.label')}</label>
                                <input
                                    type="text"
                                    placeholder={t('contact.form.name.placeholder')}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:outline-none dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">{t('contact.form.email.label')}</label>
                                <input
                                    type="email"
                                    placeholder={t('contact.form.email.placeholder')}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:outline-none dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">{t('contact.form.subject.label')}</label>
                                <input
                                    type="text"
                                    placeholder={t('contact.form.subject.placeholder')}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:outline-none dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">{t('contact.form.message.label')}</label>
                                <textarea
                                    rows={4}
                                    placeholder={t('contact.form.message.placeholder')}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:outline-none dark:bg-gray-700 dark:text-white"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                            >
                                {t('contact.form.button')}
                            </button>
                        </form>
                    </div>
                </div>

                 <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">{t('contact.location.title')}</h3>
                    <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{t('contact.location.address')}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;