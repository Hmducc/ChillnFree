/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
      }
    },
  },
  plugins: [],
};
