<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="relative border-t border-white/5 bg-slate-950/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <span class="w-2 h-2 rounded-sm bg-sky-400 rotate-45" />
            <span class="text-lg font-extrabold tracking-tight text-white">LUMEA</span>
          </div>
          <p class="text-sm text-slate-400 leading-relaxed max-w-xs">
            Création de sites internet à Poitiers. On conçoit des sites qui génèrent des clients, pas des vitrines oubliées. Résultats mesurables, sans engagement.
          </p>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-white font-semibold mb-4">Services</h4>
          <ul class="space-y-2 text-slate-400 text-sm">
            <li><NuxtLink to="/creation-site-vitrine-poitiers" class="hover:text-white transition-colors">Création site vitrine Poitiers</NuxtLink></li>
            <li><NuxtLink to="/creation-site-ecommerce-poitiers" class="hover:text-white transition-colors">Création site e-commerce Poitiers</NuxtLink></li>
            <li><NuxtLink to="/refonte-site-internet-poitiers" class="hover:text-white transition-colors">Refonte site internet Poitiers</NuxtLink></li>
            <li><a href="https://rankeo.poitiers.digital" target="_blank" rel="noopener" class="hover:text-white transition-colors">Référencement SEO Poitiers</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white font-semibold mb-4">Contact</h4>
          <ul class="space-y-3 text-sm">
            <li>
              <a href="/#contact" class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <UIcon name="i-lucide-mail" class="w-4 h-4 text-sky-400/70" />
                contact@poitiers.digital
              </a>
            </li>
            <li>
              <a href="tel:+33769801190" class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <UIcon name="i-lucide-phone" class="w-4 h-4 text-green-400" />
                07 69 80 11 90
              </a>
            </li>
            <li class="flex items-center gap-2 text-slate-400">
              <UIcon name="i-lucide-map-pin" class="w-4 h-4 text-sky-400/70" />
              Poitiers, Vienne (86)
            </li>
          </ul>
        </div>
      </div>

      <!-- Divisions -->
      <div class="border-t border-white/5 pt-6 mb-6 mt-10">
        <p class="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-3">Studio Digital Poitiers — nos divisions</p>
        <div class="flex flex-wrap gap-x-6 gap-y-2">
          <a href="https://poitiers.digital" target="_blank" rel="noopener" class="text-xs text-slate-500 hover:text-white transition-colors">← Studio Digital Poitiers</a>
          <a href="https://poitiers.digital/agence-web-poitiers" target="_blank" rel="noopener" class="text-xs text-slate-500 hover:text-[#0047AB] transition-colors">Agence web Poitiers</a>
          <a href="https://adscale.poitiers.digital" target="_blank" rel="noopener" class="text-xs text-slate-500 hover:text-[#4285f4] transition-colors">ADSCALE — Google Ads</a>
          <a href="https://rankeo.poitiers.digital" target="_blank" rel="noopener" class="text-xs text-slate-500 hover:text-[#EAB308] transition-colors">RANKEO — SEO</a>
          <a href="https://nexoma.poitiers.digital" target="_blank" rel="noopener" class="text-xs text-slate-500 hover:text-emerald-400 transition-colors">NEXOMA — IA & Automatisation</a>
          <span class="text-xs text-sky-400/70">LUMEA — Création de sites</span>
          <a href="https://nova-studio.poitiers.digital" target="_blank" rel="noopener" class="text-xs text-slate-500 hover:text-[#f43f5e] transition-colors">NOVA STUDIO — UGC & Contenu</a>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-slate-500 text-xs">
          &copy; {{ currentYear }} LUMEA — Création de sites internet Poitiers. Tous droits réservés.
        </p>
        <div class="flex items-center gap-4 text-xs text-slate-600">
          <span>Création de sites internet à Poitiers et en Nouvelle-Aquitaine</span>
          <NuxtLink to="/sitemap.xml" class="hover:text-white transition-colors">Plan du site</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
