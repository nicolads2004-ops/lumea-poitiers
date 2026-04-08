<template>
  <section data-reveal="why-us" class="relative py-24 bg-gray-950">
    <div class="absolute inset-0">
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/5 blur-[120px] rounded-full" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-sky-400 uppercase bg-sky-500/10 rounded-full">
          Comparatif
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
          Pourquoi choisir LUMEA plutôt qu'une autre agence ?
        </h2>
        <p class="text-gray-400 text-lg">
          On ne vous demande pas de nous croire sur parole. Comparez objectivement.
        </p>
      </div>

      <!-- Comparison table -->
      <div class="overflow-x-auto">
        <table class="w-full min-w-[640px]">
          <thead>
            <tr class="border-b border-gray-800">
              <th class="py-4 px-4 text-left text-sm font-medium text-gray-500">Critère</th>
              <th class="py-4 px-4 text-center text-sm font-bold text-sky-400 bg-sky-500/5 rounded-t-xl">
                LUMEA
              </th>
              <th class="py-4 px-4 text-center text-sm font-medium text-gray-500">Freelance</th>
              <th class="py-4 px-4 text-center text-sm font-medium text-gray-500">Wix / Squarespace</th>
              <th class="py-4 px-4 text-center text-sm font-medium text-gray-500">Agence nationale</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in comparison"
              :key="row.criteria"
              class="border-b border-gray-800/50 hover:bg-gray-900/30 transition-colors"
            >
              <td class="py-4 px-4 text-sm font-medium text-gray-300">{{ row.criteria }}</td>
              <td class="py-4 px-4 text-center bg-sky-500/5">
                <span class="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400">
                  <UIcon :name="row.lumea.icon" class="w-4 h-4" />
                  {{ row.lumea.text }}
                </span>
              </td>
              <td class="py-4 px-4 text-center">
                <span class="inline-flex items-center gap-1.5 text-sm text-gray-400">
                  <UIcon :name="row.freelance.icon" class="w-4 h-4" :class="row.freelance.color" />
                  {{ row.freelance.text }}
                </span>
              </td>
              <td class="py-4 px-4 text-center">
                <span class="inline-flex items-center gap-1.5 text-sm text-gray-400">
                  <UIcon :name="row.diy.icon" class="w-4 h-4" :class="row.diy.color" />
                  {{ row.diy.text }}
                </span>
              </td>
              <td class="py-4 px-4 text-center">
                <span class="inline-flex items-center gap-1.5 text-sm text-gray-400">
                  <UIcon :name="row.national.icon" class="w-4 h-4" :class="row.national.color" />
                  {{ row.national.text }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-12 text-center">
        <a
          href="#contact"
          class="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-xl transition-colors shadow-lg shadow-sky-500/25"
        >
          Choisir LUMEA
          <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const comparison = [
  {
    criteria: 'Prix',
    lumea: { icon: 'i-lucide-check-circle', text: 'Juste et transparent' },
    freelance: { icon: 'i-lucide-check-circle', text: 'Variable', color: 'text-yellow-400' },
    diy: { icon: 'i-lucide-check-circle', text: 'Très bas', color: 'text-green-400' },
    national: { icon: 'i-lucide-x-circle', text: 'Élevé', color: 'text-red-400' }
  },
  {
    criteria: 'Délai de livraison',
    lumea: { icon: 'i-lucide-check-circle', text: '2 à 4 semaines' },
    freelance: { icon: 'i-lucide-alert-circle', text: 'Imprévisible', color: 'text-yellow-400' },
    diy: { icon: 'i-lucide-check-circle', text: 'Rapide', color: 'text-green-400' },
    national: { icon: 'i-lucide-x-circle', text: '2 à 3 mois', color: 'text-red-400' }
  },
  {
    criteria: 'SEO inclus',
    lumea: { icon: 'i-lucide-check-circle', text: 'Complet' },
    freelance: { icon: 'i-lucide-alert-circle', text: 'Basique', color: 'text-yellow-400' },
    diy: { icon: 'i-lucide-x-circle', text: 'Minimal', color: 'text-red-400' },
    national: { icon: 'i-lucide-check-circle', text: 'En option', color: 'text-yellow-400' }
  },
  {
    criteria: 'Support local',
    lumea: { icon: 'i-lucide-check-circle', text: 'Poitiers (86)' },
    freelance: { icon: 'i-lucide-alert-circle', text: 'Selon dispo', color: 'text-yellow-400' },
    diy: { icon: 'i-lucide-x-circle', text: 'Aucun', color: 'text-red-400' },
    national: { icon: 'i-lucide-x-circle', text: 'Paris / distant', color: 'text-red-400' }
  },
  {
    criteria: 'Performance',
    lumea: { icon: 'i-lucide-check-circle', text: '95+ PageSpeed' },
    freelance: { icon: 'i-lucide-alert-circle', text: 'Variable', color: 'text-yellow-400' },
    diy: { icon: 'i-lucide-x-circle', text: 'Lent', color: 'text-red-400' },
    national: { icon: 'i-lucide-check-circle', text: 'Correct', color: 'text-yellow-400' }
  },
  {
    criteria: 'Sur-mesure',
    lumea: { icon: 'i-lucide-check-circle', text: '100 % unique' },
    freelance: { icon: 'i-lucide-check-circle', text: 'Oui', color: 'text-green-400' },
    diy: { icon: 'i-lucide-x-circle', text: 'Templates', color: 'text-red-400' },
    national: { icon: 'i-lucide-check-circle', text: 'Oui', color: 'text-green-400' }
  }
]
</script>
