/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '40': '2.5rem',
    },
    extend: {
      screens: {
        'ipad-pro': '1024px',
        'lg': '1100px',
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        main: "#EA1B25",
        border: "#ddd"
      },
      spacing: {
        '500': '32rem',
        '700': '50rem',
        '75': '18.75rem',
        '25': '6.25rem',
        '50': '12.5rem',
        '1': '0.063rem',
        '5.5': '1.406rem',
        '18': '4.25rem',
        '22': '5.375rem',
        '2300': '143.75rem',
        '1500': '93.75rem',
        '1000': '62.5rem',
        '1300': '81.25rem',
        '400': '25rem',
        '90': '5.625rem',
      }
    },
  },
  plugins: [],
};
