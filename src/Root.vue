<script setup>
import { ref, computed } from 'vue'
import App from './App.vue'
import ItemBuilder from './itembuilder/ItemBuilder.vue'

// const routes = {
//   '/': App,
//   '/itembuilder': ItemBuilder
// }

// const currentPath = ref(window.location.hash)

// window.addEventListener('hashchange', () => {
//   currentPath.value = window.location.hash
// })

// const currentView = computed(() => {
//   return routes[currentPath.value.slice(1).toLowerCase() || '/'] || App
// })
</script>

<template>
  <!-- <a href="#/">Home</a> | -->
  <!-- <a href="#/itembuilder">ItemBuilder</a> | -->
  <component :is="App" />
</template>