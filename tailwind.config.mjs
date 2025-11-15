import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'xandra-blue': '#0F233B', // Bleu Nuit Savoir
                'xandra-gold': '#D4AF37', // Or Antique
                'xandra-papyrus': '#E5D4B8', // Beige Papyrus
                'xandra-ivory': '#FAF8F4', // Ivoire
            },
            fontFamily: {
                // Police des paragraphes (Inter)
                'sans': ['Inter', ...defaultTheme.fontFamily.sans],
                // Police des titres (Playfair Display)
                'serif': ['Playfair Display', ...defaultTheme.fontFamily.serif],
            },
            // Pour une typographie élégante
            typography: (theme) => ({
              DEFAULT: {
                css: {
                  '--tw-prose-body': theme('colors.xandra-blue'),
                  '--tw-prose-headings': theme('colors.xandra-blue'),
                  '--tw-prose-lead': theme('colors.xandra-blue'),
                  '--tw-prose-links': theme('colors.xandra-gold'),
                  '--tw-prose-bold': theme('colors.xandra-blue'),
                  '--tw-prose-counters': theme('colors.xandra-papyrus'),
                  '--tw-prose-bullets': theme('colors.xandra-gold'),
                  '--tw-prose-hr': theme('colors.xandra-papyrus'),
                  '--tw-prose-quotes': theme('colors.xandra-blue'),
                  '--tw-prose-quote-borders': theme('colors.xandra-gold'),
                  '--tw-prose-captions': theme('colors.xandra-blue'),
                  '--tw-prose-code': theme('colors.xandra-blue'),
                  '--tw-prose-pre-code': theme('colors.xandra-ivory'),
                  '--tw-prose-pre-bg': theme('colors.xandra-blue'),
                  '--tw-prose-invert-body': theme('colors.xandra-ivory'),
                  '--tw-prose-invert-headings': theme('colors.xandra-ivory'),
                  '--tw-prose-invert-links': theme('colors.xandra-gold'),
                },
              },
            }),
        },
    },
    // Ajoute un plugin pour styliser le Markdown (nos articles)
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
