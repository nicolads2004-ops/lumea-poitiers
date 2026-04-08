<script setup lang="ts">
const faqItems = [
  {
    label: 'Combien coûte la création d\'un site e-commerce à Poitiers ?',
    icon: 'lucide:help-circle',
    content: 'Le tarif dépend du nombre de produits, des fonctionnalités souhaitées et des intégrations nécessaires. La formule Enterprise est disponible pour les projets complexes. Chaque projet fait l\'objet d\'un devis gratuit et détaillé.'
  },
  {
    label: 'WooCommerce ou Shopify : quelle plateforme choisir ?',
    icon: 'lucide:help-circle',
    content: 'WooCommerce est idéal si vous voulez un contrôle total sur votre boutique, sans commission sur les ventes, avec un hébergement que vous maîtrisez. C\'est notre recommandation pour la majorité des commerçants de Poitiers. Shopify convient mieux si vous privilégiez la simplicité et souhaitez une solution clé en main avec un abonnement mensuel. Nous travaillons avec les deux plateformes et vous orientons selon votre activité, votre budget et vos objectifs de croissance.'
  },
  {
    label: 'Comment les clients paient-ils sur mon site e-commerce ?',
    icon: 'lucide:help-circle',
    content: 'Nous intégrons les solutions de paiement les plus fiables : Stripe, PayPal, ou les terminaux de paiement de votre banque (Systempay, Monetico, etc.). Vos clients peuvent payer par carte bancaire, PayPal, virement ou Apple Pay / Google Pay. Toutes les transactions sont sécurisées par chiffrement SSL et conformes aux normes PCI-DSS. Aucune donnée bancaire ne transite par votre serveur.'
  },
  {
    label: 'Comment gérer les livraisons et les frais de port ?',
    icon: 'lucide:help-circle',
    content: 'Nous configurons vos zones et tarifs de livraison selon vos besoins : livraison gratuite au-dessus d\'un montant, tarification au poids, au prix ou à la zone géographique. Nous intégrons les transporteurs de votre choix (Colissimo, Mondial Relay, Chronopost, UPS) avec suivi automatique des colis. Pour les commerçants de Poitiers, nous proposons aussi la configuration du retrait en magasin (click and collect).'
  },
  {
    label: 'Puis-je vendre à la fois en boutique physique et en ligne ?',
    icon: 'lucide:help-circle',
    content: 'Oui, c\'est même l\'une de nos spécialités. Nous synchronisons votre boutique en ligne avec votre caisse physique (Lightspeed, Square, Zettle) pour unifier vos stocks, vos commandes et vos clients. Quand un produit se vend en magasin, le stock est mis à jour sur le site, et inversement. Cette approche omnicanale est particulièrement efficace pour les commerçants de Poitiers qui veulent élargir leur zone de chalandise.'
  }
]

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Pour lancer votre première boutique en ligne',
    features: [
      'Jusqu\'à 50 produits',
      'Design e-commerce sur-mesure',
      'Paiement sécurisé (Stripe / PayPal)',
      'Gestion des stocks',
      '1 transporteur configuré',
      'Pages légales (CGV, mentions)',
      'SEO technique de base',
      'Hébergement 1 an inclus',
      'Formation administration (2h)',
      'Livraison en 4-5 semaines'
    ],
    highlight: false
  },
  {
    name: 'Business',
    description: 'Pour les commerces qui veulent scaler',
    features: [
      'Jusqu\'à 500 produits',
      'Design premium personnalisé',
      'Multi-paiement (CB, PayPal, virement)',
      'Multi-transporteurs + suivi colis',
      'Système de promotions et codes promo',
      'Avis clients vérifiés',
      'SEO avancé + fiches produits optimisées',
      'Intégration Google Merchant Center',
      'Analytics e-commerce avancé',
      'Hébergement 1 an + maintenance 3 mois',
      'Formation complète (4h)',
      'Livraison en 5-7 semaines'
    ],
    highlight: true
  },
  {
    name: 'Enterprise',
    description: 'Pour les projets ambitieux et sur-mesure',
    features: [
      'Produits illimités',
      'Direction artistique complète',
      'Connexion ERP / logiciel métier',
      'Marketplace multi-vendeurs',
      'Abonnements et ventes récurrentes',
      'B2B (tarifs pros, devis en ligne)',
      'Multi-langues / multi-devises',
      'Synchronisation caisse physique',
      'SEO complet + copywriting produits',
      'Hébergement haute performance',
      'Maintenance et support prioritaire',
      'Livraison selon cahier des charges'
    ],
    highlight: false
  }
]

