<script setup lang="ts">
function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

const typingTexts = [
  'on conçoit des sites qui convertissent.',
  'on génère des demandes de devis.',
  'on met votre business en ligne.'
]
const currentTextIndex = ref(0)
const displayedText = ref('')
const isDeleting = ref(false)
const typingSpeed = ref(80)

const typeEffect = () => {
  const fullText = typingTexts[currentTextIndex.value]
  if (!isDeleting.value) {
    displayedText.value = fullText.substring(0, displayedText.value.length + 1)
    typingSpeed.value = 80
    if (displayedText.value === fullText) { typingSpeed.value = 2500; isDeleting.value = true }
  } else {
    displayedText.value = fullText.substring(0, displayedText.value.length - 1)
    typingSpeed.value = 40
    if (displayedText.value === '') { isDeleting.value = false; currentTextIndex.value = (currentTextIndex.value + 1) % typingTexts.length; typingSpeed.value = 300 }
  }
  setTimeout(typeEffect, typingSpeed.value)
}

const counterSites = useCountUp(120, 2500)
const counterSatisfaction = useCountUp(98, 2000)
const counterNote = useCountUp(4.9, 2000, 1)
const statsVisible = ref(false)

const particles = ref<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([])

const lostProspects = ref(0)
onMounted(() => {
  lostProspects.value = Math.floor(Math.random() * 10) + 3
  typeEffect()

  particles.value = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 4
  }))

  const statsEl = document.querySelector('#hero-stats')
  if (statsEl) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsVisible.value) {
          statsVisible.value = true
          counterSites.animate()
          counterSatisfaction.animate()
          counterNote.animate()
        }
      })
    }, { threshold: 0.3 })
    observer.observe(statsEl)
  }

  setInterval(() => { lostProspects.value++ }, 4000)
})
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <div class="absolute inset-0 hero-gradient" />
    <div class="absolute inset-0 bg-dots opacity-30" />

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        v-for="p in particles" :key="p.id"
        class="absolute rounded-full bg-sky-400/20 animate-particle"
        :style="{ left: p.x + '%', top: p.y + '%', width: p.size + 'px', height: p.size + 'px', animationDelay: p.delay + 's', animationDuration: p.duration + 's' }"
      />
    </div>

    <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[150px] animate-float" />
    <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] animate-float" style="animation-delay: -3s;" />
    <div class="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-violet-500/5 rounded-full blur-[100px]" />

    <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-6 animate-pulse-subtle">
        <span class="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
        {{ lostProspects }} prospects ont trouvé vos concurrents depuis votre arrivée
      </div>

      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-white mb-6">
        Création de site internet<br>à Poitiers :
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 inline-block min-h-[1.1em]">
          {{ displayedText }}<span class="animate-blink text-sky-400">|</span>
        </span>
      </h1>

      <p class="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">
        Vos concurrents ont un site professionnel. Pas vous. On conçoit votre site internet,
        on l'optimise pour Google, et on le transforme en <span class="text-white font-semibold">machine à générer des clients</span>
        — design premium, <span class="text-sky-400 font-semibold">SEO intégré</span>.
      </p>

      <p class="text-sm text-sky-400 font-medium mb-8">
        Site livré en 3 semaines. Devis gratuit. Zéro risque.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <button class="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-sky-500 hover:bg-sky-400 text-white rounded-xl font-semibold text-base sm:text-lg shadow-lg shadow-sky-500/25 cursor-pointer animate-pulse-glow" @click="scrollTo('#contact')">
          <span class="relative z-10">Devis gratuit →</span>
        </button>
        <button class="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium text-base sm:text-lg transition-all border border-white/10 hover:border-white/20 text-center" @click="scrollTo('#services')">
          Nos services
        </button>
      </div>

      <!-- SERP Mockup -->
      <div class="max-w-md mx-auto mb-10 relative">
        <div class="absolute -inset-3 bg-sky-500/10 rounded-3xl blur-xl" />
        <div class="relative glass-card rounded-xl p-4 space-y-2.5 border-sky-500/10 text-left">
          <div class="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
            <UIcon name="i-lucide-search" class="w-4 h-4 text-slate-500" />
            <span class="text-slate-300 text-xs">creation site internet poitiers</span>
          </div>
          <div class="rounded-lg p-3 border border-sky-500/30 bg-sky-500/5">
            <div class="flex items-center gap-2 mb-0.5">
              <div class="w-4 h-4 rounded bg-sky-500 flex items-center justify-center"><span class="text-white text-[8px] font-bold">L</span></div>
              <span class="text-sky-400 text-[10px]">lumea.poitiers.digital</span>
              <span class="ml-auto text-[9px] text-sky-400 font-semibold px-1.5 py-0.5 rounded-full border border-sky-500/20 bg-sky-500/10">#1</span>
            </div>
            <p class="text-white font-semibold text-xs">LUMEA — Création de site internet Poitiers | Sites sur-mesure</p>
            <p class="text-slate-400 text-[10px]">Agence web locale à Poitiers. Sites vitrine, e-commerce, refonte. Devis gratuit, SEO intégré.</p>
          </div>
          <div class="rounded-lg p-3 opacity-30">
            <div class="flex items-center gap-2 mb-0.5"><div class="w-4 h-4 rounded bg-slate-700" /><span class="text-slate-500 text-[10px]">concurrent-1.fr</span></div>
            <p class="text-slate-500 text-xs">Agence web Poitiers — Sites internet</p>
          </div>
          <div class="absolute -bottom-3 -right-3 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-1.5 backdrop-blur-sm">
            <div class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span class="text-green-400 text-[10px] font-medium">Difficulté : faible</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Social proof -->
      <div id="hero-stats" class="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-white/50">
        <div class="flex -space-x-3">
          <div v-for="i in 5" :key="i" class="w-9 h-9 rounded-full border-2 border-[#030712] bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white text-[10px] font-bold">
            {{ ['JD', 'ML', 'SC', 'PB', 'AF'][i-1] }}
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <div class="text-center">
            <span class="text-xl sm:text-2xl font-bold text-white tabular-nums">{{ counterSites.displayValue.value }}+</span>
            <span class="block text-[10px] sm:text-xs text-white/50">sites créés</span>
          </div>
          <span class="hidden sm:inline text-white/10">|</span>
          <div class="text-center">
            <span class="text-xl sm:text-2xl font-bold text-white tabular-nums">{{ counterSatisfaction.displayValue.value }}%</span>
            <span class="block text-[10px] sm:text-xs text-white/50">clients satisfaits</span>
          </div>
          <span class="hidden sm:inline text-white/10">|</span>
          <div class="flex items-center gap-1">
            <span class="text-sky-400 text-xs">★★★★★</span>
            <span class="text-xl sm:text-2xl font-bold text-white tabular-nums">{{ counterNote.displayValue.value }}</span>
            <span class="text-white/50">/5</span>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
      <span class="text-[10px] uppercase tracking-widest">Scroll</span>
      <div class="w-px h-6 bg-gradient-to-b from-white/20 to-transparent animate-scroll-hint" />
    </div>
  </section>
</template>

<style scoped>
@keyframes particle-float {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
  50% { transform: translateY(-30px) scale(1.5); opacity: 0.8; }
}
.animate-particle { animation: particle-float ease-in-out infinite; }
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
.animate-blink { animation: blink 0.8s step-end infinite; }
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 30px -5px rgba(14, 165, 233, 0.4); }
  50% { box-shadow: 0 0 60px -5px rgba(14, 165, 233, 0.7); }
}
.animate-pulse-glow { animation: pulse-glow 2.5s ease-in-out infinite; }
@keyframes pulse-subtle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
.animate-pulse-subtle { animation: pulse-subtle 3s ease-in-out infinite; }
@keyframes scroll-hint {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}
.animate-scroll-hint { animation: scroll-hint 2s ease-in-out infinite; }
</style>
