/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'omblue': '#2faee0',
        
      },
      backgroundImage: {
        'marseille1': "url('/assets/marseille1.jpg')",
        'bg2': "url('/assets/fond2.jpg')",
      },
      animation:{
        fade:'fade 5s ease-in-out'
      },
      keyframes:{
        fade: {
          '0%' : { opacity: 0, left: '50%', transform: 'translateX(-50%), scale(0)'},
          '5%' : { opacity: 1, left: '50%', transform: 'translateX(-50%)'},
          '95%' : { opacity: 1, left: '50%', transform: 'translateX(-50%)'},
          '100%' : { opacity: 0, left: '50%', transform: 'translateX(-50%), scale(0)'},
        }
      }
    },
  },
  // plugins: [
  //   require('@tailwindcss/aspect-ratio'),

  //   plugin(function ({ addUtilities }) {
  //     const myUtilities = {
  //       ".bg-aqua": { background: "aqua" },
  //       ".rotate-150deg": {
  //         transform: "rotateX(150deg)",
  //       },
  //     };
  //     addUtilities(myUtilities);
  //   }),
  // ],
}
