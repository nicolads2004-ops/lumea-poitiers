<script setup lang="ts">
const step = ref(0)
const totalSteps = 5
const submitting = ref(false)
const submitted = ref(false)

const form = reactive({
  hasWebsite: '',
  websiteUrl: '',
  problems: [] as string[],
  projectType: '',
  timing: '',
  companyName: '',
  name: '',
  email: '',
  phone: ''
})

const timings = [
  { value: 'immediat', label: 'Immédiat', desc: "J'en ai besoin maintenant", icon: 'i-lucide-zap', color: '#EF4444' },
  { value: '3-6mois', label: 'Dans 3 à 6 mois', desc: 'Je prépare mon projet', icon: 'i-lucide-calendar', color: '#F59E0B' },
  { value: '+1an', label: 'Dans plus d\'un an', desc: 'Je me renseigne', icon: 'i-lucide-hourglass', color: '#9CA3AF' }
]

const errors = ref('')

function startForm() { step.value = 1 }

function toggleProblem(value: string) {
  const idx = form.problems.indexOf(value)
  if (idx >= 0) form.problems.splice(idx, 1)
  else form.problems.push(value)
}

function nextStep() {
  errors.value = ''
  if (step.value === 1 && !form.hasWebsite) { errors.value = 'Sélectionnez une option'; return }
  if (step.value === 2 && form.problems.length === 0) { errors.value = 'Sélectionnez au moins un problème'; return }
  if (step.value === 3 && !form.projectType) { errors.value = 'Sélectionnez une option'; return }
  if (step.value === 4 && !form.timing) { errors.value = 'Sélectionnez une option'; return }
  step.value++
}

function prevStep() { if (step.value > 1) step.value-- }

async function handleSubmit() {
  errors.value = ''
  if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) { errors.value = 'Nom, email et téléphone requis'; return }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.value = 'Email invalide'; return }
  submitting.value = true
  try {
    await $fetch('/api/lead', { method: 'POST', body: { ...form } })
  } catch (e) { /* send anyway */ }
  submitting.value = false
  submitted.value = true
}

const lostProspects = ref(0)
const lostRevenue = ref(0)
const secondsOnPage = ref(0)

onMounted(() => {
  setInterval(() => {
    secondsOnPage.value++
    if (secondsOnPage.value % 4 === 0) {
      lostProspects.value++
      lostRevenue.value += 250
    }
  }, 1000)
})

const daysThisYear = computed(() => {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 1)
  return Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
})
</script>

