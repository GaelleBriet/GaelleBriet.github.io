<script setup lang="ts">
const route = useRoute()

const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
  },
  {
    label: 'About',
    icon: 'i-heroicons-information-circle',
    to: '/getting-started/installation',
  },
  {
    label: 'Projects',
    icon: 'i-heroicons-folder-open',
    to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/horizontal-navigation`,
  },
  {
    label: 'Contact',
    icon: 'i-heroicons-envelope',
    to: '/components/command-palette',
  },
]

const linksRight = [
  {
    label: 'GitHub',
    icon: 'i-heroicons-arrow-top-right-on-square',
  },
  {
    label: 'Linkedin',
    icon: 'i-heroicons-arrow-top-right-on-square',
  },
]
</script>

<template>
  <div class="flex justify-around">
    <div class="flex row">
      <UHorizontalNavigation
        :links="links"
        class="border-b border-gray-200 dark:border-gray-800 flex justify-center"
      />
    </div>
    <div class="flex row">
      <UHorizontalNavigation
        :links="linksRight"
        class="border-b border-gray-200 dark:border-gray-800 flex justify-center"
      />
      <div class="flex items-center">
        <UButton
          :ui="{ rounded: 'rounded-2xl' }"
          label="button"
          size="sm"
          variant="outline"
          icon="i-heroicons-arrow-down-tray"
          trailing
          class="px-3 py-1.5"
        ></UButton>
      </div>
    </div>
    <!--    <UBadge>Mon badge</UBadge>-->
  </div>
</template>
