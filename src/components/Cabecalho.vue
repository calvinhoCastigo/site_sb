<script>
import BotaoPrincipal from "./BotaoPrincipal.vue";
import MidiasSociais from "./MidiasSociais.vue";
import ListaMenu from "./ListaMenu.vue";

export default {
  components: { BotaoPrincipal, MidiasSociais, ListaMenu },
  methods: {
    toogleMenu: function () {
      const menuNavegacao = document.querySelector("#moblile nav");
      let addClasse = "abre";
      let removeClasse = "fecha";
      if (menuNavegacao.classList == "abre") {
        removeClasse = "abre"
        addClasse = "fecha";
      }

      menuNavegacao.classList.remove(removeClasse);
      menuNavegacao.classList.add(addClasse);
    }
  },
};
</script>

<template>
  <header id="decktop">
    <section>
      <nav>
        <MidiasSociais :facebook="true" :instagram="true" :whatsapp="true" />
      </nav>
      <nav>
        <MidiasSociais :por_estenso="true" :email="true" :whatsapp="true" />
      </nav>
    </section>
    <section>
      <a href="/">
        <img id="logo_sb" src="/images/logo_sbfoodtech-branco.png" alt="Logo SB Foodtechs" />
      </a>
      <nav>
        <ListaMenu />
        <BotaoPrincipal :fillBg="true" :rota="'/contatos'">FALE CONOSCO</BotaoPrincipal>
      </nav>
    </section>
  </header>

  <header id="moblile">
    <section>
      <img v-on:click="toogleMenu()" id="logo_sb_mobile" src="/images/logo_sbfoodtech-branco.png"
        alt="Logo SB Foodtechs" />
    </section>
    <nav>
      <ListaMenu :mobile="true" />
      <BotaoPrincipal :fillBg="true" :rota="'/contatos'">FALE CONOSCO</BotaoPrincipal>
    </nav>
  </header>
</template>

<style scoped>
header {
  z-index: 10;
}
a{
  text-transform: uppercase;
}

@media (min-width: 501px) {
  #moblile {
    display: none;
  }

  #decktop {
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    transition: 0.1s;
    background: var(--cor-cinza-70-t);
  }

  section:first-child {
    padding-left: 100%;
    padding-right: 100%;
    background: var(--cor-cinza-70-t);
    color: var(--cor-branco);
    font-size: 12px;
    height: 40px;
  }

  section:first-child div {
    display: flex;
  }

  section:last-child {
    height: 120px;
  }

  #logo_sb {
    height: 40px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
    flex-direction: row;
    width: 95%;
  }

  a {
    text-transform: uppercase;
  }

  #decktop:hover {
    height: 140px;
    background-color: var(--cor-cinza);
  }

  #decktop:hover section:first-child {
    background-color: var(--cor-preto);
  }
}

@media (max-width: 600px) {
  #decktop {
    display: none;
  }

  #moblile {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--cor-cinza);
    padding-bottom: 16px;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  section img {
    height: 40px;
  }

  nav {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    display: none;
  }

  .fecha {
    display: none !important;
    height: 0% !important;
    padding: 0px !important;
  }

  .abre {
    display: flex !important;
    height: 100% !important;
    padding: 10px !important;
  }
}</style>
