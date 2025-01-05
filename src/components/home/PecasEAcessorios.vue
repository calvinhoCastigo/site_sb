<script setup>
import { ref } from "vue";
import BotaoPrincipal from "../BotaoPrincipal.vue";
import ControladorEmCirculo from "../ControladorEmCirculo.vue";

const url_imagem = import.meta.env.VITE_IMGBODY;
const identificadorBloco = "PCPS";

const lista = ref([
  {
    imagem: "pecas_e_acessorios_distribuição acessorios.jpg",
  },
  {
    imagem: "pecas_e_acessorios_distribuição peças.jpg",
  },
  {
    imagem: "pecas_e_acessorios_distribuição quimicos.jpg",
  }])
</script>
<template>
  <section>
    <div :class="'cont_prinicpal  ' + identificadorBloco" v-for="(item, index) in lista" :id="identificadorBloco + index">

    <div class="conntainer_titulo">
      <h1>Peças e Acessórios</h1>
      <h2>peças, acessórios e químicos</h2>  
    </div>
      <img :src="url_imagem + item.imagem" class="borda_imagens ilustracao_section" alt="" srcset="" />
      <div class="texto_bloco">
        <h2>Para oferecer a solução completa, a SB FoodTech também se preocupa com o pós venda!</h2>
        <p>Temos peças de equipamentos e acessórios a pronta entrega no nosso estoque em Cuiabá – MT. São diversos tipos de insumos para assistência técnica, como: placas eletrônicas, gaxetas magnéticas, válvulas e pinos, além de acessórios para a sua cozinha profissional ficar completa, como: assadeiras, cubas gastronorms, blenders, etc. Solicite um orçamento!</p>
      </div>
    </div>

    <ControladorEmCirculo :bg_black="false" :elementos="lista" :identificadorBloco="identificadorBloco" />
  </section>
</template>
<style scoped>
.conntainer_titulo{
  width: 100%;
  
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.texto_bloco {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  text-align: justify;
  margin-top: 50px;
}

.container_tx {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.cont_prinicpal {
  width: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

section,
.cont_prinicpal {
  align-items: center;
  flex-direction: column;
}

img {
  border-radius: 2px;
  transition: 2s ease;
  box-shadow: 40px 40px 0px 0px var(--cor-laranja);
  width: 100%;
}
img:hover {
  transform: scale(1.1);
  animation: box-shadow-rb 3s ease-in-out infinite;
}
p{
  width: 90%;
}
@media (max-width: 600px) {
  img{
    width: 100%;
    box-shadow: 20px 20px 0px 0px var(--cor-laranja);
  }
  .conntainer_titulo{
    width: 95%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
}
@keyframes box-shadow-rb {
  0% {
    box-shadow: 40px 40px 0px 0px var(--cor-laranja);
  }

  25% {
    box-shadow: 20px 40px 0px 0px var(--cor-laranja);
  }

  50% {
    box-shadow: 20px 20px 0px 0px var(--cor-laranja);
  }

  75% {
    box-shadow: 40px 20px 0px 0px var(--cor-laranja);
  }

  100% {
    box-shadow: 40px 40px 0px 0px var(--cor-laranja);
  }
}
</style>
