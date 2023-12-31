/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'inconsolata': ['Inconsolata', 'monospace'],
      },
    },
  },
  plugins: []
}
