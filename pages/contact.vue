<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const schema = z.object({
  name: z.string().min(1, 'Le nom est requis'),
  email: z.string().email('Adresse email invalide'),
  subject: z.string().optional(),
  message: z.string().min(1, 'Le message est requis'),
})

type Schema = z.output<typeof schema>

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const recaptchaLoaded = ref(false)

const toast = useToast()

const submitForm = async (event: FormSubmitEvent<Schema>) => {
  isSubmitting.value = true
  try {
    // Vérifier si le reCAPTCHA a été complété
    const recaptchaResponse = (window as any).grecaptcha.getResponse()
    if (!recaptchaResponse) {
      alert('Veuillez compléter le reCAPTCHA')
      isSubmitting.value = false
      return
    }

    const formData = new FormData()
    Object.entries(event.data).forEach(([key, value]) => {
      formData.append(key, value as string)
    })
    formData.append('g-recaptcha-response', recaptchaResponse)

    await fetch('https://formspree.io/f/mnnajdvp', {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    })

    setTimeout(() => {
      form.value = { name: '', email: '', subject: '', message: '' }
      ;(window as any).grecaptcha.reset()
      toast.add({
        title: 'Message envoyé',
        description: 'Votre message a bien été envoyé',
        color: 'cyan',
      })
    }, 1000)
  } catch (error) {
    console.error("Erreur lors de l'envoi du formulaire:", error)
    toast.add({
      title: 'Erreur',
      description: "Une erreur s'est produite lors de l'envoi du message",
      color: 'red',
    })
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  if (!(window as any).grecaptcha) {
    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit'
    script.async = true
    script.defer = true
    document.head.appendChild(script)
    ;(window as any).onRecaptchaLoad = () => {
      recaptchaLoaded.value = true
      renderRecaptcha()
    }
  } else {
    recaptchaLoaded.value = true
    renderRecaptcha()
  }
})

function renderRecaptcha() {
  if (recaptchaLoaded.value && document.getElementById('recaptcha-container')) {
    ;(window as any).grecaptcha.render('recaptcha-container', {
      sitekey: '6Lf8IhYqAAAAAAUYFAx3qWj5uAX0r6awQ-Odppl5',
      callback: () => {
        console.log('reCAPTCHA complété')
      },
    })
  } else {
    console.error("Le conteneur reCAPTCHA n'est pas prêt")
  }
}
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <div class="flex flex-col justify-center items-center h-full">
      <h1 class="text-3xl font-bold mb-12">Contact</h1>
      <UForm @submit="submitForm" :schema="schema" :state="form" method="POST" class="w-1/2 mb-8">
        <UFormGroup label="Nom" name="name" class="mb-3">
          <UInput v-model="form.name" placeholder="Votre nom complet" />
        </UFormGroup>

        <UFormGroup label="Email" name="email" class="mb-3">
          <UInput v-model="form.email" type="email" placeholder="Votre adresse email" />
        </UFormGroup>

        <UFormGroup label="Objet" name="subject" class="mb-3">
          <UInput v-model="form.subject" placeholder="Objet du message" />
        </UFormGroup>

        <UFormGroup label="Message" name="message" class="mb-3">
          <UTextarea v-model="form.message" placeholder="Votre message" :rows="5" />
        </UFormGroup>

        <div id="recaptcha-container" class="mb-4"></div>

        <UButton
          type="submit"
          color="primary"
          :loading="isSubmitting"
          class="rounded-2xl px-3 py-1.5"
        >
          Envoyer <UIcon name="i-heroicons-paper-airplane-20-solid" />
        </UButton>
      </UForm>

      <div class="mt-8">
        <p>
          <span class="me-1 text-cyan-600">Localisation</span
          ><span class="i-heroicons-map-pin text-cyan-600" /> : Cavaillon, Vaucluse, France.
        </p>
        <p>
          <span class="me-1 text-cyan-600">Email</span
          ><span class="i-heroicons-envelope text-cyan-600 me-2" /> :
          <a href="mailto:votre@email.com">gaelle.briet@protonmail.com</a>
        </p>
        <p>
          <span class="me-1 text-cyan-600">Téléphone</span
          ><span class="i-heroicons-phone text-cyan-600 me-2" /> : +33 6 67 33 58 14
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#g-recaptcha-response {
  display: block !important;
  position: absolute;
  margin: -50px 0 0 0 !important;
  z-index: -999999;
  opacity: 0;
}
</style>
