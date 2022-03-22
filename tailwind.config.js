// const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Margin
      margin: {
        
      },
      spacing: {
        450: '450px',
        100: '45.03rem',
        97: '24.688rem',
        98: '35rem'
      },
      fontFamily: {
        display: ['Poppins'],
        body: ['sans']
      },
      colors: {
        primary: {
          "50": "#fafbfe",
          "100": "#fafbfe",
          "200": "#dbdffa",
          "300": "#aeb7f4",
          "400": "#7887ed",
          "500": "#14279e",
          "600": "#172bb0",
          "700": "#1b33d0",
          "800": "#1d36dd",
          "900": "#2b43e4"
        },
        secondary: {
          "50": "#fbfcfe",
          "100": "#fbfcfe",
          "200": "#dde2f3",
          "300": "#b7c1e6",
          "400": "#8597d5",
          "500": "#3d57b3",
          "600": "#3d57b3",
          "700": "#3b53ab",
          "800": "#3b53ab",
          "900": "#3b53ab"
        },
        third: {
          "50": "#fafbfe",
          "100": "#fafbfe",
          "200": "#dfe5fb",
          "300": "#c0ccf7",
          "400": "#93a7f1",
          "500": "#5c7bea",
          "600": "#4f70e8",
          "700": "#4165e7",
          "800": "#2f56e4",
          "900": "#1c46dd"
        },
        fourth: {
          "50": "#102105116",
          "100": "#fdfcf1",
          "200": "#f4eaa9",
          "300": "#ebd965",
          "400": "#e2c81d",
          "500": "#9a8814",
          "600": "#7e7010",
          "700": "#63580d",
          "800": "#484009",
          "900": "#2d2806"
        },
      },
      backgroundImage: {
        texture: `url(/images/Backgrounds/bgHero.png)`,
        bgJoin: `url(/images/Backgrounds/bgJoin.png)`,
        bgFooter: `url(/images/Backgrounds/bgFooter.png)`,
        bgWave: `url(/images/Backgrounds/bgWave.svg)`,      
        bgMeteor: `url(/images/Backgrounds/bgMeteor.svg)`,      
      },
    },
    inset: {
      left829: {
        '10/10': '5181.3%',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
