export default {
  name: "BotaoPrincipal",
  props: {
    fillBg: {
      type: Boolean,
      default: true,
    },
    rota: {
      type: String,
      default: "botao",
    },
  },
  methods: {
    claroEscuro: function () {
      return this.fillBg ? "prenchindo" : "naoPrenchido";
    },
    verificaRota: function () {
      if (this.rota[0] == "/") {
        return "a";
      } else if (this.rota == "botao") {
        return "botao";
      } else {
        return "botao";
      }
    },
  },
};
