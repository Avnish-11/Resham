/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        popins: ['Poppins'],
        inter: ['Inter'],
        roboto: ['Roboto']
      },
      backgroundImage: {
        'hero-pattern': "url('src/assets/Rectangle 1.jpg')", 
      },
    },
  },
  plugins: [],
}
