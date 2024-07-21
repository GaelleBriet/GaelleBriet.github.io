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
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <div class="flex flex-col items-center flex-grow">
      <!--      title-->
      <div class="mt-10 mb-6"><p class="text-2xl font-bold">Projets</p></div>
      <!--cards-->
      <div class="w-full px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 flex-grow">
        <UCard v-for="i in 4" :key="i" class="flex flex-col" :ui="cardConfig">
          <template #header>
            <img
              src="assets/img/osecours-modal.png"
              class="rounded-t w-full h-32 object-cover"
              alt="project image"
            />
            <div class="p-2">
              <div class="flex flex-wrap gap-1 mb-1">
                <UBadge v-for="j in 3" :key="j" :label="`Badge${j}`" size="xs" />
              </div>
              <h2 class="text-lg font-semibold">Project name</h2>
            </div>
          </template>
          <div class="flex-grow overflow-auto h-24 px-2">
            <!-- Réduit la hauteur -->
            <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <template #footer>
            <div class="flex justify-start space-x-2">
              <UButton
                :ui="{ rounded: 'rounded-full' }"
                label="Demo"
                size="xs"
                variant="solid"
                class="px-3 py-1"
              />
              <UButton
                :ui="{ rounded: 'rounded-full' }"
                label="Source"
                size="xs"
                variant="outline"
                class="px-3 py-1"
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
