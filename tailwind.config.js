/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bg_image: "url('/src/assets/bg_img.jpg')",
      },
    },
  },
  plugins: [],
}
