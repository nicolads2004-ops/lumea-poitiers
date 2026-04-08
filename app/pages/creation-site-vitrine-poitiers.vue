<script setup lang="ts">
const faqItems = [
  {
    label: 'Combien coûte la création d\'un site vitrine à Poitiers ?',
    icon: 'lucide:help-circle',
    content: 'Le tarif dépend du nombre de pages, des fonctionnalités et du niveau de personnalisation souhaités. Chaque devis est personnalisé après un premier échange gratuit.'
  },
  {
    label: 'En combien de temps mon site vitrine sera-t-il en ligne ?',
    icon: 'lucide:help-circle',
    content: 'Un site vitrine Essentiel est livré en 2 à 3 semaines. Les formules Pro et Premium demandent 3 à 5 semaines selon le volume de contenu et le niveau de personnalisation. Nous validons chaque étape avec vous : maquettes, intégration, contenu, tests. Aucune mise en ligne sans votre accord.'
  },
  {
    label: 'Mon site vitrine sera-t-il bien référencé sur Google ?',
    icon: 'lucide:help-circle',
    content: 'Oui. Toutes nos formules incluent un socle SEO technique : balises title et meta description optimisées, structure HTML sémantique, données structurées Schema.org, sitemap XML, vitesse de chargement optimisée et responsive design. Les formules Pro et Premium ajoutent une recherche de mots-clés et une stratégie de contenu pour positionner votre site sur vos requêtes prioritaires à Poitiers et dans la Vienne.'
  },
  {
    label: 'Puis-je modifier le contenu de mon site moi-même ?',
    icon: 'lucide:help-circle',
    content: 'Absolument. Nous intégrons un système de gestion de contenu (CMS) intuitif qui vous permet de modifier vos textes, images et pages en autonomie. Une session de formation d\'une heure est incluse dans chaque formule. Si vous préférez nous déléguer les mises à jour, nos forfaits de maintenance couvrent ce besoin.'
  },
  {
    label: 'Quelle est la différence entre un site vitrine et un site e-commerce ?',
    icon: 'lucide:help-circle',
    content: 'Un site vitrine présente votre activité, vos services, vos réalisations et vos coordonnées. Son objectif principal est de générer des prises de contact (appels, formulaires, demandes de devis). Un site e-commerce permet la vente en ligne avec catalogue produits, panier, paiement sécurisé et gestion des commandes. Si vous avez besoin de vendre en ligne, consultez notre page dédiée à la création de site e-commerce à Poitiers.'
  }
]

const pricingPlans = [
  {
    name: 'Essentiel',
    description: 'L\'indispensable pour exister en ligne',
    features: [
      'Jusqu\'à 5 pages',
      'Design responsive sur-mesure',
      'Formulaire de contact',
      'SEO technique de base',
      'Hébergement 1 an inclus',
      'Certificat SSL (HTTPS)',
      'Formation CMS (1h)',
      'Livraison en 2-3 semaines'
    ],
    highlight: false
  },
  {
    name: 'Pro',
    description: 'Pour les entreprises qui veulent performer',
    features: [
      'Jusqu\'à 10 pages',
      'Design premium personnalisé',
      'Animations et micro-interactions',
      'Formulaire avancé multi-étapes',
      'SEO avancé + recherche de mots-clés',
      'Intégration Google Analytics + Search Console',
      'Blog intégré',
      'Hébergement 1 an + maintenance 3 mois',
      'Formation CMS (2h)',
      'Livraison en 3-4 semaines'
    ],
    highlight: true
  },
  {
    name: 'Premium',
    description: 'Le site vitrine haut de gamme',
    features: [
      'Pages illimitées',
      'Direction artistique complète',
      'Copywriting professionnel',
      'Animations avancées (scroll, parallaxe)',
      'Stratégie SEO complète + rédaction',
      'Intégration CRM / outils métier',
      'Espace client ou espace privé',
      'Hébergement 1 an + maintenance 6 mois',
      'Shooting photo (en option)',
      'Formation CMS (3h) + support prioritaire',
      'Livraison en 4-5 semaines'
    ],
    highlight: false
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Découverte et stratégie',
    description: 'Nous analysons votre activité, votre marché, vos concurrents et vos objectifs. Nous définissons ensemble l\'arborescence, le ton éditorial et les fonctionnalités clés de votre site vitrine. Vous recevez un cahier des charges clair et un planning détaillé.'
  },
  {
    step: '02',
    title: 'Maquettes et design',
    description: 'Notre équipe conçoit les maquettes de votre site sur Figma. Vous visualisez le rendu final avant la moindre ligne de code. Nous itérons jusqu\'à ce que le design vous convienne parfaitement : couleurs, typographies, mise en page, images.'
  },
  {
    step: '03',
    title: 'Développement et contenu',
    description: 'Nous intégrons le design en code propre, rapide et optimisé pour le SEO. Nous rédigeons ou optimisons vos textes pour le référencement naturel. Chaque page est testée sur mobile, tablette et desktop. Le formulaire de contact est configuré et testé.'
  },
  {
    step: '04',
    title: 'Lancement et formation',
    description: 'Après validation finale, nous mettons votre site en ligne. Nous configurons votre nom de domaine, le certificat SSL, Google Analytics et Search Console. Nous vous formons à la gestion de votre contenu. Votre site est prêt à travailler pour vous.'
  }
]

