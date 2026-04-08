<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  budget: '',
  message: ''
})

const projectTypes = [
  { label: 'Site vitrine', value: 'vitrine' },
  { label: 'Site e-commerce', value: 'ecommerce' },
  { label: 'Refonte de site', value: 'refonte' },
  { label: 'Autre projet', value: 'autre' }
]

const budgets = [
  { label: 'Moins de 1 500 €', value: '<1500' },
  { label: '1 500 € — 3 000 €', value: '1500-3000' },
  { label: '3 000 € — 5 000 €', value: '3000-5000' },
  { label: 'Plus de 5 000 €', value: '>5000' }
]

const submitted = ref(false)
const loading = ref(false)

async function handleSubmit() {
  loading.value = true
  try {
    await $fetch('/api/lead', {
      method: 'POST',
      body: { ...form }
    })
    submitted.value = true
  } catch (e) {
    console.error('Erreur envoi formulaire:', e)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="contact" data-reveal="cta" class="relative py-24 bg-gray-950">
    <!-- Background -->
    <div class="absolute inset-0">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-sky-500/5 blur-[120px] rounded-full" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-sky-400 uppercase bg-sky-500/10 rounded-full">
          Contact
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
          Parlons de votre projet
        </h2>
        <p class="text-gray-400 text-lg">
          Décrivez-nous votre besoin, on vous répond sous 24 heures avec une proposition personnalisée.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <!-- Form -->
        <div class="lg:col-span-3">
          <div v-if="submitted" class="p-8 bg-green-500/10 border border-green-500/20 rounded-2xl text-center">
            <UIcon name="i-lucide-check-circle" class="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 class="text-xl font-bold text-white mb-2">Message envoyé</h3>
            <p class="text-gray-400">Merci pour votre demande. Nous vous recontactons sous 24 heures.</p>
          </div>

          <form v-else class="space-y-5" @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Nom complet *</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Jean Dupont"
                  class="w-full px-4 py-3 bg-gray-900/60 border border-gray-800 rounded-xl text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/25 transition-colors"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="jean@entreprise.fr"
                  class="w-full px-4 py-3 bg-gray-900/60 border border-gray-800 rounded-xl text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/25 transition-colors"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Téléphone</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  class="w-full px-4 py-3 bg-gray-900/60 border border-gray-800 rounded-xl text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/25 transition-colors"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Nom de l'entreprise</label>
                <input
                  v-model="form.company"
                  type="text"
                  placeholder="Mon Entreprise SARL"
                  class="w-full px-4 py-3 bg-gray-900/60 border border-gray-800 rounded-xl text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/25 transition-colors"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Type de projet *</label>
                <select
                  v-model="form.projectType"
                  required
                  class="w-full px-4 py-3 bg-gray-900/60 border border-gray-800 rounded-xl text-white text-sm focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/25 transition-colors appearance-none"
                >
                  <option value="" disabled class="text-gray-600">Sélectionner...</option>
                  <option v-for="type in projectTypes" :key="type.value" :value="type.value" class="bg-gray-900">
                    {{ type.label }}
                  </option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Budget estimé</label>
                <select
                  v-model="form.budget"
                  class="w-full px-4 py-3 bg-gray-900/60 border border-gray-800 rounded-xl text-white text-sm focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/25 transition-colors appearance-none"
                >
                  <option value="" disabled class="text-gray-600">Sélectionner...</option>
                  <option v-for="b in budgets" :key="b.value" :value="b.value" class="bg-gray-900">
                    {{ b.label }}
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Votre message *</label>
              <textarea
                v-model="form.message"
                required
                rows="4"
                placeholder="Décrivez votre projet, vos objectifs, vos contraintes..."
                class="w-full px-4 py-3 bg-gray-900/60 border border-gray-800 rounded-xl text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/25 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              :disabled="loading"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors shadow-lg shadow-sky-500/25"
            >
              <UIcon v-if="loading" name="i-lucide-loader-2" class="w-4 h-4 animate-spin" />
              <UIcon v-else name="i-lucide-send" class="w-4 h-4" />
              {{ loading ? 'Envoi en cours...' : 'Envoyer ma demande' }}
            </button>
          </form>
        </div>

        <!-- Contact info -->
        <div class="lg:col-span-2">
          <div class="p-8 bg-gray-900/60 border border-gray-800 rounded-2xl space-y-8">
            <div>
              <h3 class="text-lg font-bold text-white mb-4">Coordonnées</h3>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-mail" class="w-5 h-5 text-sky-400 mt-0.5" />
                  <div>
                    <div class="text-sm font-medium text-white">Email</div>
                    <a href="mailto:contact@poitiers.digital" class="text-sm text-gray-400 hover:text-sky-400 transition-colors">
                      contact@poitiers.digital
                    </a>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-phone" class="w-5 h-5 text-sky-400 mt-0.5" />
                  <div>
                    <div class="text-sm font-medium text-white">Téléphone</div>
                    <a href="tel:+33769801190" class="text-sm text-gray-400 hover:text-sky-400 transition-colors">
                      07 69 80 11 90
                    </a>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-map-pin" class="w-5 h-5 text-sky-400 mt-0.5" />
                  <div>
                    <div class="text-sm font-medium text-white">Adresse</div>
                    <p class="text-sm text-gray-400">12 rue de la Chaîne<br />86000 Poitiers</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-6 border-t border-gray-800">
              <h3 class="text-lg font-bold text-white mb-4">Horaires</h3>
              <div class="space-y-2">
                <div class="flex justify-between text-sm">
                  <span class="text-gray-400">Lundi — Vendredi</span>
                  <span class="text-white font-medium">9h00 — 18h00</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-400">Samedi — Dimanche</span>
                  <span class="text-gray-500">Fermé</span>
                </div>
              </div>
            </div>

            <div class="pt-6 border-t border-gray-800">
              <div class="flex items-center gap-3 p-4 bg-sky-500/10 border border-sky-500/20 rounded-xl">
                <UIcon name="i-lucide-clock" class="w-5 h-5 text-sky-400 shrink-0" />
                <p class="text-sm text-sky-300">
                  <span class="font-semibold">Réponse sous 24h</span> — Premier rendez-vous gratuit et sans engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
