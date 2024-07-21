<script setup lang="ts"></script>

<template>
  <div class="h-screen flex flex-col mx-20">
    <NavigationComponent class="h-12" />
    <div class="flex-1 overflow-auto">
      <slot />
    </div>
  </div>
</template>
<style>
.flex-1 {
  height: calc(100vh - 3rem);
}
</style>
