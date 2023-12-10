/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // lib, posts, public and styles will not be using
    // TailwindCSS classes, so were not included here
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

