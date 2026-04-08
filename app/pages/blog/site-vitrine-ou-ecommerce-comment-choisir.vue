<script setup lang="ts">
const articleDate = '2026-04-08'
const readingTime = '8 min de lecture'
const author = "L'équipe LUMEA"

useHead({
  title: 'Site vitrine ou site e-commerce : comment choisir ? | Guide 2026',
  meta: [
    { name: 'description', content: 'Site vitrine ou site e-commerce ? Découvrez les différences, avantages et limites de chaque solution pour choisir le site adapté à votre entreprise à Poitiers.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Site vitrine ou site e-commerce : comment choisir ? | Guide 2026' },
    { property: 'og:description', content: 'Comparatif complet entre site vitrine et site e-commerce. Cas concrets, tableau comparatif et aide à la décision.' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://lumea.poitiers.digital/blog/site-vitrine-ou-ecommerce-comment-choisir' },
    { property: 'og:locale', content: 'fr_FR' },
    { property: 'article:published_time', content: '2026-04-08' },
    { property: 'article:author', content: "L'équipe LUMEA" }
  ],
  link: [
    { rel: 'canonical', href: 'https://lumea.poitiers.digital/blog/site-vitrine-ou-ecommerce-comment-choisir' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Site vitrine ou site e-commerce : lequel choisir pour votre entreprise ?',
        description: 'Comparatif complet entre site vitrine et site e-commerce pour les entreprises de Poitiers.',
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
          '@id': 'https://lumea.poitiers.digital/blog/site-vitrine-ou-ecommerce-comment-choisir'
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
          Site vitrine ou site e-commerce : lequel choisir pour <span class="text-sky-400">votre entreprise</span> ?
        </h1>
        <p class="text-xl text-gray-300 leading-relaxed">
          Deux types de sites, deux philosophies, deux objectifs. Avant de vous lancer dans la création de votre site internet à Poitiers, il est essentiel de choisir la bonne formule.
        </p>
      </header>

      <!-- Contenu -->
      <article class="max-w-3xl mx-auto px-6">
        <!-- Introduction -->
        <section class="mb-12" data-reveal>
          <p class="text-gray-300 leading-relaxed mb-4">
            Quand un entrepreneur de Poitiers nous contacte pour créer son site internet, la première question que nous posons est simple : quel est votre objectif ? Souhaitez-vous présenter votre activité et générer des demandes de contact ? Ou souhaitez-vous vendre des produits directement en ligne ? La réponse à cette question détermine le type de site dont vous avez besoin.
          </p>
          <p class="text-gray-300 leading-relaxed mb-4">
            Un site vitrine et un site e-commerce ne répondent pas aux mêmes besoins, ne demandent pas le même investissement et ne génèrent pas le même type de résultats. Choisir le mauvais format, c'est partir avec un handicap. Choisir le bon, c'est poser les fondations d'une présence en ligne efficace et rentable.
          </p>
          <p class="text-gray-300 leading-relaxed">
            Dans cet article, nous allons vous aider à faire le bon choix. Nous détaillerons les caractéristiques de chaque type de site, comparerons leurs avantages et limites, et vous présenterons des cas concrets d'entreprises de Poitiers pour illustrer chaque situation.
          </p>
        </section>

        <!-- Site vitrine -->
        <section class="mb-12" data-reveal>
          <h2 class="text-2xl md:text-3xl font-bold mb-6">Le site vitrine : votre carte de visite en ligne</h2>

          <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6" data-reveal>
            <h3 class="text-lg font-semibold mb-3 text-sky-400">Définition</h3>
            <p class="text-gray-300 leading-relaxed">
              Un site vitrine est un site internet dont l'objectif principal est de présenter votre entreprise, vos services, votre expertise et vos coordonnées. Il ne comporte pas de fonctionnalité de vente en ligne. Son rôle est d'informer, de rassurer et de convaincre vos visiteurs de vous contacter.
            </p>
          </div>

          <h3 class="text-xl font-semibold mb-4">Pour qui ?</h3>
          <p class="text-gray-300 leading-relaxed mb-4">
            Le site vitrine est la solution idéale pour les prestataires de services, les professions libérales, les artisans, les consultants, les cabinets médicaux, les restaurants et tous les professionnels dont l'activité repose sur la prise de contact et le rendez-vous. Si vos clients ont besoin de vous rencontrer ou de vous appeler avant d'acheter, le site vitrine est votre meilleur allié.
          </p>

          <h3 class="text-xl font-semibold mb-4">Avantages</h3>
          <ul class="space-y-3 mb-6">
            <li class="flex items-start gap-3 text-gray-300">
              <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span><strong class="text-white">Budget maîtrisé</strong> : un site vitrine professionnel se situe entre 800 et 5 000 euros, selon le niveau de personnalisation. C'est un investissement accessible pour la plupart des entreprises de Poitiers.</span>
            </li>
            <li class="flex items-start gap-3 text-gray-300">
              <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span><strong class="text-white">Mise en ligne rapide</strong> : comptez 2 à 4 semaines pour un site vitrine complet. Vous êtes visible rapidement sur Google et commencez à recevoir des contacts.</span>
            </li>
            <li class="flex items-start gap-3 text-gray-300">
              <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span><strong class="text-white">Maintenance légère</strong> : un site vitrine nécessite peu de mises à jour régulières. Les coûts de maintenance restent contenus.</span>
            </li>
            <li class="flex items-start gap-3 text-gray-300">
              <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span><strong class="text-white">Performance SEO</strong> : un site vitrine bien structuré se positionne facilement sur les requêtes locales. « Plombier Poitiers », « avocat Poitiers », « coiffeur Poitiers » : les sites vitrines optimisés dominent ces résultats.</span>
            </li>
          </ul>

          <h3 class="text-xl font-semibold mb-4">Limites</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-gray-300">
              <UIcon name="i-lucide-x-circle" class="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <span><strong class="text-white">Pas de vente en ligne</strong> : si vous souhaitez vendre des produits directement sur votre site, le site vitrine ne suffira pas.</span>
            </li>
            <li class="flex items-start gap-3 text-gray-300">
              <UIcon name="i-lucide-x-circle" class="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <span><strong class="text-white">Revenus indirects</strong> : le site vitrine génère des contacts et des demandes de devis, mais la conversion finale dépend de votre capacité à conclure lors de l'échange avec le prospect.</span>
            </li>
          </ul>
        </section>

        <!-- Site e-commerce -->
        <section class="mb-12" data-reveal>
          <h2 class="text-2xl md:text-3xl font-bold mb-6">Le site e-commerce : votre boutique ouverte 24h/24</h2>

          <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6" data-reveal>
            <h3 class="text-lg font-semibold mb-3 text-sky-400">Définition</h3>
            <p class="text-gray-300 leading-relaxed">
              Un site e-commerce est une boutique en ligne qui permet à vos clients d'acheter directement vos produits ou services sur internet. Il inclut un catalogue de produits, un panier d'achat, un système de paiement sécurisé et une gestion des commandes.
            </p>
          </div>

          <h3 class="text-xl font-semibold mb-4">Pour qui ?</h3>
          <p class="text-gray-300 leading-relaxed mb-4">
            Le site e-commerce s'adresse aux commerçants, aux créateurs, aux producteurs locaux, aux boutiques de mode, aux épiceries fines et à tous ceux qui vendent des produits physiques ou numériques. Si vos clients peuvent acheter sans avoir besoin de vous parler, le e-commerce est fait pour vous. C'est aussi pertinent pour les prestataires qui vendent des formations en ligne, des abonnements ou des produits dématérialisés.
          </p>

          <h3 class="text-xl font-semibold mb-4">Avantages</h3>
          <ul class="space-y-3 mb-6">
            <li class="flex items-start gap-3 text-gray-300">
              <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span><strong class="text-white">Vente automatisée</strong> : vos clients passent commande à toute heure, même le dimanche et les jours fériés. Le site encaisse, confirme et vous notifie. Vous expédiez.</span>
            </li>
            <li class="flex items-start gap-3 text-gray-300">
              <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span><strong class="text-white">Zone de chalandise élargie</strong> : vous n'êtes plus limité à Poitiers. Votre boutique en ligne touche toute la France, voire l'international. Un producteur de macarons du Futuroscope peut vendre à Bordeaux, Paris ou Lille.</span>
            </li>
            <li class="flex items-start gap-3 text-gray-300">
              <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span><strong class="text-white">Données et analytics</strong> : chaque visite, chaque clic, chaque abandon de panier est mesuré. Vous comprenez le comportement de vos clients et optimisez en continu.</span>
            </li>
            <li class="flex items-start gap-3 text-gray-300">
              <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span><strong class="text-white">Scalabilité</strong> : votre boutique peut passer de 10 à 1 000 produits sans changer de structure. Le site grandit avec votre activité.</span>
            </li>
          </ul>

          <h3 class="text-xl font-semibold mb-4">Limites</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-gray-300">
              <UIcon name="i-lucide-x-circle" class="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <span><strong class="text-white">Budget plus élevé</strong> : la mise en place d'un e-commerce demande plus de développement, de tests et de configuration. Comptez au minimum 2 000 euros pour un projet sérieux.</span>
            </li>
            <li class="flex items-start gap-3 text-gray-300">
              <UIcon name="i-lucide-x-circle" class="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <span><strong class="text-white">Maintenance régulière</strong> : mises à jour de sécurité, gestion des stocks, suivi des commandes, gestion des retours. Un e-commerce demande un suivi quotidien.</span>
            </li>
            <li class="flex items-start gap-3 text-gray-300">
              <UIcon name="i-lucide-x-circle" class="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <span><strong class="text-white">Logistique</strong> : vendre en ligne implique d'organiser la préparation des commandes, l'emballage, l'expédition et la gestion des retours. Cette dimension opérationnelle ne doit pas être sous-estimée.</span>
            </li>
          </ul>
        </section>

        <!-- Tableau comparatif -->
        <section class="mb-12" data-reveal>
          <h2 class="text-2xl md:text-3xl font-bold mb-6">Tableau comparatif</h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-gray-800">
                  <th class="text-left py-3 px-4 text-gray-400 font-medium">Critère</th>
                  <th class="text-left py-3 px-4 text-sky-400 font-medium">Site vitrine</th>
                  <th class="text-left py-3 px-4 text-sky-400 font-medium">Site e-commerce</th>
                </tr>
              </thead>
              <tbody class="text-gray-300">
                <tr class="border-b border-gray-800/50">
                  <td class="py-3 px-4 font-medium">Objectif principal</td>
                  <td class="py-3 px-4">Générer des contacts</td>
                  <td class="py-3 px-4">Vendre en ligne</td>
                </tr>
                <tr class="border-b border-gray-800/50">
                  <td class="py-3 px-4 font-medium">Budget création</td>
                  <td class="py-3 px-4">800 — 5 000 €</td>
                  <td class="py-3 px-4">2 000 — 10 000 €</td>
                </tr>
                <tr class="border-b border-gray-800/50">
                  <td class="py-3 px-4 font-medium">Délai de livraison</td>
                  <td class="py-3 px-4">2 à 4 semaines</td>
                  <td class="py-3 px-4">4 à 8 semaines</td>
                </tr>
                <tr class="border-b border-gray-800/50">
                  <td class="py-3 px-4 font-medium">Complexité technique</td>
                  <td class="py-3 px-4">Faible à modérée</td>
                  <td class="py-3 px-4">Modérée à élevée</td>
                </tr>
                <tr class="border-b border-gray-800/50">
                  <td class="py-3 px-4 font-medium">Maintenance mensuelle</td>
                  <td class="py-3 px-4">30 — 80 €/mois</td>
                  <td class="py-3 px-4">80 — 250 €/mois</td>
                </tr>
                <tr class="border-b border-gray-800/50">
                  <td class="py-3 px-4 font-medium">ROI</td>
                  <td class="py-3 px-4">Indirect (contacts → ventes)</td>
                  <td class="py-3 px-4">Direct (ventes en ligne)</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 font-medium">Gestion quotidienne</td>
                  <td class="py-3 px-4">Minimale</td>
                  <td class="py-3 px-4">Active (stocks, commandes)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Cas concrets -->
        <section class="mb-12" data-reveal>
          <h2 class="text-2xl md:text-3xl font-bold mb-6">Cas concrets à Poitiers</h2>
          <p class="text-gray-300 leading-relaxed mb-6">
            Pour rendre ce comparatif plus concret, voici trois profils types que nous rencontrons régulièrement chez LUMEA, et la solution que nous leur recommandons.
          </p>

          <div class="space-y-6">
            <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6" data-reveal>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <UIcon name="i-lucide-wrench" class="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 class="font-semibold">L'artisan : un plombier-chauffagiste à Poitiers</h3>
                  <span class="text-sm text-emerald-400">Recommandation : site vitrine</span>
                </div>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed">
                Marc est plombier-chauffagiste à Poitiers depuis 15 ans. Ses clients le trouvent par le bouche-à-oreille, mais il souhaite élargir sa clientèle. Il n'a rien à vendre en ligne : ses prestations nécessitent un déplacement et un devis sur place. Un site vitrine présentant ses services, ses zones d'intervention, ses avis clients et un formulaire de demande de devis est la solution parfaite. Coût estimé : 1 500 à 2 500 euros. Résultat : en 3 mois, Marc reçoit 5 à 10 demandes de devis par semaine via son site.
              </p>
            </div>

            <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6" data-reveal>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <UIcon name="i-lucide-shopping-bag" class="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 class="font-semibold">La commerçante : une boutique de mode à Poitiers</h3>
                  <span class="text-sm text-purple-400">Recommandation : site e-commerce</span>
                </div>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed">
                Sophie tient une boutique de vêtements et d'accessoires dans le centre-ville de Poitiers. Elle a déjà une clientèle fidèle en boutique et souhaite développer la vente en ligne pour toucher des clients dans toute la Nouvelle-Aquitaine. Un site e-commerce avec catalogue de produits, système de tailles, paiement sécurisé et suivi de commande est indispensable. Coût estimé : 3 000 à 6 000 euros. Résultat : les ventes en ligne représentent rapidement 30 % de son chiffre d'affaires.
              </p>
            </div>

            <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6" data-reveal>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                  <UIcon name="i-lucide-utensils" class="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h3 class="font-semibold">Le restaurateur : une pizzeria avec livraison à Poitiers</h3>
                  <span class="text-sm text-sky-400">Recommandation : site hybride</span>
                </div>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed">
                Luca tient une pizzeria à Poitiers et propose la livraison. Il a besoin d'un site qui présente son restaurant, sa carte, ses horaires et ses avis (vitrine), mais aussi qui permette de commander en ligne avec paiement intégré (e-commerce). La solution hybride combine les deux approches : une partie vitrine pour l'image et le SEO local, une partie commande pour la vente directe. Coût estimé : 3 500 à 5 000 euros. Résultat : les commandes en ligne dépassent celles par téléphone en quelques semaines.
              </p>
            </div>
          </div>
        </section>

        <!-- Arbre de décision -->
        <section class="mb-12" data-reveal>
          <h2 class="text-2xl md:text-3xl font-bold mb-6">Comment savoir lequel vous convient ?</h2>
          <p class="text-gray-300 leading-relaxed mb-6">
            Pour vous aider à trancher, posez-vous ces quatre questions simples. Vos réponses vous orienteront naturellement vers la bonne solution.
          </p>

          <div class="space-y-4">
            <div class="bg-gray-900 border border-gray-800 rounded-xl p-5" data-reveal>
              <h3 class="font-semibold mb-2 flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center text-sm font-bold">1</span>
                Vendez-vous des produits physiques ou numériques ?
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                <strong class="text-gray-300">Oui</strong> → E-commerce. <strong class="text-gray-300">Non</strong> → Site vitrine.
              </p>
            </div>
            <div class="bg-gray-900 border border-gray-800 rounded-xl p-5" data-reveal>
              <h3 class="font-semibold mb-2 flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center text-sm font-bold">2</span>
                Vos clients ont-ils besoin de vous rencontrer avant d'acheter ?
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                <strong class="text-gray-300">Oui</strong> → Site vitrine avec formulaire de contact. <strong class="text-gray-300">Non</strong> → E-commerce.
              </p>
            </div>
            <div class="bg-gray-900 border border-gray-800 rounded-xl p-5" data-reveal>
              <h3 class="font-semibold mb-2 flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center text-sm font-bold">3</span>
                Avez-vous la capacité de gérer des commandes et de la logistique ?
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                <strong class="text-gray-300">Oui</strong> → E-commerce envisageable. <strong class="text-gray-300">Non</strong> → Commencez par un site vitrine, puis évoluez.
              </p>
            </div>
            <div class="bg-gray-900 border border-gray-800 rounded-xl p-5" data-reveal>
              <h3 class="font-semibold mb-2 flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center text-sm font-bold">4</span>
                Quel est votre budget ?
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                <strong class="text-gray-300">Moins de 2 000 €</strong> → Site vitrine. <strong class="text-gray-300">Plus de 2 000 €</strong> → Les deux options sont accessibles.
              </p>
            </div>
          </div>
        </section>

        <!-- Conclusion -->
        <section class="mb-12" data-reveal>
          <h2 class="text-2xl md:text-3xl font-bold mb-6">Pas besoin de choisir seul</h2>
          <p class="text-gray-300 leading-relaxed mb-4">
            Le choix entre site vitrine et site e-commerce n'est pas toujours évident. Certaines activités se situent entre les deux, et la solution hybride peut s'avérer la plus pertinente. L'important est d'aligner votre site avec vos objectifs business, votre budget et votre capacité de gestion.
          </p>
          <p class="text-gray-300 leading-relaxed mb-4">
            Chez LUMEA, nous accompagnons les entrepreneurs de Poitiers dans ce choix depuis la création de l'agence. Nous analysons votre activité, vos objectifs et votre marché pour vous recommander la solution la plus adaptée. Pas de solution imposée, pas de fonctionnalité inutile. Juste un site qui répond à vos besoins réels.
          </p>
          <p class="text-gray-300 leading-relaxed">
            Découvrez nos offres de
            <NuxtLink to="/services/site-vitrine" class="text-sky-400 hover:text-sky-300 underline underline-offset-4">création de site vitrine</NuxtLink>
            et de
            <NuxtLink to="/services/site-ecommerce" class="text-sky-400 hover:text-sky-300 underline underline-offset-4">création de site e-commerce</NuxtLink>
            à Poitiers.
          </p>
        </section>

        <!-- CTA -->
        <section class="bg-gradient-to-br from-sky-500/10 to-blue-600/10 border border-sky-500/20 rounded-2xl p-8 md:p-12 text-center" data-reveal>
          <h2 class="text-2xl md:text-3xl font-bold mb-4">Besoin d'aide pour choisir ?</h2>
          <p class="text-gray-300 max-w-lg mx-auto mb-8 leading-relaxed">
            Échangeons sur votre projet. En 30 minutes, nous identifions la solution la plus adaptée à votre activité et à vos objectifs. Gratuit et sans engagement.
          </p>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-colors"
          >
            <UIcon name="i-lucide-send" class="w-5 h-5" />
            Prendre rendez-vous gratuitement
          </NuxtLink>
        </section>
      </article>
    </main>

    <AppFooter />
  </div>
</template>
