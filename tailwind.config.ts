import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
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
      },
      fontFamily: {
        sans: [
          'Calibre',
          'Inter',
          'San Francisco',
          'SF Pro Text',
          '-apple-system',
          'system-ui',
          'sans-serif',
        ],
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
      colors: {
        bg: '#111428',
        primary: '#734cf9',
        second: '#da69c1',
        milkWhite: '#ccd6f6',
        sandGray: '#8892b0',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          margin: '0 0 30px 4px',
          fontWeight: '400',
          color: '#FF0000',
        },
        h2: { fontSize: '32px' },
        h3: { fontSize: theme('fontSize.lg') },
      });
    }),
  ],
};
export default config;
