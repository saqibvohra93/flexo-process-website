/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef3fb',
          100: '#d8e2f4',
          200: '#b0c3e6',
          300: '#7f9cd3',
          400: '#4a6fb8',
          500: '#2b4f96',
          600: '#1d3a78',
          700: '#152c5e',
          800: '#0f2148',
          900: '#0b1b3d',
          950: '#071228',
        },
        flexo: {
          yellow: '#f5c518',
          amber: '#f5a623',
          cyan: '#22d3ee',
          orange: '#ff6b35',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
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
