/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'text': 'var(--text)',
        'text-light': 'var(--text-light)',
        'background': 'var(--background)',
        'border': 'var(--border)',
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
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1104px',
        // => @media (min-width: 1104px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease 300ms",
      },
    },
  },
  plugins: [],
}

