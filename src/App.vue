<script setup>
import { RouterView } from 'vue-router'
import RodaPe from '@/components/footer/RodaPe.vue';
import Cabecalho from '@/components/header/Cabecalho.vue';
import FloatButton from './components/floatButton/FloatButton.vue';
</script>

<template>
  <FloatButton/>
  <Cabecalho />
  <RouterView />
  <RodaPe />
</template>

<style scoped></style>
