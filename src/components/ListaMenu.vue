<script >
import { ref } from 'vue';
import { RouterView } from 'vue-router';

    export default{
        props:{
            horizontal:{
                type: Boolean,
                default: true,
            },
            mobile:{
                type: Boolean,
                default: false
            }
        },data(){
            return  {
                paginas : ref([{
                    nome:'EQUIPAMENTOS',
                    acesso:'equipamentos',
                },{
                    nome:'PROJETOS',
                    acesso:'projetos',
                },{
                    nome:'CLIENTES',
                    acesso:'clientes',
                }
            ])}
        }

    }
    
</script>

<template>
    <a>
        <router-link v-if="mobile" to="/">
            Inicio
        </router-link>
        <router-link v-for="pagina in paginas" :to="pagina.acesso">
            {{ pagina.nome }}
        </router-link>
    </a>
</template>

<style scoped>
a{
    color: var(--cor-branco) !important;
    text-decoration: none;
    text-transform: uppercase;
}
   
@media (min-width: 501px) {
    a{
        font-size: 16px;
        border-style: none;
        text-align: start;
        cursor: pointer;
        text-decoration: none;
        margin-right: 20px;
        margin-top: 10px;
   }
}

@media (max-width: 500px) {
    a{
        margin-right: 0px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 20px;
    }
}

</style>