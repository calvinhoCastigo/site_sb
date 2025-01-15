<script>
import BotaoPrincipal from '@/components/mainButton/BotaoPrincipal.vue';
import FormularioContato from '@/components/FormularioContato.vue';
import FormularioContatoProvisorio from '@/components/FormularioContatoProvisorio.vue';
import FaleConosco from '@/components/home/FaleConosco.vue';

export default {
    name: "ContatoView",
    data() {
        const banner = import.meta.env.VITE_IMGBODY + 'banners/IMG_4982 JPG.png';
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
    }, components: { BotaoPrincipal, FaleConosco }
}
</script>

<template>
    <section id="banner">
        <div id="area_de_titulo">
            <h1>Fale Conosco</h1>
            <p>Ficou interessado em nossos produtos ou precisa contratar um projeto?
                Entre em contato conosco preenchendo o formulário abaixo. Um representante irá entrar em contato em até
                48h!
                Agradecemos a oportunidade.</p>
            <BotaoPrincipal @click="scrollaAteMain">Veja Mais</BotaoPrincipal>
        </div>

        <img :src="banner" alt="">
    </section>
    <section id="elementos">

        <!-- <FormularioContatoProvisorio/> -->
        <FaleConosco>
            <!-- <h1>Redes sociais</h1>
            <div class="container_ms">
                <MidiasSociais :por_estenso="true" :facebook="true" :instagram="true" :email="true" :whatsapp="true"
                    :telefone="true" :black="false" />
            </div> -->
        </FaleConosco>
    </section>
</template>

<style scoped>
@import url(styleBase.css);
@import url(styleMobile.css) (max-width: 778px) and (orientation:portrait);
@import url(styleDesktop.css) (min-width: 779px) and (orientation:landscape);
</style>