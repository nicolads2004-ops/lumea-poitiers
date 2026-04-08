<template>
  <section data-reveal="services" class="relative py-24 bg-gray-950">
    <!-- Subtle gradient -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/5 blur-[120px] rounded-full" />

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-sky-400 uppercase bg-sky-500/10 rounded-full">
          Nos services
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
          Des sites conçus pour votre réussite
        </h2>
        <p class="text-gray-400 text-lg">
          Trois offres pensées pour répondre aux besoins réels des entreprises à Poitiers et dans la Vienne.
        </p>
      </div>

      <!-- Services cards -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="group relative flex flex-col p-8 bg-gray-900/60 border border-gray-800 rounded-2xl hover:border-sky-500/30 transition-all duration-300"
        >
          <!-- Icon -->
          <div class="w-14 h-14 flex items-center justify-center mb-6 rounded-2xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
            <UIcon :name="service.icon" class="w-7 h-7" />
          </div>

          <!-- Title & description -->
          <h3 class="text-xl font-bold text-white mb-3">{{ service.title }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">{{ service.description }}</p>

          <!-- Features -->
          <ul class="flex-1 space-y-3 mb-8">
            <li
              v-for="feature in service.features"
              :key="feature"
              class="flex items-start gap-2 text-sm text-gray-300"
            >
              <UIcon name="i-lucide-check" class="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
              <span>{{ feature }}</span>
            </li>
          </ul>

          <!-- CTA -->
          <div class="mt-auto pt-6 border-t border-gray-800">
            <NuxtLink
              :to="service.link"
              class="flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-semibold text-white bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 hover:border-sky-500/50 rounded-xl transition-all duration-200"
            >
              En savoir plus
              <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    icon: 'i-lucide-layout-template',
    title: 'Site vitrine',
    description: 'Pour les artisans, PME et professions libérales qui veulent une présence en ligne professionnelle et générer des contacts qualifiés.',
    link: '/creation-site-vitrine-poitiers',
    features: [
      'Design sur-mesure responsive',
      'Jusqu\'à 7 pages optimisées',
      'Référencement SEO local',
      'Formulaire de contact intelligent',
      'Hébergement 1 an inclus',
      'Formation à l\'administration'
    ]
  },
  {
    icon: 'i-lucide-shopping-bag',
    title: 'Site e-commerce',
    description: 'Pour les commerces et marques qui veulent vendre en ligne avec une boutique performante et sécurisée.',
    link: '/creation-site-ecommerce-poitiers',
    features: [
      'WooCommerce ou Shopify',
      'Catalogue produits illimité',
      'Paiement sécurisé (CB, PayPal)',
      'Gestion des stocks et commandes',
      'SEO e-commerce avancé',
      'Tableau de bord statistiques'
    ]
  },
  {
    icon: 'i-lucide-refresh-cw',
    title: 'Refonte de site',
    description: 'Pour les entreprises dont le site existant ne génère plus de résultats et nécessite une mise à niveau complète.',
    link: '/refonte-site-internet-poitiers',
    features: [
      'Audit complet de l\'existant',
      'Nouveau design moderne',
      'Migration de contenu',
      'Amélioration des performances',
      'Redirections SEO préservées',
      'Optimisation du taux de conversion'
    ]
  }
]
</script>
