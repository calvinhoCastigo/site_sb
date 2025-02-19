<script src="./script.js" />
<template>
    <section id="banner">
        <div id="area_de_titulo">
            <h1>Nossos Projetos</h1>
            <p>Tem uma cozinha profissional ou pretende construir? Temos uma equipe de arquitetura especializada no
                segmento e pronta para atender às individualidades de cada negócio, garantindo maior produtividade,
                segurança alimentar e economia! Conheça nosso portfólio abaixo.</p>
            <BotaoPrincipal @click="scrollaAteMain" class="mobileHide">Veja Mais</BotaoPrincipal>
        </div>

        <img :src="banner" alt="">
    </section>
    <section id="elementos">
        <BarraDePequisa :lista="areasDeAtuacao" :mostraBotaoTodos="mostraBotaoTodos" @itemSelecionado="fetchProjetos">
            Selecione uma área de atuação</BarraDePequisa>

        <section v-for="areasDeAtuacao in listaRenderizacao" class="mainContainer">
            <h2>{{ areasDeAtuacao.nome }}</h2>
            <div class="container_projetos">
                <router-link class="projetos" v-for="projeto in areasDeAtuacao.projetos"
                    :to="'/projeto/' + projeto.id + '/' + projeto.nome">
                    <div class="img_container">
                        <img :src="'images/' + projeto.logo" :alt="'logo ' + projeto.logo.nomePuro" class="logo_empresa">
                        <!-- <img :src="'images/' + projeto.thumbnail"> -->
                        <img :src="'images/' + projeto.imagens[0]" alt="" srcset="">
                    </div>

                    <p>{{ }}</p>
                    <p>{{ projeto.nome }}</p>
                    <p>{{ projeto.local + " " + projeto.ano }}</p>
                </router-link>
            </div>

        </section>
    </section>
</template>

<style scoped>
@import url(styleBase.css);
@import url(styleMobile.css) (max-width: 778px) and (orientation:portrait);
@import url(styleDesktop.css) (min-width: 779px) and (orientation:landscape);
</style>