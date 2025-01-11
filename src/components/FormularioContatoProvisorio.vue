<script>
import BotaoPrincipal from './BotaoPrincipal.vue';
import MidiasSociais from './MidiasSociais.vue';

export default {
    name: "FormularioContatoProvisorio",
    data() {
        return {
        }
    },
    methods: {
        
    }, components: { BotaoPrincipal, MidiasSociais}
}

</script>

<template>
    <h1>Fale Conosco</h1>
    <p>Quer inovar no seu negócio com soluções em Foodtech? A SB Foodtech está pronta para te ajudar! Entre em contato conosco e descubra como podemos transformar o seu negócio.</p>
    <MidiasSociais 
        :por_estenso="true"
        :email="true"
        :facebook="true"
        :instagram="true"
        :whatsapp="true"
        :telefone="true"
        :button="true"
    />
</template>

<style scoped>
@media (max-width: 500px) {
    
}
</style>