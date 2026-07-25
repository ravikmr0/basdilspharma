/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7f7',
          100: '#d7eded',
          200: '#b3dcdc',
          300: '#82c4c5',
          400: '#4fa4a8',
          500: '#31878c',
          600: '#276d74',
          700: '#245860',
          800: '#224951',
          900: '#203f47',
          950: '#0d2027',
        },
        secondary: {
          50: '#fff9eb',
          100: '#f8edc7',
          200: '#efd889',
          300: '#e1bd4f',
          400: '#cda035',
          500: '#aa7d24',
          600: '#88601e',
          700: '#6d4a1e',
          800: '#5c3f21',
          900: '#503720',
          950: '#2e1d0e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        'card': '0 18px 45px rgba(13, 32, 39, 0.08)',
        'card-hover': '0 26px 70px rgba(13, 32, 39, 0.14)',
        'glow': '0 0 42px rgba(225, 189, 79, 0.22)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideDown: {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
