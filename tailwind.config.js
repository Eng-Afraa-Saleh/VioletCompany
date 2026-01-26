module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  rtl: true,

  theme: {
    extend: {
      
      fontFamily: {
        // الخط الأساسي للواجهة (يدعم العربية والإنجليزية)
        primary: ["Tajawal", "sans-serif"],
        
        // خط ثانوي للعناوين أو الأجزاء الخاصة
        secondary: ["Cairo", "sans-serif"],
        
        // خط للشفرات أو النصوص التقنية
        mono: ["IBM Plex Mono Arabic", "monospace"],
      },
      colors: {
        light: {
          primary: "#8B5CF6",         // بنفسجي متوسط بدلاً من الأزرق
          secondary: "#7C3AED",       // بنفسجي داكن قليلاً
          accent: "#EC4899",         // وردي بدلاً من الأزرق البنفسجي
          text: "#1F2937",            // رمادي داكن جداً
          background: "#F9FAFB",      // رمادي فاتح جداً
          card: "#FFFFFF",            // أبيض
          highlight: "#10B981",       // أخضر بدلاً من الوردي
          success: "#059669",         // أخضر داكن
          warning: "#D97706",        // برتقالي داكن
          error: "#DC2626",           // أحمر داكن
        },
        dark: {
          primary: "#A78BFA",         // بنفسجي فاتح
          secondary: "#8B5CF6",       // بنفسجي متوسط
          accent: "#F472B6",         // وردي فاتح
          text: "#F3F4F6",           // رمادي فاتح جداً
          background: "#111827",     // رمادي ليلي داكن جداً
          card: "#1F2937",            // رمادي داكن
          highlight: "#34D399",       // أخضر فاتح
          success: "#10B981",         // أخضر
          warning: "#FBBF24",        // أصفر
          error: "#F87171",           // أحمر فاتح
        },
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease forwards',
        gradient: 'gradient 6s linear infinite',
      },
        backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};