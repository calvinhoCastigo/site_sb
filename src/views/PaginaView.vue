<script>
import BotaoPrincipal from '@/components/BotaoPrincipal.vue';
import PaginaContato from '@/components/paginas/PaginaContato.vue';
import PaginaClientes from '@/components/paginas/PaginaClientes.vue';
import { useRoute } from 'vue-router';
import PaginaProjetos from '@/components/paginas/PaginaProjetos.vue';
import PaginaEquipamentos from '@/components/paginas/PaginaEquipamentos.vue';

export default {
    name: "PaginaView",
    data() {
        return {
            padrao: {
                titulo: null,
                subtitulo: null,
                banner: null,
                rota: null
            }
        }
    }, methods: {
        setPadrao: (rota, padrao) => {
            switch (rota.path) {
                case '/clientes':
                    padrao.titulo = "Nossos Clientes";
                    padrao.subtitulo = "Nossos clientes! São nosso portfólio, são quem nos possibilitam ser quem somos. Prover o sucesso deles é prover, também, o nosso sucesso. Nossa imensa gratidão pelas parcerias e pelas oportunidades, sempre.";
                    padrao.banner = import.meta.env.VITE_IMGBODY + 'banners/bannerclientes.png';
                    padrao.rota = rota.path;
                    break;
                case '/projetos':
                    padrao.titulo = "Nossos Projetos";
                    padrao.subtitulo = "Tem uma cozinha profissional ou pretende construir? Temos uma equipe de arquitetura especializada no segmento e pronta para atender às individualidades de cada negócio, garantindo maior produtividade, segurança alimentar e economia! Conheça nosso portfólio abaixo.";
                    padrao.banner = import.meta.env.VITE_IMGBODY + 'banners/bannerarquit.png';
                    padrao.rota = rota.path;
                    break;
                case '/equipamentos':
                    padrao.titulo = "Equipamentos";
                    padrao.subtitulo = "Toda nossa curadoria de representação foi escolhida a dedo! Representamos marcas padrão A de fabricação nacional! Oferecemos soluções desde equipamentos, mobiliários, vitrines, coifas, sistemas de exaustão e muito mais. Conheça abaixo!";
                    padrao.banner = import.meta.env.VITE_IMGBODY + 'banners/bannerequip.png';
                    padrao.rota = rota.path;
                    break;
                case '/contatos': {
                    padrao.titulo = "Fale Conosco";
                    padrao.subtitulo = `Ficou interessado em nossos produtos ou precisa contratar um projeto? 
                                        Entre em contato conosco preenchendo o formulário abaixo. Um representante irá entrar em contato em até 48h! 	
                                        Agradecemos a oportunidade.`;
                    padrao.banner = import.meta.env.VITE_IMGBODY + 'banners/bg1.jpg';
                    padrao.rota = rota.path;
                    break;
                }
                default:
                    padrao = false;
                    break;
            }
        },
        scrollaAteMain: () => {
            document.querySelector('#elementos').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, mounted() {
        const rota = useRoute();
        this.setPadrao(rota, this.padrao);
    }, components: { BotaoPrincipal, PaginaClientes, PaginaContato, PaginaProjetos, PaginaEquipamentos }
}
</script>

<template>
    <section id="banner">
        <div id="area_de_titulo">
            <h1>{{ padrao.titulo }}</h1>
            <p>{{ padrao.subtitulo }}</p>
            <BotaoPrincipal @click="scrollaAteMain">Veja Mais</BotaoPrincipal>
        </div>

        <img :src="padrao.banner" alt="">
    </section>
    <section id="elementos">
        <PaginaClientes v-if="padrao.rota == '/clientes'" />
        <PaginaProjetos v-else-if="padrao.rota == '/projetos'"/>
        <PaginaEquipamentos v-else-if="padrao.rota == '/equipamentos'" />
        <PaginaContato v-else-if="padrao.rota == '/contatos'" />
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
</style>