import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2c1349', // plum
          50: '#f5f2f7',
          100: '#e9e3ef',
          200: '#d3c7df',
          300: '#bdaacf',
          400: '#a78dbf',
          500: '#9170af',
          600: '#7b539f',
          700: '#65368f',
          800: '#4f197f',
          900: '#2c1349', // original plum
          950: '#1a0c2e',
        },
        secondary: {
          DEFAULT: '#5070ce', // cobalt
          50: '#f0f3fa',
          100: '#d9e1f4',
          200: '#c2cfee',
          300: '#aabde8',
          400: '#93abe2',
          500: '#7b99dc',
          600: '#5070ce', // original cobalt
          700: '#3a5ab8',
          800: '#2444a2',
          900: '#0e2e8c',
          950: '#071c6e',
        },
        tertiary: {
          DEFAULT: '#5ed78e', // mint
          50: '#f0fbf4',
          100: '#d9f5e3',
          200: '#c2efd2',
          300: '#abe9c1',
          400: '#94e3b0',
          500: '#7ddd9f',
          600: '#5ed78e', // original mint
          700: '#3ac16e',
          800: '#26ab4e',
          900: '#12952e',
          950: '#0a7f1e',
        },
        danger: {
          DEFAULT: '#ff2727', // crimson
          50: '#fff0f0',
          100: '#ffd9d9',
          200: '#ffc2c2',
          300: '#ffabab',
          400: '#ff9494',
          500: '#ff7d7d',
          600: '#ff2727', // original crimson
          700: '#e60000',
          800: '#cc0000',
          900: '#b30000',
          950: '#990000',
        },
        warning: {
          DEFAULT: '#ff7e31', // tangerine
          50: '#fff5f0',
          100: '#ffe6d9',
          200: '#ffd7c2',
          300: '#ffc8ab',
          400: '#ffb994',
          500: '#ffaa7d',
          600: '#ff7e31', // original tangerine
          700: '#e66a1d',
          800: '#cc5609',
          900: '#b34200',
          950: '#992e00',
        },
        info: {
          DEFAULT: '#5490fa', // azure
          50: '#f0f6ff',
          100: '#d9e7ff',
          200: '#c2d8ff',
          300: '#abc9ff',
          400: '#94baff',
          500: '#7dabff',
          600: '#5490fa', // original azure
          700: '#3a7ce0',
          800: '#2668c6',
          900: '#1254ac',
          950: '#0a4092',
        },
        neutral: {
          DEFAULT: '#333333', // charcoal
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c9c9c9',
          300: '#a1a1a1',
          400: '#757575',
          500: '#545454',
          600: '#333333', // original charcoal
          700: '#2a2a2a',
          800: '#212121',
          900: '#181818',
          950: '#0f0f0f',
        },
        light: {
          DEFAULT: '#eaeaea', // silver
          50: '#ffffff',
          100: '#f9f9f9',
          200: '#f2f2f2',
          300: '#eaeaea', // original silver
          400: '#e2e2e2',
          500: '#d9d9d9',
          600: '#d1d1d1',
          700: '#c9c9c9',
          800: '#c1c1c1',
          900: '#b9b9b9',
          950: '#b1b1b1',
        },
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-poppins)'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [forms, typography, aspectRatio],
};

export default config;
