/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        playfairDisplay: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};