<template>
  <section data-reveal="pain" class="relative py-24 bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-red-400 uppercase bg-red-500/10 rounded-full">
          Le constat
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
          Votre site vous coûte de l'argent au lieu d'en rapporter ?
        </h2>
        <p class="text-gray-400 text-lg">
          La plupart des sites de PME et d'artisans à Poitiers partagent les mêmes problèmes.
          Si vous vous reconnaissez, il est temps d'agir.
        </p>
      </div>

      <!-- Pain points grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="pain in pains"
          :key="pain.title"
          class="group relative p-6 bg-gray-900/60 border border-gray-800 rounded-2xl hover:border-red-500/30 transition-all duration-300"
        >
          <div class="w-12 h-12 flex items-center justify-center mb-4 rounded-xl bg-red-500/10 text-red-400 group-hover:bg-red-500/20 transition-colors">
            <UIcon :name="pain.icon" class="w-6 h-6" />
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">{{ pain.title }}</h3>
          <p class="text-sm text-gray-400 leading-relaxed">{{ pain.description }}</p>
        </div>
      </div>

      <!-- Transition -->
      <div class="mt-16 text-center">
        <div class="inline-flex items-center gap-3 px-6 py-3 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-300">
          <UIcon name="i-lucide-arrow-down" class="w-5 h-5 animate-bounce" />
          <span class="text-sm font-medium">La bonne nouvelle : tout ça se corrige</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const pains = [
  {
    icon: 'i-lucide-search-x',
    title: 'Invisible sur Google',
    description: 'Votre site n\'apparaît nulle part dans les résultats de recherche. Vos concurrents captent les clients à votre place, chaque jour.'
  },
  {
    icon: 'i-lucide-paint-bucket',
    title: 'Un design qui date',
    description: 'Un look amateur ou vieillissant fait fuir les visiteurs en moins de 3 secondes. Première impression ratée, client perdu.'
  },
  {
    icon: 'i-lucide-smartphone',
    title: 'Pas adapté au mobile',
    description: 'Plus de 60 % du trafic vient du mobile. Un site non responsive, c\'est plus de la moitié de vos visiteurs qui partent.'
  },
  {
    icon: 'i-lucide-inbox',
    title: 'Zéro demande de devis',
    description: 'Votre site existe mais ne génère aucun contact. Pas de formulaire visible, pas d\'appel à l\'action clair, pas de conversion.'
  }
]
</script>
