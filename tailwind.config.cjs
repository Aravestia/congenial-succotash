/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        wiggle: "animation: wiggle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(0.1rem)' },
        },
      },
    },
  },
  plugins: [],
}
