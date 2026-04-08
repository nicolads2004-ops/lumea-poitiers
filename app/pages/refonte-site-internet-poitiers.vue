<script setup lang="ts">
const faqItems = [
  {
    label: 'Quelle est la différence entre une refonte et une simple mise à jour ?',
    icon: 'lucide:help-circle',
    content: 'Une mise à jour consiste à corriger des bugs, mettre à jour un plugin ou modifier du texte. Une refonte est une reconstruction partielle ou totale de votre site : nouveau design, nouvelle structure, nouveau code, nouvelles fonctionnalités. La formule Refresh reprend votre base existante et la modernise. Les formules Redesign et Rebuild repartent de zéro pour un résultat optimal. Nous vous conseillons l\'approche la plus pertinente selon l\'état de votre site actuel.'
  },
  {
    label: 'Vais-je perdre mon référencement Google pendant la refonte ?',
    icon: 'lucide:help-circle',
    content: 'Non, à condition que la refonte soit bien gérée. Nous mettons en place un plan de redirection 301 pour chaque URL qui change, nous conservons vos balises meta optimisées et nous soumettons le nouveau sitemap à Google Search Console dès la mise en ligne. Dans la grande majorité des cas, le référencement s\'améliore après la refonte grâce à un code plus propre, un temps de chargement réduit et une meilleure structure sémantique.'
  },
  {
    label: 'Combien de temps dure une refonte de site internet ?',
    icon: 'lucide:help-circle',
    content: 'La durée dépend de l\'ampleur du projet. Un Refresh (modernisation visuelle) prend 1 à 2 semaines. Un Redesign (refonte complète du design et du contenu) demande 3 à 5 semaines. Un Rebuild (reconstruction totale avec nouvelles fonctionnalités) prend 4 à 8 semaines. Nous vous communiquons un planning précis dès la validation du devis.'
  },
  {
    label: 'Mon site actuel est sous WordPress, pouvez-vous le refondre ?',
    icon: 'lucide:help-circle',
    content: 'Oui, quelle que soit la plateforme actuelle de votre site (WordPress, Wix, Squarespace, Joomla, PrestaShop, site statique ancien), nous pouvons le refondre. Nous récupérons votre contenu existant (textes, images, produits) et le migrons vers la nouvelle version. Selon vos besoins, nous restons sur WordPress avec un thème sur-mesure ou nous migrons vers une solution plus moderne et performante.'
  },
  {
    label: 'Que se passe-t-il si je ne refais pas mon site ?',
    icon: 'lucide:help-circle',
    content: 'Un site obsolète nuit activement à votre activité. Google pénalise les sites lents, non sécurisés (pas de HTTPS) et non adaptés au mobile. Vos visiteurs quittent le site en quelques secondes si le design est daté ou si la navigation est confuse. Chaque jour sans refonte, vous perdez des clients potentiels au profit de concurrents mieux positionnés. La refonte n\'est pas une dépense : c\'est un investissement qui se rembourse en quelques mois grâce à un meilleur taux de conversion.'
  }
]

const pricingPlans = [
  {
    name: 'Refresh',
    description: 'Un coup de neuf visuel sur votre site existant',
    features: [
      'Modernisation du design (même structure)',
      'Passage en responsive (mobile-friendly)',
      'Optimisation de la vitesse',
      'Mise à jour HTTPS / SSL',
      'Correction des erreurs SEO majeures',
      'Mise à jour des plugins et du CMS',
      'Livraison en 1-2 semaines'
    ],
    highlight: false
  },
  {
    name: 'Redesign',
    description: 'Nouveau design, nouvelle stratégie, même contenu amélioré',
    features: [
      'Design entièrement repensé',
      'Nouvelle arborescence optimisée',
      'Réécriture des textes clés (3-5 pages)',
      'SEO avancé + redirections 301',
      'Formulaire de contact amélioré',
      'Intégration Analytics + Search Console',
      'Responsive et performance A+',
      'Hébergement 1 an inclus',
      'Formation CMS (2h)',
      'Livraison en 3-5 semaines'
    ],
    highlight: true
  },
  {
    name: 'Rebuild',
    description: 'Reconstruction totale, résultat premium',
    features: [
      'Conception à partir de zéro',
      'Direction artistique complète',
      'Copywriting professionnel (toutes pages)',
      'Architecture de conversion optimisée',
      'SEO complet + stratégie de contenu',
      'Fonctionnalités avancées sur-mesure',
      'Migration de contenu + redirections',
      'Hébergement 1 an + maintenance 6 mois',
      'Formation CMS (3h) + support prioritaire',
      'Livraison en 4-8 semaines'
    ],
    highlight: false
  }
]

