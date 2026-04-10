import type { Config } from 'tailwindcss';

/**
 * INK ROOM — a late-evening study lit by a single reading lamp.
 * Warm charcoal, bone paper, dignified dusty plum. Nothing loud.
 */
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        serif: ['var(--font-newsreader)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Atmosphere — warm charcoal body, cold gunmetal skeleton
        ink: '#13120F',
        'ink-deep': '#0A0908',
        paper: '#E6E1D4',
        'paper-dim': '#A9A296',
        muted: '#6A665D',
        // The metal anchor — cold gunmetal for rules, gutters, borders.
        // Sets up a temperature contrast with the warm backdrop and the
        // warm plum signal colour. This is what keeps the palette masculine.
        rule: '#3A434C',
        steel: '#5A6670',
        'steel-cool': '#B8C0C8',
        // Accent — vivid electric violet. High saturation intentionally:
        // it reads as "synthwave / new-wave poster" against the warm charcoal
        // body and the cold gunmetal skeleton, not as "SaaS purple gradient".
        plum: '#7C6BFF',
        'plum-bright': '#9D8CFF',
      },
      maxWidth: {
        reading: '760px',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-slow': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'draw-line': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        'cursor-blink': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'lamp-breath': {
          '0%, 100%': { opacity: '0.75', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.03)' },
        },
        'signal-pulse': {
          '0%, 100%': { opacity: '0.85' },
          '50%': { opacity: '0.35' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-3%, -3%)' },
          '20%': { transform: 'translate(2%, 4%)' },
          '30%': { transform: 'translate(-1%, 2%)' },
          '40%': { transform: 'translate(1%, -2%)' },
          '50%': { transform: 'translate(-2%, 3%)' },
          '60%': { transform: 'translate(3%, -1%)' },
          '70%': { transform: 'translate(-4%, -2%)' },
          '80%': { transform: 'translate(2%, 3%)' },
          '90%': { transform: 'translate(-1%, -3%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out both',
        'fade-in-slow': 'fade-in-slow 1.4s ease-out both',
        'draw-line': 'draw-line 1s cubic-bezier(0.22, 1, 0.36, 1) both',
        'cursor-blink': 'cursor-blink 1s steps(2) infinite',
        'lamp-breath': 'lamp-breath 7s ease-in-out infinite',
        'signal-pulse': 'signal-pulse 2.4s ease-in-out infinite',
        grain: 'grain 10s steps(10) infinite',
      },
    },
  },
  plugins: [],
};
export default config;
