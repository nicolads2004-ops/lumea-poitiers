<script setup lang="ts">
const articleDate = '2026-04-08'
const readingTime = '7 min de lecture'
const author = "L'équipe LUMEA"

useHead({
  title: '5 erreurs SEO qui tuent la visibilité de votre site à Poitiers | LUMEA',
  meta: [
    { name: 'description', content: 'Les 5 erreurs les plus fréquentes qui empêchent les sites internet de Poitiers d\'apparaître sur Google. Solutions concrètes pour améliorer votre référencement.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: '5 erreurs SEO qui tuent la visibilité de votre site à Poitiers | LUMEA' },
    { property: 'og:description', content: '5 erreurs SEO courantes qui empêchent votre site d\'apparaître sur Google. Solutions concrètes pour chaque problème.' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://lumea.poitiers.digital/blog/erreurs-referencement-site-internet' },
    { property: 'og:locale', content: 'fr_FR' },
    { property: 'article:published_time', content: '2026-04-08' },
    { property: 'article:author', content: "L'équipe LUMEA" }
  ],
  link: [
    { rel: 'canonical', href: 'https://lumea.poitiers.digital/blog/erreurs-referencement-site-internet' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: '5 erreurs qui empêchent votre site d\'apparaître sur Google',
        description: 'Les 5 erreurs SEO les plus courantes et comment les corriger pour améliorer votre référencement naturel.',
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
          '@id': 'https://lumea.poitiers.digital/blog/erreurs-referencement-site-internet'
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
          5 erreurs qui empêchent votre site d'apparaître sur <span class="text-sky-400">Google</span>
        </h1>
        <p class="text-xl text-gray-300 leading-relaxed">
          Avoir un beau site ne sert à rien si personne ne le trouve. Voici les erreurs les plus fréquentes que nous constatons chez les entreprises de Poitiers, et comment les corriger.
        </p>
      </header>

      <!-- Contenu -->
      <article class="max-w-3xl mx-auto px-6">
        <!-- Introduction -->
        <section class="mb-12" data-reveal>
          <p class="text-gray-300 leading-relaxed mb-4">
            Chaque semaine, nous rencontrons des entrepreneurs de Poitiers qui ont investi dans un site internet mais ne reçoivent aucun visiteur. Le site est en ligne depuis des mois, parfois des années, et il ne génère ni contact, ni vente, ni appel. Le constat est toujours le même : le site est invisible sur Google.
          </p>
          <p class="text-gray-300 leading-relaxed mb-4">
            Pourtant, ces sites ne sont pas forcément moches ou mal conçus. Le problème se situe ailleurs : dans des erreurs de référencement naturel (SEO) qui sabotent silencieusement la visibilité du site. Des erreurs fréquentes, souvent faciles à corriger, mais que la plupart des prestataires web négligent parce que le SEO demande du temps et de l'expertise.
          </p>
          <p class="text-gray-300 leading-relaxed">
            Dans cet article, nous allons passer en revue les cinq erreurs les plus destructrices pour votre référencement et vous donner des solutions concrètes pour chacune. Si vous reconnaissez votre site dans l'une de ces situations, il est temps d'agir.
          </p>
        </section>

        <!-- Erreur 1 -->
        <section class="mb-12" data-reveal>
          <div class="flex items-center gap-4 mb-6">
            <span class="flex-shrink-0 w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-2xl font-bold text-red-400">1</span>
            <h2 class="text-2xl md:text-3xl font-bold">Pas de stratégie de mots-clés</h2>
          </div>

          <div class="bg-gray-900 border border-red-500/20 rounded-2xl p-6 mb-6">
            <h3 class="text-lg font-semibold mb-3 text-red-400">Le problème</h3>
            <p class="text-gray-300 leading-relaxed">
              Votre site existe, mais il ne cible aucun mot-clé précis. Les pages parlent de tout et de rien, sans structure claire. Google ne sait pas sur quelles recherches positionner votre site. Résultat : vous n'apparaissez nulle part, ou vous apparaissez sur des requêtes sans rapport avec votre activité.
            </p>
          </div>

          <p class="text-gray-300 leading-relaxed mb-4">
            Beaucoup d'entrepreneurs créent leur site en pensant au contenu qu'ils veulent diffuser, sans se demander ce que leurs clients potentiels recherchent sur Google. La démarche doit être inverse : identifier d'abord les requêtes que tapent vos prospects, puis structurer votre site pour y répondre.
          </p>
          <p class="text-gray-300 leading-relaxed mb-4">
            Par exemple, un plombier à Poitiers devrait cibler des mots-clés comme « plombier Poitiers », « dépannage plomberie Poitiers », « fuite d'eau Poitiers » plutôt que de simplement écrire « Bienvenue sur le site de Plomberie Martin ».
          </p>

          <div class="bg-gray-900 border border-emerald-500/20 rounded-2xl p-6">
            <h3 class="text-lg font-semibold mb-3 text-emerald-400">La solution</h3>
            <p class="text-gray-300 leading-relaxed">
              Réalisez une étude de mots-clés avant de créer ou refondre votre site. Identifiez 10 à 20 requêtes stratégiques liées à votre activité et à votre zone géographique. Créez une page dédiée pour chaque intention de recherche importante. Structurez votre contenu autour de ces mots-clés, sans les répéter de façon artificielle. Chez LUMEA, cette étude est incluse dans chaque projet.
            </p>
          </div>
        </section>

        <!-- Erreur 2 -->
        <section class="mb-12" data-reveal>
          <div class="flex items-center gap-4 mb-6">
            <span class="flex-shrink-0 w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-2xl font-bold text-red-400">2</span>
            <h2 class="text-2xl md:text-3xl font-bold">Un site trop lent</h2>
          </div>

          <div class="bg-gray-900 border border-red-500/20 rounded-2xl p-6 mb-6">
            <h3 class="text-lg font-semibold mb-3 text-red-400">Le problème</h3>
            <p class="text-gray-300 leading-relaxed">
              Votre site met plus de 3 secondes à charger. Les images ne sont pas compressées, le code est lourd, l'hébergement est bas de gamme. Google pénalise les sites lents dans ses classements. Pire, 53 % des visiteurs quittent un site qui met plus de 3 secondes à s'afficher.
            </p>
          </div>

          <p class="text-gray-300 leading-relaxed mb-4">
            La vitesse de chargement est un facteur de classement officiel de Google depuis 2018, et son importance n'a fait que croître avec les Core Web Vitals. Un site lent est doublement pénalisé : par Google qui le relègue dans les profondeurs des résultats, et par les internautes qui partent avant même d'avoir vu votre contenu.
          </p>
          <p class="text-gray-300 leading-relaxed mb-4">
            Les causes les plus fréquentes de lenteur sont les images non optimisées (photos de 5 Mo uploadées telles quelles), les scripts JavaScript inutiles (compteurs de visites, widgets sociaux, pop-ups en cascade), un hébergement mutualisé bas de gamme et l'absence de mise en cache.
          </p>

          <div class="bg-gray-900 border border-emerald-500/20 rounded-2xl p-6">
            <h3 class="text-lg font-semibold mb-3 text-emerald-400">La solution</h3>
            <p class="text-gray-300 leading-relaxed">
              Compressez toutes vos images au format WebP ou AVIF avant de les mettre en ligne. Supprimez les scripts et plugins inutiles. Choisissez un hébergement performant avec serveur en France. Activez la mise en cache et la compression GZIP. Testez votre site sur Google PageSpeed Insights et corrigez les alertes. Nos sites LUMEA obtiennent systématiquement un score supérieur à 90/100.
            </p>
          </div>
        </section>

        <!-- Erreur 3 -->
        <section class="mb-12" data-reveal>
          <div class="flex items-center gap-4 mb-6">
            <span class="flex-shrink-0 w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-2xl font-bold text-red-400">3</span>
            <h2 class="text-2xl md:text-3xl font-bold">Pas de contenu régulier</h2>
          </div>

          <div class="bg-gray-900 border border-red-500/20 rounded-2xl p-6 mb-6">
            <h3 class="text-lg font-semibold mb-3 text-red-400">Le problème</h3>
            <p class="text-gray-300 leading-relaxed">
              Votre site n'a pas été mis à jour depuis sa création. Les mêmes 5 pages stagnent depuis 2 ou 3 ans. Google considère que votre site est abandonné et réduit progressivement sa visibilité au profit de concurrents qui publient du contenu frais.
            </p>
          </div>

          <p class="text-gray-300 leading-relaxed mb-4">
            Google favorise les sites actifs. Un site qui publie régulièrement du contenu de qualité envoie un signal fort au moteur de recherche : cette entreprise est vivante, son site est pertinent, il mérite d'être montré aux internautes. À l'inverse, un site figé depuis des années est perçu comme un site mort.
          </p>
          <p class="text-gray-300 leading-relaxed mb-4">
            Publier du contenu ne signifie pas écrire un article par jour. Un article de blog par mois, bien rédigé et ciblant un mot-clé stratégique, suffit à maintenir votre site dans les radars de Google. C'est exactement ce que vous lisez en ce moment : un article qui renforce le positionnement de LUMEA sur ses mots-clés stratégiques.
          </p>

          <div class="bg-gray-900 border border-emerald-500/20 rounded-2xl p-6">
            <h3 class="text-lg font-semibold mb-3 text-emerald-400">La solution</h3>
            <p class="text-gray-300 leading-relaxed">
              Créez un blog sur votre site et publiez au moins un article par mois. Chaque article doit cibler un mot-clé spécifique et apporter une vraie valeur à vos lecteurs. Répondez aux questions que se posent vos clients. Partagez votre expertise. Si vous manquez de temps pour rédiger, confiez la rédaction à votre agence web. L'investissement est minimal au regard des bénéfices SEO.
            </p>
          </div>
        </section>

        <!-- Erreur 4 -->
        <section class="mb-12" data-reveal>
          <div class="flex items-center gap-4 mb-6">
            <span class="flex-shrink-0 w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-2xl font-bold text-red-400">4</span>
            <h2 class="text-2xl md:text-3xl font-bold">Pas de version mobile</h2>
          </div>

          <div class="bg-gray-900 border border-red-500/20 rounded-2xl p-6 mb-6">
            <h3 class="text-lg font-semibold mb-3 text-red-400">Le problème</h3>
            <p class="text-gray-300 leading-relaxed">
              Votre site n'est pas adapté aux smartphones et tablettes. Le texte est trop petit, les boutons sont impossibles à cliquer, il faut zoomer pour lire le contenu. Or depuis 2019, Google utilise la version mobile de votre site comme référence pour le classement (indexation mobile-first).
            </p>
          </div>

          <p class="text-gray-300 leading-relaxed mb-4">
            En 2026, plus de 65 % du trafic web provient des appareils mobiles. Si votre site n'est pas responsive (adapté à toutes les tailles d'écran), vous perdez les deux tiers de vos visiteurs potentiels et Google vous relègue derrière vos concurrents dont le site est mobile-friendly.
          </p>
          <p class="text-gray-300 leading-relaxed mb-4">
            Le problème ne se limite pas à l'affichage. Un site non responsive offre une expérience utilisateur dégradée : les formulaires sont difficiles à remplir, les menus ne fonctionnent pas correctement, les images débordent de l'écran. L'internaute quitte votre site en quelques secondes et va chez votre concurrent.
          </p>

          <div class="bg-gray-900 border border-emerald-500/20 rounded-2xl p-6">
            <h3 class="text-lg font-semibold mb-3 text-emerald-400">La solution</h3>
            <p class="text-gray-300 leading-relaxed">
              Adoptez un design responsive dès la conception de votre site. Mieux encore, concevez en « mobile-first » : dessinez d'abord la version mobile, puis adaptez pour les grands écrans. Testez votre site sur Google Mobile-Friendly Test. Vérifiez la navigation, la taille des boutons et la lisibilité du texte sur smartphone. Tous nos sites LUMEA sont conçus en mobile-first et testés sur une dizaine d'appareils différents.
            </p>
          </div>
        </section>

        <!-- Erreur 5 -->
        <section class="mb-12" data-reveal>
          <div class="flex items-center gap-4 mb-6">
            <span class="flex-shrink-0 w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-2xl font-bold text-red-400">5</span>
            <h2 class="text-2xl md:text-3xl font-bold">Ignorer le SEO technique</h2>
          </div>

          <div class="bg-gray-900 border border-red-500/20 rounded-2xl p-6 mb-6">
            <h3 class="text-lg font-semibold mb-3 text-red-400">Le problème</h3>
            <p class="text-gray-300 leading-relaxed">
              Votre site n'a pas de balises title optimisées, pas de meta descriptions, pas de sitemap XML, pas de fichier robots.txt correctement configuré, et il n'est peut-être même pas en HTTPS. Ces éléments techniques sont les fondations du SEO. Sans eux, Google a du mal à explorer, comprendre et indexer votre site.
            </p>
          </div>

          <p class="text-gray-300 leading-relaxed mb-4">
            Le SEO technique est la partie invisible du référencement, celle que les internautes ne voient pas mais que Google analyse en permanence. Une balise title manquante, c'est un résultat Google sans titre accrocheur. Une meta description absente, c'est Google qui choisit un extrait aléatoire de votre page. Un sitemap manquant, c'est des pages que Google met des semaines à découvrir au lieu de quelques heures.
          </p>
          <p class="text-gray-300 leading-relaxed mb-4">
            Le HTTPS est particulièrement critique. Depuis 2018, Google Chrome affiche un avertissement « Non sécurisé » sur les sites en HTTP. Les internautes fuient ces sites, et Google les pénalise dans ses classements. Si votre site est encore en HTTP, c'est une urgence absolue.
          </p>

          <div class="bg-gray-900 border border-emerald-500/20 rounded-2xl p-6">
            <h3 class="text-lg font-semibold mb-3 text-emerald-400">La solution</h3>
            <p class="text-gray-300 leading-relaxed">
              Vérifiez et optimisez chaque balise title (unique, moins de 60 caractères, incluant le mot-clé cible). Rédigez une meta description engageante pour chaque page (moins de 155 caractères). Créez un sitemap XML et soumettez-le à Google Search Console. Configurez votre robots.txt pour guider les robots d'exploration. Passez en HTTPS si ce n'est pas encore fait. Implémentez les données structurées (schema.org) pour enrichir vos résultats Google. Chez LUMEA, chaque site est livré avec l'intégralité de ces optimisations techniques en place.
            </p>
          </div>
        </section>

        <!-- Conclusion -->
        <section class="mb-12" data-reveal>
          <h2 class="text-2xl md:text-3xl font-bold mb-6">Un bon site web = design + performance + SEO</h2>
          <p class="text-gray-300 leading-relaxed mb-4">
            Ces cinq erreurs sont les plus fréquentes, mais elles ne sont pas les seules. Le référencement naturel est un travail continu qui demande de l'expertise, de la rigueur et de la patience. Un beau site sans SEO est comme une boutique magnifique cachée au fond d'une impasse : personne ne la trouvera.
          </p>
          <p class="text-gray-300 leading-relaxed mb-4">
            Chez LUMEA, nous ne dissocions jamais le design de la performance et du référencement. Chaque site que nous créons à Poitiers est pensé pour être à la fois esthétique, rapide et visible sur Google. C'est cette approche globale qui fait la différence entre un site qui coûte de l'argent et un site qui en rapporte.
          </p>
          <p class="text-gray-300 leading-relaxed">
            Si votre site actuel souffre de l'une de ces erreurs, il n'est pas trop tard pour corriger le tir. Une
            <NuxtLink to="/refonte-site-internet-poitiers" class="text-sky-400 hover:text-sky-300 underline underline-offset-4">refonte de site internet à Poitiers</NuxtLink>
            bien menée peut transformer un site invisible en une machine à générer des clients.
          </p>
        </section>

        <!-- CTA -->
        <section class="bg-gradient-to-br from-sky-500/10 to-blue-600/10 border border-sky-500/20 rounded-2xl p-8 md:p-12 text-center" data-reveal>
          <h2 class="text-2xl md:text-3xl font-bold mb-4">Votre site est-il visible sur Google ?</h2>
          <p class="text-gray-300 max-w-lg mx-auto mb-8 leading-relaxed">
            Demandez un audit gratuit de votre site internet. Nous analysons votre référencement et vous proposons un plan d'action concret pour améliorer votre visibilité.
          </p>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-colors"
          >
            <UIcon name="i-lucide-send" class="w-5 h-5" />
            Demander un audit gratuit
          </NuxtLink>
        </section>
      </article>
    </main>

    <AppFooter />
  </div>
</template>
