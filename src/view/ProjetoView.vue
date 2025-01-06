<script>
import BotaoPrincipal from '@/components/BotaoPrincipal.vue';
import PaginaProjetos from '@/components/paginas/PaginaProjetos.vue';

export default {
    name: "ProjetoView",
    data() {
        const banner = import.meta.env.VITE_IMGBODY + 'banners/bannerarquit.png';
        return {
            banner: banner
        }
    }, methods: {
        scrollaAteMain: () => {
            document.querySelector('#elementos').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, components: { BotaoPrincipal, PaginaProjetos }
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
        <PaginaProjetos/>
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