/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}"
    ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'main': '#FFFFFF',
        'title': '#000000',
        'subTitle': '#222222',
        'gray': 'gray',
        'macroTitle': '#918E9B',
      },
      gridTemplateRows: {
        '9': 'repeat(9, minmax(0, 1fr))',
      },
      gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      gridColumnEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13'
      },
      borderRadius: {
      'lg': '15px',
      },
      boxShadow: {
        'md': '0px 2.98px 7.45px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
}
