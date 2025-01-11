<script>
import BotaoPrincipal from '@/components/BotaoPrincipal.vue';
import BarraDePequisa from '@/components/BarraDePequisa.vue';
import area_de_atuacao from '@/data/area_de_atuacao';
import projetos from '@/data/projetos';

export default {
    name: "ProjetosView",
    data() {
        const banner = import.meta.env.VITE_IMGBODY + 'banners/Alameda dos Poemas - Imagem 02 REV01.png';
        return {
            banner: banner,
            mostraBotaoTodos: false,
            projetos: projetos,
            areasDeAtuacao: area_de_atuacao,
            listaRenderizacao: [],
        }
    }, methods: {
        scrollaAteMain: () => {
            document.querySelector('#elementos').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        },
        fetchProjetos: async function ( filtro) {
            this.mostraBotaoTodos = filtro ? true : false;
            try {
                if (filtro) {
                    this.listaRenderizacao = this.areasDeAtuacao.filter(area_de_atuacao => area_de_atuacao.id == filtro);
                    this.listaRenderizacao[0].projetos = this.projetos.filter(projetos => projetos.areaDeAtucaoId == filtro);
                } else {
                    this.areasDeAtuacao.forEach( (ada) => {
                        let area_de_atuacao = {
                            nome: ada.nome, projetos : this.projetos.filter(projetos => projetos.areaDeAtucaoId == ada.id)
                        }
                        this.listaRenderizacao.push(area_de_atuacao)
                    })
                }
            }
            catch (error) {
                return console.log("ERRO: "+error);
            }
        }
    },
    mounted() {
        this.fetchProjetos(false);
    }, components: { BotaoPrincipal, BarraDePequisa }
}
</script>

<template>
    <section id="banner">
        <div id="area_de_titulo">
            <h1>Nossos Projetos</h1>
            <p>Tem uma cozinha profissional ou pretende construir? Temos uma equipe de arquitetura especializada no segmento e pronta para atender às individualidades de cada negócio, garantindo maior produtividade, segurança alimentar e economia! Conheça nosso portfólio abaixo.</p>
            <BotaoPrincipal @click="scrollaAteMain">Veja Mais</BotaoPrincipal>
        </div>

        <img :src="banner" alt="">
    </section>
    <section id="elementos">
        <BarraDePequisa
            :lista="areasDeAtuacao"
            :mostraBotaoTodos="mostraBotaoTodos"
            @itemSelecionado="fetchProjetos"
        >Selecione uma área de atuação</BarraDePequisa>

        <section v-for="areasDeAtuacao in listaRenderizacao">
            <h2>{{ areasDeAtuacao.nome }}</h2>
            <div class="container_projetos">    
                <router-link
                    class="projetos"
                    v-for="projeto in areasDeAtuacao.projetos"
                    :to="'/projeto/' + projeto.id + '/' + projeto.nome"
                >
                <div class="img_container">
                    <img :src="'images/'+projeto.logo" :alt="'logo '+projeto.logo.nomePuro" class="logo_empresa">
                    <img :src="'images/'+projeto.imagens[0]">
                </div>
                    
                    <p>{{  }}</p>
                    <p>{{projeto.nome }}</p>
                    <p>{{ projeto.local +" "+ projeto.ano }}</p>
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


#elementos{
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
    #elementos{
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






main{
    width: 100%;
}
.logo_empresa{
    position: absolute;
    opacity: 0%;
    transition: 0.5s;
}
.logo_empresa:hover{
    opacity: 100%;
}
.img_container{
    display: flex;
    justify-content: center;
    align-items: center;
}


.projetos {
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
}

.projetos img {
    width: 350px;
}

a{
   text-decoration:none;  
}
.projetos p{
    text-decoration:none;  
    color: var(--cor-preto);
    font-size: 16px;
}
.projetos p{
    text-transform: uppercase;
    margin-bottom: 0px;
    font-family: "VinSansPro-Bold";
}
.projetos p:last-child{
    margin-top: 0px;
    font-family: "VinSansPro-Regular";
}
.projetos:hover {
    border-color: var(--cor-laranja);
}

section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 20px;
    overflow-x: hidden;
    width: 100%;
}
section:first-child{
    margin-top: 20px;
}
.container_projetos{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
}
.container_imagem {
  height: 40px;
  width: 40px;
  background-color: var(--cor-cinza);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: var(--cor-laranja);
  border-width: 5px;
}
.container_imagem img {
  width: 45%;
}
.titulo_setor{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px;  
    border-bottom-style: solid;
    border-bottom-color: var(--cor-laranja);
    border-bottom-width: 5px;
}
h2{
    width: 100%;
    background-color: var(--cor-laranja);
    color:var(--cor-branco);
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;

}
@media (max-width: 600px){
    section{
        align-items: center;
    }
    .container_imagem, .titulo_setor{
        max-width: 90%;
    }
    .projetos img{
        width: 320px;
    }
    .container_projetos{
        width: 90%;
    }
    .container_projetos{
        justify-content: center;
    }
}
</style>