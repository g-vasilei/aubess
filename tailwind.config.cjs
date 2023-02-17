/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         keyframes: {
            comeFromTop: {
               '0%': { transform: 'translateY(-5px)', opacity: '0' },
               '100%': { transform: 'translateY(0)', opacity: '1' },
            },
         },
      },
   },
   plugins: [require('tailwind-scrollbar')],
}
