<script setup lang="ts">
const currentYear = new Date().getFullYear()

const services = [
  { label: 'Site vitrine', href: '/creation-site-vitrine-poitiers' },
  { label: 'Site e-commerce', href: '/creation-site-ecommerce-poitiers' },
  { label: 'Refonte de site', href: '/refonte-site-internet-poitiers' },
  { label: 'Maintenance', href: '/services/maintenance' },
  { label: 'SEO technique', href: '/services/seo' },
]

const ecosystem = [
  {
    label: 'RANKEO',
    description: 'SEO & visibilité locale',
    href: 'https://rankeo.poitiers.digital',
    icon: 'lucide:trending-up',
  },
  {
    label: 'AdScale',
    description: 'Publicité Google & Meta',
    href: 'https://adscale.poitiers.digital',
    icon: 'lucide:bar-chart-2',
  },
  {
    label: 'Nexoma',
    description: 'Automatisation IA',
    href: 'https://nexoma.poitiers.digital',
    icon: 'lucide:cpu',
  },
  {
    label: 'Nova Studio',
    description: 'UGC & contenu vidéo',
    href: 'https://novastudio.poitiers.digital',
    icon: 'lucide:video',
  },
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="relative mt-auto border-t border-white/5 bg-slate-950/80 backdrop-blur-xl">

    <!-- Gradient top border -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Main footer grid -->
      <div class="py-14 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

        <!-- Col 1 : Brand -->
        <div class="flex flex-col gap-5">
          <div>
            <NuxtLink to="/" class="inline-block">
              <span class="text-2xl font-black tracking-tight text-white">
                LUMEA
              </span>
            </NuxtLink>
            <p class="mt-3 text-sm leading-relaxed text-white/50">
              Agence de création de sites internet à Poitiers. Nous concevons des expériences web performantes, modernes et orientées conversion pour les entreprises locales et nationales.
            </p>
          </div>

          <!-- Ecosysteme badge -->
          <a
            href="https://poitiers.digital"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/5 text-xs text-sky-400/80 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 transition-colors duration-200 w-fit"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Fait partie de l'écosystème poitiers.digital
            <UIcon name="lucide:arrow-up-right" class="w-3 h-3" />
          </a>
        </div>

        <!-- Col 2 : Services -->
        <div>
          <h3 class="text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">
            Services
          </h3>
          <ul class="space-y-2.5">
            <li v-for="service in services" :key="service.href">
              <NuxtLink
                :to="service.href"
                class="flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors duration-150 group"
              >
                <span class="w-1 h-1 rounded-full bg-sky-500/40 group-hover:bg-sky-400 transition-colors" />
                {{ service.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Col 3 : Contact -->
        <div>
          <h3 class="text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">
            Contact
          </h3>
          <ul class="space-y-3.5">
            <li>
              <a
                href="mailto:hello@lumea.poitiers.digital"
                class="flex items-start gap-3 text-sm text-white/55 hover:text-white transition-colors duration-150 group"
              >
                <UIcon name="lucide:mail" class="w-4 h-4 mt-0.5 shrink-0 text-sky-400/60 group-hover:text-sky-400 transition-colors" />
                <span>hello@lumea.poitiers.digital</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+33549000000"
                class="flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors duration-150 group"
              >
                <UIcon name="lucide:phone" class="w-4 h-4 shrink-0 text-sky-400/60 group-hover:text-sky-400 transition-colors" />
                <span>05 49 00 00 00</span>
              </a>
            </li>
            <li>
              <div class="flex items-start gap-3 text-sm text-white/55">
                <UIcon name="lucide:map-pin" class="w-4 h-4 mt-0.5 shrink-0 text-sky-400/60" />
                <span>Poitiers, Nouvelle-Aquitaine<br>86000, France</span>
              </div>
            </li>
          </ul>

          <!-- Marques ecosysteme -->
          <div class="mt-7">
            <h4 class="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3.5">
              Nos marques
            </h4>
            <div class="grid grid-cols-2 gap-2">
              <a
                v-for="brand in ecosystem"
                :key="brand.href"
                :href="brand.href"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 px-2.5 py-2 rounded-lg border border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/10 transition-all duration-150 group"
              >
                <UIcon
                  :name="brand.icon"
                  class="w-3.5 h-3.5 shrink-0 text-sky-400/50 group-hover:text-sky-400 transition-colors"
                />
                <div class="min-w-0">
                  <div class="text-xs font-semibold text-white/70 group-hover:text-white transition-colors truncate">
                    {{ brand.label }}
                  </div>
                  <div class="text-[10px] text-white/30 truncate leading-tight">
                    {{ brand.description }}
                  </div>
                </div>
                <UIcon
                  name="lucide:arrow-up-right"
                  class="w-3 h-3 shrink-0 text-white/20 group-hover:text-sky-400/70 ml-auto transition-colors"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="py-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-white/30">
          &copy; {{ currentYear }} LUMEA — Tous droits réservés.
          <NuxtLink to="/mentions-legales" class="hover:text-white/60 transition-colors ml-1">
            Mentions légales
          </NuxtLink>
          <span class="mx-1 text-white/20">·</span>
          <NuxtLink to="/politique-de-confidentialite" class="hover:text-white/60 transition-colors">
            Confidentialité
          </NuxtLink>
        </p>

        <!-- Scroll to top -->
        <button
          class="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors group"
          @click="scrollToTop"
        >
          Haut de page
          <span class="flex items-center justify-center w-6 h-6 rounded-full border border-white/10 group-hover:border-white/20 group-hover:bg-white/5 transition-all">
            <UIcon name="lucide:arrow-up" class="w-3 h-3" />
          </span>
        </button>
      </div>
    </div>
  </footer>
</template>
