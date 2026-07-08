/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        walnut: { light: '#5d4037', DEFAULT: '#3e2723', dark: '#2b1a17' },
        brass: { light: '#e6c98c', DEFAULT: '#b8860b', dark: '#806020' },
        paper: { light: '#fdfbf7', DEFAULT: '#f4ecd8', dark: '#e8e0d0' },
        ink: '#2b2b2b'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"Special Elite"', 'monospace'],
      },
      boxShadow: {
        'brass': 'inset 0 1px 1px rgba(255,255,255,0.5), inset 0 -2px 2px rgba(0,0,0,0.3), 0 4px 6px rgba(0,0,0,0.4)',
        'paper': '0 1px 1px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.3)',
        'desk': 'inset 0 0 150px 50px rgba(0,0,0,0.7)',
      }
    },
  },
  plugins: [],
}
