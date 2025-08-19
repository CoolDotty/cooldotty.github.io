/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      animation: {
        'gradients': 'gradients 60s ease infinite',
        'up-down': 'upDown 0.5s alternate infinite ease-in-out',
        'scroll': 'scroll 3s linear infinite',
      },
      keyframes: {
        gradients: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        upDown: {
          'to': { transform: 'translateY(-0.25em)' },
        },
        scroll: {
          '0%': { transform: 'rotate(0.5deg) translate(0, 0rem)' },
          '50%': { transform: 'rotate(0.25deg) translate(0, 1rem)' },
          '100%': { transform: 'rotate(0.5deg) translate(0, 2rem)' },
        }
      },
      fontFamily: {
        'mini-pizza': ['Mini Pizza', 'cursive'],
        'simply-best': ['Simply the Best', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          'text-shadow': '2px 2px 4px #000000',
        },
        '.text-shadow-lg': {
          'text-shadow': '2px 2px 4px #000000',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
