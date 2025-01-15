import BotaoPrincipal from "./mainButton/BotaoPrincipal.vue";
import MidiasSociais from "./socialMedias/MidiasSociais.vue";
import ListaMenu from "./ListaMenu.vue";

export default {
  components: { BotaoPrincipal, MidiasSociais, ListaMenu },
  methods: {
    toogleMenu: function () {
      const menuNavegacao = document.querySelector("#moblile nav");
      let addClasse = "abre";
      let removeClasse = "fecha";
      if (menuNavegacao.classList == "abre") {
        removeClasse = "abre";
        addClasse = "fecha";
      }

      menuNavegacao.classList.remove(removeClasse);
      menuNavegacao.classList.add(addClasse);
    },
  },
};
