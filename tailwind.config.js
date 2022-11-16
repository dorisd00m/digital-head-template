/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}',
     'node_modules/preline/dist/*.js',
  ],
  theme: {
    container: {
      center: true
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1390px',
    },
   
    extend: {
      fontFamily: {
        primary: ['Plus Jakarta Sans','sans-serif'],
        'ClashDisplay-Variable': ['ClashDisplay-Variable','sans-serif'],
        'ClashDisplay-Extralight': ['ClashDisplay-Extralight','sans-serif'],
        'ClashDisplay-Light': ['ClashDisplay-Light','sans-serif'],
        'ClashDisplay-Regular': ['ClashDisplay-Regular','sans-serif'],
        'ClashDisplay-Medium': ['ClashDisplay-Medium','sans-serif'],
        'ClashDisplay-Semibold': ['ClashDisplay-Semibold','sans-serif'],
        'ClashDisplay-Bold': ['ClashDisplay-Bold','sans-serif'],
      },
     
      colors: {
        primary: '#181818',
        'primary-orange': '#FD6333',
        'primary-yellow': '#F4CB37',
        'primary-green': '#2AA88F',
      },
      
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
  ],
}
