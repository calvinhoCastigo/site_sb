import BotaoPrincipal from "@/components/mainButton/BotaoPrincipal.vue";
import area_de_atuacao from "@/data/area_de_atuacao";
import BarraDePequisa from "@/components/searchBar/BarraDePequisa.vue";
import clientes from "@/data/clientes";

export default {
  name: "ClientesView",
  data() {
    const banner = import.meta.env.VITE_IMGBODY + "banners/bannerclientes.png";
    return {
      banner: banner,
      mostraBotaoTodos: false,
      clientesFiltrador: null,
      areasDeAtuacao: area_de_atuacao,
      clientes: clientes,
    };
  },
  methods: {
    scrollaAteMain: () => {
      document.querySelector("#elementos").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    fetchClientes: function (filtro) {
      this.mostraBotaoTodos = filtro ? true : false;
      try {
        const filtroCliente = this.clientes.filter(
          (cliente) => cliente.areaDeAtuacaoId == filtro
        );
        filtroCliente.length > 0
          ? (this.clientesFiltrador = filtroCliente)
          : (this.clientesFiltrador = this.clientes);
      } catch (error) {
        console.log("ERRO: " + error);
      }
    },
  },
  mounted() {
    this.fetchClientes(false);
  },
  components: { BotaoPrincipal, BarraDePequisa },
};
