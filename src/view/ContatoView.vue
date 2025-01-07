<script>
import BotaoPrincipal from '@/components/BotaoPrincipal.vue';
import FormularioContato from '@/components/FormularioContato.vue';
import MidiasSociais from '@/components/MidiasSociais.vue';
import FaleConosco from '@/components/home/FaleConosco.vue';

export default {
    name: "ContatoView",
    data() {
        const banner = import.meta.env.VITE_IMGBODY + 'banners/bg1.jpg';
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
    }, components: { BotaoPrincipal, FormularioContato,MidiasSociais,FaleConosco }
}
</script>

<template>
    <section id="banner">
        <div id="area_de_titulo">
            <h1>Fale Conosco</h1>
            <p>Ficou interessado em nossos produtos ou precisa contratar um projeto? 
                Entre em contato conosco preenchendo o formulário abaixo. Um representante irá entrar em contato em até 48h! 	
                Agradecemos a oportunidade.</p>
            <BotaoPrincipal @click="scrollaAteMain">Veja Mais</BotaoPrincipal>
        </div>

        <img :src="banner" alt="">
    </section>
    <section id="elementos">
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