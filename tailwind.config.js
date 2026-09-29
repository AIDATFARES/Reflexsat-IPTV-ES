/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        spanish: {
          red: '#AA151B',
          redBright: '#D61F2C',
          redDark: '#780C11',
          yellow: '#F1BF00',
          gold: '#FFC400',
          goldLight: '#FFE382',
        },
        dark: {
          950: '#060606',
          900: '#090909',
          850: '#0D0D0D',
          800: '#111111',
          750: '#171717',
          700: '#1F1F1F',
          600: '#2A2A2A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 25px rgba(214, 31, 44, 0.35)',
        'glow-gold': '0 0 25px rgba(255, 196, 0, 0.35)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'spanish-flag': 'linear-gradient(90deg, #AA151B 0% 30%, #F1BF00 30% 70%, #AA151B 70% 100%)',
        'red-gold-gradient': 'linear-gradient(135deg, #D61F2C 0%, #F1BF00 100%)',
        'dark-card-gradient': 'linear-gradient(180deg, rgba(26,26,26,0.7) 0%, rgba(13,13,13,0.9) 100%)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
