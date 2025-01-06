<script>
import { useRoute } from 'vue-router';
import axios from 'axios';
import BotaoPrincipal from '@/components/BotaoPrincipal.vue';
import ControladorEmCirculo from '@/components/ControladorEmCirculo.vue';

export default {
    name: "ObjetoView",
    data() {
        return {
            padrao: {
                url: null,
                rota: null,
                pagina:null,
                titulos:{
                    filiacao:null,
                    categoria:null
                },
                controladorCirculo:false
            
            },
            objeto: {
                id:null,
                nome:null,
                local:null,
                detalhe:null,
                imagens:[],
                categoria:{},
                filiacao:{}
            },
            rota_publica:import.meta.env.VITE_PUBLICURL,
            imageSrc:false
        }
    },
    methods: {
        async setPadrao(rota, padrao) {
            padrao.url = rota.path.split("/");
            padrao.pagina = padrao.url[1];
            switch (padrao.pagina) {
                case 'equipamento':
                    padrao.rota = import.meta.env.VITE_GET_EQUIPAMENTO + padrao.url[2];
                    padrao.titulos.filiacao = "Industria";
                    padrao.titulos.categoria = "Tipo de Produto";
                    padrao.controladorCirculo = false;
                    break;
                case 'projeto':
                    padrao.rota = import.meta.env.VITE_GET_PROJETO + padrao.url[2];
                    padrao.titulos.filiacao = "Cliente";
                    padrao.titulos.categoria = "Area de atuação";
                    padrao.controladorCirculo = true;
                    break;
                default:
                    padrao = false;
                    break;
            }
        },
        getObj: async (padrao,objeto) => {
            try {
                const response = await axios.get(padrao.rota);
                const objetoResponse = response.data;
                
                objeto.id = objetoResponse.id;
                objeto.nome = objetoResponse.nome;
                objeto.descricao = objetoResponse.descricao;
                objetoResponse.imagens.forEach(imagem => {
                    objeto.imagens.push(imagem); 
                });

                switch (padrao.pagina) {
                    case 'equipamento':
                        
                        objeto.categoria = objetoResponse.tipoEquipamento.nome;
                        objeto.filiacao = objetoResponse.industria.nome;

                        break;
                    case 'projeto':
                        objeto.local = objetoResponse.local;
                        objeto.categoria = objetoResponse.areaDeAtuacao.nome;
                        objeto.filiacao = objetoResponse.nome;

                        break;
                    default:
                        padrao = false;
                        break;
                }
            }
            catch (error) {
                padrao.objeto = "ERRO NA CONEXÃO : " + error;
            }
        },
        showImg(img){
            var nova_img = img;
            if(nova_img){
                nova_img = this.rota_publica+img
            }
            
            this.imageSrc = nova_img;
        }

    },
    mounted() {
        const rota = useRoute();
        this.setPadrao(rota, this.padrao);
        this.getObj(this.padrao,this.objeto);
    },
    components: { ControladorEmCirculo, BotaoPrincipal }
}
</script>

<template>
    <section v-if="padrao != false">

        <template v-if="imageSrc">
            <div id=imagemFoco
                @click="showImg(false)"
            >
                <img :src="imageSrc"/>
            </div>
        </template>
        
        <div id="area_info">
            <h1>{{objeto.nome}}</h1>
            <h2>{{objeto.local}}</h2>
            <p>{{objeto.descricao}}</p>
            <div id="cont_all_desc">
                <div class="container_desc">
                    <h2>{{ padrao.titulos.filiacao }}</h2>
                    <p>{{ objeto.filiacao }}</p>
                </div>

                <div class="container_desc">
                    <h2>{{ padrao.titulos.categoria  }}</h2>
                    <p>{{ objeto.categoria }}</p>
                </div>
            </div>
           
        </div>

        <div id="area_imagem">
            <div id="container_imagem">
                <img
                    :class="'midias '+padrao.pagina"
                    v-for="imagem in objeto.imagens"
                    @click="showImg(imagem.caminho+imagem.nome)"
                    :src="rota_publica+imagem.caminho+imagem.nome"
                    :alt="imagem.nome"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
section{
    width: 100%;
    max-width: var(--largura-bloco-padrao);
    display: flex;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 100px;
    justify-content: flex-start;
    flex-direction: column;
    max-width: 620px;
}
.midias{
    width: 45%;
    border-width: 2px;
    border-style: solid;
    border-color: var(--cor-laranja);
    box-shadow: -15px 20px 0px 0px var(--cor-laranja);
    margin-bottom: 50px;
    transition: 0.5s;
    cursor: pointer;
}
.midias:hover{
    transform: scale(1.02)
}
.container_desc h2{
    margin-bottom: 0px;
}
.container_desc{
    margin-bottom: 20px;
}
.container_desc p{
    text-transform: uppercase;
    margin-top: 0px;
}
.cont_img img{
    height: 100px;
    border-radius: 20%;
    background-color: var(--cor-cinza);
}
#cont_all_desc{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}
#container_imagem{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    max-width: var(--largura-bloco-padrao)
}   
@media (max-width: 600px) {
    #area_info{
        width: 95%;
    }
    .midias{
        width: 95%;
    }
}
#imagemFoco{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width:100%;
    height: 100%;
    z-index: 11;
    background:rgba(000,000,000,0.7);
    top: 0;
    cursor: pointer
}
#imagemFoco img{
    max-width: 90%;
    max-height: 90%;
}

</style>