<script setup lang="ts">
const articles = [
  {
    slug: 'combien-coute-site-internet-poitiers',
    title: 'Combien coûte un site internet à Poitiers en 2026 ?',
    excerpt: 'Guide complet des tarifs de création de site internet à Poitiers : site vitrine, e-commerce, sur-mesure. Comparatif freelance vs agence et coûts cachés à prévoir.',
    date: '8 avril 2026',
    datetime: '2026-04-08',
    readingTime: '7 min',
    icon: 'i-lucide-calculator'
  },
  {
    slug: 'site-vitrine-ou-ecommerce-comment-choisir',
    title: 'Site vitrine ou site e-commerce : lequel choisir ?',
    excerpt: 'Deux types de sites, deux objectifs différents. Tableau comparatif, cas concrets à Poitiers et arbre de décision pour faire le bon choix.',
    date: '8 avril 2026',
    datetime: '2026-04-08',
    readingTime: '8 min',
    icon: 'i-lucide-git-branch'
  },
  {
    slug: 'erreurs-referencement-site-internet',
    title: '5 erreurs qui empêchent votre site d\'apparaître sur Google',
    excerpt: 'Les erreurs SEO les plus courantes qui sabotent la visibilité de votre site internet. Pour chaque erreur, une solution concrète et actionnable.',
    date: '8 avril 2026',
    datetime: '2026-04-08',
    readingTime: '7 min',
    icon: 'i-lucide-search-x'
  }
]

useHead({
  title: 'Blog — Conseils création de sites internet | LUMEA Poitiers',
  meta: [
    { name: 'description', content: 'Conseils et guides pratiques pour la création de votre site internet à Poitiers. Tarifs, comparatifs, SEO et bonnes pratiques par l\'équipe LUMEA.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Blog — Conseils création de sites internet | LUMEA Poitiers' },
    { property: 'og:description', content: 'Guides pratiques pour créer et optimiser votre site internet à Poitiers.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://lumea.poitiers.digital/blog' },
    { property: 'og:locale', content: 'fr_FR' }
  ],
  link: [
    { rel: 'canonical', href: 'https://lumea.poitiers.digital/blog' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Blog LUMEA — Création de sites internet à Poitiers',
        description: 'Conseils et guides pratiques pour la création de votre site internet à Poitiers.',
        url: 'https://lumea.poitiers.digital/blog',
        publisher: {
          '@type': 'Organization',
          name: 'LUMEA',
          url: 'https://lumea.poitiers.digital/'
        }
      })
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-white">
    <AppNavbar />

    <main class="pt-32 pb-24">
      <!-- En-tête -->
      <header class="max-w-5xl mx-auto px-6 mb-16 text-center" data-reveal>
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-400 text-sm font-medium mb-6">
          <UIcon name="i-lucide-newspaper" class="w-4 h-4" />
          Blog
        </span>
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Conseils pour votre <span class="text-sky-400">site internet</span>
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Guides pratiques, comparatifs et bonnes pratiques pour créer, optimiser et rentabiliser votre présence en ligne à Poitiers.
        </p>
      </header>

      <!-- Grille articles -->
      <section class="max-w-5xl mx-auto px-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="article in articles"
            :key="article.slug"
            :to="`/blog/${article.slug}`"
            class="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1"
            data-reveal
          >
            <!-- Image placeholder -->
            <div class="aspect-video bg-gray-800 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-600/20 flex items-center justify-center">
                <UIcon :name="article.icon" class="w-12 h-12 text-sky-400/60 group-hover:text-sky-400 transition-colors" />
              </div>
            </div>

            <!-- Contenu carte -->
            <div class="p-6">
              <div class="flex items-center gap-3 text-xs text-gray-500 mb-4">
                <time :datetime="article.datetime" class="flex items-center gap-1">
                  <UIcon name="i-lucide-calendar" class="w-3.5 h-3.5" />
                  {{ article.date }}
                </time>
                <span class="flex items-center gap-1">
                  <UIcon name="i-lucide-clock" class="w-3.5 h-3.5" />
                  {{ article.readingTime }}
                </span>
              </div>

              <h2 class="text-lg font-semibold mb-3 group-hover:text-sky-400 transition-colors leading-snug">
                {{ article.title }}
              </h2>

              <p class="text-sm text-gray-400 leading-relaxed mb-4">
                {{ article.excerpt }}
              </p>

              <span class="inline-flex items-center gap-1.5 text-sm text-sky-400 font-medium">
                Lire l'article
                <UIcon name="i-lucide-arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- CTA bas de page -->
      <section class="max-w-3xl mx-auto px-6 mt-20" data-reveal>
        <div class="bg-gradient-to-br from-sky-500/10 to-blue-600/10 border border-sky-500/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">Un projet de site internet ?</h2>
          <p class="text-gray-300 max-w-lg mx-auto mb-8 leading-relaxed">
            Discutons de votre projet. Premier échange gratuit et sans engagement pour définir la solution adaptée à votre activité.
          </p>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-colors"
          >
            <UIcon name="i-lucide-send" class="w-5 h-5" />
            Demander un devis gratuit
          </NuxtLink>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>
