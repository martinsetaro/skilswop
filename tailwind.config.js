/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing:{
        "400":"40rem",
        "600":"60rem",
        "500":"50rem",
        "300":"30rem",
      },
      colors:{
        "secondary":"#a74686"
      },
      fontFamily:{
        "monserratR":"monserratR"
      }
    },
  },
 
  plugins: [],
}