const ecommerceFeatures = [
  { icon: 'lucide:credit-card', title: 'Paiement sécurisé', description: 'Intégration Stripe, PayPal, paiement bancaire. Transactions chiffrées SSL, conformité PCI-DSS, 3D Secure. Vos clients paient en confiance, vous êtes payé rapidement.' },
  { icon: 'lucide:package', title: 'Gestion des stocks', description: 'Suivi en temps réel de vos stocks, alertes de réapprovisionnement, variations produits (taille, couleur, poids). Importation et exportation en masse par CSV.' },
  { icon: 'lucide:truck', title: 'Livraison automatisée', description: 'Configuration multi-transporteurs (Colissimo, Mondial Relay, Chronopost), calcul automatique des frais, suivi de colis, click and collect pour les commerces de Poitiers.' },
  { icon: 'lucide:search', title: 'SEO produits', description: 'Chaque fiche produit est optimisée pour Google : title, meta description, URL propre, données structurées Product, images alt-taggées, temps de chargement optimisé.' },
  { icon: 'lucide:bar-chart-3', title: 'Analytics e-commerce', description: 'Tableau de bord avec chiffre d\'affaires, panier moyen, taux de conversion, produits les plus vendus, abandons de panier. Des données pour prendre les bonnes décisions.' },
  { icon: 'lucide:smartphone', title: 'Mobile-first', description: '72 % des achats en ligne se font sur mobile. Votre boutique est conçue d\'abord pour le smartphone : navigation fluide, checkout rapide, images optimisées, boutons d\'action visibles.' }
]

const comparison = {
  headers: ['Critère', 'WooCommerce', 'Shopify'],
  rows: [
    { criteria: 'Coût initial', woo: 'Inclus dans nos formules', shopify: 'À partir de 36 €/mois' },
    { criteria: 'Commission sur les ventes', woo: '0 %', shopify: '0,5 à 2 %' },
    { criteria: 'Personnalisation', woo: 'Totale (code source ouvert)', shopify: 'Limitée au thème' },
    { criteria: 'Hébergement', woo: 'Inclus par LUMEA', shopify: 'Inclus par Shopify' },
    { criteria: 'Facilité d\'utilisation', woo: 'Bonne (après formation)', shopify: 'Excellente (clé en main)' },
    { criteria: 'SEO', woo: 'Excellent (contrôle total)', shopify: 'Bon (quelques limites)' },
    { criteria: 'Évolutivité', woo: 'Illimitée', shopify: 'Selon le plan' },
    { criteria: 'Notre recommandation', woo: 'PME, artisans, contrôle', shopify: 'Simplicité, démarrage rapide' }
  ]
}

const openFaq = ref(0)

