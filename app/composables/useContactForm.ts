export const useContactForm = () => {
  const showForm = ref(false)
  const formSubmitted = ref(false)

  function toggle() {
    showForm.value = !showForm.value
    if (showForm.value) formSubmitted.value = false
  }

  function openForm() {
    showForm.value = true
    formSubmitted.value = false
  }

  function closeForm() {
    showForm.value = false
  }

  function markSubmitted() {
    formSubmitted.value = true
  }

  return {
    showForm,
    formSubmitted,
    toggle,
    openForm,
    closeForm,
    markSubmitted
  }
}
