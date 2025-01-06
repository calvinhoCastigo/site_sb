<script setup>
import BannerVIdeo from "@/components/home/BannerVIdeo.vue";
import FaleConosco from "@/components/home/FaleConosco.vue";
import ContadorHome from "@/components/home/ContadorHome.vue";
import AreaDeAtuacao from "@/components/home/AreaDeAtuacao.vue";
import NossosParceiros from "@/components/home/NossosParceiros.vue";
import PecasEAcessorios from "@/components/home/PecasEAcessorios.vue";
import DiferenciaisHome from "@/components/home/DiferenciaisHome.vue";
import DepoimentosCLientes from "@/components/home/DepoimentosCLientes.vue";
import EquipamentosEMobiliarios from "@/components/home/EquipamentosEMobiliarios.vue";
import ProjetoDeCozinhaProficional from "@/components/home/ProjetoDeCozinhaProficional.vue";
</script>

<template>
  <main>
    <BannerVIdeo />
    <EquipamentosEMobiliarios />
    <ProjetoDeCozinhaProficional />
    <PecasEAcessorios />
    <ContadorHome />
    <FaleConosco />
    <DiferenciaisHome />
    <AreaDeAtuacao />
    <DepoimentosCLientes />
    <NossosParceiros />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
}

section {
  margin-bottom: 100px;
  max-width: var(--largura-bloco-padrao);
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

section:last-child {
  margin-bottom: 0px;
}

@media (max-width: 500px) {
  main {
    margin-top: 100px;
  }
}
</style>