const warningSignals = [
  {
    icon: 'lucide:palette',
    title: 'Design daté',
    description: 'Votre site ressemble à 2015. Les tendances web évoluent vite. Un design vieillissant donne une image non professionnelle à votre entreprise. Vos visiteurs jugent votre crédibilité en 3 secondes : si le design est daté, ils partent chez un concurrent au site plus moderne.'
  },
  {
    icon: 'lucide:smartphone-nfc',
    title: 'Non adapté au mobile',
    description: 'Plus de 60 % du trafic web vient du mobile. Si votre site n\'est pas responsive, vous perdez la majorité de vos visiteurs. Google pénalise également les sites non mobile-friendly dans ses résultats de recherche depuis 2019. C\'est un facteur bloquant.'
  },
  {
    icon: 'lucide:gauge',
    title: 'Lent au chargement',
    description: 'Un site qui met plus de 3 secondes à charger perd 53 % de ses visiteurs mobiles (source Google). La vitesse est aussi un critère de classement SEO. Un site lent = moins de visiteurs, moins de conversions, moins de revenus.'
  },
  {
    icon: 'lucide:mail-x',
    title: 'Aucun lead généré',
    description: 'Votre site est en ligne depuis des mois mais ne génère aucun appel, aucun formulaire, aucune demande de devis. Le problème vient probablement de l\'absence de call-to-action clairs, d\'un parcours utilisateur confus ou d\'un contenu qui ne répond pas aux questions de vos prospects.'
  },
  {
    icon: 'lucide:shield-off',
    title: 'Pas en HTTPS',
    description: 'Depuis 2018, les navigateurs affichent un avertissement "Non sécurisé" sur les sites sans certificat SSL. Cet avertissement fait fuir les visiteurs et Google déclasse les sites HTTP dans ses résultats. La migration HTTPS est incluse dans toutes nos formules de refonte.'
  },
  {
    icon: 'lucide:code',
    title: 'Technologie obsolète',
    description: 'Flash, tableaux HTML, jQuery ancien, CMS plus maintenu... Si votre site repose sur des technologies dépassées, il est vulnérable aux failles de sécurité, incompatible avec les navigateurs modernes et impossible à faire évoluer. Une reconstruction s\'impose.'
  }
]

const beforeAfter = [
  { label: 'Temps de chargement', before: '6-8 secondes', after: 'Moins de 2 secondes', icon: 'lucide:zap' },
  { label: 'Score mobile Google', before: '30-50/100', after: '90+/100', icon: 'lucide:smartphone' },
  { label: 'Score SEO technique', before: 'Erreurs multiples', after: 'Zéro erreur critique', icon: 'lucide:search' },
  { label: 'Taux de rebond', before: '70-85 %', after: '35-50 %', icon: 'lucide:mouse-pointer-click' },
  { label: 'Taux de conversion', before: '0,5-1 %', after: '2-5 %', icon: 'lucide:trending-up' },
  { label: 'Sécurité', before: 'HTTP, failles connues', after: 'HTTPS, headers sécurisés', icon: 'lucide:shield-check' }
]

const openFaq = ref(0)

