<script setup lang="ts">
const faqItems = [
  {
    question: 'Combien coûte la création d\'un site internet à Poitiers ?',
    answer: 'Le prix final dépend du nombre de pages, des fonctionnalités souhaitées et du niveau de personnalisation. Nous établissons un devis gratuit et détaillé après un premier échange.'
  },
  {
    question: 'En combien de temps mon site sera-t-il prêt ?',
    answer: 'Un site vitrine est livré en 2 à 4 semaines. Un site e-commerce demande 4 à 6 semaines selon le catalogue produit. Nous validons chaque étape avec vous pour garantir un résultat conforme à vos attentes sans mauvaise surprise.'
  },
  {
    question: 'Mon site sera-t-il visible sur Google ?',
    answer: 'Oui. Chaque site que nous créons est optimisé pour le référencement naturel : balises meta, structure sémantique, vitesse de chargement, données structurées et contenu rédigé pour vos mots-clés locaux. Nous vous positionnons pour être trouvé à Poitiers et dans la Vienne.'
  },
  {
    question: 'Proposez-vous la maintenance après la mise en ligne ?',
    answer: 'Absolument. Nous proposons des forfaits de maintenance mensuelle incluant les mises à jour de sécurité, les sauvegardes, le monitoring de performance et les modifications mineures de contenu. Vous restez concentré sur votre activité, nous gérons la technique.'
  },
  {
    question: 'Puis-je modifier mon site moi-même ?',
    answer: 'Oui. Nous intégrons un système d\'administration simple et intuitif. Nous vous formons à son utilisation lors de la livraison pour que vous puissiez modifier vos textes, ajouter des images et gérer vos pages en toute autonomie.'
  },
  {
    question: 'Quelle est la différence entre un site vitrine et un site e-commerce ?',
    answer: 'Un site vitrine présente votre activité, vos services et vos coordonnées pour générer des prises de contact. Un site e-commerce permet la vente en ligne avec panier, paiement sécurisé et gestion des commandes. Nous vous orientons vers la solution adaptée à vos objectifs.'
  },
  {
    question: 'Travaillez-vous avec des clients hors de Poitiers ?',
    answer: 'Oui. Bien que notre agence soit basée à Poitiers, nous accompagnons des clients dans toute la Vienne (86) et au-delà. Nos outils de visioconférence et de collaboration permettent un suivi efficace à distance.'
  },
  {
    question: 'Comment se passe le premier rendez-vous ?',
    answer: 'Le premier rendez-vous est gratuit et sans engagement. Nous échangeons sur votre activité, vos objectifs et votre budget. À l\'issue de cet entretien, nous vous envoyons une proposition détaillée avec maquettes, planning et tarif. Vous décidez en toute sérénité.'
  }
]

useHead({
  title: 'Création de site internet à Poitiers — Sites vitrine, e-commerce & sur-mesure | LUMEA',
  meta: [
    { name: 'description', content: 'LUMEA, agence de création de sites internet à Poitiers. Sites vitrine, e-commerce et refonte sur-mesure. SEO inclus, design premium, support local. Devis gratuit.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Création de site internet à Poitiers | LUMEA' },
    { property: 'og:description', content: 'Agence web à Poitiers. Sites vitrine, e-commerce et refonte. SEO inclus, design premium.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://lumea.poitiers.digital/' },
    { property: 'og:locale', content: 'fr_FR' }
  ],
  link: [
    { rel: 'canonical', href: 'https://lumea.poitiers.digital/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LocalBusiness',
            '@id': 'https://lumea.poitiers.digital/#business',
            name: 'LUMEA',
            description: 'Agence de création de sites internet à Poitiers. Sites vitrine, e-commerce et refonte sur-mesure.',
            url: 'https://lumea.poitiers.digital/',
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
            priceRange: '€€',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00'
              }
            ]
          },
          {
            '@type': 'WebSite',
            '@id': 'https://lumea.poitiers.digital/#website',
            url: 'https://lumea.poitiers.digital/',
            name: 'LUMEA — Création de site internet à Poitiers',
            publisher: { '@id': 'https://lumea.poitiers.digital/#business' }
          },
          {
            '@type': 'FAQPage',
            '@id': 'https://lumea.poitiers.digital/#faq',
            mainEntity: faqItems.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
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
      <LandingHeroSection />
      <LandingPainSection />
      <LandingServicesSection />
      <LandingProcessSection />
      <LandingWhyUsSection />
      <LandingTestimonialsSection />
      <LandingFaqSection :items="faqItems" />
      <LandingCtaSection />
    </main>

    <AppFooter />

    <!-- Sticky CTA mobile -->
    <div class="fixed bottom-0 inset-x-0 z-50 p-3 bg-gray-950/90 backdrop-blur-lg border-t border-gray-800 md:hidden">
      <a
        href="#contact"
        class="flex items-center justify-center w-full gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-xl transition-colors"
      >
        <UIcon name="i-lucide-send" class="w-4 h-4" />
        Demander un devis gratuit
      </a>
    </div>
  </div>
</template>
