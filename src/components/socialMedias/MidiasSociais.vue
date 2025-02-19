<script src="./script.js" />
<template>
    <div v-for="contato in contatos" class="contatos">
        <template v-if="this.button">
            <a :href="contato.link" target="_blank" v-if="verficaRede(contato)" class="button">
                <img v-if="black" :src="'/icons/' + contato.svg_black" :alt="contato.nome" />
                <img v-else :src="'/icons/' + contato.svg" :alt="contato.nome" />
                <span v-if="por_estenso">{{ contato.acesso }}</span>
            </a>
        </template>
        <template v-else>
            <template v-if="verficaRede(contato)">
                <a :href="contato.link" target="_blank">
                    <img v-if="black" :src="'/icons/' + contato.svg_black" :alt="contato.nome" />
                    <img v-else :src="'/icons/' + contato.svg" :alt="contato.nome" />
                </a>
                <span v-if="por_estenso">{{ contato.acesso }}</span>
            </template>
        </template>

    </div>
</template>
<style scoped>
@import url(styleBase.css);
@import url(styleMobile.css) (max-width: 778px) and (orientation:portrait);
@import url(styleDesktop.css) (min-width: 779px) and (orientation:landscape);
</style>