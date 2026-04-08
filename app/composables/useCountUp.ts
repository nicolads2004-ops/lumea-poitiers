export const useCountUp = (endValue: number, duration = 2000, decimals = 0) => {
  const current = ref(0)
  const displayValue = ref('0')
  const isAnimating = ref(false)
  const hasAnimated = ref(false)

  const animate = () => {
    if (hasAnimated.value) return
    hasAnimated.value = true
    isAnimating.value = true

    const startTime = performance.now()
    const startValue = 0

    const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4)

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuart(progress)

      current.value = startValue + (endValue - startValue) * easedProgress
      displayValue.value = current.value.toFixed(decimals)

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        current.value = endValue
        displayValue.value = endValue.toFixed(decimals)
        isAnimating.value = false
      }
    }

    requestAnimationFrame(step)
  }

  const startWhenVisible = (el: HTMLElement | null) => {
    if (!el) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate()
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.3 })
    observer.observe(el)
  }

  const reset = () => {
    current.value = 0
    displayValue.value = '0'
    hasAnimated.value = false
    isAnimating.value = false
  }

  return {
    current,
    displayValue,
    isAnimating,
    animate,
    startWhenVisible,
    reset
  }
}
