<script src="./script.js" />
<template>
    <section>

        <template v-if="imageSrc">
            <div id=imagemFoco @click="showImg(false)">
                <img :src="imageSrc" />
            </div>
        </template>

        <div id="area_info">
            <h1>{{ equipamento.nome }}</h1>
            <p>{{ equipamento.descricao }}</p>
            <div id="cont_all_desc">
                <div class="container_desc">
                    <h2>Industria</h2>
                    <p>{{ equipamento.indsutria }}</p>
                </div>

                <div class="container_desc">
                    <h2>Tipo de Produto</h2>
                    <p>{{ equipamento.tipo_equipamento }}</p>
                </div>
            </div>

        </div>
        <div id="container_imagem">
            <img class="midias equipamento" v-for="imagem in equipamento.imagens" @click="showImg(imagem)"
                :src="'/images/' + imagem" />
        </div>
    </section>
</template>

<style scoped>
@import url(styleBase.css);
@import url(styleMobile.css) (max-width: 778px) and (orientation:portrait);
@import url(styleDesktop.css) (min-width: 779px) and (orientation:landscape);
</style>