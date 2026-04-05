/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0A0F',
          surface: '#111118',
          card: '#16161F',
          border: 'rgba(255,255,255,0.08)',
        },
        light: {
          bg: '#FAFAFA',
          surface: '#FFFFFF',
          card: '#F4F4F8',
          border: 'rgba(0,0,0,0.08)',
        },
        accent: {
          primary: '#6C63FF',
          'primary-light': '#5B52E8',
          secondary: '#FF6B6B',
          tertiary: '#00D4AA',
        },
        text: {
          primary: '#F0F0FF',
          muted: '#8888AA',
          'light-primary': '#0A0A1A',
          'light-muted': '#666680',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        'carousel': 'carousel 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(108, 99, 255, 0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(108, 99, 255, 0.8)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
