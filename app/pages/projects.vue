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
    name: 'osecours-error-form.png',
    badges: ['Vue', 'Tailwind', 'Laravel', 'PostgreSQl', 'Docker', 'Heroku'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    project: "O'secours",
    demo: 'https://www.google.com/',
    source: 'https://github.com/',
  },
  {
    name: 'osecours-modal.png',
    badges: ['Vue', 'Tailwind', 'Firebase'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    project: 'osecours',
    demo: 'https://www.google.com/',
    source: 'https://github.com/',
  },
])

const onOpenDemo = (demo: string) => {
  window.open(demo, '_blank')
}

const onOpenSource = (source: string) => {
  window.open(source, '_blank')
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
              class="rounded-t w-full h-48 object-cover"
              alt="project image"
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
            <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
    </div>
  </div>
</template>
