<script>
import FormularioContato from '../FormularioContato.vue';
import MidiasSociais from '../MidiasSociais.vue';
import FaleConosco from '../home/FaleConosco.vue';

export default {
    name: "PaginaContato"
    ,components:{ FormularioContato, MidiasSociais, FaleConosco }
}
</script>

<template>
    <FaleConosco>
        <h1>Redes sociais</h1>
        <div class="container_ms">
            <MidiasSociais
                :por_estenso="true"
                :facebook="true"
                :instagram="true"
                :email="true"
                :whatsapp="true"
                :telefone="true"
                :black="false"
            />
        </div>
    </FaleConosco>
    
</template>

<style scoped>
    section{
        margin-top: 100px;
        margin-bottom: 100px;
        height: 100%;
    }
    .container_ms{
        display:flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: var(--largura-bloco-padrao);
        width: 100%;
    }
    h1{
        margin-top: 25px;
        margin-bottom: 25px;
    }
</style>