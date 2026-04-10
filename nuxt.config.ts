export default defineNuxtConfig({
  telemetry: false,

  modules: [
    '@nuxt/ui',
    '@nuxt/fonts'
  ],

  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] }
    ],
    defaults: {
      preload: true,
      fontDisplay: 'optional',
      fallbacks: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
      }
    }
  },

  routeRules: {
    '/api/**': { swr: false, cache: false },
    '/**': { swr: 60 }
  },

  nitro: {
    compressPublicAssets: true,
    minify: true
  },

  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Création de site internet à Poitiers — Sites vitrine, e-commerce & sur-mesure | LUMEA',
      meta: [
        { name: 'google-site-verification', content: 'ckptY8NA7qKLu2Yrn6qmQLlD3CHoB3MsWR0aIbMYZss' },
        { name: 'description', content: 'Agence web à Poitiers spécialisée en création de sites internet. Sites vitrine, e-commerce, refonte. Design sur-mesure, SEO intégré, devis gratuit.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Open Graph
        { property: 'og:title', content: 'LUMEA | Création de site internet à Poitiers' },
        { property: 'og:description', content: 'Agence web à Poitiers. Sites vitrine, e-commerce, refonte. Design sur-mesure, SEO intégré, devis gratuit.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://lumea.poitiers.digital' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:site_name', content: 'LUMEA' },
        { property: 'og:image', content: 'https://lumea.poitiers.digital/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'LUMEA | Agence web Poitiers' },
        { name: 'twitter:image', content: 'https://lumea.poitiers.digital/og-image.jpg' },
        { name: 'twitter:description', content: 'Création de sites internet à Poitiers. Vitrine, e-commerce, refonte. Devis gratuit.' },
        // SEO Keywords
        { name: 'keywords', content: 'creation site internet poitiers, creation site web poitiers, createur site internet poitiers, agence web poitiers, site vitrine poitiers, site e-commerce poitiers, refonte site internet poitiers' },
        // Geo tags
        { name: 'geo.region', content: 'FR-86' },
        { name: 'geo.placename', content: 'Poitiers' },
        { name: 'geo.position', content: '46.5802;0.3404' },
        { name: 'ICBM', content: '46.5802, 0.3404' },
        // Robots
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'author', content: 'LUMEA' },
        { name: 'theme-color', content: '#030712' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }
      ]
    }
  },

  compatibilityDate: '2025-01-15'
})
