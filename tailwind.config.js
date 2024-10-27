/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster', 'sans-serif']
      },
      screens: {
        'xs-personalizado': '480px', // Punto de quiebre personalizado de 400px
      },
    },
  },
  plugins: [],
}

