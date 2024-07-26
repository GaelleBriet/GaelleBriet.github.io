<script setup lang="ts"></script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications class="notification-container" />
</template>
<style>
body {
  @apply bg-gray-100 dark:bg-gray-900;
}
.notification-container {
  max-width: 24rem;
  z-index: 50;
  max-height: 7rem;
  border-radius: 3px;
}
</style>