const targetAudience = [
  { icon: 'lucide:hammer', label: 'Artisans', description: 'Plombiers, électriciens, menuisiers, maçons, peintres... Montrez vos réalisations et recevez des demandes de devis directement depuis votre site.' },
  { icon: 'lucide:store', label: 'Commerçants', description: 'Boutiques, restaurants, salons de coiffure, fleuristes... Présentez vos produits, vos horaires et votre localisation pour attirer plus de clients.' },
  { icon: 'lucide:briefcase', label: 'Professions libérales', description: 'Avocats, architectes, consultants, coachs, thérapeutes... Valorisez votre expertise et facilitez la prise de rendez-vous en ligne.' },
  { icon: 'lucide:users', label: 'Associations', description: 'Associations sportives, culturelles, caritatives... Informez vos membres, promouvez vos événements et recueillez des adhésions ou des dons.' }
]

const features = [
  { icon: 'lucide:palette', title: 'Design sur-mesure', description: 'Aucun template générique. Votre site est conçu à partir d\'une page blanche pour refléter votre identité de marque, vos couleurs et votre positionnement. Un design unique qui vous différencie de vos concurrents à Poitiers.' },
  { icon: 'lucide:smartphone', title: 'Responsive design', description: 'Votre site s\'adapte parfaitement à tous les écrans : smartphone, tablette, ordinateur. Plus de 60 % du trafic web vient du mobile. Un site non responsive perd des clients chaque jour.' },
  { icon: 'lucide:search', title: 'SEO intégré', description: 'Chaque page est optimisée pour le référencement naturel : structure sémantique, balises meta, données structurées, vitesse de chargement, maillage interne. Votre site est conçu pour être trouvé sur Google.' },
  { icon: 'lucide:mail', title: 'Formulaire de contact', description: 'Un formulaire de contact professionnel, anti-spam, avec notifications par e-mail. Vos prospects vous contactent facilement. Option formulaire multi-étapes pour qualifier les demandes.' },
  { icon: 'lucide:server', title: 'Hébergement performant', description: 'Hébergement sécurisé, rapide et fiable inclus dans chaque formule. Certificat SSL gratuit, sauvegardes automatiques, monitoring 24h/24. Votre site reste en ligne et performant.' },
  { icon: 'lucide:graduation-cap', title: 'Formation incluse', description: 'Nous vous formons à la gestion de votre site : modification de textes, ajout d\'images, publication de pages. Vous gardez la main sur votre contenu sans dépendre d\'un prestataire.' }
]

const openFaq = ref(0)

