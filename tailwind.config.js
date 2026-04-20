/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'metal-black': '#0a0a0a',
        'metal-dark': '#111111',
        'metal-card': '#1a1a1a',
        'metal-border': '#2a2a2a',
        'steel': '#c0c0c0',
        'steel-light': '#e8e8e8',
        'steel-dark': '#888888',
        'gold': '#b8860b',
        'gold-light': '#d4a017',
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        subheading: ['Oswald', 'sans-serif'],
        body: ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #b8860b 0%, #f0d060 50%, #b8860b 100%)',
      },
      boxShadow: {
        'gold-sm':   '0 0 20px rgba(184,134,11,0.15)',
        'gold-md':   '0 0 40px rgba(184,134,11,0.2)',
        'gold-glow': '0 0 60px rgba(184,134,11,0.1), 0 0 120px rgba(184,134,11,0.05)',
      },
    },
  },
  plugins: [],
}
