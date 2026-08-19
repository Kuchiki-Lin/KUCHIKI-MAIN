/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontSize: {
        'sm': '0.975rem',   // Small size
        'base': '1rem',      // Base size
        'lg': '1.25rem',     // Your custom value for text-lg
        'xl': '3.5rem',      // Extra large size
        'input': '1rem'

      },
    
      colors: {
        input: '#000000',
        dashdarkmode : "rgb(115 111 106);" 
      },

        token: {
      colorText:  "#fff",
      fontFamily: "Poppins, sans-serif",
    },
    
    components: {
      Form: {
        labelColor: "#ddd",
        labelFontSize: 18,
      },
    },
    
      spacing: {
        DropMen: '50rem',
        DmenuLeft: '56rem',
        DmenuWidth: '32rem',
        numLeft: '69rem',
        uploLeft:'75rem',
        fileLeft:'82rem',
        openLeft:"62rem",
        maintL:"33rem",
        maintW:"40rem",
        multiCpW: '28rem',
        OpenAnsHeight:'69rem',
        signInBoxLeft:'40rem'
      },
   keyframes: {
        swirl: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        swirl: 'swirl 10s linear infinite',
      },

    },
  },
  plugins: [],
};
