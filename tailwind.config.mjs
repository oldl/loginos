/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F8F7F3',
          soft: '#F1EFE9',
          dim: '#EAE7DF',
        },
        ink: {
          DEFAULT: '#15161A',
          soft: '#42444C',
          faint: '#82848C',
        },
        accent: {
          DEFAULT: '#3C31C7',
          dark: '#2C2494',
          light: '#ECEAFB',
          faint: '#F4F3FC',
        },
        line: '#E1DFD8',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(21,22,26,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,22,26,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '64px 64px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink.soft'),
            '--tw-prose-headings': theme('colors.ink.DEFAULT'),
            '--tw-prose-links': theme('colors.accent.DEFAULT'),
            '--tw-prose-bold': theme('colors.ink.DEFAULT'),
            '--tw-prose-bullets': theme('colors.accent.DEFAULT'),
            '--tw-prose-hr': theme('colors.line'),
            '--tw-prose-quotes': theme('colors.ink.DEFAULT'),
            '--tw-prose-quote-borders': theme('colors.accent.DEFAULT'),
            maxWidth: '68ch',
            fontSize: '1.0625rem',
            lineHeight: '1.75',
            a: { fontWeight: '500', textDecoration: 'none', borderBottom: '1px solid currentColor' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
