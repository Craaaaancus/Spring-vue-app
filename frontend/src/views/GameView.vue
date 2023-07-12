<script setup lang="ts">
import GameCard from '@/components/GameCard.vue'
import { useNotification, type NotificationType } from 'naive-ui'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { AxiosError } from 'axios'
import http from '@/services/GameDataService'

const route = useRoute()
let queryGame = ref({
  id: 0,
  title: '',
  description: ''
})
const notFoundStatus = 404

const notification = useNotification()
const notify = (type: NotificationType) => {
  notification[type]({
    content: 'Не найдено',
    meta: 'Игры с данным идентификатором не существует',
    duration: 2500,
    keepAliveOnHover: true
  })
}
const getGame = async (id: any) => {
  try {
    const responce = await http.get(id)
    queryGame.value = responce.data
    console.log(responce.data)
  } catch (e) {
    if (e instanceof AxiosError) {
      if (e.response?.status === notFoundStatus) {
        queryGame.value = {
          id: 0,
          title: '404',
          description: 'Not found'
        }
        notify('error')
      }
      console.log(e)
    }
  }
}

watch(() => route.params.id, getGame)
onMounted(() => {
  getGame(route.params.id)
})
</script>

<template>
  <main>
    <GameCard :game="queryGame"></GameCard>
  </main>
</template>
