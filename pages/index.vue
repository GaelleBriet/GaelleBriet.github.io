<script setup lang="ts">
import router from '#app/plugins/router'

const route = useRoute()

const cardConfig = {
  divide: 'divide-y-0',
  body: {
    padding: 'p-4', // Ajuste le padding si nécessaire
  },
  header: {
    padding: 'px-4 pt-4 pb-0', // Ajuste le padding du header
  },
  footer: {
    padding: 'px-4 pb-4 pt-0', // Ajuste le padding du footer
  },
}

const onContact = () => {
  navigateTo('/contact')
}

const onProjects = () => {
  navigateTo('/projects')
}
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <div class="flex flex-col justify-center items-center h-full">
      <div class="flex flex-row w-full justify-center h-80">
        <div class="me-4 w-1/3 rounded-lg overflow-hidden p-0">
          <img
            class="object-cover w-full h-full"
            src="~/assets/img/portrait.jpeg"
            alt="Discover Nuxt 3"
          />
        </div>
        <UCard class="w-2/3 flex flex-col h-full" :ui="cardConfig">
          <template #header>
            <div>
              <p class="text-sm text-gray-500">Développeuse en alternance</p>
              <h1 class="text-xl font-bold">Gaëlle Briet</h1>
            </div>
          </template>
          <div class="flex-grow overflow-auto h-36">
            <!-- Cette div prendra tout l'espace disponible -->
            <p>
              Forte d'une première alternance réussie qui se termine le 31 août 2024,j e recherche
              une entreprise pour m'accueillir en tant que développeuse en alternance pour un master
              manager en ingénierie informatique parcours secure-coding. Motivée, adaptable et prête
              à relever de nouveaux défis, je suis impatiente de contribuer à des projets ambitieux
              et de continuer à développer mes compétences dans un environnement professionnel
              dynamique.
            </p>
          </div>

          <template #footer>
            <div class="flex justify-start space-x-3">
              <UButton
                :ui="{ rounded: 'rounded-3xl' }"
                label="Contact"
                size="sm"
                variant="solid"
                trailing
                class="px-5 py-2.5"
                @click="onContact"
              ></UButton>
              <UButton
                :ui="{ rounded: 'rounded-3xl' }"
                label="Projets"
                size="sm"
                variant="outline"
                trailing
                class="px-5 py-2.5"
                @click="onProjects"
              ></UButton>
            </div
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>
