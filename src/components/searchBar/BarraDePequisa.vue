<script src="./script.js" />
<template>
    <div class="barra_de_pesquisa">
        <select name="input_pesquisa" id="input_pesquisa" list="listaObjetos">
            <option value="0" disabled selected>
                <slot></slot>
            </option>
            <option v-for="elemento in lista" :value="elemento.id">
                {{ elemento.nome }}
            </option>
        </select>
        <div class="button_cont">
            <button v-on:click="consulta(true)">
                <img :src="'icons/magnifying-glass-solid.svg'" alt="" srcset="">
            </button>
            <button v-on:click="consulta()" id="resgataTodos" v-if="mostraBotaoTodos">
                Todos
            </button>
        </div>
    </div>
</template>
<style scoped>
@import url(styleBase.css);
@import url(styleMobile.css) (max-width: 778px) and (orientation:portrait);
@import url(styleDesktop.css) (min-width: 779px) and (orientation:landscape);
</style>