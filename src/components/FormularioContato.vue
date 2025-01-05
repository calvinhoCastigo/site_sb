<script>
import { ref } from 'vue';
import TheMask from 'vue-the-mask';
import BotaoPrincipal from './BotaoPrincipal.vue';
import axios from 'axios';

export default {
    name: "FormularioContato",
    props:{
        labels:{
            type:Boolean,
            default:true
        },
        fundoClaro:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            formulario: {
                nome: null,
                email: null,
                cpfPj: null,
                telefone: null,
                mensagem: null
            }
        }
    },
    methods: {
        submitForm: async function (e) {
            e.preventDefault();
            try {
                const url = import.meta.env.VITE_EMAIL;
                const response = await axios.post('/email',{
                    nome:this.formulario.nome,
                    email:this.formulario.email,
                    cpfPj:this.formulario.cpfPj,
                    telefone:this.formulario.telefone,
                    mensagem:this.formulario.mensagem
                });
                console.log(response);
            } catch (error) {
                
            }
        },
        claroEscuro(){
            return this.fundoClaro? 'claro': 'escuro'
        },
    }, components: { BotaoPrincipal, TheMask}
}

</script>

<template>
    <form @submit.prevent="submitForm" :class="claroEscuro()">
        
        <label for="nome" v-if="labels">
            <span>Nome: </span>
        </label>
        <input type="text" id="nome" placeholder="Nome" v-model="formulario.nome" required>

        <label for="email" v-if="labels">
            <span>E-mail: </span>
        </label>
        <input type="email" id="email" placeholder="Email" v-model="formulario.email" required>

        <label for="cpf_cnpj" v-if="labels">
            <span>CPF/CNPJ: </span>
        </label>
        <input
            type="text" id="cpf_cnpj"
            placeholder="CPF ou CNPJ"
            v-mask="['###.###.###-##', '##.###.###/####-##']" 
            v-model="formulario.cpfPj" required>

        <label for="telefone" v-if="labels">
            <span>Telefone: </span>
        </label>
        <input
            type="text"
            id="telefone"
            placeholder="Telefone"
            v-mask="['(##) ####-#####']"
            v-model="formulario.telefone" required>
        
        <label for="mensagem" v-if="labels">
            <span>Mensagem: </span>
        </label>
        <textarea
            name="mensagem"
            id="mensagem"
            placeholder="Mensagem"
            v-model="formulario.mensagem">
        </textarea>

        <BotaoPrincipal :fillBg="true" rpta="'submit'">Enviar</BotaoPrincipal>
    </form>
</template>

<style scoped>
form {
    width: 100%;
    color: var(--cor-branco);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
}
.escuro input, textarea{
    border-style: none;
}
.escuro label span{
    color: var(--cor-branco);
}
.claro input, textarea{
    border-style: solid;
    border-width: 2px;
}
.claro label span{
    color: var(--cor-preto) !important;
}
input, textarea {
    margin-bottom: 20px;
    width: 80%;
    border-radius: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 12px;
    padding-right: 12px;
    background-color: var(--cor-branco);
    margin-top: 10px;
}
textarea{
    
    padding-top: 8px;
    padding-bottom: 8px;
}

@media (max-width: 500px) {
    input {
        height: 25px;
    }
    label{
        display: flex;
        width: 90%;
    }
    label span{
        font-size: 24px;
        text-align: start;
    }
    form {
        width: 90%;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 80px
    }
}
</style>