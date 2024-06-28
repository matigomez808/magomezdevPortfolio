/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: {'max' : '639px'},
      // => @media (max-width: 639px) { ... }

      md: {'min' : '640px', 'max' : '1199px'},
      // => @media (min-width: 640px, max-width: 1199px) { ... }

      lg: {'min' : '1200px'},
      // => @media (min-width: 1200px) { ... }
    },
    
    extend: {
      spacing: {
        "dvh-minus-nav" : "calc(100dvh - 65px)",
        "banner" : "20dvh"
      },
      fontFamily: {
        'main': ['Chivo', 'sans-serif'],
        'heading' : ['"Red Hat Display"', 'serif'],
        'mono' : ['"Fira Mono"', 'monospace'],
        'variant' : ['Anonymous Pro', 'serif'],
      },
      colors : {
        'mg-purple' : '#651398',
        'mg-green' : '#067311',
        'mg-off-white' : '#C2DBC5',
        'mg-purple-glow' : 'rgba(101, 19, 152, 0.3)',
        'mg-green-glow' : 'rgba(6, 115, 17, 0.3)',
        'mg-off-white-glow' : 'rgba(194, 219, 197, 0.3)',

      },
      backgroundImage: {
        'glow-purple-left': "linear-gradient(to right, rgba(101, 19, 152, 0.25) 0%, rgba(0, 0, 0, 0.5) 20% )",
        'glow-purple-right': "linear-gradient(to left, rgba(101, 19, 152, 0.25) 0%, rgba(0, 0, 0, 0.5) 20% )",
        'glow-bottom-line' : "linear-gradient(to top, rgba(194, 219, 197, 0.3) 5%, rgba(0,0,0,0) 25%)",
        'glow-top-line' : "linear-gradient(to bottom, rgba(194, 219, 197, 0.1) 5%, rgba(0,0,0,0) 25%)",
        'fade-to-black': "linear-gradient(180deg, rgba(00 , 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)"
      },
      
      animation: {
        'slide-in': 'slideIn 0.5s ease-in',
        'fade-in': 'fadeIn 0.5s ease-in-out', // Animation name, duration, timing function
        'spin-slow': 'spin 5s linear infinite',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.3s ease-in-out', // Another animation name, duration, timing function
      },
      keyframes: {
        slide : {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
