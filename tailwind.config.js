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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          light: '#009999',
          dark: '#33CCCC',
          DEFAULT: '#009999',
        },
        accent: {
          light: '#FF8A4D',
          dark: '#FF9966',
          DEFAULT: '#FF8A4D',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#009999',
          600: '#0d9488',
          700: '#0f766e',
        },
        coral: {
          400: '#FF9966',
          500: '#FF8A4D',
          600: '#f97316',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },

  plugins: [],
} 