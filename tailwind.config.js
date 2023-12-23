/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'image-l': "url('/src/assets/background-m.png')",
        'image-m': "url('/src/assets/background-s.png')",
      },
    },
  },
  plugins: [],
}