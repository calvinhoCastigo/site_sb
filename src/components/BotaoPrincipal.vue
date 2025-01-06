<script>
export default{
    name:"BotaoPrincipal",
    props:{
        fillBg : {
            type : Boolean,
            default : true
        },
        rota:{
            type: String,
            default : 'botao'
        }
    },methods:{
        claroEscuro:function(){
            return this.fillBg?'prenchindo':'naoPrenchido'
        },
        verificaRota:function(){
            if(this.rota[0] == '/'){
                return 'a';
            } else if(this.rota == 'botao') {
                return 'botao'
            }else{
                return 'botao';
            }
        }
    }
}
</script>

<template>
   <button :class="claroEscuro()" v-if="verificaRota() === 'botao'">
        <slot></slot>
   </button>
   <router-link :to="rota" :class="claroEscuro()" v-else-if="verificaRota() === 'a'">
    <slot></slot>
   </router-link>

</template>


<style scoped>
.prenchindo{
    background-color: var(--cor-laranja);
    color: var(--cor-branco);
}
.prenchindo:hover{
    background-color: transparent;
}
.naoPrenchido{
    background-color: transparent;
    color: var(--cor-preto);
}
.naoPrenchido:hover{
    background-color: var(--cor-laranja) ;
    color: var(--cor-branco)
}
button, a, input[type='submit']{
    font-size: 16px;
    text-align: center;
    border-radius: 20px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 14px;
    padding-right: 14px;
    border-style: solid;
    border-width: 4px;
    border-color: var(--cor-laranja);
    cursor: pointer;
    transition: 0.5s;
    font-family:VinSansPro-Bold;
}
a{
    text-decoration: none;
}
@media (max-width: 501px) {
    button, a, input[type='submit']{
        font-size: 16px;
        border-width: 6px;
        padding-top: 6px;
        padding-bottom: 6px;
        padding-left: 16px;
        padding-right: 16px;
        border-radius: 26px;
    }
}
</style>