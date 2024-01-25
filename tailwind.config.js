/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        home_image: "url('/src/assets/bg_img.jpg')",
        aph_image: "url('/src/assets/aph_img.jpg')",
      },
    },
  },
  plugins: [],
}
