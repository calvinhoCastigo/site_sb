<script>
export default {
    name: "ControladorEmCirculo",
    props: {
        bg_black: {
            typeof: Boolean,
            default: false,
        },
        elementos: {
            typeof: Array,
            default: [],
        },
        identificadorBloco: {
            typeof: String,
            default: '',
        },
    }, methods: {
        ajustaClasseClaroEscuro: function () {
            const claroEscuro = this.bg_black ? 'escuro' : 'claro';
            return this.identificadorBloco + '_b ' + claroEscuro;
        },
        selecionaBloco: function (id) {
            this.apagaTodosOsBlocos();
            const alvo = document.querySelector('#' + this.identificadorBloco + id);
            const botao = document.querySelector('[name="' + this.identificadorBloco + id + '"]');
            this.trocaEstiloBotaoSeletor(botao);

            alvo.classList.remove('hide');
            alvo.classList.add('show');
        },
        apagaTodosOsBlocos: function () {
            const outroElementos = document.querySelectorAll("." + this.identificadorBloco);

            outroElementos.forEach((alvo) => {
                alvo.classList.remove('show');
                alvo.classList.add('hide');
            });
        },
        trocaEstiloBotaoSeletor: function (alvo) {
            const outroElementos = document.querySelectorAll(".container_slider ." + this.identificadorBloco + "_b");
            outroElementos.forEach((alvo) => {
                alvo.classList.remove('botao_selecionado');
            });

            alvo.classList.add('botao_selecionado');
        }
        
    }, mounted() {
        this.selecionaBloco(0);
    }
};
</script>

<template>

    <div class="container_slider">
        <button v-for="(elaroOuElemento, index) in elementos" :class="ajustaClasseClaroEscuro()"
            :name="identificadorBloco + index" v-on:click="selecionaBloco(index)"></button>
    </div>
</template>

<style scoped>
.claro {
    border-color: var(--cor-preto);
}

.escuro {
    border-color: var(--cor-branco);
}

button {
    background-color: transparent;
    margin-right: 10px;
    border-style: solid;
    border-width: 2px;
    height: 12px;
    width: 12px;
    border-radius: 100%;
    padding: 0px;
    transition: 0.1s;
    cursor: pointer;
}

.botao_selecionado {
    
    transform: scale(1.5);
    background-color: var(--cor-laranja) !important;
}

button:last-child {
    margin-right: 0px;
}

button:hover {
    transform: scale(1.2);
}

.container_slider {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 25px;
}

@media (max-width: 500px) {
    button {
        margin-right: 18px;
        border-width: 4px;
        height: 18px;
        width: 18px;
    }
}
</style>
