/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      container: {
        padding: '1rem',
        screens: {
          center: true,
          DEFAULT: '100%',
          xl: '1184px'
        }
      },
      boxShadow: {
        'md': '0px 4px 20px 0px rgba(0, 0, 0, 0.08);',
        'lg': '0px 12px 36px 0px rgba(14, 17, 22, 0.10);'
      }
    },
  },
  plugins: [],
}