useHead({
  title: 'Création de site vitrine à Poitiers | LUMEA',
  meta: [
    { name: 'description', content: 'Création de site vitrine à Poitiers pour artisans, PME et professions libérales. Design sur-mesure, SEO intégré, formation incluse. Devis gratuit chez LUMEA.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Création de site vitrine à Poitiers | LUMEA' },
    { property: 'og:description', content: 'Site vitrine professionnel à Poitiers. Design sur-mesure, SEO intégré. Devis gratuit.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://lumea.poitiers.digital/creation-site-vitrine-poitiers' },
    { property: 'og:locale', content: 'fr_FR' },
    { property: 'og:site_name', content: 'LUMEA' },
    { property: 'og:image', content: 'https://lumea.poitiers.digital/og-image.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://lumea.poitiers.digital/creation-site-vitrine-poitiers' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Service',
            '@id': 'https://lumea.poitiers.digital/creation-site-vitrine-poitiers#service',
            name: 'Création de site vitrine à Poitiers',
            description: 'Conception et développement de sites vitrine professionnels, sur-mesure, responsive et optimisés pour le SEO. Pour artisans, PME et professions libérales à Poitiers et dans la Vienne.',
            provider: {
              '@type': 'LocalBusiness',
              '@id': 'https://lumea.poitiers.digital/#business',
              name: 'LUMEA',
              telephone: '+33 7 69 80 11 90',
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
            serviceType: 'Création de site vitrine',
            offers: {
              '@type': 'AggregateOffer',
              offerCount: '3'
            }
          },
          {
            '@type': 'FAQPage',
            '@id': 'https://lumea.poitiers.digital/creation-site-vitrine-poitiers#faq',
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
              <UIcon name="lucide:layout-template" class="w-3.5 h-3.5" />
              Site vitrine professionnel
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Création de site vitrine à Poitiers
              <span class="block text-sky-400 mt-2">— votre meilleur commercial, 24h/24</span>
            </h1>

            <p class="mt-6 text-lg sm:text-xl text-white/60 leading-relaxed max-w-3xl">
              Vous êtes artisan, commerçant, profession libérale ou dirigeant de PME à Poitiers ? Votre site vitrine est souvent le premier contact entre vous et vos futurs clients. Nous concevons des sites vitrines sur-mesure, rapides, optimisés pour Google et pensés pour convertir vos visiteurs en prospects qualifiés.
            </p>

            <div class="mt-8 flex flex-col sm:flex-row gap-4">
              <UButton
                to="/devis"
                size="lg"
                class="font-semibold bg-sky-500 hover:bg-sky-400 text-white border-0 shadow-lg shadow-sky-500/25 transition-all duration-200 hover:shadow-sky-400/30 hover:-translate-y-px"
              >
                <UIcon name="lucide:send" class="w-4 h-4 mr-2" />
                Demander un devis gratuit
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

            <div class="mt-8 flex items-center gap-6 text-sm text-white/40">
              <span class="flex items-center gap-2">
                <UIcon name="lucide:check-circle" class="w-4 h-4 text-sky-400/60" />
                Livré en 2 à 5 semaines
              </span>
              <span class="flex items-center gap-2">
                <UIcon name="lucide:check-circle" class="w-4 h-4 text-sky-400/60" />
                SEO inclus
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Ce qu'on inclut -->
      <section class="py-20 lg:py-28 border-t border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mb-14">
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
              Ce qu'on inclut dans votre
              <span class="text-sky-400">site vitrine</span>
            </h2>
            <p class="mt-4 text-lg text-white/50 leading-relaxed">
              Chaque site vitrine LUMEA est livré complet, sans surcoût caché. Du design à la mise en ligne, tout est inclus pour que votre site travaille pour vous dès le premier jour.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              <div class="flex items-center justify-center w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 mb-4">
                <UIcon :name="feature.icon" class="w-5 h-5 text-sky-400" />
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
              <p class="text-sm text-white/50 leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Pour qui ? -->
      <section class="py-20 lg:py-28 border-t border-white/5 bg-white/[0.01]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mb-14">
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
              Pour qui est fait un
              <span class="text-sky-400">site vitrine ?</span>
            </h2>
            <p class="mt-4 text-lg text-white/50 leading-relaxed">
              Un site vitrine est la solution idéale pour toutes les entreprises et professionnels qui veulent présenter leur activité, inspirer confiance et générer des contacts qualifiés à Poitiers et dans la Vienne.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              v-for="audience in targetAudience"
              :key="audience.label"
              class="flex gap-5 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 shrink-0">
                <UIcon :name="audience.icon" class="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-1">{{ audience.label }}</h3>
                <p class="text-sm text-white/50 leading-relaxed">{{ audience.description }}</p>
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
              <span class="text-sky-400">site vitrine</span>
            </h2>
            <p class="mt-4 text-lg text-white/50 leading-relaxed">
              Trois formules adaptées à vos ambitions. Chaque formule est personnalisable. Devis sur demande.
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
                Populaire
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

      <!-- Processus -->
      <section class="py-20 lg:py-28 border-t border-white/5 bg-white/[0.01]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mb-14">
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
              Notre processus en
              <span class="text-sky-400">4 étapes</span>
            </h2>
            <p class="mt-4 text-lg text-white/50 leading-relaxed">
              De la première prise de contact à la mise en ligne, chaque étape est structurée pour vous livrer un site vitrine performant, dans les délais et sans mauvaise surprise.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              v-for="step in processSteps"
              :key="step.step"
              class="relative flex gap-5 p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
            >
              <span class="text-4xl font-black text-sky-500/20 leading-none shrink-0">{{ step.step }}</span>
              <div>
                <h3 class="text-lg font-semibold mb-2">{{ step.title }}</h3>
                <p class="text-sm text-white/50 leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Maillage interne -->
      <section class="py-20 lg:py-28 border-t border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-10">
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
              Nos autres
              <span class="text-sky-400">services web</span>
            </h2>
            <p class="mt-4 text-lg text-white/50">
              Le site vitrine n'est pas la seule solution. Découvrez nos autres prestations pour les entreprises de Poitiers.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <NuxtLink
              to="/creation-site-ecommerce-poitiers"
              class="group flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-sky-500/20 transition-all duration-300"
            >
              <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 shrink-0">
                <UIcon name="lucide:shopping-bag" class="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <span class="text-sm font-semibold group-hover:text-sky-400 transition-colors">Site e-commerce</span>
                <p class="text-xs text-white/40">Vendez en ligne à Poitiers</p>
              </div>
              <UIcon name="lucide:arrow-right" class="w-4 h-4 text-white/20 group-hover:text-sky-400 ml-auto transition-colors" />
            </NuxtLink>

            <NuxtLink
              to="/refonte-site-internet-poitiers"
              class="group flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-sky-500/20 transition-all duration-300"
            >
              <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 shrink-0">
                <UIcon name="lucide:refresh-cw" class="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <span class="text-sm font-semibold group-hover:text-sky-400 transition-colors">Refonte de site</span>
                <p class="text-xs text-white/40">Modernisez votre présence</p>
              </div>
              <UIcon name="lucide:arrow-right" class="w-4 h-4 text-white/20 group-hover:text-sky-400 ml-auto transition-colors" />
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="py-20 lg:py-28 border-t border-white/5 bg-white/[0.01]">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
              Questions fréquentes sur la
              <span class="text-sky-400">création de site vitrine</span>
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
                Prêt à lancer votre
                <span class="text-sky-400">site vitrine ?</span>
              </h2>
              <p class="mt-4 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                Prenons 15 minutes pour parler de votre projet. Nous vous envoyons un devis personnalisé sous 48 heures, sans engagement. Votre site vitrine professionnel à Poitiers commence ici.
              </p>

              <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <UButton
                  to="/devis"
                  size="lg"
                  class="font-semibold bg-sky-500 hover:bg-sky-400 text-white border-0 shadow-lg shadow-sky-500/25 transition-all duration-200 hover:shadow-sky-400/30 hover:-translate-y-px"
                >
                  <UIcon name="lucide:send" class="w-4 h-4 mr-2" />
                  Devis gratuit — réponse sous 48h
                </UButton>
                <UButton
                  href="tel:+33769801190"
                  variant="outline"
                  size="lg"
                  class="font-semibold border-white/10 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/5"
                >
                  <UIcon name="lucide:phone" class="w-4 h-4 mr-2" />
                  07 69 80 11 90
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
