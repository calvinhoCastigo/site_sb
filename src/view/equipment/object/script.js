import { useRoute } from "vue-router";
import BotaoPrincipal from "@/components/mainButton/BotaoPrincipal.vue";
import ControladorEmCirculo from "@/components/ControladorEmCirculo.vue";
import equipamentos from "@/data/equipamentos";
import industrias from "@/data/industrias";
import tipo_equipamento from "@/data/tipo_equipamento";

export default {
  name: "EquipamentoView",
  data() {
    const rota = useRoute();

    const url = rota.path.split("/");
    const pagina = url[1];
    const identificador = url[2];

    return {
      pagina: pagina,
      identificador: identificador,
      equipamentos: equipamentos,
      industrias: industrias,
      tipo_equipamento: tipo_equipamento,
      equipamento: {
        nome: null,
        descricao: null,
        indsutria: null,
        tipo_equipamento: null,
        imagens: [],
      },
      imageSrc: false,
    };
  },
  methods: {
    getObj() {
      let objeto = this.equipamentos.find(
        (equip) => equip.id == this.identificador
      );
      let industria = this.industrias.find(
        (ind) => ind.id === objeto.industriaId
      );
      let tipo_equipamento = this.tipo_equipamento.find(
        (tipo_quip) => tipo_quip.id === objeto.tipoEquipamentoId
      );

      this.equipamento.nome = objeto.nome;
      this.equipamento.descricao = objeto.descricao;
      this.equipamento.indsutria = industria.nome;
      this.equipamento.tipo_equipamento = tipo_equipamento.nome;
      this.equipamento.imagens = objeto.imagens;
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
