<script setup lang="ts">
import type IGame from '@/types/IGame'
import { type PropType } from 'vue'
defineProps({
  game: Object as PropType<IGame>
})
</script>

<template>
  <n-card :title="game?.title" :key="game?.id">{{ game?.description }}</n-card>
</template>

<style scoped>
.n-card {
  text-align: center;
}
</style>
