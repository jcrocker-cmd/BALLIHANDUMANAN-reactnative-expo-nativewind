/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './components/*.{js,ts,tsx}',
    './screens/**/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        inknut: ['InknutRegular'],
        inknutBold: ['InknutBold'],
        inknutSemiBold: ['InknutSemiBold'],
      },

      screens: {
        'max-xs': { max: '375px' }, // Small phones (iPhone SE, older devices)
        'max-sm': { max: '480px' }, // Most mobile phones
        'max-md': { max: '640px' }, // Large phones, small tablets
      },
    },
  },
  plugins: [],
};
