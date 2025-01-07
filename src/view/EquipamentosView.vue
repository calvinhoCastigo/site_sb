<script>
import BotaoPrincipal from '@/components/BotaoPrincipal.vue';
import BarraDePequisa from '@/components/BarraDePequisa.vue';
import equipamentos from '@/data/equipamentos';
import tipo_equipamento from '@/data/tipo_equipamento';

export default {
    name: "EquipamentosView",
    data() {
        const banner = import.meta.env.VITE_IMGBODY + 'banners/bannerequip.png';
        return {
            banner: banner,
            tipo_equipamento: tipo_equipamento,
            equipamentos: equipamentos,
            listaRenderizacao: [],
            equipamentosFiltrados: false,
            mostraBotaoTodos: false,
        }
    }, methods: {
        scrollaAteMain: () => {
            document.querySelector('#elementos').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        },
        fetchTiposEquipamentosComEquipamentos: async function (filtro) {
            this.mostraBotaoTodos = filtro ? true : false;
            try {
                if (filtro) {
                    this.listaRenderizacao = this.tipo_equipamento.filter(te => te.id == filtro);
                    this.listaRenderizacao[0].equipamentos = this.equipamentos.filter(equipamentos => equipamentos.tipoEquipamentoId == filtro);
                } else {
                    this.tipo_equipamento.forEach( (tde) => {
                        let te = {
                            nome: tde.nome, equipamentos : this.equipamentos.filter(equipamentos => equipamentos.tipoEquipamentoId == tde.id)
                        }
                        this.listaRenderizacao.push(te)
                    })
                }
                }
            catch (error) {
                console.log("ERRO: " + error);
            }
        }
    }, mounted() {
        this.fetchTiposEquipamentosComEquipamentos();
    }, components: { BotaoPrincipal, BarraDePequisa }
}
</script>

<template>
    <section id="banner">
        <div id="area_de_titulo">
            <h1>Equipamentos</h1>
            <p>Toda nossa curadoria de representação foi escolhida a dedo! Representamos marcas padrão A de fabricação
                nacional! Oferecemos soluções desde equipamentos, mobiliários, vitrines, coifas, sistemas de exaustão e
                muito mais. Conheça abaixo!</p>
            <BotaoPrincipal @click="scrollaAteMain">Veja Mais</BotaoPrincipal>
        </div>

        <img :src="banner" alt="">
    </section>
    <section id="elementos">
        <BarraDePequisa :lista="tipo_equipamento" :mostraBotaoTodos="mostraBotaoTodos"
        @itemSelecionado="fetchTiposEquipamentosComEquipamentos"> Selecione o tipo de equipamento</BarraDePequisa>

        <section v-for="tipoEquipamento in listaRenderizacao">
            <h2>{{ tipoEquipamento.nome }}</h2>
            <div class="container_equipamentos">
                <router-link
                    class="equipamento"
                    v-for="equipamento in tipoEquipamento.equipamentos"
                    :to = "'/equipamento/' + equipamento.id + '/' + equipamento.nome.replace('','_')"
                >
                    <img
                        :src="'images/'+equipamento.imagens[0]"
                        alt=""
                    >
                    <p>{{ equipamento.nome }}</p>
                    <p>{{ equipamento.industria }}</p>
                </router-link>
            </div>
        </section>
    </section>
</template>

<style scoped>
#banner {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    max-width: 100% !important;
    background-color: black;
    overflow: hidden;
}

#area_de_titulo {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    position: absolute;
    color: var(--cor-branco);
    z-index: 2;
}

#area_de_titulo h1 {
    text-align: right;
    margin-bottom: 10px;
}

#area_de_titulo p {
    text-align: right;
}


#elementos {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: var(--largura-bloco-padrao);
}

@media (min-width: 501px) {
    #banner img {
        width: 100%;
    }

    #area_de_titulo {
        top: 23%;
        right: 20%;
    }

    #area_de_titulo h1 {
        font-size: max(100px);
        max-width: 400px;
    }

    #area_de_titulo p {
        font-size: 25px;
        max-width: 400px;
    }

    #elementos {
        margin-top: 50px;
    }
}

@media (max-width: 500px) {
    #banner img {
        height: 100%;
        filter: brightness(50%);
    }

    #area_de_titulo {
        top: 15%;
        right: 6%;
    }

    #area_de_titulo h1 {
        font-size: 360%;
        max-width: 300px;
        text-align: right;
    }

    #area_de_titulo p {
        font-size: 40px;
    }
}



h2{
    width: 100%;
    background-color: var(--cor-laranja);
    color:var(--cor-branco);
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;

}
.equipamento {
    transition: 0.5s;
    cursor: pointer;
    border-style: solid;
    border-width: 5px;
    border-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    width: 200px;
}

.equipamento img {
    width: 200px;
}

a{
   text-decoration:none;  
}
.equipamento p{
    text-decoration:none;  
    color: var(--cor-preto);
    font-size: 16px;
    text-align: center;
}
.equipamento p{
    margin-bottom: 0px;
    font-family: "VinSansPro-Bold";
}
.equipamento p:last-child{
    margin-top: 0px;
    font-family: "VinSansPro-Regular";
}
.equipamento:hover {
    border-color: var(--cor-laranja);
}

.container_equipamentos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
}

@media (min-width: 601px) {
    section:first-child {
        margin-top: 20px;
    }

    section {
        max-width: var(--largura-bloco-padrao);
        width: 100%;
    }

}

@media (max-width: 600px) {
    section {
        width: 90%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }
    .container_equipamentos{
        justify-content: center;
    }
}
</style>