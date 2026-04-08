<template>
  <section data-reveal="process" class="relative py-24 bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <span class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-sky-400 uppercase bg-sky-500/10 rounded-full">
          Notre méthode
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
          Comment on crée votre site en 4 étapes
        </h2>
        <p class="text-gray-400 text-lg">
          Un processus clair et transparent. Vous savez exactement où en est votre projet à chaque instant.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative max-w-3xl mx-auto">
        <!-- Vertical line -->
        <div class="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-sky-500/20 to-transparent" />

        <div class="space-y-12">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            class="relative flex gap-6 sm:gap-8"
          >
            <!-- Number dot -->
            <div class="relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-gray-900 border-2 border-sky-500/30 text-sky-400 font-bold text-lg sm:text-xl">
              {{ index + 1 }}
            </div>

            <!-- Content -->
            <div class="flex-1 pb-2">
              <div class="p-6 bg-gray-900/60 border border-gray-800 rounded-2xl hover:border-sky-500/20 transition-colors">
                <div class="flex items-center gap-3 mb-3">
                  <UIcon :name="step.icon" class="w-5 h-5 text-sky-400" />
                  <h3 class="text-lg font-bold text-white">{{ step.title }}</h3>
                </div>
                <p class="text-sm text-gray-400 leading-relaxed mb-4">{{ step.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in step.tags"
                    :key="tag"
                    class="px-2.5 py-1 text-xs font-medium text-sky-300 bg-sky-500/10 rounded-lg"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    icon: 'i-lucide-target',
    title: 'Briefing & stratégie',
    description: 'On échange sur votre activité, vos cibles et vos objectifs. On analyse vos concurrents et on définit la stratégie de votre site : structure, contenu, mots-clés à viser.',
    tags: ['Rendez-vous gratuit', 'Analyse concurrentielle', 'Cahier des charges']
  },
  {
    icon: 'i-lucide-palette',
    title: 'Design & maquettes',
    description: 'On crée les maquettes visuelles de votre site. Vous validez le design avant qu\'une seule ligne de code ne soit écrite. Zéro surprise.',
    tags: ['Maquettes Figma', 'Responsive mobile', 'Validation client']
  },
  {
    icon: 'i-lucide-code-2',
    title: 'Développement & contenu',
    description: 'On développe votre site avec un code propre, rapide et optimisé pour le référencement. On intègre vos textes, images et fonctionnalités.',
    tags: ['Code performant', 'SEO technique', 'Contenu optimisé']
  },
  {
    icon: 'i-lucide-rocket',
    title: 'Mise en ligne & suivi',
    description: 'On met votre site en ligne, on vous forme à l\'administration et on assure le suivi technique. Vous n\'êtes jamais seul après la livraison.',
    tags: ['Formation incluse', 'Maintenance', 'Support réactif']
  }
]
</script>
