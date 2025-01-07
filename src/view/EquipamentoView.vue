<script>
import { useRoute } from 'vue-router';
import BotaoPrincipal from '@/components/BotaoPrincipal.vue';
import ControladorEmCirculo from '@/components/ControladorEmCirculo.vue';
import equipamentos from '@/data/equipamentos';
import industrias from '@/data/industrias';
import tipo_equipamento from '@/data/tipo_equipamento';

export default {
    name: "EquipamentoView",
    data() {
        const rota = useRoute();

        const url = rota.path.split("/");
        const pagina = url[1];
        const identificador = url[2];

        return {
            pagina: pagina,
            identificador: identificador,
            equipamentos: equipamentos,
            industrias: industrias,
            tipo_equipamento: tipo_equipamento,
            equipamento:{
                nome:null,
                descricao:null,
                indsutria:null,
                tipo_equipamento:null,
                imagens:[]
            },
            imageSrc:false
        }
    },
    methods: {
        getObj()  {
            let objeto = this.equipamentos.find(equip => equip.id == this.identificador);
            let industria = this.industrias.find(ind => ind.id === objeto.industriaId);
            let tipo_equipamento = this.tipo_equipamento.find(tipo_quip => tipo_quip.id === objeto.tipoEquipamentoId);

            this.equipamento.nome = objeto.nome;
            this.equipamento.descricao = objeto.descricao;
            this.equipamento.indsutria = industria.nome;
            this.equipamento.tipo_equipamento = tipo_equipamento.nome;
            this.equipamento.imagens = objeto.imagens;

        },
        showImg(img){
            var nova_img = img;
            if(nova_img){
                nova_img = '/images/'+nova_img;
            }
            
            this.imageSrc = nova_img;
        }

    },
    mounted() {
        this.getObj();
    },
    components: { ControladorEmCirculo, BotaoPrincipal }
}
</script>

<template>
    <section>

        <template v-if="imageSrc">
            <div id=imagemFoco
                @click="showImg(false)"
            >
                <img :src="imageSrc"/>
            </div>
        </template>
        
        <div id="area_info">
            <h1>{{equipamento.nome}}</h1>
            <p>{{equipamento.descricao}}</p>
            <div id="cont_all_desc">
                <div class="container_desc">
                    <h2>Industria</h2>
                    <p>{{ equipamento.indsutria }}</p>
                </div>

                <div class="container_desc">
                    <h2>Tipo de Produto</h2>
                    <p>{{ equipamento.tipo_equipamento}}</p>
                </div>
            </div>
           
        </div>

        <div id="area_imagem">
            <div id="container_imagem">
                <img
                    class="midias equipamento"
                    v-for="imagem in equipamento.imagens"
                    @click="showImg(imagem)"
                    :src="'/images/'+imagem"
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