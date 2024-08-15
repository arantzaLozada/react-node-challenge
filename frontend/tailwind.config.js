/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-small': '#666666',
        'color-paragraph': '#3C3C43',
      },
    },
  },
  plugins: [],
};
