/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#07070c',
        surface: '#0f0f18',
        'surface-light': '#181826',
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
        display: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'border-beam': 'borderBeam 6s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0,242,254,0.4))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(121,40,202,0.6))' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        borderBeam: {
          '100%': { offsetDistance: '100%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'davinci-gradient': 'linear-gradient(135deg, #00f2fe 0%, #4facfe 30%, #7928ca 70%, #ff0080 100%)',
      },
    },
  },
  plugins: [],
};
