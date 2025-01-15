export default {
  name: "BarraDePesquisa",
  props: {
    lista: {
      type: Array,
      default: [],
    },
    mostraBotaoTodos: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    consulta(filtro) {
      if (filtro) {
        const filtro = document.querySelector("#input_pesquisa").value;
        this.$emit("itemSelecionado", filtro);
      } else {
        this.$emit("itemSelecionado", false);
      }
    },
  },
};
