<script setup lang="ts">
import { resumeDownload } from '~/services/resumeDownload'

const route = useRoute()

const links = [
  {
    label: 'Accueil',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'À propos',
    icon: 'i-heroicons-information-circle',
    to: '/about',
  },
  {
    label: 'Projets',
    icon: 'i-heroicons-folder-open',
    to: '/projects',
  },
  {
    label: 'Contact',
    icon: 'i-heroicons-envelope',
    to: '/contact',
  },
]

const linksRight = [
  {
    label: 'GitHub',
    icon: 'i-heroicons-arrow-top-right-on-square',
    to: 'https://github.com/GaelleBriet',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    label: 'Linkedin',
    icon: 'i-heroicons-arrow-top-right-on-square',
    to: 'https://www.linkedin.com/in/gaelle-briet-666184227/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
]

const onDownload = () => {
  resumeDownload()
}
</script>

<template>
  <div>
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
        <div class="flex items-center ms-2.5">
          <UButton
            :ui="{ rounded: 'rounded-2xl' }"
            label="Télécharger mon C.V."
            size="sm"
            variant="outline"
            icon="i-heroicons-arrow-down-tray"
            trailing
            class="px-3 py-1.5"
            @click="onDownload"
          ></UButton>
        </div>
      </div>
      <!--    <UBadge>Mon badge</UBadge>-->
    </div>
    <!--    <slot />-->
  </div>
</template>
