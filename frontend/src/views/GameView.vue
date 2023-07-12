<script setup lang="ts">
import GameCard from '@/components/GameCard.vue';
import type IGame from '@/types/IGame';
import { useNotification, type NotificationType } from 'naive-ui';
import { onMounted, onUpdated, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios, { AxiosError } from 'axios';

const route = useRoute()
let queryGame = ref({} as IGame)
const url = `http://localhost:8080/game/${route.params.id}`

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
    const responce = await axios.get(id)
    queryGame.value = responce.data
    console.log(responce.data)
  }
  catch(e) {
    if (e instanceof AxiosError){
      if (e.response?.status === 404){
        queryGame.value = {
          id: 0,
          title: '404',
          description: 'Не найдено'
        }
        notify('error')
      }
    }
    console.log(e)
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
