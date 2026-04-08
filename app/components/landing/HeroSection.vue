<script setup lang="ts">
import { ref, onMounted } from 'vue'

const counters = ref([
  { value: 0, target: 120, suffix: '+', label: 'sites créés' },
  { value: 0, target: 98, suffix: '%', label: 'clients satisfaits' },
  { value: 0, target: 2024, suffix: '', label: 'Depuis' }
])

function animateCounters() {
  counters.value.forEach((counter, index) => {
    const duration = 2000
    const steps = 60
    const increment = counter.target / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= counter.target) {
        counters.value[index].value = counter.target
        clearInterval(interval)
      } else {
        counters.value[index].value = Math.floor(current)
      }
    }, duration / steps)
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      })
    },
    { threshold: 0.3 }
  )

  const el = document.querySelector('[data-reveal="hero-counters"]')
  if (el) observer.observe(el)
})
</script>

<template>
  <section
    data-reveal="hero"
    class="relative min-h-[90vh] flex items-center overflow-hidden"
  >
    <!-- Mesh gradient background -->
    <div class="absolute inset-0 bg-gray-950">
      <div class="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-sky-500/20 blur-[120px]" />
      <div class="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-sky-400/10 blur-[100px]" />
      <div class="absolute top-0 right-1/3 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[80px]" />
    </div>

    <!-- Grid pattern overlay -->
    <div
      class="absolute inset-0 opacity-[0.03]"
      style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cpath d=&quot;M60 0H0v60&quot; fill=&quot;none&quot; stroke=&quot;%23fff&quot; stroke-width=&quot;0.5&quot;/%3E%3C/svg%3E')"
    />

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="max-w-4xl">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded-full">
          <span class="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          Agence web — Poitiers, Vienne (86)
        </div>

        <!-- H1 -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          Votre site internet à Poitiers
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
            — conçu pour convertir,
          </span>
          pas juste pour exister
        </h1>

        <!-- Subtitle -->
        <p class="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl">
          On crée des sites qui génèrent des clients, pas des vitrines oubliées
          dans un coin d'internet. Design premium, SEO intégré, résultats mesurables.
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#contact"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/30"
          >
            <UIcon name="i-lucide-send" class="w-5 h-5" />
            Devis gratuit
          </a>
          <a
            href="#realisations"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-gray-300 bg-transparent border border-gray-700 hover:border-gray-500 hover:text-white rounded-xl transition-all duration-200"
          >
            <UIcon name="i-lucide-eye" class="w-5 h-5" />
            Voir nos réalisations
          </a>
        </div>

        <!-- Counters -->
        <div data-reveal="hero-counters" class="grid grid-cols-3 gap-8 max-w-lg">
          <div v-for="counter in counters" :key="counter.label" class="text-center sm:text-left">
            <div class="text-3xl sm:text-4xl font-bold text-white">
              <template v-if="counter.label === 'Depuis'">{{ counter.value }}</template>
              <template v-else>{{ counter.suffix === '+' ? '' : '' }}{{ counter.value }}{{ counter.suffix }}</template>
            </div>
            <div class="text-sm text-gray-500 mt-1">{{ counter.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
