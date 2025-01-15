<script src="./script.js" />
<template>
    <button :class="claroEscuro()" v-if="verificaRota() === 'botao'">
        <slot></slot>
    </button>
    <router-link :to="rota" :class="claroEscuro()" v-else-if="verificaRota() === 'a'">
        <slot></slot>
    </router-link>

</template>
<style scoped>
@import url(styleBase.css);
@import url(styleMobile.css) (max-width: 778px) and (orientation:portrait);
@import url(styleDesktop.css) (min-width: 779px) and (orientation:landscape);
</style>