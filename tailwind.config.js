/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Attila', 'sans-serif'],
        'body': ['"Acumin Pro"', 'sans-serif'],
      },
      colors: {
        'btn-primary': '#243c5a',
        'light': "#fff",
      },
    },
  },
  plugins: [],
}

