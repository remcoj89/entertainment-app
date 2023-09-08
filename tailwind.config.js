/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkblue: '#10141E',
      red: '#FC4747',
      greyishblue: '#5A698F',
      semidarkblue: '#161D2F',
      purewhite: '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}