useHead({
  title: 'Refonte de site internet à Poitiers — Modernisez votre présence en ligne | LUMEA',
  meta: [
    { name: 'description', content: 'Refonte de site internet à Poitiers par LUMEA. Modernisez votre site web : design, performance, SEO, mobile. Devis gratuit.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Refonte de site internet à Poitiers | LUMEA' },
    { property: 'og:description', content: 'Votre site a plus de 3 ans ? Refonte complète à Poitiers. Design, performance, SEO. Devis gratuit.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://lumea.poitiers.digital/refonte-site-internet-poitiers' },
    { property: 'og:locale', content: 'fr_FR' },
    { property: 'og:site_name', content: 'LUMEA' },
    { property: 'og:image', content: 'https://lumea.poitiers.digital/og-image.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://lumea.poitiers.digital/refonte-site-internet-poitiers' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Service',
            '@id': 'https://lumea.poitiers.digital/refonte-site-internet-poitiers#service',
            name: 'Refonte de site internet à Poitiers',
            description: 'Refonte et modernisation de sites internet. Nouveau design, performance optimisée, SEO technique, responsive design. Pour les entreprises de Poitiers et de la Vienne.',
            provider: {
              '@type': 'LocalBusiness',
              '@id': 'https://lumea.poitiers.digital/#business',
              name: 'LUMEA',
              telephone: '+33 5 49 00 00 00',
              email: 'contact@poitiers.digital',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '12 rue de la Chaîne',
                addressLocality: 'Poitiers',
                postalCode: '86000',
                addressRegion: 'Nouvelle-Aquitaine',
                addressCountry: 'FR'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 46.5802,
                longitude: 0.3404
              },
              areaServed: {
                '@type': 'City',
                name: 'Poitiers'
              },
              priceRange: '€€'
            },
            areaServed: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 46.5802,
                longitude: 0.3404
              },
              geoRadius: '50000'
            },
            serviceType: 'Refonte de site internet',
            offers: {
              '@type': 'AggregateOffer',
              offerCount: '3'
            }
          },
          {
            '@type': 'FAQPage',
            '@id': 'https://lumea.poitiers.digital/refonte-site-internet-poitiers#faq',
            mainEntity: faqItems.map(item => ({
              '@type': 'Question',
              name: item.label,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.content
              }
            }))
          }
        ]
      })
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-white">
    <AppNavbar />

    <main>
      <!-- Hero -->
      <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent" />
        <div class="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/8 rounded-full blur-3xl" />

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/5 text-xs text-sky-400 font-medium mb-6">
              <UIcon name="lucide:refresh-cw" class="w-3.5 h-3.5" />
              Refonte de site internet
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Refonte de site internet à Poitiers
              <span class="block text-sky-400 mt-2">— donnez un coup de neuf qui rapporte</span>
            </h1>

            <p class="mt-6 text-lg sm:text-xl text-white/60 leading-relaxed max-w-3xl">
              Votre site a plus de 3 ans ? Il est probablement lent, mal adapté au mobile, mal référencé et ne génère pas assez de contacts. Une refonte bien menée transforme votre site en machine à convertir. Nous reprenons votre existant et nous en faisons un outil de croissance performant pour votre activité à Poitiers.
            </p>

            <div class="mt-8 flex flex-col sm:flex-row gap-4">
              <UButton
                to="/devis"
                size="lg"
                class="font-semibold bg-sky-500 hover:bg-sky-400 text-white border-0 shadow-lg shadow-sky-500/25 transition-all duration-200 hover:shadow-sky-400/30 hover:-translate-y-px"
              >
                <UIcon name="lucide:send" class="w-4 h-4 mr-2" />
                Audit gratuit de votre site
              </UButton>
              <UButton
                to="#tarifs"
                variant="outline"
                size="lg"
                class="font-semibold border-white/10 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/5"
              >
                Voir les tarifs
              </UButton>
            </div>

            <div class="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/40">
              <span class="flex items-center gap-2">
                <UIcon name="lucide:check-circle" class="w-4 h-4 text-sky-400/60" />
                Redirections SEO incluses
              </span>
              <span class="flex items-center gap-2">
                <UIcon name="lucide:check-circle" class="w-4 h-4 text-sky-400/60" />
                Aucune perte de contenu
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Signaux d'alerte -->
      <section class="py-20 lg:py-28 border-t border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mb-14">
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
              6 signes qu'il est temps de
              <span class="text-sky-400">refaire votre site</span>
            </h2>
            <p class="mt-4 text-lg text-white/50 leading-relaxed">
              Si votre site coche ne serait-ce que 2 de ces cases, une refonte s'impose. Chaque jour passé avec un site obsolète est un jour où vous perdez des clients au profit de vos concurrents.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="signal in warningSignals"
              :key="signal.title"
              class="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-red-500/20 transition-all duration-300"
            >
              <div class="flex items-center justify-center w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 mb-4">
                <UIcon :name="signal.icon" class="w-5 h-5 text-red-400" />
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ signal.title }}</h3>
              <p class="text-sm text-white/50 leading-relaxed">{{ signal.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Avant / Après -->
      <section class="py-20 lg:py-28 border-t border-white/5 bg-white/[0.01]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mb-14">
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
              Ce qui change avec une
              <span class="text-sky-400">refonte LUMEA</span>
            </h2>
            <p class="mt-4 text-lg text-white/50 leading-relaxed">
              Des résultats concrets et mesurables. Voici ce que nos clients constatent après la refonte de leur site par LUMEA.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="item in beforeAfter"
              :key="item.label"
              class="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="flex items-center justify-center w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20">
                  <UIcon :name="item.icon" class="w-4 h-4 text-sky-400" />
                </div>
                <h3 class="text-sm font-semibold text-white/80">{{ item.label }}</h3>
              </div>

              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <span class="px-2 py-0.5 rounded text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">Avant</span>
                  <span class="text-sm text-white/50">{{ item.before }}</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Après</span>
                  <span class="text-sm text-white/70 font-medium">{{ item.after }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tarifs -->
      <section id="tarifs" class="py-20 lg:py-28 border-t border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-14">
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
              Nos formules
              <span class="text-sky-400">refonte de site</span>
            </h2>
            <p class="mt-4 text-lg text-white/50 leading-relaxed">
              Trois niveaux d'intervention selon l'état de votre site et vos objectifs. Du rafraîchissement visuel à la reconstruction complète. Devis sur demande.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="plan in pricingPlans"
              :key="plan.name"
              class="relative flex flex-col p-8 rounded-2xl border transition-all duration-300"
              :class="plan.highlight
                ? 'border-sky-500/40 bg-sky-500/5 shadow-lg shadow-sky-500/10'
                : 'border-white/5 bg-white/[0.02] hover:border-white/10'"
            >
              <div v-if="plan.highlight" class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-sky-500 text-xs font-semibold text-white">
                Meilleur rapport qualité/prix
              </div>

              <h3 class="text-xl font-bold">{{ plan.name }}</h3>
              <p class="text-sm text-white/40 mt-1">{{ plan.description }}</p>

              <div class="mt-6 mb-8">
                <span class="text-2xl font-semibold text-sky-400">Sur devis</span>
              </div>

              <ul class="space-y-3 flex-1">
                <li
                  v-for="feature in plan.features"
                  :key="feature"
                  class="flex items-start gap-3 text-sm text-white/60"
                >
                  <UIcon name="lucide:check" class="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                  <span>{{ feature }}</span>
                </li>
              </ul>

              <UButton
                to="/devis"
                :class="plan.highlight
                  ? 'bg-sky-500 hover:bg-sky-400 text-white border-0 shadow-lg shadow-sky-500/25'
                  : 'border-white/10 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/5'"
                :variant="plan.highlight ? 'solid' : 'outline'"
                block
                class="mt-8 font-semibold transition-all duration-200"
              >
                Choisir {{ plan.name }}
              </UButton>
            </div>
          </div>
        </div>
      </section>

      <!-- Maillage interne -->
      <section class="py-20 lg:py-28 border-t border-white/5 bg-white/[0.01]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-10">
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
              Besoin d'un
              <span class="text-sky-400">nouveau site ?</span>
            </h2>
            <p class="mt-4 text-lg text-white/50">
              Si votre site actuel ne vaut pas la peine d'être refait, nous pouvons aussi en créer un nouveau de A à Z.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <NuxtLink
              to="/creation-site-vitrine-poitiers"
              class="group flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-sky-500/20 transition-all duration-300"
            >
              <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 shrink-0">
                <UIcon name="lucide:layout-template" class="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <span class="text-sm font-semibold group-hover:text-sky-400 transition-colors">Site vitrine</span>
                <p class="text-xs text-white/40">Design sur-mesure et SEO inclus</p>
              </div>
              <UIcon name="lucide:arrow-right" class="w-4 h-4 text-white/20 group-hover:text-sky-400 ml-auto transition-colors" />
            </NuxtLink>

            <NuxtLink
              to="/creation-site-ecommerce-poitiers"
              class="group flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-sky-500/20 transition-all duration-300"
            >
              <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 shrink-0">
                <UIcon name="lucide:shopping-bag" class="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <span class="text-sm font-semibold group-hover:text-sky-400 transition-colors">Site e-commerce</span>
                <p class="text-xs text-white/40">Boutique performante et sécurisée</p>
              </div>
              <UIcon name="lucide:arrow-right" class="w-4 h-4 text-white/20 group-hover:text-sky-400 ml-auto transition-colors" />
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="py-20 lg:py-28 border-t border-white/5">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
              Questions fréquentes sur la
              <span class="text-sky-400">refonte de site internet</span>
            </h2>
          </div>

          <div class="space-y-3">
            <div
              v-for="(item, index) in faqItems"
              :key="index"
              class="border border-gray-800 rounded-xl overflow-hidden transition-colors"
              :class="openFaq === index ? 'border-sky-500/20 bg-gray-900/60' : 'bg-gray-900/30'"
            >
              <button
                class="flex items-center justify-between w-full px-6 py-4 text-left transition-colors"
                @click="openFaq = openFaq === index ? -1 : index"
              >
                <span class="text-sm font-semibold text-white pr-4">{{ item.label }}</span>
                <UIcon
                  :name="openFaq === index ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
                  class="w-5 h-5 text-gray-400 shrink-0"
                />
              </button>
              <div v-show="openFaq === index" class="px-6 pb-4 text-sm text-gray-400 leading-relaxed">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-20 lg:py-28 border-t border-white/5">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="p-10 sm:p-14 rounded-3xl border border-sky-500/20 bg-gradient-to-b from-sky-500/5 to-transparent relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-transparent to-sky-500/5" />

            <div class="relative">
              <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
                Votre site mérite
                <span class="text-sky-400">mieux que ça</span>
              </h2>
              <p class="mt-4 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                Envoyez-nous l'URL de votre site actuel. Nous réalisons un audit rapide gratuit et vous envoyons nos recommandations sous 48 heures. Sans engagement, sans jargon technique.
              </p>

              <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <UButton
                  to="/devis"
                  size="lg"
                  class="font-semibold bg-sky-500 hover:bg-sky-400 text-white border-0 shadow-lg shadow-sky-500/25 transition-all duration-200 hover:shadow-sky-400/30 hover:-translate-y-px"
                >
                  <UIcon name="lucide:search" class="w-4 h-4 mr-2" />
                  Audit gratuit de mon site
                </UButton>
                <UButton
                  href="tel:+33549000000"
                  variant="outline"
                  size="lg"
                  class="font-semibold border-white/10 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/5"
                >
                  <UIcon name="lucide:phone" class="w-4 h-4 mr-2" />
                  05 49 00 00 00
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>
