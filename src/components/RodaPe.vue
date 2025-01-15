<script setup>
import MidiasSociais from "./socialMedias/MidiasSociais.vue";
import ListaMenu from "./ListaMenu.vue";
import FormularioContato from "./FormularioContato.vue";
import FormularioContatoProvisorio from "./FormularioContatoProvisorio.vue";

const url_imagem = import.meta.env.VITE_IMGRODAPE;
</script>

<template>
  <footer>
    <div class="container_principal_footer">
      <section>
        <div class="container_footer">
          <div>
            <img class="logo_footer" src="/images/logo_sbfoodtech-branco.png" alt="Logo SB" srcset="" />
            <h3>Navegue no site</h3>
            <ListaMenu />
          </div>
        </div>
        <div class="container_footer">
          <img :src="url_imagem + '01.png'" class="imagensFooter" alt="" />
          <!-- <FormularioContato :labels="false" /> -->
          <div>
            <MidiasSociais 
                :por_estenso="true"
                :email="true"
                :facebook="true"
                :instagram="true"
                :whatsapp="true"
                :telefone="true"
                :button="true"
            />
          </div>
          
        </div>
        <div class="container_footer">
          <img :src="url_imagem + '02.png'" class="imagensFooter" alt="" />
          <div class="info_container">
            <div>
              <h3>ENDEREÇO</h3>
              <span>Rua dos Miosótis, 151.</span>
              <span>Jardim Cuiabá, Cuiabá-MT.</span>
            </div>
            <div>
              <h3>HORÁRIO</h3>

              <span>SEGUNDA A SEXTA</span>
              <span>8h às 12h</span>
              <span>14h às 18h</span>

              <span>SÁBADO</span>
              <span>8h às 12h</span>
            </div>
          </div>
        </div>
        <div class="container_footer">
          <img :src="url_imagem + '03.png'" class="imagensFooter" alt="" />
          <div class="info_container">
            <div>
              <h3>TELEFONE</h3>
              <MidiasSociais :por_estenso="true" :telefone="true" :whatsapp="true" />
            </div>
            <div>
              <h3>E-mail</h3>
              <MidiasSociais :por_estenso="true" :email="true" />
            </div>
            <div>
              <h3>Redes Sociais</h3>
              <MidiasSociais :por_estenso="true" :instagram="true" :facebook="true" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>

<style scoped>
footer,
.container_footer,
.container_footer div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

footer {
  color: var(--cor-branco);
  background-color: var(--cor-preto);
  width: 100%;
  color: var(--cor-branco);
  padding-top: 100px;
  padding-bottom: 100px;
  align-items: center;
  overflow-x: hidden;
}

section {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
}

section:first-child {
  justify-content: flex-start;
  align-items: center;
}

section:last-child {
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
}

.container_footer {
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 380px;
  padding-left: 20px;
  padding-right: 20px;
}

.logo_footer {
  width: 203px;
}

.container_principal_footer {
  width: 100%;
  max-width: 1600px;
  align-items: center;
}

h3 {
  font-size: 20px;
}

.imagensFooter {


  box-shadow: -15px 20px 0px 0px var(--cor-laranja);
  margin-right: 20px;
}

.info_container,
.container_footer img {
  max-height: 220px;
}

.info_container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}


a:hover {
  text-decoration: underline;
}

span {
  margin-bottom: 5px;
}

@media (max-width: 600px) {
  footer {
    justify-content: flex-start;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  section {
    justify-content: flex-start;
    width: 100% !important;
    max-width: 100% !important;
    margin-bottom: 50px;
  }

  section:first-child {
    justify-content: space-around;
    align-items: center;
  }

  section:last-child {
    align-items: center;
    flex-direction: column;
    max-width: 100%;
    flex-wrap: no;
  }

  .container_footer {
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 0px;
  }

  span {
    word-break: break-word;
  }

  .container_footer img {
    display: none;
  }

  .info_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 0px;
    width: 100%;
  }

  .info_container div {
    width: 50%;
    max-width: 118px;
    margin: 0px;
  }
}
</style>
