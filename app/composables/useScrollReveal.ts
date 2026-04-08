export const useScrollReveal = () => {
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement

          if (el.hasAttribute('data-reveal-stagger')) {
            const children = el.querySelectorAll('[data-reveal-child]')
            children.forEach((child, index) => {
              const delay = index * (parseInt(el.dataset.revealStagger || '100'))
              setTimeout(() => {
                child.classList.add('revealed')
              }, delay)
            })
            el.classList.add('revealed')
          } else {
            el.classList.add('revealed')
          }

          observer.unobserve(el)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
    document.querySelectorAll('[data-reveal-stagger]').forEach(el => observer.observe(el))
  })
}
