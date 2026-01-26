import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiHome, FiUsers, FiSettings, FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import AddCertification from './AddCertification';

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showAddCertification, setShowAddCertification] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem('isLoggedIn'); 
  navigate('/login');
};


  const menuItems = [
    { icon: FiHome, label: 'Dashboard', href: '/dashboard' },
    { icon: FiUsers, label: 'Certifications', href: '/certifications' },
    { icon: FiSettings, label: 'Settings', href: '/settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-dark-background">
       <motion.div
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className="w-64 bg-white dark:bg-dark-card shadow-lg fixed h-full"
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-light-primary dark:text-dark-primary">
            Dashboard
          </h1>
        </div>

        <nav className="mt-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center px-6 py-3 text-light-text dark:text-dark-text hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 transition-colors"
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </a>
          ))}

           <button
            onClick={() => setShowAddCertification(true)}
            className="w-full flex items-center px-6 py-3 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors mt-4"
          >
            <FiPlus className="w-5 h-5 mr-3" />
            Add Certification
          </button>
        </nav>

        <div className="absolute bottom-0 w-full p-6">
          <button 
            onClick={handleLogout}
            className="flex items-center text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
          >
            <FiLogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </motion.div>

       <div className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-margin duration-300`}>
        <div className="p-6">
           <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="mb-4 p-2 rounded-lg bg-white dark:bg-dark-card shadow"
          >
            ☰
          </button>

          {children}
        </div>
      </div>

       {showAddCertification && (
        <AddCertification onClose={() => setShowAddCertification(false)} />
      )}
    </div>
  );
};