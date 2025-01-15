import { useRoute } from "vue-router";
import BotaoPrincipal from "@/components/mainButton/BotaoPrincipal.vue";
import ControladorEmCirculo from "@/components/ControladorEmCirculo.vue";
import projetos from "@/data/projetos";
import area_de_atuacao from "@/data/area_de_atuacao";

export default {
  name: "ProjetoView",
  data() {
    const rota = useRoute();

    const url = rota.path.split("/");
    const pagina = url[1];
    const identificador = url[2];

    return {
      pagina: pagina,
      identificador: identificador,
      projetos: projetos,
      area_de_atuacao: area_de_atuacao,
      projeto: {
        nome: null,
        local: null,
        descricao: null,
        areaAtuacao: null,
        ano: null,
        imagens: [],
      },
      imageSrc: false,
    };
  },
  methods: {
    getObj() {
      let objeto = this.projetos.find((proj) => proj.id == this.identificador);
      let area_de_atuacao = this.area_de_atuacao.find(
        (ara) => ara.id === objeto.areaDeAtucaoId
      );

      this.projeto.nome = objeto.nome;
      this.projeto.local = objeto.local;
      this.projeto.ano = objeto.ano;
      this.projeto.descricao = objeto.descricao;
      this.projeto.areaAtuacao = area_de_atuacao.nome;
      this.projeto.imagens = objeto.imagens;
    },
    showImg(img) {
      var nova_img = img;
      if (nova_img) {
        nova_img = "/images/" + nova_img;
      }

      this.imageSrc = nova_img;
    },
  },
  mounted() {
    this.getObj();
  },
  components: { ControladorEmCirculo, BotaoPrincipal },
};
