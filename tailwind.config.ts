import type { Config } from 'tailwindcss';

/**
 * TERMINAL FORGE — a dev's personal site typeset like a terminal REPL.
 * Cool charcoal background, warm ember accent, JetBrains Mono everywhere.
 */
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        // One mono to rule them all. Display/serif aliases keep any
        // remaining class references working without rewriting.
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        display: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
        serif: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Cool charcoal body
        bg: '#0E1014',
        'bg-elevated': '#161A22',
        ink: '#0E1014', // legacy alias
        'ink-deep': '#080A0E',
        paper: '#E6E9EF',
        'paper-dim': '#8B93A1',
        muted: '#4C5362',
        rule: '#232833',
        // Single warm accent — forge ember
        ember: '#E8703C',
        'ember-bright': '#FF9563',
        // Rare success / signal
        'term-green': '#6EE7B7',
        // Keep steel for secondary light source
        steel: '#4C5362',
        'steel-cool': '#8B93A1',
      },
      maxWidth: {
        reading: '760px',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(10px)' },
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
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '0.88', transform: 'scale(1.03)' },
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
        'lamp-breath': 'lamp-breath 8s ease-in-out infinite',
        'signal-pulse': 'signal-pulse 2.4s ease-in-out infinite',
        grain: 'grain 10s steps(10) infinite',
      },
    },
  },
  plugins: [],
};
export default config;