useHead({
  title: 'Création de site e-commerce à Poitiers — Vendez en ligne avec une boutique performante | LUMEA',
  meta: [
    { name: 'description', content: 'Création de site e-commerce à Poitiers par LUMEA. Boutique en ligne WooCommerce ou Shopify, paiement sécurisé, gestion stocks. Devis gratuit.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Création de site e-commerce à Poitiers | LUMEA' },
    { property: 'og:description', content: 'Boutique en ligne professionnelle à Poitiers. WooCommerce, Shopify, paiement sécurisé.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://lumea.poitiers.digital/creation-site-ecommerce-poitiers' },
    { property: 'og:locale', content: 'fr_FR' },
    { property: 'og:site_name', content: 'LUMEA' },
    { property: 'og:image', content: 'https://lumea.poitiers.digital/og-image.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://lumea.poitiers.digital/creation-site-ecommerce-poitiers' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Service',
            '@id': 'https://lumea.poitiers.digital/creation-site-ecommerce-poitiers#service',
            name: 'Création de site e-commerce à Poitiers',
            description: 'Conception et développement de boutiques en ligne performantes. WooCommerce, Shopify, paiement sécurisé, gestion des stocks et livraisons. Pour les commerçants de Poitiers et de la Vienne.',
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
            serviceType: 'Création de site e-commerce',
            offers: {
              '@type': 'AggregateOffer',
              offerCount: '3'
            }
          },
          {
            '@type': 'FAQPage',
            '@id': 'https://lumea.poitiers.digital/creation-site-ecommerce-poitiers#faq',
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
              <UIcon name="lucide:shopping-bag" class="w-3.5 h-3.5" />
              Boutique en ligne professionnelle
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Création de site e-commerce à Poitiers
              <span class="block text-sky-400 mt-2">— votre boutique en ligne qui vend vraiment</span>
            </h1>

            <p class="mt-6 text-lg sm:text-xl text-white/60 leading-relaxed max-w-3xl">
              Vous êtes commerçant à Poitiers ou dans la Vienne et vous voulez vendre en ligne ? Nous créons des boutiques e-commerce performantes, sécurisées et optimisées pour la conversion. Paiement en ligne, gestion des stocks, livraison automatisée : tout est inclus pour que vous vendiez dès le premier jour.
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

            <div class="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/40">
              <span class="flex items-center gap-2">
                <UIcon name="lucide:check-circle" class="w-4 h-4 text-sky-400/60" />
                Paiement sécurisé inclus
              </span>
              <span class="flex items-center gap-2">
                <UIcon name="lucide:check-circle" class="w-4 h-4 text-sky-400/60" />
                0 % de commission
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Fonctionnalités incluses -->
      <section class="py-20 lg:py-28 border-t border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mb-14">
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
              Fonctionnalités incluses dans votre
              <span class="text-sky-400">boutique en ligne</span>
            </h2>
            <p class="mt-4 text-lg text-white/50 leading-relaxed">
              Chaque site e-commerce LUMEA est livré avec tout ce dont vous avez besoin pour vendre en ligne. Pas de module payant en supplément, pas de surcoût caché.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="feature in ecommerceFeatures"
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

      <!-- WooCommerce vs Shopify -->
      <section class="py-20 lg:py-28 border-t border-white/5 bg-white/[0.01]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mb-14">
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
              WooCommerce ou Shopify ?
              <span class="text-sky-400">On vous guide</span>
            </h2>
            <p class="mt-4 text-lg text-white/50 leading-relaxed">
              Il n'existe pas de plateforme universelle. Le bon choix dépend de votre activité, de votre catalogue, de votre budget et de vos ambitions. Voici un comparatif objectif pour vous aider à décider. Nous travaillons avec les deux et vous recommandons celle qui correspond le mieux à votre situation.
            </p>
          </div>

          <!-- Comparatif tableau -->
          <div class="overflow-x-auto rounded-2xl border border-white/5">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-white/5 bg-white/[0.03]">
                  <th class="text-left p-4 font-semibold text-white/70">Critère</th>
                  <th class="text-left p-4 font-semibold text-sky-400">
                    <span class="flex items-center gap-2">
                      <UIcon name="lucide:code" class="w-4 h-4" />
                      WooCommerce
                    </span>
                  </th>
                  <th class="text-left p-4 font-semibold text-white/70">
                    <span class="flex items-center gap-2">
                      <UIcon name="lucide:shopping-bag" class="w-4 h-4" />
                      Shopify
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, index) in comparison.rows"
                  :key="row.criteria"
                  class="border-b border-white/5 last:border-0"
                  :class="index % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'"
                >
                  <td class="p-4 font-medium text-white/60">{{ row.criteria }}</td>
                  <td class="p-4 text-white/50">{{ row.woo }}</td>
                  <td class="p-4 text-white/50">{{ row.shopify }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="mt-6 text-sm text-white/40 text-center">
            Vous hésitez encore ? Nous analysons votre situation gratuitement et vous recommandons la meilleure option.
            <NuxtLink to="/devis" class="text-sky-400 hover:text-sky-300 transition-colors ml-1 underline underline-offset-2">
              Parlez-nous de votre projet
            </NuxtLink>
          </p>
        </div>
      </section>

      <!-- Tarifs -->
      <section id="tarifs" class="py-20 lg:py-28 border-t border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-14">
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
              Nos formules
              <span class="text-sky-400">e-commerce</span>
            </h2>
            <p class="mt-4 text-lg text-white/50 leading-relaxed">
              Trois formules pour tous les projets de vente en ligne. Du commerçant qui démarre à l'entreprise qui veut dominer son marché. Devis sur demande.
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
                Recommandé
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
                Demander un devis
              </UButton>
            </div>
          </div>
        </div>
      </section>

      <!-- Témoignage -->
      <section class="py-20 lg:py-28 border-t border-white/5 bg-white/[0.01]">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
              Ils vendent en ligne
              <span class="text-sky-400">grâce à LUMEA</span>
            </h2>
          </div>

          <div class="p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
            <div class="flex gap-1 mb-4">
              <UIcon v-for="i in 5" :key="i" name="lucide:star" class="w-5 h-5 text-amber-400" />
            </div>
            <blockquote class="text-lg text-white/70 leading-relaxed italic">
              "Nous avions une boutique physique à Poitiers depuis 12 ans et aucune présence en ligne. LUMEA a créé notre site e-commerce en 5 semaines. Dès le premier mois, nous avons réalisé 47 ventes en ligne. Le système de gestion des stocks synchronisé avec notre caisse est un vrai gain de temps. Nous recommandons sans hésiter."
            </blockquote>
            <div class="mt-6 flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                <span class="text-sky-400 font-bold text-lg">MP</span>
              </div>
              <div>
                <p class="font-semibold text-white">Marie P.</p>
                <p class="text-sm text-white/40">Gérante — Boutique de décoration, Poitiers</p>
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
              La vente en ligne n'est pas votre priorité ? Découvrez nos autres prestations pour les entreprises de Poitiers.
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
                <p class="text-xs text-white/40">Votre image pro en ligne</p>
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
              <span class="text-sky-400">création de site e-commerce</span>
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
                Prêt à vendre
                <span class="text-sky-400">en ligne ?</span>
              </h2>
              <p class="mt-4 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                Discutons de votre projet e-commerce. Nous analysons votre marché, votre catalogue et vos objectifs pour vous proposer la solution la plus rentable. Devis gratuit sous 48 heures, sans engagement.
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
