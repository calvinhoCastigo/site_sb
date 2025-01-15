<script src="./script.js" />
<template>
    <section>

        <template v-if="imageSrc">
            <div id=imagemFoco @click="showImg(false)">
                <img :src="imageSrc" />
            </div>
        </template>

        <div id="area_info">
            <h1>{{ projeto.nome }}</h1>
            <h2>{{ projeto.local }}</h2>
            <p>{{ projeto.descricao }}</p>
            <div id="cont_all_desc">
                <div class="container_desc">
                    <h2>Cliente</h2>
                    <p>{{ projeto.nome }}</p>
                </div>

                <div class="container_desc">
                    <h2>Area de atuação</h2>
                    <p>{{ projeto.areaAtuacao }}</p>
                </div>
            </div>

        </div>

        <div id="container_imagem">
            <img class="midias equipamento" v-for="imagem in projeto.imagens" @click="showImg(imagem)"
                :src="'/images/' + imagem" />
        </div>
    </section>
</template>

<style scoped>
@import url(styleBase.css);
@import url(styleMobile.css) (max-width: 778px) and (orientation:portrait);
@import url(styleDesktop.css) (min-width: 779px) and (orientation:landscape);
</style>