<template>
  <section id="contact" class="relative py-10 md:py-20 overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-500/10 rounded-full blur-[200px]" />
    </div>

    <div class="relative max-w-xl mx-auto px-4 sm:px-6">

      <div v-if="submitted" class="text-center py-6">
        <div class="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
          <UIcon name="i-lucide-check-circle" class="w-8 h-8 text-green-400" />
        </div>
        <h2 class="text-2xl font-bold text-white mb-2">Demande envoyée</h2>
        <p class="text-white/70 text-sm">On revient vers vous sous 24h avec une proposition personnalisée.</p>
      </div>

      <div v-else-if="step === 0" class="text-center">
        <div class="glass-card rounded-2xl p-5 mb-6 border-red-500/20">
          <div class="flex items-center justify-center gap-2 mb-3">
            <span class="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span class="text-red-400 text-xs font-semibold uppercase tracking-wider">Pertes en temps réel</span>
          </div>
          <div class="grid grid-cols-3 gap-3">
            <div class="text-center">
              <div class="text-xl md:text-3xl font-extrabold text-red-400 tabular-nums">{{ daysThisYear }}</div>
              <div class="text-[10px] text-white/30 uppercase leading-tight">jours sans site pro en 2026</div>
            </div>
            <div class="text-center">
              <div class="text-xl md:text-3xl font-extrabold text-red-400 tabular-nums">{{ lostProspects }}</div>
              <div class="text-[10px] text-white/30 uppercase leading-tight">clients perdus depuis votre arrivée</div>
            </div>
            <div class="text-center">
              <div class="text-xl md:text-3xl font-extrabold text-red-400 tabular-nums">{{ lostRevenue.toLocaleString('fr-FR') }}&euro;</div>
              <div class="text-[10px] text-white/30 uppercase leading-tight">CA manqué estimé</div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
          Combien de temps allez-vous<br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">encore attendre ?</span>
        </h2>
        <p class="text-white/70 text-sm mb-5 max-w-md mx-auto">
          Chaque jour sans site professionnel = des clients qui trouvent vos concurrents.
          <span class="text-white font-medium">Le devis est gratuit. Le risque : zéro.</span>
        </p>

        <button class="w-full sm:w-auto px-10 py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-sky-500/25 group" @click="startForm">
          <span class="flex items-center justify-center gap-2">
            Lancer mon projet web
            <UIcon name="i-lucide-arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>

        <div class="flex flex-wrap items-center justify-center gap-3 mt-4 text-xs text-white/30">
          <span class="flex items-center gap-1"><UIcon name="i-lucide-check" class="w-3 h-3 text-sky-400" /> Gratuit</span>
          <span class="flex items-center gap-1"><UIcon name="i-lucide-check" class="w-3 h-3 text-sky-400" /> Sans engagement</span>
          <span class="flex items-center gap-1"><UIcon name="i-lucide-check" class="w-3 h-3 text-sky-400" /> 24h</span>
        </div>
      </div>

      <div v-else>
        <div class="mb-4">
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs text-white/30">Étape {{ step }}/{{ totalSteps }}</span>
            <span class="text-xs text-sky-400">{{ Math.round((step / totalSteps) * 100) }}%</span>
          </div>
          <div class="h-1 bg-white/[0.06] rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-sky-500 to-sky-300 rounded-full transition-all duration-500" :style="{ width: (step / totalSteps * 100) + '%' }" />
          </div>
        </div>

        <div v-if="step === 1" class="glass-card rounded-2xl p-5">
          <h3 class="text-white font-bold text-base mb-3">Avez-vous déjà un site web ?</h3>
          <div class="space-y-2">
            <button v-for="opt in [
              { value: 'yes', label: 'Oui, mais il est dépassé', icon: 'i-lucide-globe' },
              { value: 'building', label: 'En cours de création', icon: 'i-lucide-hammer' },
              { value: 'no', label: 'Non, pas encore', icon: 'i-lucide-plus-circle' }
            ]" :key="opt.value" class="w-full p-3 rounded-xl border text-left flex items-center gap-3 transition-all" :class="form.hasWebsite === opt.value ? 'border-sky-500/50 bg-sky-500/10' : 'border-white/10 bg-white/[0.02]'" @click="form.hasWebsite = opt.value">
              <UIcon :name="opt.icon" class="w-4 h-4" :class="form.hasWebsite === opt.value ? 'text-sky-400' : 'text-white/30'" />
              <span class="font-medium text-sm" :class="form.hasWebsite === opt.value ? 'text-white' : 'text-white/60'">{{ opt.label }}</span>
            </button>
          </div>
          <input v-if="form.hasWebsite === 'yes'" v-model="form.websiteUrl" type="url" class="w-full mt-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:border-sky-500 outline-none" placeholder="https://votre-site.fr" />
        </div>

        <div v-if="step === 2" class="glass-card rounded-2xl p-5">
          <h3 class="text-white font-bold text-base mb-1">Quels sont vos besoins ?</h3>
          <p class="text-white/30 text-xs mb-3">Sélectionnez tout ce qui s'applique</p>
          <div class="space-y-2">
            <button v-for="opt in [
              { value: 'visibility', label: 'Être visible sur Google à Poitiers', icon: 'i-lucide-search' },
              { value: 'leads', label: 'Générer des demandes de devis', icon: 'i-lucide-mail' },
              { value: 'image', label: 'Moderniser mon image', icon: 'i-lucide-palette' },
              { value: 'ecommerce', label: 'Vendre en ligne', icon: 'i-lucide-shopping-cart' },
              { value: 'notsure', label: 'Je ne sais pas encore', icon: 'i-lucide-help-circle' }
            ]" :key="opt.value" class="w-full p-3 rounded-xl border text-left flex items-center gap-3 transition-all" :class="form.problems.includes(opt.value) ? 'border-sky-500/50 bg-sky-500/10' : 'border-white/10 bg-white/[0.02]'" @click="toggleProblem(opt.value)">
              <div class="w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center" :class="form.problems.includes(opt.value) ? 'border-sky-400 bg-sky-500' : 'border-white/20'">
                <UIcon v-if="form.problems.includes(opt.value)" name="i-lucide-check" class="w-3 h-3 text-white" />
              </div>
              <span class="font-medium text-sm" :class="form.problems.includes(opt.value) ? 'text-white' : 'text-white/60'">{{ opt.label }}</span>
            </button>
          </div>
        </div>

        <div v-if="step === 3" class="glass-card rounded-2xl p-5">
          <h3 class="text-white font-bold text-base mb-3">Quel type de site recherchez-vous ?</h3>
          <div class="space-y-2">
            <button v-for="opt in [
              { value: 'vitrine', label: 'Site vitrine professionnel', icon: 'i-lucide-layout-template' },
              { value: 'ecommerce', label: 'Boutique en ligne', icon: 'i-lucide-shopping-bag' },
              { value: 'refonte', label: 'Refonte d\'un site existant', icon: 'i-lucide-refresh-cw' },
              { value: 'autre', label: 'Autre projet', icon: 'i-lucide-lightbulb' }
            ]" :key="opt.value" class="w-full p-3 rounded-xl border text-left flex items-center gap-3 transition-all" :class="form.projectType === opt.value ? 'border-sky-500/50 bg-sky-500/10' : 'border-white/10 bg-white/[0.02]'" @click="form.projectType = opt.value">
              <UIcon :name="opt.icon" class="w-4 h-4" :class="form.projectType === opt.value ? 'text-sky-400' : 'text-white/30'" />
              <span class="font-medium text-sm" :class="form.projectType === opt.value ? 'text-white' : 'text-white/60'">{{ opt.label }}</span>
            </button>
          </div>
        </div>

        <div v-if="step === 4" class="glass-card rounded-2xl p-5">
          <h3 class="text-white font-bold text-base mb-3">Quand en avez-vous besoin ?</h3>
          <div class="space-y-2">
            <button
              v-for="t in timings"
              :key="t.value"
              class="w-full p-3 rounded-xl border text-left flex items-center gap-3 transition-all"
              :class="form.timing === t.value ? 'border-sky-500/50 bg-sky-500/10' : 'border-white/10 bg-white/[0.02]'"
              @click="form.timing = t.value"
            >
              <UIcon :name="t.icon" class="w-4 h-4 flex-shrink-0" :style="{ color: form.timing === t.value ? t.color : 'rgba(255,255,255,0.3)' }" />
              <div class="flex-1">
                <div class="font-medium text-sm" :class="form.timing === t.value ? 'text-white' : 'text-white/60'">{{ t.label }}</div>
                <div class="text-xs" :class="form.timing === t.value ? 'text-white/50' : 'text-white/30'">{{ t.desc }}</div>
              </div>
            </button>
          </div>
        </div>

        <div v-if="step === 5" class="glass-card rounded-2xl p-5">
          <h3 class="text-white font-bold text-base mb-1">Dernière étape — on vous rappelle</h3>
          <p class="text-white/30 text-xs mb-3">Devis envoyé sous 24h. Aucun engagement.</p>
          <div class="space-y-3">
            <input v-model="form.companyName" type="text" class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:border-sky-500 outline-none" placeholder="Nom de votre entreprise" />
            <input v-model="form.name" type="text" class="w-full bg-white/5 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:border-sky-500 outline-none border" :class="form.name && form.name.trim().length < 2 ? 'border-red-500/50' : 'border-white/10'" placeholder="Votre nom et prénom *" />
            <input v-model="form.email" type="email" class="w-full bg-white/5 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:border-sky-500 outline-none border" :class="form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? 'border-red-500/50' : form.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? 'border-green-500/50' : 'border-white/10'" placeholder="Email professionnel *" />
            <input v-model="form.phone" type="tel" class="w-full bg-white/5 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:border-sky-500 outline-none border" :class="form.phone && form.phone.replace(/\D/g, '').length < 10 ? 'border-red-500/50' : form.phone && form.phone.replace(/\D/g, '').length >= 10 ? 'border-green-500/50' : 'border-white/10'" placeholder="Téléphone * (ex: 07 69 80 11 90)" />
          </div>
        </div>

        <p v-if="errors" class="text-red-400 text-xs text-center mt-2">{{ errors }}</p>

        <div class="flex items-center justify-between mt-4">
          <button v-if="step > 1" class="text-white/40 hover:text-white text-sm flex items-center gap-1" @click="prevStep">
            <UIcon name="i-lucide-arrow-left" class="w-4 h-4" /> Retour
          </button>
          <div v-else />
          <button v-if="step < totalSteps" class="bg-sky-500 hover:bg-sky-400 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-sky-500/25 flex items-center gap-2" @click="nextStep">
            Continuer <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </button>
          <button v-else :disabled="submitting" class="bg-sky-500 hover:bg-sky-400 disabled:bg-sky-800 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-sky-500/25" @click="handleSubmit">
            <span v-if="submitting" class="flex items-center gap-2"><UIcon name="i-lucide-loader-2" class="w-4 h-4 animate-spin" /> Envoi...</span>
            <span v-else>Recevoir mon devis gratuit</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
