/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#89DB7E',
        'text': '#e9e9f1',
        'text-light': '#aeaeae',
        'background': '#29292a',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(180deg, #89DB7E 0%, #66E778 100%)',
        'background-gradient': 'linear-gradient(135deg, #29292a 0%, #181818 100%)',
      },
      fontSize: {
        'Headline': '4.875rem',   
        'Header': '3rem',             
        'title': '1.5rem',            
        'description': '0.875rem',             
      },
    },
  },
  plugins: [],
}

