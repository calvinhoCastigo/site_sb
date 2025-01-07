<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      chaveId: "valor",
      contadores: ref([
        {
          titulo: "Desde",
          valor: 92,
          prefixo: "19" 
        },
        {
          titulo: "marcas representadas",
          valor: +20,
          prefixo: "+"
        },
        {
          titulo: "projetos implantados",
          valor: 120,
          prefixo: "+"
        },
        {
          titulo: "membros da equipe",
          valor: 13,
          prefixo: ""
        },
      ]),
    };
  },
  methods: {
    ativaContadores:function(){
        const contadores = document.querySelectorAll(".contador");
        contadores.forEach((contador) => {
            let classe = contador.classList[0];
            this.rodaContador(classe);
        })
        
    },
    rodaContador: function (classe) {
      const elemento = document.querySelector("." + classe);
      const valorAtual = parseInt(elemento.innerHTML);
      const valorMaximo = parseInt(elemento.id);
      if(valorAtual < valorMaximo){
        this.imprimeValor(elemento);
        setTimeout(() => {
            this.rodaContador(classe);
        },30)
      }
        
    },
    imprimeValor: function(elemento){
        elemento.innerHTML = parseInt(elemento.innerHTML)+1
    }
  },mounted(){
    this.ativaContadores();
  }
};
</script>
<template>
  <section>
    <div class="container_principal">
      <template v-for="(contador, index) in contadores">
      <div class="container_contador">
        <div class="primeiro_elemento">
          <span>
            {{ contador.prefixo }}
          </span>
          <span :class="chaveId + index+' contador'" :id="contador.valor">
            0
          </span>
        </div>
        <span class="titulo_contador">{{ contador.titulo }}</span>
      </div>
    </template>
    </div>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  min-height: 200px;
  background-color: var(--cor-laranja);
  padding-right: 100%;
  padding-left: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px !important;
  flex-wrap: wrap;
}
.container_principal{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0px !important;
  flex-wrap: wrap;
}
.primeiro_elemento{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.primeiro_elemento span{
  font-size: 52px;
}
.container_contador {
  color: var(--cor-branco);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-right-style: solid;
  border-width: 3px;
  width: 150px;
  height: 150px;
  padding-left: 20px;
  padding-right: 20px;
}
.titulo_contador {
  font-size: 28px;
  text-transform: uppercase;
  text-align: center;
}
.container_contador:last-child {
  border-style: none;
}
@media (max-width: 500px) {
  section{
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .primeiro_elemento{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 42px;
  }
  .container_contador{
    border-style: none;
    margin: 0px;
    padding: 0px;
    width: 200px;
    height: 200px;
  }
  .titulo_contador {
    font-size: 18px;
    text-transform: uppercase;
  }
}
</style>
