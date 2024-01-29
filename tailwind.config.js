/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,ё}"
  ],
  theme: {
    extend: {
      container: {
        padding: '1rem',
        center: true,
        screens: {
          DEFAULT: '100%',
          xl: '1184px'
        }
      },
      boxShadow: {
        'sm': 'box-shadow: 0px 2px 28px 0px rgba(23, 24, 26, 0.20);',
        'md': '0px 4px 20px 0px rgba(0, 0, 0, 0.08);',
        'lg': '0px 12px 36px 0px rgba(14, 17, 22, 0.10);',
        'blue': '0px 8.828px 35.31px rgba(56, 143, 243, 0.44);',
      }
    },
  },
  plugins: [],
}

