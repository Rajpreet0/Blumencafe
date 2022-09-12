/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        merri: ['Merriweather', 'serif'],
        satisfy: ['Satisfy', 'cursive'],
        lobster: ['Lobster Two','cursive'],
      }
    },
  },
  plugins: [],
}
