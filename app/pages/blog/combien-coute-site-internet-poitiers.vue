<script setup lang="ts">
const articleDate = '2026-04-08'
const readingTime = '7 min de lecture'
const author = "L'équipe LUMEA"

useHead({
  title: 'Combien coûte un site internet à Poitiers ? | LUMEA',
  meta: [
    { name: 'description', content: 'Découvrez les tarifs de création de site internet à Poitiers en 2026 : site vitrine, e-commerce, sur-mesure. Comparatif freelance vs agence et coûts cachés à prévoir.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Combien coûte un site internet à Poitiers en 2026 ? Guide complet des tarifs' },
    { property: 'og:description', content: 'Guide complet des tarifs de création de site internet à Poitiers. Fourchettes de prix, comparatif et coûts cachés.' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://lumea.poitiers.digital/blog/combien-coute-site-internet-poitiers' },
    { property: 'og:locale', content: 'fr_FR' },
    { property: 'article:published_time', content: '2026-04-08' },
    { property: 'article:author', content: "L'équipe LUMEA" }
  ],
  link: [
    { rel: 'canonical', href: 'https://lumea.poitiers.digital/blog/combien-coute-site-internet-poitiers' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Combien coûte un site internet à Poitiers en 2026 ?',
        description: 'Guide complet des tarifs de création de site internet à Poitiers : site vitrine, e-commerce, sur-mesure.',
        datePublished: '2026-04-08',
        dateModified: '2026-04-08',
        author: {
          '@type': 'Organization',
          name: 'LUMEA',
          url: 'https://lumea.poitiers.digital/'
        },
        publisher: {
          '@type': 'Organization',
          name: 'LUMEA',
          url: 'https://lumea.poitiers.digital/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://lumea.poitiers.digital/logo.png'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://lumea.poitiers.digital/blog/combien-coute-site-internet-poitiers'
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
      <!-- En-tête article -->
      <header class="max-w-3xl mx-auto px-6 mb-16" data-reveal>
        <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-sky-400 transition-colors mb-8">
          <UIcon name="i-lucide-arrow-left" class="w-4 h-4" />
          Retour au blog
        </NuxtLink>
        <div class="flex items-center gap-4 text-sm text-gray-400 mb-6">
          <time :datetime="articleDate" class="flex items-center gap-1.5">
            <UIcon name="i-lucide-calendar" class="w-4 h-4" />
            8 avril 2026
          </time>
          <span class="flex items-center gap-1.5">
            <UIcon name="i-lucide-clock" class="w-4 h-4" />
            {{ readingTime }}
          </span>
          <span class="flex items-center gap-1.5">
            <UIcon name="i-lucide-user" class="w-4 h-4" />
            {{ author }}
          </span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Combien coûte un site internet à <span class="text-sky-400">Poitiers</span> en 2026 ?
        </h1>
        <p class="text-xl text-gray-300 leading-relaxed">
          La question que se pose tout entrepreneur, artisan ou commerçant pictavien avant de se lancer dans la création de son site web. Voici un guide transparent pour y voir clair.
        </p>
      </header>

      <!-- Contenu -->
      <article class="max-w-3xl mx-auto px-6">
        <!-- Introduction -->
        <section class="mb-12" data-reveal>
          <p class="text-gray-300 leading-relaxed mb-4">
            Vous avez décidé de créer un site internet pour votre entreprise à Poitiers. Excellent choix. Mais avant de vous engager, une question légitime s'impose : combien cela va-t-il coûter ? La réponse n'est pas simple, car le prix d'un site web dépend de nombreux facteurs. Un site vitrine pour un artisan n'a rien à voir avec une boutique en ligne gérant des centaines de produits.
          </p>
          <p class="text-gray-300 leading-relaxed mb-4">
            Dans cet article, nous allons détailler les fourchettes de prix pratiquées à Poitiers et dans la Vienne, expliquer ce qui fait varier le tarif, comparer les différentes options (freelance, agence, solution DIY) et vous aider à prévoir les coûts cachés que l'on oublie souvent. L'objectif : vous donner toutes les clés pour prendre une décision éclairée.
          </p>
          <p class="text-gray-300 leading-relaxed">
            Chez LUMEA, nous croyons à la transparence. Pas de devis gonflé, pas de mauvaises surprises. Juste un prix juste pour un site qui travaille réellement pour votre activité.
          </p>
        </section>

        <!-- Fourchettes de prix -->
        <section class="mb-12" data-reveal>
          <h2 class="text-2xl md:text-3xl font-bold mb-6">Les fourchettes de prix à Poitiers</h2>
          <p class="text-gray-300 leading-relaxed mb-6">
            Le marché de la création web à Poitiers suit les tendances nationales, avec des tarifs légèrement inférieurs à Paris ou Lyon. Voici les grandes catégories de sites et leurs fourchettes de prix en 2026.
          </p>

          <!-- Cards prix -->
          <div class="grid gap-6 mb-8">
            <!-- Vitrine -->
            <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-sky-500/30 transition-colors" data-reveal>
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="text-xl font-semibold mb-1">Site vitrine</h3>
                  <p class="text-gray-400 text-sm">3 à 10 pages — Présentation de votre activité</p>
                </div>
                <span class="text-sky-400 font-bold text-lg whitespace-nowrap">Variable selon le projet</span>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed">
                Le site vitrine est la solution la plus courante pour les artisans, professions libérales et petites entreprises de Poitiers. Il présente votre activité, vos services, vos coordonnées et permet à vos prospects de vous contacter. Un site vitrine professionnel comprend un design personnalisé, une optimisation pour le référencement naturel, un formulaire de contact et une version mobile impeccable. À ce niveau de prix, vous obtenez un site qui représente dignement votre image de marque et qui est trouvable sur Google.
              </p>
            </div>

            <!-- E-commerce -->
            <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-sky-500/30 transition-colors" data-reveal>
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="text-xl font-semibold mb-1">Site e-commerce</h3>
                  <p class="text-gray-400 text-sm">Boutique en ligne — Vente de produits ou services</p>
                </div>
                <span class="text-sky-400 font-bold text-lg whitespace-nowrap">Variable selon le catalogue</span>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed">
                La boutique en ligne demande davantage de travail technique : gestion du catalogue produits, panier d'achat, paiement sécurisé, gestion des stocks, calcul des frais de livraison, espace client. Le prix dépend principalement du nombre de produits, de la complexité des variantes (tailles, couleurs) et des intégrations nécessaires (transporteurs, ERP, CRM). Un e-commerce bien conçu est un vendeur qui travaille pour vous 24 heures sur 24, y compris quand votre boutique physique est fermée.
              </p>
            </div>

            <!-- Sur-mesure -->
            <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-sky-500/30 transition-colors" data-reveal>
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="text-xl font-semibold mb-1">Site sur-mesure</h3>
                  <p class="text-gray-400 text-sm">Application web — Fonctionnalités spécifiques</p>
                </div>
                <span class="text-sky-400 font-bold text-lg whitespace-nowrap">Sur devis selon les besoins</span>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed">
                Le développement sur-mesure s'adresse aux entreprises ayant des besoins spécifiques qu'aucune solution clé en main ne peut couvrir : plateforme de réservation, espace membre avec contenus exclusifs, tableau de bord personnalisé, outil métier en ligne, marketplace locale. Le budget est plus conséquent car chaque fonctionnalité est conçue et développée spécifiquement pour votre activité. En contrepartie, vous disposez d'un outil parfaitement adapté à vos processus.
              </p>
            </div>
          </div>
        </section>

        <!-- Ce qui fait varier le prix -->
        <section class="mb-12" data-reveal>
          <h2 class="text-2xl md:text-3xl font-bold mb-6">Ce qui fait varier le prix</h2>
          <p class="text-gray-300 leading-relaxed mb-6">
            Pourquoi un site vitrine peut-il afficher des tarifs très différents d'un prestataire à l'autre ? Plusieurs facteurs expliquent ces écarts, et ils n'ont rien de mystérieux.
          </p>
          <div class="space-y-4">
            <div class="flex gap-4" data-reveal>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                <UIcon name="i-lucide-layers" class="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h3 class="font-semibold mb-1">Le nombre de pages</h3>
                <p class="text-gray-400 text-sm leading-relaxed">Un site de 5 pages demande moins de travail qu'un site de 30 pages. Chaque page nécessite du design, de l'intégration, de la rédaction et de l'optimisation SEO. Plus votre site est conséquent, plus le budget augmente logiquement.</p>
              </div>
            </div>
            <div class="flex gap-4" data-reveal>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                <UIcon name="i-lucide-puzzle" class="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h3 class="font-semibold mb-1">Les fonctionnalités</h3>
                <p class="text-gray-400 text-sm leading-relaxed">Un formulaire de contact simple ne coûte pas la même chose qu'un système de réservation en ligne avec paiement intégré. Les fonctionnalités avancées (chat en direct, espace membre, configurateur de produit, intégrations tierces) alourdissent le budget.</p>
              </div>
            </div>
            <div class="flex gap-4" data-reveal>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                <UIcon name="i-lucide-paintbrush" class="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h3 class="font-semibold mb-1">Le niveau de design</h3>
                <p class="text-gray-400 text-sm leading-relaxed">Un thème prêt à l'emploi personnalisé sera moins cher qu'un design entièrement créé sur mesure par un directeur artistique. Le design influence la perception de votre marque : un site qui inspire confiance convertit mieux.</p>
              </div>
            </div>
            <div class="flex gap-4" data-reveal>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                <UIcon name="i-lucide-search" class="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h3 class="font-semibold mb-1">L'optimisation SEO</h3>
                <p class="text-gray-400 text-sm leading-relaxed">Un site optimisé pour le référencement naturel demande un travail de recherche de mots-clés, de structuration du contenu, de maillage interne et d'optimisation technique. Ce travail représente un investissement supplémentaire qui se rentabilise rapidement par un meilleur positionnement sur Google.</p>
              </div>
            </div>
            <div class="flex gap-4" data-reveal>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                <UIcon name="i-lucide-file-text" class="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h3 class="font-semibold mb-1">La rédaction du contenu</h3>
                <p class="text-gray-400 text-sm leading-relaxed">Fournir vos propres textes réduit le coût. Si vous confiez la rédaction au prestataire, prévoyez un budget supplémentaire. Un contenu professionnel, bien structuré et optimisé pour le SEO fait la différence entre un site qui convertit et un site qui reste invisible.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Comparatif -->
        <section class="mb-12" data-reveal>
          <h2 class="text-2xl md:text-3xl font-bold mb-6">Freelance, agence ou solution DIY : que choisir ?</h2>
          <p class="text-gray-300 leading-relaxed mb-6">
            Trois options s'offrent à vous pour créer votre site internet à Poitiers. Chacune présente des avantages et des limites qu'il est important de comprendre avant de s'engager.
          </p>

          <div class="overflow-x-auto mb-6">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-gray-800">
                  <th class="text-left py-3 px-4 text-gray-400 font-medium">Critère</th>
                  <th class="text-left py-3 px-4 text-gray-400 font-medium">DIY (Wix, WordPress.com)</th>
                  <th class="text-left py-3 px-4 text-gray-400 font-medium">Freelance</th>
                  <th class="text-left py-3 px-4 text-gray-400 font-medium">Agence</th>
                </tr>
              </thead>
              <tbody class="text-gray-300">
                <tr class="border-b border-gray-800/50">
                  <td class="py-3 px-4 font-medium">Budget</td>
                  <td class="py-3 px-4">Faible (abonnement plateforme)</td>
                  <td class="py-3 px-4">Variable selon le profil</td>
                  <td class="py-3 px-4">Variable selon le projet</td>
                </tr>
                <tr class="border-b border-gray-800/50">
                  <td class="py-3 px-4 font-medium">Qualité design</td>
                  <td class="py-3 px-4">Templates génériques</td>
                  <td class="py-3 px-4">Variable selon le profil</td>
                  <td class="py-3 px-4">Sur-mesure, professionnel</td>
                </tr>
                <tr class="border-b border-gray-800/50">
                  <td class="py-3 px-4 font-medium">SEO</td>
                  <td class="py-3 px-4">Limité</td>
                  <td class="py-3 px-4">Selon compétences</td>
                  <td class="py-3 px-4">Inclus et optimisé</td>
                </tr>
                <tr class="border-b border-gray-800/50">
                  <td class="py-3 px-4 font-medium">Support</td>
                  <td class="py-3 px-4">FAQ en ligne</td>
                  <td class="py-3 px-4">Dépend de la disponibilité</td>
                  <td class="py-3 px-4">Continu et réactif</td>
                </tr>
                <tr class="border-b border-gray-800/50">
                  <td class="py-3 px-4 font-medium">Temps de votre côté</td>
                  <td class="py-3 px-4">Très élevé</td>
                  <td class="py-3 px-4">Modéré</td>
                  <td class="py-3 px-4">Minimal</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 font-medium">Pérennité</td>
                  <td class="py-3 px-4">Dépend de la plateforme</td>
                  <td class="py-3 px-4">Risque si le freelance arrête</td>
                  <td class="py-3 px-4">Équipe dédiée</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="text-gray-300 leading-relaxed">
            La solution DIY convient à un projet personnel ou un test rapide. Pour une entreprise qui souhaite générer des clients via son site, le recours à un professionnel est indispensable. Le choix entre freelance et agence dépend de la complexité de votre projet et de votre besoin d'accompagnement dans la durée. Chez LUMEA, nous combinons la réactivité d'une petite structure avec l'expertise d'une agence spécialisée.
          </p>
        </section>

        <!-- Coûts cachés -->
        <section class="mb-12" data-reveal>
          <h2 class="text-2xl md:text-3xl font-bold mb-6">Les coûts cachés à prévoir</h2>
          <p class="text-gray-300 leading-relaxed mb-6">
            Le prix de création de votre site ne représente qu'une partie du budget total. Plusieurs coûts récurrents s'ajoutent et doivent être anticipés pour éviter les mauvaises surprises.
          </p>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-gray-900 border border-gray-800 rounded-xl p-5" data-reveal>
              <h3 class="font-semibold mb-2 flex items-center gap-2">
                <UIcon name="i-lucide-server" class="w-5 h-5 text-sky-400" />
                Hébergement
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">Comptez entre 5 et 50 € par mois selon la puissance du serveur. Un hébergement de qualité garantit un site rapide et disponible. Ne faites pas l'impasse sur ce poste.</p>
            </div>
            <div class="bg-gray-900 border border-gray-800 rounded-xl p-5" data-reveal>
              <h3 class="font-semibold mb-2 flex items-center gap-2">
                <UIcon name="i-lucide-globe" class="w-5 h-5 text-sky-400" />
                Nom de domaine
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">Un nom de domaine en .fr ou .com coûte entre 10 et 15 € par an. Certaines extensions premium peuvent atteindre plusieurs centaines d'euros. Réservez-le à votre nom pour ne pas le perdre.</p>
            </div>
            <div class="bg-gray-900 border border-gray-800 rounded-xl p-5" data-reveal>
              <h3 class="font-semibold mb-2 flex items-center gap-2">
                <UIcon name="i-lucide-wrench" class="w-5 h-5 text-sky-400" />
                Maintenance
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">Mises à jour de sécurité, sauvegardes, corrections de bugs, surveillance de la disponibilité. Prévoyez entre 30 et 150 € par mois pour un site correctement maintenu. Ignorer la maintenance, c'est risquer un piratage ou une panne.</p>
            </div>
            <div class="bg-gray-900 border border-gray-800 rounded-xl p-5" data-reveal>
              <h3 class="font-semibold mb-2 flex items-center gap-2">
                <UIcon name="i-lucide-shield" class="w-5 h-5 text-sky-400" />
                Certificat SSL
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">Le HTTPS est devenu obligatoire. La plupart des hébergeurs incluent un certificat SSL gratuit (Let's Encrypt). Si vous avez besoin d'un certificat étendu (EV), comptez entre 50 et 200 € par an.</p>
            </div>
          </div>
        </section>

        <!-- Nos tarifs -->
        <section class="mb-12" data-reveal>
          <h2 class="text-2xl md:text-3xl font-bold mb-6">Nos tarifs chez LUMEA</h2>
          <p class="text-gray-300 leading-relaxed mb-6">
            Chez LUMEA, nous pratiquons des tarifs clairs et sans surprise. Chaque projet commence par un échange gratuit pour comprendre vos besoins et définir le périmètre exact de la prestation. Voici nos principales offres pour les entreprises de Poitiers et de la Vienne.
          </p>
          <p class="text-gray-300 leading-relaxed mb-4">
            Nos sites vitrine sont livrés clé en main avec le design personnalisé, l'optimisation SEO, la version mobile et la formation à l'administration du site. Pour les projets e-commerce, nous mettons en place votre boutique en ligne complète. Le tarif est défini après un premier échange gratuit selon vos besoins.
          </p>
          <p class="text-gray-300 leading-relaxed mb-6">
            Découvrez le détail de nos offres sur nos pages dédiées :
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink
              to="/services/site-vitrine"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700 hover:border-sky-500/50 rounded-xl text-sm font-medium transition-colors"
            >
              <UIcon name="i-lucide-layout-template" class="w-4 h-4 text-sky-400" />
              Création de site vitrine à Poitiers
            </NuxtLink>
            <NuxtLink
              to="/services/site-ecommerce"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700 hover:border-sky-500/50 rounded-xl text-sm font-medium transition-colors"
            >
              <UIcon name="i-lucide-shopping-bag" class="w-4 h-4 text-sky-400" />
              Création de site e-commerce à Poitiers
            </NuxtLink>
          </div>
        </section>

        <!-- Conclusion -->
        <section class="mb-12" data-reveal>
          <h2 class="text-2xl md:text-3xl font-bold mb-6">Investir dans un bon site, c'est investir dans votre croissance</h2>
          <p class="text-gray-300 leading-relaxed mb-4">
            Le prix d'un site internet ne doit pas être perçu comme une dépense mais comme un investissement. Un site bien conçu génère des prospects, rassure vos clients potentiels, renforce votre crédibilité et travaille pour vous même quand vous dormez. À l'inverse, un site bâclé ou inexistant vous coûte de l'argent chaque jour en opportunités manquées.
          </p>
          <p class="text-gray-300 leading-relaxed mb-4">
            À Poitiers, les entrepreneurs qui investissent dans un site professionnel constatent un retour sur investissement dès les premiers mois. Un artisan qui apparaît en première page de Google sur « plombier Poitiers » ou « électricien Poitiers » n'a plus besoin de prospecter : les clients viennent à lui.
          </p>
          <p class="text-gray-300 leading-relaxed">
            Le meilleur moment pour créer votre site était hier. Le deuxième meilleur moment, c'est maintenant.
          </p>
        </section>

        <!-- CTA -->
        <section class="bg-gradient-to-br from-sky-500/10 to-blue-600/10 border border-sky-500/20 rounded-2xl p-8 md:p-12 text-center" data-reveal>
          <h2 class="text-2xl md:text-3xl font-bold mb-4">Demandez votre devis gratuit</h2>
          <p class="text-gray-300 max-w-lg mx-auto mb-8 leading-relaxed">
            Vous avez un projet de site internet à Poitiers ? Parlons-en. Premier échange gratuit et sans engagement pour définir vos besoins et vous proposer un tarif juste.
          </p>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-colors"
          >
            <UIcon name="i-lucide-send" class="w-5 h-5" />
            Obtenir un devis gratuit
          </NuxtLink>
        </section>
      </article>
    </main>

    <AppFooter />
  </div>
</template>
