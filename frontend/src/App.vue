<script setup lang="ts">
import { RouterView } from 'vue-router'
import GameButton from './components/GameButton.vue'
import { NNotificationProvider } from 'naive-ui'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="nav">
        <GameButton game-id="1"></GameButton>
        <GameButton game-id="2"></GameButton>
        <GameButton game-id="3"></GameButton>
      </nav>
    </div>
  </header>

  <NNotificationProvider>
    <RouterView />
  </NNotificationProvider>
</template>

<style scoped>
.nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
