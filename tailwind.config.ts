import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50:  '#FFF5F8',
          100: '#FFEAEF',
          200: '#FFD1DC',
          300: '#FFB3C6',
          400: '#FF8FAD',
          500: '#E87090',
          600: '#D45A7A',
          700: '#B83C60',
          800: '#96274A',
          900: '#741737',
        },
        beige: {
          50:  '#FDFAF6',
          100: '#F9F3EC',
          200: '#F2E8DC',
          300: '#E8D8C8',
          400: '#D9C5B0',
          500: '#C5AF97',
          600: '#A8937C',
          700: '#8A7663',
          800: '#6E5B4C',
          900: '#544238',
        },
        cream: '#FDF8F5',
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up':       'fadeUp 0.6s ease-out forwards',
        'fade-in':       'fadeIn 0.5s ease-out forwards',
        'slide-right':   'slideRight 0.6s ease-out forwards',
        'slide-left':    'slideLeft 0.6s ease-out forwards',
        'float':         'float 6s ease-in-out infinite',
        'pulse-pink':    'pulsePink 2s ease-in-out infinite',
        'gradient-x':    'gradientX 4s ease infinite',
        'spin-slow':     'spin 12s linear infinite',
        'typewriter':    'typewriter 3s steps(30) forwards',
        'blink':         'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        pulsePink: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(232, 112, 144, 0.4)' },
          '50%':      { boxShadow: '0 0 0 16px rgba(232, 112, 144, 0)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        typewriter: {
          '0%':   { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%':      { borderColor: 'currentColor' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass':       '0 8px 32px rgba(232, 112, 144, 0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
        'glass-hover': '0 16px 48px rgba(232, 112, 144, 0.14), inset 0 1px 0 rgba(255,255,255,0.8)',
        'pink':        '0 4px 24px rgba(232, 112, 144, 0.25)',
        'pink-lg':     '0 8px 40px rgba(232, 112, 144, 0.35)',
        'soft':        '0 4px 20px rgba(42, 20, 20, 0.06)',
        'soft-lg':     '0 8px 40px rgba(42, 20, 20, 0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
