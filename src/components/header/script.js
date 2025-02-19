import BotaoPrincipal from "@/components/mainButton/BotaoPrincipal.vue";
import MidiasSociais from "@/components/socialMedias/MidiasSociais.vue";
import ListaMenu from "@/components/ListaMenu.vue";

export default {
  name:"Cabecalho",
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
  components: { BotaoPrincipal, MidiasSociais, ListaMenu }
};
