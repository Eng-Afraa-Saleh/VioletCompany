 import { useState, useEffect } from 'react';
import { DashboardLayout } from "./DashboardLayout";
import { FiEdit, FiTrash2, FiEye } from 'react-icons/fi';
import type { Certification } from '../../Types/types';

const Dashboard = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //جبت من اللوكال ستورج مؤقتا ..بس اظن الربط هون
    const savedCertifications = localStorage.getItem('certifications');
    if (savedCertifications) {
      setCertifications(JSON.parse(savedCertifications));
    }
    setLoading(false);
  }, []);

  const handleDelete = (id: string) => {
    const updatedCertifications = certifications.filter(cert => cert.id !== id);
    setCertifications(updatedCertifications);
    localStorage.setItem('certifications', JSON.stringify(updatedCertifications));
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-6">
          <div className="animate-pulse">Loading...</div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-light-primary dark:text-dark-primary">
            Dashboard Overview
          </h1>
          <span className="bg-light-primary text-white px-3 py-1 rounded-full text-sm">
            {certifications.length} Certifications
          </span>
        </div>

        {certifications.length === 0 ? (
          <div className="text-center py-12 text-light-text dark:text-dark-text">
            <p>No Certifications</p>
            <p className="text-sm mt-2">For Add Press on "Add Certification"</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-dark-background">
                  <th className="p-3 text-right text-sm font-semibold text-light-text dark:text-dark-text border-b">
                    اسم الطالب
                  </th>
                  <th className="p-3 text-right text-sm font-semibold text-light-text dark:text-dark-text border-b">
                    اسم الدورة
                  </th>
                  <th className="p-3 text-right text-sm font-semibold text-light-text dark:text-dark-text border-b">
                    المدرب
                  </th>
                  <th className="p-3 text-right text-sm font-semibold text-light-text dark:text-dark-text border-b">
                    الساعات
                  </th>
                  <th className="p-3 text-right text-sm font-semibold text-light-text dark:text-dark-text border-b">
                    التقدير
                  </th>
                  <th className="p-3 text-right text-sm font-semibold text-light-text dark:text-dark-text border-b">
                    الإجراءات
                  </th>
                </tr>
              </thead>
              <tbody>
                {certifications.map((cert) => (
                  <tr key={cert.id} className="border-b hover:bg-gray-50 dark:hover:bg-dark-background">
                    <td className="p-3 text-right">
                      <div>
                        <div className="font-medium">{cert.student_name_ar}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{cert.student_name_en}</div>
                      </div>
                    </td>
                    <td className="p-3 text-right">
                      <div>
                        <div className="font-medium">{cert.course_name_ar}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{cert.course_name_en}</div>
                      </div>
                    </td>
                    <td className="p-3 text-right">
                      <div>
                        <div className="font-medium">{cert.coach_name_ar}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{cert.coach_name_en}</div>
                      </div>
                    </td>
                    <td className="p-3 text-right">{cert.number_of_hours} ساعة</td>
                    <td className="p-3 text-right">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        cert.rate === 'excellent' ? 'bg-green-100 text-green-800' :
                        cert.rate === 'very_good' ? 'bg-blue-100 text-blue-800' :
                        cert.rate === 'good' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {cert.rate === 'excellent' ? 'ممتاز' :
                         cert.rate === 'very_good' ? 'جيد جداً' :
                         cert.rate === 'good' ? 'جيد' : 'مقبول'}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <div className="flex justify-end space-x-2">
                        <button className="p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg text-blue-600">
                          <FiEye className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg text-green-600">
                          <FiEdit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => cert.id && handleDelete(cert.id)}
                          className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-red-600"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;