import MidiasSociais from "@/components/socialMedias/MidiasSociais.vue";
import ListaMenu from "@/components/ListaMenu.vue";
import FormularioContatoProvisorio from "@/components/FormularioContatoProvisorio.vue";

export default {
  name: "RodaPe",
  data() {
    const url_imagem = import.meta.env.VITE_IMGRODAPE;
    return {
      url_imagem: url_imagem,
    };
  },
  components: { MidiasSociais, ListaMenu, FormularioContatoProvisorio },
};
