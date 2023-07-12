<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps({ gameId: String })
</script>

<template>
  <button>
    <RouterLink :to="{ name: 'game', params: { id: gameId } }">{{ gameId }}</RouterLink>
  </button>
</template>

<style scoped>
a {
  background: rgb(51, 75, 106);
  font-size: 1.5rem;
  display: inline-block;
  padding: 10px;
  width: 100%;
  transition: background-color 0.3s;
}

a:hover,
a.router-link-active {
  background: rgb(34, 59, 92);
}
</style>
