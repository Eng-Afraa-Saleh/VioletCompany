import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const ThemeToggle = () => {
  const [isDark,setIsDark]= useState(false);

  useEffect(()=> {
    const savedTheme=localStorage.getItem("theme");
    if (savedTheme === "dark") {

      document.documentElement.classList.add("dark");

      setIsDark(true);
    }
  },[]);

  const toggleTheme = () => {


    const html = document.documentElement;

    if (isDark){
      html.classList.remove("dark");
      localStorage.setItem("theme","light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme","dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button onClick={toggleTheme} className={`w-14 h-8 flex items-center rounded-full px-1 transition-colors duration-300
        ${isDark ? "bg-gray-600" : "bg-gray-300"}`}
    >
      <div
        className={`w-6 h-6 rounded-full bg-white dark:bg-[#090D1F] shadow-md transform duration-300 ease-in-out flex items-center justify-center
          
          ${isDark ? "translate-x-6" : "translate-x-0"}`}>
        {isDark ? (<CiLight className="text-yellow-400 text-lg" />) : (<MdOutlineDarkMode className="text-gray-800 text-lg" />)}
      </div>
    </button>
  );
};

export default ThemeToggle;
