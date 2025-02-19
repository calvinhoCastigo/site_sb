<script>
import FaleConosco from "@/components/home/FaleConosco.vue";
import ContadorHome from "@/components/home/ContadorHome.vue";
import AreaDeAtuacao from "@/components/home/AreaDeAtuacao.vue";
import NossosParceiros from "@/components/home/NossosParceiros.vue";
import PecasEAcessorios from "@/components/home/PecasEAcessorios.vue";
import DiferenciaisHome from "@/components/home/DiferenciaisHome.vue";
import DepoimentosCLientes from "@/components/home/DepoimentosCLientes.vue";
import EquipamentosEMobiliarios from "@/components/home/EquipamentosEMobiliarios.vue";
import ProjetoDeCozinhaProficional from "@/components/home/ProjetoDeCozinhaProficional.vue";

export default {
  name: "HomeView",
  data() {
    const url_video = import.meta.env.VITE_PATHVIDEOS;
    return {
      url_video: url_video
    }
  },
  components: {
    FaleConosco,
    ContadorHome,
    AreaDeAtuacao,
    NossosParceiros,
    PecasEAcessorios,
    DiferenciaisHome,
    DepoimentosCLientes,
    EquipamentosEMobiliarios,
    ProjetoDeCozinhaProficional
  }
}
</script>

<template>
  <main>
    <video autoplay loop muted>a
      <source :src="url_video + '/banner_home.mp4'" type="video/mp4">
      Seu navegador não suporta videos.
    </video>
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

video {
  width: 100%;
}

@media (max-width: 778px){
  main {
    margin-top: 100px;
  }

  video {
    top: 20px;
    width: 120%;
    /* display: none; */
  }
}
</style>
