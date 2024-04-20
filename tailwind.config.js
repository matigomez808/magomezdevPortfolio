/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "400px",
      // => @media (min-width: 400px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out', // Animation name, duration, timing function
        'fade-out': 'fadeOut 0.3s ease-in-out', // Another animation name, duration, timing function
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: 0 }, // Start from completely transparent
          'to': { opacity: 1 }, // Animate to fully opaque
        },
        fadeOut: {
          'from': { opacity: 1 }, // Start from fully opaque
          'to': { opacity: 0 }, // Animate to completely transparent
        }
      }
    }

  },
  plugins: [],
};
