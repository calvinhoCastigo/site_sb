
<script>
import areasDeAtuacao from '@/data/area_de_atuacao'
export default {
  data() {
    return {
      areasDeAtuacao: areasDeAtuacao
    };
  },
};
</script>
<template>
  <section>
    <div class="cont_bloco">
      <h1>ÁREAS DE ATUAÇÃO</h1>
      <div class="container_tx">
        <div class="circulo_seguimentos" v-for="areaDeAtuacao in areasDeAtuacao">
          <div class="container_imagem">
            <img :src="'/icons/areadeatuacao/' + areaDeAtuacao.svg" />
          </div>
          <span>{{ areaDeAtuacao.nome }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
h1{
  margin-bottom: 20px;
}
.container_tx {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 50%;
  margin-right: 15px;
}

.cont_bloco {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

section {
  align-items: flex-start;
  flex-direction: row;
}

.container_imagem:hover {
  transform: scale(1.1);
  animation: box-shadow-rb 3s ease-in-out infinite;
}

.circulo_seguimentos {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.circulo_seguimentos span {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  font-family: VinSansPro-Bold;
}

.container_imagem {
  height: 120px;
  width: 120px;
  background-color: var(--cor-cinza);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -10px 10px 0px 0px var(--cor-laranja);
  transition: 1.5s;
}

img {
  width: 45%;
}

span {
  text-align: center;
  max-width: 100px;
  text-transform: uppercase;
}

@keyframes box-shadow-rb {
  0% {
    box-shadow: -10px 10px 0px 0px var(--cor-laranja);
  }

  25% {
    box-shadow: -5px 10px 0px 0px var(--cor-laranja);
  }

  50% {
    box-shadow: -5px 5px 0px 0px var(--cor-laranja);
  }

  75% {
    box-shadow: -10px 5px 0px 0px var(--cor-laranja);
  }

  100% {
    box-shadow: -10px 10px 0px 0px var(--cor-laranja);
  }
}

@media (max-width: 600px) {
  .container_imagem {
    width: 120px;
    height: 120px;
  }
  span{
    font-size: 18px;
    text-align: center;
  }

  .container_tx {
    width: 70%;
  }
}
</style>
