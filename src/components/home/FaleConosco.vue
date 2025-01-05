<script setup>
import FormularioContato from "../FormularioContato.vue";
const url_imagem = import.meta.env.VITE_IMGBODY;
</script>
<template>
    <section>
        <div class="cont_bloco">
            <div class="cont_imagem">
                <img :src="url_imagem + 'contato.png'" alt="" srcset="" />
            </div>
            <div class="texto_bloco">
                <slot></slot>
                <h1>Fale Conosco</h1>
                <FormularioContato />
            </div>
        </div>
    </section>
</template>
<style scoped>
h1 {
    margin-top: 0px;
    margin-bottom: 20px;
}

p {
    width: 100%;
}

.texto_bloco {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    text-align: center;
    height: 700px;
    background-color: var(--cor-cinza);
    padding-left: 50px;
    z-index: 1;
}

.cont_imagem,
.texto_bloco {
    max-width: 50%;
}

.cont_imagem {
    display: flex;
    justify-content: flex-end;
}

.container_tx {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.cont_bloco {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

section {
    width: 100%;
    height: 700px;
    align-items: flex-start;
    flex-direction: row;
    color: var(--cor-branco);
    background-color: var(--cor-cinza);
    padding-left: 100%;
    padding-right: 100%;
    overflow: hidden;
}

img {
    height: 700px;
    transition: 2s;
}

img:hover {
    transform: scale(1.1);
}

.bloco_central {
    height: 700px;
    width: 40px;
    background-color: var(--cor-cinza);
    display: block;
    z-index: 1;
}

@media (max-width: 500px) {

    section,
    .cont_bloco {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding-left: 0%;
        padding-right: 0%;
    }

    .cont_imagem {
        display: none;
    }

    .texto_bloco {
        max-width: 100%;
    }

    .texto_bloco {
        padding-top: 50px;
        padding-bottom: 50px;
        padding-left: 0px;
    }
}
</style>
