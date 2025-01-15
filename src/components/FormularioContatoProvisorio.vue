<script>
import BotaoPrincipal from './mainButton/BotaoPrincipal.vue';
import MidiasSociais from './socialMedias/MidiasSociais.vue';

export default {
    name: "FormularioContatoProvisorio",
    data() {
    },
    methods: {

    }, components: { BotaoPrincipal, MidiasSociais }
}

</script>

<template>
    <h1>Fale Conosco</h1>
    <p>Quer inovar no seu negócio com soluções em Foodtech? A SB Foodtech está pronta para te ajudar! Entre em contato
        conosco e descubra como podemos transformar o seu negócio.</p>
    <div class="container_socialMidia">
        <MidiasSociais :por_estenso="true" :email="true" :facebook="true" :instagram="true" :whatsapp="true"
            :telefone="true" :button="true" />
    </div>

</template>

<style scoped>
.container_socialMidia {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
}
</style>