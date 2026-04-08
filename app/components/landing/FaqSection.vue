<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

const props = defineProps<{
  items: FaqItem[]
}>()

const accordionItems = computed(() =>
  props.items.map((item, index) => ({
    label: item.question,
    content: item.answer,
    defaultOpen: index === 0
  }))
)
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

      <!-- Accordion -->
      <UAccordion
        :items="accordionItems"
        :ui="{
          item: {
            base: 'mb-3',
            padding: 'p-0'
          },
          trigger: {
            base: 'flex items-center justify-between w-full px-6 py-4 text-left bg-gray-900/60 border border-gray-800 rounded-xl hover:border-sky-500/20 transition-colors',
            font: 'text-sm font-semibold text-white'
          },
          content: {
            base: 'px-6 py-4 text-sm text-gray-400 leading-relaxed'
          }
        }"
      />
    </div>
  </section>
</template>
