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
    },
  },
  plugins: [],
}
