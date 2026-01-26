 import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCalendar, FiUser, FiBook, FiClock, FiStar } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

interface AddCertificationProps {
  onClose: () => void;
}

interface CertificationForm {
  student_name_ar: string;
  student_name_en: string;
  course_name_ar: string;
  course_name_en: string;
  coach_name_ar: string;
  coach_name_en: string;
  number_of_hours: number;
  rate: string;
  score: string;
  start_date: string;
  end_date: string;
  release_date: string;
}

const AddCertification = ({ onClose }: AddCertificationProps) => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState<CertificationForm>({
    student_name_ar: '',
    student_name_en: '',
    course_name_ar: '',
    course_name_en: '',
    coach_name_ar: '',
    coach_name_en: '',
    number_of_hours: 0,
    rate: '',
    score: '',
    start_date: '',
    end_date: '',
    release_date: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
       const newCertification = {
        ...formData,
        id: Date.now().toString(),  
        created_at: new Date().toISOString()
      };

       const existingCertifications = JSON.parse(localStorage.getItem('certifications') || '[]');
      
       const updatedCertifications = [...existingCertifications, newCertification];
      
      //حفظت باللوكال
      localStorage.setItem('certifications', JSON.stringify(updatedCertifications));
      
      onClose();
      
       alert('تم إضافة الشهادة بنجاح!');
      
    } catch (error) {
      console.error('Error adding certification:', error);
      alert('حدث خطأ أثناء إضافة الشهادة');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-dark-card rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
           <div className="flex items-center justify-between p-6 border-b border-light-primary/10 dark:border-dark-primary/10">
            <h2 className="text-2xl font-bold text-light-primary dark:text-dark-primary">
              {t('add_certification')}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 rounded-lg transition-colors"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

           <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-light-text dark:text-dark-text">
                  <FiUser className="w-4 h-4 mr-2" />
                  {t('student_name_ar')}
                </label>
                <input
                  type="text"
                  name="student_name_ar"
                  value={formData.student_name_ar}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-light-primary/20 dark:border-dark-primary/20 rounded-xl bg-white dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-light-text dark:text-dark-text">
                  <FiUser className="w-4 h-4 mr-2" />
                  {t('student_name_en')}
                </label>
                <input
                  type="text"
                  name="student_name_en"
                  value={formData.student_name_en}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-light-primary/20 dark:border-dark-primary/20 rounded-xl bg-white dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                  required
                />
              </div>

               <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-light-text dark:text-dark-text">
                  <FiBook className="w-4 h-4 mr-2" />
                  {t('course_name_ar')}
                </label>
                <input
                  type="text"
                  name="course_name_ar"
                  value={formData.course_name_ar}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-light-primary/20 dark:border-dark-primary/20 rounded-xl bg-white dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-light-text dark:text-dark-text">
                  <FiBook className="w-4 h-4 mr-2" />
                  {t('course_name_en')}
                </label>
                <input
                  type="text"
                  name="course_name_en"
                  value={formData.course_name_en}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-light-primary/20 dark:border-dark-primary/20 rounded-xl bg-white dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                  required
                />
              </div>

               <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-light-text dark:text-dark-text">
                  <FiUser className="w-4 h-4 mr-2" />
                  {t('coach_name_ar')}
                </label>
                <input
                  type="text"
                  name="coach_name_ar"
                  value={formData.coach_name_ar}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-light-primary/20 dark:border-dark-primary/20 rounded-xl bg-white dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-light-text dark:text-dark-text">
                  <FiUser className="w-4 h-4 mr-2" />
                  {t('coach_name_en')}
                </label>
                <input
                  type="text"
                  name="coach_name_en"
                  value={formData.coach_name_en}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-light-primary/20 dark:border-dark-primary/20 rounded-xl bg-white dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                  required
                />
              </div>

               <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-light-text dark:text-dark-text">
                  <FiClock className="w-4 h-4 mr-2" />
                  {t('number_of_hours')}
                </label>
                <input
                  type="number"
                  name="number_of_hours"
                  value={formData.number_of_hours}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-light-primary/20 dark:border-dark-primary/20 rounded-xl bg-white dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                  required
                  min="1"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-light-text dark:text-dark-text">
                  <FiStar className="w-4 h-4 mr-2" />
                  {t('score')}
                </label>
                <input
                  type="text"
                  name="score"
                  value={formData.score}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-light-primary/20 dark:border-dark-primary/20 rounded-xl bg-white dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                  required
                />
              </div>

               <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-light-text dark:text-dark-text">
                  <FiStar className="w-4 h-4 mr-2" />
                  {t('rate')}
                </label>
                <select
                  name="rate"
                  value={formData.rate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-light-primary/20 dark:border-dark-primary/20 rounded-xl bg-white dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                  required
                >
                  <option value="">{t('select_rate')}</option>
                  <option value="excellent">{t('excellent')}</option>
                  <option value="very_good">{t('very_good')}</option>
                  <option value="good">{t('good')}</option>
                  <option value="pass">{t('pass')}</option>
                </select>
              </div>

               <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-light-text dark:text-dark-text">
                  <FiCalendar className="w-4 h-4 mr-2" />
                  {t('start_date')}
                </label>
                <input
                  type="date"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-light-primary/20 dark:border-dark-primary/20 rounded-xl bg-white dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-light-text dark:text-dark-text">
                  <FiCalendar className="w-4 h-4 mr-2" />
                  {t('end_date')}
                </label>
                <input
                  type="date"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-light-primary/20 dark:border-dark-primary/20 rounded-xl bg-white dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-light-text dark:text-dark-text">
                  <FiCalendar className="w-4 h-4 mr-2" />
                  {t('release_date')}
                </label>
                <input
                  type="date"
                  name="release_date"
                  value={formData.release_date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-light-primary/20 dark:border-dark-primary/20 rounded-xl bg-white dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                  required
                />
              </div>
            </div>

             <div className="flex justify-end gap-4 pt-6 border-t border-light-primary/10 dark:border-dark-primary/10">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border border-light-primary/20 dark:border-dark-primary/20 rounded-xl text-light-text dark:text-dark-text hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 transition-colors"
              >
                {t('cancel')}
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-light-primary dark:bg-dark-primary text-white rounded-xl hover:bg-light-primary/90 dark:hover:bg-dark-primary/90 transition-colors"
              >
                {t('add_certification')}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AddCertification;