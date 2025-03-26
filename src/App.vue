<script>
import { RouterView } from 'vue-router'
import RodaPe from '@/components/footer/RodaPe.vue';
import Cabecalho from '@/components/header/Cabecalho.vue';
import FloatButton from './components/floatButton/FloatButton.vue';
export default {
  metaInfo: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  components: { RodaPe, Cabecalho, FloatButton, RouterView }
}
</script>

<template>
  <FloatButton />
  <Cabecalho />
  <RouterView />
  <RodaPe />
</template>

<style scoped></style>
