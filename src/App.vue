<script setup>
import { RouterView } from 'vue-router'
import RodaPe from './components/RodaPe.vue';
import Cabecalho from './components/Cabecalho.vue';


</script>

<template>
  <Cabecalho />

  <RouterView />

  <RodaPe/>
</template>

<style scoped>
</style>
