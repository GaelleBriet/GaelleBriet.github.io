<script setup lang="ts">
import HomeView from '~/Views/HomeView.vue'
import NavigationComponent from '~/Components/NavigationComponent.vue'
</script>

<template>
  <div>
    <!--    <NuxtRouteAnnouncer />-->
    <NavigationComponent />
    <!--    <NuxtWelcome /> -->
    <HomeView />
  </div>
</template>
<style>
body {
  @apply bg-gray-100 dark:bg-gray-900;
}
</style>
