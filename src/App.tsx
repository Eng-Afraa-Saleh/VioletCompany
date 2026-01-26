import { Routes, Route } from 'react-router-dom';
import './i18n';
import Header from './Components/Header/Header';
import ModernFooter from './Components/Footer/ModernFooter';
import Main from './Components/Home/Main/Main';
import MainAbout from './Components/About/MainAbout';
import MainServices from './Components/Services/MainServices';
import MainBrand from './Components/Brand/MainBrand';
  import Login from './Components/Auth/Login';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/Pages/NotFound';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/about" element={<MainAbout />} />
          <Route path="/services" element={<MainServices />} />
          <Route path="/brand" element={<MainBrand />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />
           
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <ModernFooter />
    </div>
  );
};

export default App;