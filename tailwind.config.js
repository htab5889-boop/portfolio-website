/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050507',
        surface: '#131316',
        primary: '#a3c9ff',
        'primary-container': '#2997ff',
        'on-primary': '#00315c',
        'on-primary-container': '#002e57',
        'on-surface': '#e5e1e5',
        'on-surface-variant': '#c0c7d5',
        'surface-dim': '#131316',
        'surface-bright': '#39393c',
        'surface-container-lowest': '#0e0e11',
        'surface-container-low': '#1c1b1e',
        'surface-container': '#201f22',
        'surface-container-high': '#2a2a2d',
        'surface-container-highest': '#353438',
        'outline-variant': '#404753',
        secondary: '#c0c1ff',
        'secondary-container': '#3131c0',
        accent: {
          cyan: '#00f2fe',
          violet: '#7928ca',
          pink: '#ff0080',
          amber: '#ffaa00',
          emerald: '#10b981',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'var(--font-space-mono)', 'monospace'],
        display: ['var(--font-inter)', 'sans-serif'],
      },
      maxWidth: {
        'container-max': '1360px',
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
