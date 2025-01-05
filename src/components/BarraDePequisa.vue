<script>
export default{
    name:"BarraDePesquisa",
    props:{
        lista:{
            type:Array,
            default:[]
        },
        mostraBotaoTodos:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        consulta(filtro){
            if(filtro){
                const filtro = document.querySelector("#input_pesquisa").value;
                this.$emit('itemSelecionado', filtro);
            }else{
                this.$emit('itemSelecionado', false);
            }
        }
    }
}
</script>
<template>
<div class="barra_de_pesquisa">
        <select
            name="input_pesquisa"
            id="input_pesquisa"
            list="listaObjetos"
        >
            <option value="0" disabled selected>
                Ecolha uma area de atuação
            </option>
            <option
                v-for="elemento in lista"
                :value="elemento.id">
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
#resgataTodos{
    text-transform: uppercase;
    color: var(--cor-branco);
}
.barra_de_pesquisa{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    background-color: var(--cor-laranja);
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 40px;
    margin-bottom: 40px;
}
.barra_de_pesquisa select{
    width: 85%;
    background-color: transparent;
    border-style: none;;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size:17px ;
    color:var(--cor-branco)
}
.barra_de_pesquisa select option{
    color: var(--cor-cinza);
    text-transform: uppercase
}.barra_de_pesquisa select option:disabled{
    color: transparent;
}
.button_cont button{
    background-color: transparent;
    border-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    min-width: 40px;
    cursor: pointer;
    transition: 0.5s;
}
.button_cont button:hover{
    background-color: rgb(191, 81, 2) ;
}
.button_cont button img{
    height: 16px;
}

.button_cont{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 15%;
}
@media (max-width: 500px) {
    .barra_de_pesquisa{
        width: 100%;
        flex-direction: column;
        margin-top: 0px;
        padding-top: 20px;
        padding-bottom: 20px;
    }
}
</style>