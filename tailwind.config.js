/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk}"],
  theme: {
    extend: {
      keyframes: {
        progress: {
          '0%': { left: '-100%' },
          '50%': { left: '100%' },
          '100%': { left: '-100%' },
        },
      },
      animation: {
        progress: 'progress 3s linear infinite',
      },
    },
  },
  plugins: [
    require('@tushargugnani/tailwind-group-peer-checked')
  ],
}
