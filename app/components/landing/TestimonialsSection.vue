<template>
  <section data-reveal="testimonials" class="relative py-24 bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-sky-400 uppercase bg-sky-500/10 rounded-full">
          Témoignages
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ce que disent nos clients à Poitiers
        </h2>
        <p class="text-gray-400 text-lg">
          Des résultats concrets pour des entreprises locales.
        </p>
      </div>

      <!-- Testimonials grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="relative p-8 bg-gray-900/60 border border-gray-800 rounded-2xl hover:border-sky-500/20 transition-colors"
        >
          <!-- Quote icon -->
          <UIcon name="i-lucide-quote" class="w-8 h-8 text-sky-500/20 mb-4" />

          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <UIcon
              v-for="star in 5"
              :key="star"
              name="i-lucide-star"
              class="w-4 h-4 text-yellow-400 fill-yellow-400"
            />
          </div>

          <!-- Text -->
          <p class="text-gray-300 text-sm leading-relaxed mb-6">
            {{ testimonial.text }}
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3 pt-4 border-t border-gray-800">
            <!-- Avatar with initials -->
            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500/10 text-sky-400 font-semibold text-sm">
              {{ testimonial.initials }}
            </div>
            <div>
              <div class="text-sm font-semibold text-white">{{ testimonial.name }}</div>
              <div class="text-xs text-gray-500">{{ testimonial.company }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: 'Laurent Mercier',
    initials: 'LM',
    company: 'Mercier Plomberie — Poitiers',
    text: 'Avant LUMEA, mon ancien site ne générait aucun appel. Depuis la refonte, je reçois en moyenne 3 demandes de devis par semaine via le formulaire. Le retour sur investissement a été immédiat. Je recommande les yeux fermés.'
  },
  {
    name: 'Sophie Dautry',
    initials: 'SD',
    company: 'Maison Dautry — Boutique mode, Poitiers',
    text: 'Ils ont créé ma boutique en ligne en un mois. Le site est superbe, mes clientes adorent. J\'ai fait mes premières ventes en ligne dès la première semaine. L\'équipe a été à l\'écoute du début à la fin.'
  },
  {
    name: 'Philippe Renaud',
    initials: 'PR',
    company: 'Cabinet Renaud & Associés — Expertise comptable',
    text: 'Notre ancien site datait de 2016 et ne reflétait plus notre image. LUMEA a modernisé notre présence en ligne tout en gardant notre sérieux. Nos prospects nous disent que le site leur a donné confiance.'
  }
]
</script>
