<script setup lang="ts">
import type IGame from '@/types/IGame'
import { type PropType } from 'vue'
import { NCard } from 'naive-ui'
defineProps({
  game: Object as PropType<IGame>
})
</script>

<template>
  <NCard :title="game ? game.title : ''">{{ game?.description }}</NCard>
</template>

<style scoped>
.n-card {
  text-align: center;
}
</style>
