/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      utilities: {
        '.reset': {
          all: 'initial',
        },
      },
      width: {
        '128': '26rem',

      },
      height: {
        '128': '26rem',

      },
      minHeight: {
        '122': '110vh',
      },
      colors: {
        RadialGradient1: "hsl(214, 47%, 23%)", 
        RadialGradient2:"hsl(237, 49%, 15%)",

        Primary: {
          Green: "hsl(75, 94%, 57%)",
          ScissorsGradient1: "hsl(39, 89%, 49%)",
          ScissorsGradient2: "hsl(40, 84%, 53%)",        
          PaperGradient1: " hsl(230, 89%, 62%)",
          PaperGradient2:" hsl(230, 89%, 65%)",
          RockGradient1:"hsl(349, 71%, 52%)",
          RockGradient2:" hsl(349, 70%, 56%)",
          LizardGradient: " hsl(261, 73%, 60%)",
          LizardGradient2: "hsl(261, 72%, 63%)",
          Cyan1: "hsl(189, 59%, 53%) ",
          Cyan2: "hsl(189, 58%, 57%)"
        },
        Neutral: {
           DarkText: "hsl(229, 25%, 31%)",
           ScoreText: "hsl(229, 64%, 46%)",
           HeaderOutline: "hsl(217, 16%, 45%)"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'bg-triangle':"url('./')"
      },
      fontFamily: {
        "barlow":[ "Barlow Semi Condensed", 'sans-serif'],

      },
      boxShadow: {
        'light': 'inset 0 0 10px #000000        ', 
      },

    },
  },
  plugins: [],
}