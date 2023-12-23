/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      'home-background': "url('./src/assets/images/home-background.jpg')"
    },
  },
  plugins: [],
}

