<script setup lang="ts">
const cardConfig = {
  divide: 'divide-y-0',
  body: {
    padding: 'p-2', // Réduit le padding
  },
  header: {
    padding: 'p-0 sm:px-0', // Supprime le padding du header
  },
  footer: {
    padding: 'px-4 pb-6 pt-0 ', // Ajuste le padding du footer
  },
}

const images = ref([
  {
    name: 'osecours-home.png',
    badges: ['Vue', 'Tailwind', 'Laravel', 'PostgreSQl', 'Docker', 'Heroku'],
    description:
      "O'Secours est une application web conçue pour moderniser la gestion des\n" +
      'refuges animaliers et des associations de protection animale.',
    project: "O'secours",
    demo: 'https://www.osecours-asso.fr',
    source: 'https://github.com/GaelleBriet/Osecours-monorepo',
  },
  {
    name: 'bankenstein.png',
    badges: ['Flutter'],
    description: 'Application bancaire en flutter (exercice)',
    project: 'Bankenstein',
    source: 'https://github.com/GaelleBriet/Bankenstein',
  },
  {
    name: 'default.png',
    badges: ['Laravel', 'Vue.js'],
    description:
      "Outil sur mesure pour estimer les temps d'un projet en fonction de ce que souhaitent des clients.(exercice)",
    project: 'Estimator',
    source: 'https://github.com/GaelleBriet/Laravel-Vue.js-2/tree/Projet-final',
  },
  {
    name: 'default.png',
    badges: ['Vue.js'],
    description: 'Site derecettes de cuisine (exercice, prise en main de Vue.js)',
    project: "O'cooking",
    source:
      'https://github.com/GaelleBriet/O-Cooking---prise-en-main-Vue.js/blob/E25-Jour7/conception/screens/homepage.png',
  },
])

const onOpenDemo = (demo: string) => {
  window.open(demo, '_blank')
}

const onOpenSource = (source: string) => {
  window.open(source, '_blank')
}

const isImageModalOpen = ref(false)
const currentImageSrc = ref('')

const onOpenImage = (image: string) => {
  console.log(image)
  currentImageSrc.value = `/img/${image}`
  isImageModalOpen.value = true
}
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <div class="flex flex-col items-center flex-grow">
      <!--      title-->
      <div class="mt-10 mb-6"><p class="text-2xl font-bold">Projets</p></div>
      <!--cards-->
      <div class="w-full px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 flex-grow">
        <UCard v-for="(image, index) in images" :key="index" class="h-min" :ui="cardConfig">
          <!--    card header   -->
          <template #header>
            <img
              :src="`/img/${image.name}`"
              class="rounded-t w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
              alt="project image"
              @click="onOpenImage(image.name)"
            />
            <div class="p-2">
              <div class="flex flex-wrap gap-1 mb-1">
                <UBadge
                  v-for="(badge, index) in image.badges"
                  :key="index"
                  :label="`${badge}`"
                  size="xs"
                />
              </div>
              <h2 class="text-lg font-semibold">{{ image.project }}</h2>
            </div>
          </template>
          <!--   card body   -->
          <div class="flex-grow overflow-auto h-16 px-2">
            <!-- Réduit la hauteur -->
            <p class="text-sm">{{ image.description }}</p>
          </div>
          <!--    card footer    -->
          <template #footer>
            <div class="flex justify-start h-8 space-x-2">
              <UButton
                v-if="image.demo"
                :ui="{ rounded: 'rounded-full' }"
                label="Demo"
                size="xs"
                variant="solid"
                class="px-3 py-1"
                @click="onOpenDemo(image.demo)"
              />
              <UButton
                v-if="image.source"
                :ui="{ rounded: 'rounded-full' }"
                label="Source"
                size="xs"
                variant="outline"
                class="px-3 py-1"
                @click="onOpenSource(image.source)"
              />
            </div>
          </template>
        </UCard>
        <!-- Espace en bas -->
        <div class="h-16"></div>
      </div>
      <UModal v-model="isImageModalOpen">
        <img
          :src="currentImageSrc"
          class="max-w-full max-h-[90vh] object-contain"
          alt="project-img"
        />
      </UModal>
    </div>
  </div>
</template>
