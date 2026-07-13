/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'purple-deep': '#1c0736',
        purple: '#2b0a4d',
        'purple-light': '#3a1268',
        'purple-card': '#33105c',
        gold: '#f5c518',
        'gold-light': '#ffdd55',
        muted: '#c9b8e0',
      },
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.75rem',
      },
    },
  },
  plugins: [],
}
