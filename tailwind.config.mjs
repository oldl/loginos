/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FFFFFF',
          soft: '#F5F5F5',
          dim: '#EBEBEB',
        },
        ink: {
          DEFAULT: '#111111',
          soft: '#505050',
          faint: '#686868',
        },
        accent: {
          DEFAULT: '#1646F5',
          dark: '#1036C4',
          light: '#E8EDFF',
          faint: '#F3F5FF',
        },
        line: '#D8D8D8',
      },
      fontFamily: {
        sans: ['Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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
            a: {
              color: theme('colors.accent.dark'),
              fontWeight: '500',
              textDecoration: 'none',
              borderBottom: 'none',
              backgroundImage: `linear-gradient(${theme('colors.accent.light')}, ${theme('colors.accent.light')})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
              WebkitBoxDecorationBreak: 'clone',
              boxDecorationBreak: 'clone',
              transition: 'color 200ms ease, background-size 250ms ease',
              '&:hover, &:focus-visible': {
                color: theme('colors.accent.DEFAULT'),
                backgroundSize: '0% 100%',
              },
              '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
