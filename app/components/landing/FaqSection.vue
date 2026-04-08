<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

const props = defineProps<{
  items: FaqItem[]
}>()

const openIndex = ref(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <section data-reveal="faq" class="relative py-24 bg-gray-950">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-sky-400 uppercase bg-sky-500/10 rounded-full">
          FAQ
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
          Questions fréquentes sur la création de site internet
        </h2>
        <p class="text-gray-400 text-lg">
          Les réponses aux questions que vous vous posez avant de lancer votre projet.
        </p>
      </div>

      <!-- Custom Accordion -->
      <div class="space-y-3">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="border border-gray-800 rounded-xl overflow-hidden transition-colors"
          :class="openIndex === index ? 'border-sky-500/20 bg-gray-900/60' : 'bg-gray-900/30'"
        >
          <button
            class="flex items-center justify-between w-full px-6 py-4 text-left transition-colors"
            @click="toggle(index)"
          >
            <span class="text-sm font-semibold text-white pr-4">{{ item.question }}</span>
            <UIcon
              :name="openIndex === index ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
              class="w-5 h-5 text-gray-400 shrink-0 transition-transform"
            />
          </button>
          <div
            v-show="openIndex === index"
            class="px-6 pb-4 text-sm text-gray-400 leading-relaxed"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
