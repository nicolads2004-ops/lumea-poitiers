<script setup lang="ts">
const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isServicesOpen = ref(false)
const servicesDropdownRef = ref<HTMLElement | null>(null)

const services = [
  { label: 'Site vitrine', href: '/creation-site-vitrine-poitiers', icon: 'lucide:layout-template' },
  { label: 'Site e-commerce', href: '/creation-site-ecommerce-poitiers', icon: 'lucide:shopping-bag' },
  { label: 'Refonte de site', href: '/refonte-site-internet-poitiers', icon: 'lucide:refresh-cw' },
]

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleOutsideClick)
})

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function handleOutsideClick(event: MouseEvent) {
  if (servicesDropdownRef.value && !servicesDropdownRef.value.contains(event.target as Node)) {
    isServicesOpen.value = false
  }
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) isServicesOpen.value = false
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
  isServicesOpen.value = false
}

function isActive(href: string) {
  if (href === '/') return route.path === '/'
  return route.path.startsWith(href)
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled
      ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
      : 'bg-transparent'"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-18">

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group" @click="closeMobileMenu">
          <span class="text-xl font-black tracking-tight text-white">
            LUMEA
          </span>
          <span class="hidden sm:block w-px h-4 bg-white/20" />
          <span class="hidden sm:block text-xs text-white/40 font-medium tracking-widest uppercase">
            Poitiers
          </span>
        </NuxtLink>

        <!-- Desktop Nav -->
        <div class="hidden lg:flex items-center gap-1">

          <!-- Accueil -->
          <NuxtLink
            to="/"
            class="px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
            :class="isActive('/') ? 'text-sky-400' : 'text-white/70 hover:text-white hover:bg-white/5'"
          >
            Accueil
          </NuxtLink>

          <!-- Services dropdown -->
          <div ref="servicesDropdownRef" class="relative">
            <button
              class="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
              :class="isServicesOpen || isActive('/services') ? 'text-sky-400' : 'text-white/70 hover:text-white hover:bg-white/5'"
              @click="isServicesOpen = !isServicesOpen"
            >
              Services
              <UIcon
                name="lucide:chevron-down"
                class="w-3.5 h-3.5 transition-transform duration-200"
                :class="isServicesOpen ? 'rotate-180' : ''"
              />
            </button>

            <!-- Dropdown panel -->
            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div
                v-if="isServicesOpen"
                class="absolute top-full left-0 mt-2 w-56 rounded-xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-xl shadow-black/30 overflow-hidden"
              >
                <div class="p-1.5">
                  <NuxtLink
                    v-for="service in services"
                    :key="service.href"
                    :to="service.href"
                    class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/8 transition-colors duration-150 group"
                    @click="isServicesOpen = false"
                  >
                    <UIcon
                      :name="service.icon"
                      class="w-4 h-4 text-sky-400/70 group-hover:text-sky-400 transition-colors"
                    />
                    {{ service.label }}
                  </NuxtLink>
                </div>
                <div class="border-t border-white/5 p-1.5">
                  <NuxtLink
                    to="/services"
                    class="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-sky-400/70 hover:text-sky-400 hover:bg-sky-400/5 transition-colors duration-150"
                    @click="isServicesOpen = false"
                  >
                    Voir tous les services
                    <UIcon name="lucide:arrow-right" class="w-3 h-3" />
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Blog -->
          <NuxtLink
            to="/blog"
            class="px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
            :class="isActive('/blog') ? 'text-sky-400' : 'text-white/70 hover:text-white hover:bg-white/5'"
          >
            Blog
          </NuxtLink>

          <!-- Contact -->
          <NuxtLink
            to="/contact"
            class="px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
            :class="isActive('/contact') ? 'text-sky-400' : 'text-white/70 hover:text-white hover:bg-white/5'"
          >
            Contact
          </NuxtLink>
        </div>

        <!-- Desktop CTA -->
        <div class="hidden lg:flex items-center gap-3">
          <UButton
            to="/devis"
            color="sky"
            variant="solid"
            size="sm"
            class="font-semibold bg-sky-500 hover:bg-sky-400 text-white border-0 shadow-lg shadow-sky-500/25 transition-all duration-200 hover:shadow-sky-400/30 hover:-translate-y-px"
          >
            Devis gratuit
          </UButton>
        </div>

        <!-- Mobile hamburger -->
        <button
          class="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
          :aria-label="isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          @click="toggleMobileMenu"
        >
          <UIcon
            :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'"
            class="w-5 h-5 transition-transform duration-200"
          />
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl"
      >
        <div class="max-w-7xl mx-auto px-4 py-3 space-y-1">

          <NuxtLink
            to="/"
            class="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
            :class="isActive('/') ? 'text-sky-400 bg-sky-400/8' : 'text-white/70 hover:text-white hover:bg-white/5'"
            @click="closeMobileMenu"
          >
            Accueil
          </NuxtLink>

          <!-- Mobile Services accordion -->
          <div>
            <button
              class="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
              :class="isServicesOpen ? 'text-sky-400 bg-sky-400/8' : 'text-white/70 hover:text-white hover:bg-white/5'"
              @click="isServicesOpen = !isServicesOpen"
            >
              Services
              <UIcon
                name="lucide:chevron-down"
                class="w-4 h-4 transition-transform duration-200"
                :class="isServicesOpen ? 'rotate-180' : ''"
              />
            </button>
            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-40"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 max-h-40"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-if="isServicesOpen" class="mt-1 ml-3 space-y-1">
                <NuxtLink
                  v-for="service in services"
                  :key="service.href"
                  :to="service.href"
                  class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                  @click="closeMobileMenu"
                >
                  <UIcon :name="service.icon" class="w-4 h-4 text-sky-400/70" />
                  {{ service.label }}
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <NuxtLink
            to="/blog"
            class="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
            :class="isActive('/blog') ? 'text-sky-400 bg-sky-400/8' : 'text-white/70 hover:text-white hover:bg-white/5'"
            @click="closeMobileMenu"
          >
            Blog
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
            :class="isActive('/contact') ? 'text-sky-400 bg-sky-400/8' : 'text-white/70 hover:text-white hover:bg-white/5'"
            @click="closeMobileMenu"
          >
            Contact
          </NuxtLink>

          <div class="pt-2 pb-1">
            <UButton
              to="/devis"
              color="sky"
              variant="solid"
              block
              class="font-semibold bg-sky-500 hover:bg-sky-400 text-white border-0"
              @click="closeMobileMenu"
            >
              Devis gratuit
            </UButton>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
