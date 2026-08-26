/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f1f5fc',
          100: '#dbe4f5',
          200: '#b3c6e8',
          300: '#7fa0d8',
          400: '#4a6fc0',
          500: '#2d4f9e',
          600: '#1f3a7a',
          700: '#16295c',
          800: '#101d3f',
          900: '#0a1530',
          950: '#050b1a',
        },
        flexo: {
          yellow: '#F0B429',
          amber: '#C6900A',
          cyan: '#4A5A78',
          orange: '#C6900A',
        },
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'float': 'float 7s ease-in-out infinite',
        'marquee': 'marquee 32s linear infinite',
        'pulse-ring': 'pulseRing 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
