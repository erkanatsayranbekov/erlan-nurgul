/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mramor' : "url('/mramor.jpg')",
      },
      keyframes: {
        rotateWiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
      animation: {
        rotateWiggle: 'rotateWiggle 8s ease-in-out infinite',
      },
    },
    fontFamily: {
      wg: ['Wonder Garden', 'sans-serif'],
      cirpnova: ['cirpnova', 'serif'],
      rubik: ['Rubik Scribble', 'system-ui'],
    },
  },
  plugins: [],
};
