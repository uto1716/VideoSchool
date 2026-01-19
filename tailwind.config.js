/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ivory': '#f9f7f4',
        'beige': {
          DEFAULT: '#ebe6dd',
          dark: '#d8cfc1',
        },
        'dusty-pink': {
          DEFAULT: '#e8d5d5',
          light: '#f5eded',
        },
        'coral': {
          DEFAULT: '#e88673',
          light: '#f0a998',
        },
        'warm-brown': '#5c4a3a',
        'warm-gray': '#8a7d70',
      },
    },
  },
  plugins: [],
}
