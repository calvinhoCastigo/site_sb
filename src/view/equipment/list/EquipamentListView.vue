<script src="./script.js" />

<template>
    <section id="banner">
        <div id="area_de_titulo">
            <h1>Equipamentos</h1>
            <p>Toda nossa curadoria de representação foi escolhida a dedo! Representamos marcas padrão A de fabricação
                nacional! Oferecemos soluções desde equipamentos, mobiliários, vitrines, coifas, sistemas de exaustão e
                muito mais. Conheça abaixo!</p>
            <BotaoPrincipal @click="scrollaAteMain" class="mobileHide">Veja Mais</BotaoPrincipal>
        </div>

        <img :src="banner" alt="">
    </section>
    <section id="elementos">
        <BarraDePequisa :lista="tipo_equipamento" :mostraBotaoTodos="mostraBotaoTodos"
            @itemSelecionado="fetchTiposEquipamentosComEquipamentos"> Selecione o tipo de equipamento</BarraDePequisa>

        <section v-for="tipoEquipamento in listaRenderizacao" class="mainContainer">
            <h2>{{ tipoEquipamento.nome }}</h2>
            <div class="container_equipamentos">
                <router-link class="equipamento" v-for="equipamento in tipoEquipamento.equipamentos"
                    :to="'/equipamento/' + equipamento.id + '/' + equipamento.nome.replace('', '_')">
                    <img :src="'images/' + equipamento.imagens[0]" alt="">
                    <p>{{ equipamento.nome }}</p>
                    <p>{{ equipamento.industria }}</p>
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