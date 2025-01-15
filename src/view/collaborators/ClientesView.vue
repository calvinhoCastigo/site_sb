<script src="./script.js" />

<template>
    <section id="banner">
        <div id="area_de_titulo">
            <h1>Nossos Clientes</h1>
            <p>Nossos clientes! São nosso portfólio, são quem nos possibilitam ser quem somos. Prover o sucesso deles é
                prover, também, o nosso sucesso. Nossa imensa gratidão pelas parcerias e pelas oportunidades, sempre.
            </p>
            <BotaoPrincipal @click="scrollaAteMain"  class="mobileHide">Veja Mais</BotaoPrincipal>
        </div>

        <img :src="banner" alt="">
    </section>
    <section id="elementos">
        <BarraDePequisa :lista="areasDeAtuacao" :mostraBotaoTodos="mostraBotaoTodos" @itemSelecionado="fetchClientes">
            Selecione uma área de atuação</BarraDePequisa>
        <section  class="mainContainer">
            <img v-for="cliente in clientesFiltrador" :src="'images/' + cliente.logo"
                :alt="'imagem ilustrando o logo do cliente ' + cliente.nome" class="cliente_img" />

        </section>
    </section>
</template>

<style scoped>
@import url(styleBase.css);
@import url(styleMobile.css) (max-width: 778px) and (orientation:portrait);
@import url(styleDesktop.css) (min-width: 779px) and (orientation:landscape);
</style>