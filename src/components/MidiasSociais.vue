<script >
import { ref } from 'vue';

    export default{
        name:'MidiasSociais',
        props:{
            black:{
                type: Boolean,
                default: false
            },
            por_estenso:{
                type: Boolean,
                default: false,
            },
            facebook:{
                type: Boolean,
                default: false,
            },

            instagram:{
                type: Boolean,
                default: false,
            },
            email:{
                type: Boolean,
                default: false,
            },

            whatsapp:{
                type: Boolean,
                default: false,
            },

            telefone:{
                type: Boolean,
                default: false,
            },

            button:{
                type: Boolean,
                default: false
            }
        },data(){
            return  {
                contatos : ref([
                {
                    nome:'Whatsapp',
                    acesso:'65 98134-0077',
                    link:'https://api.whatsapp.com/send?phone=556581340077',
                    svg:'whatsapp.svg',
                    svg_black:'whatsapp-black.svg'
                },
                {
                    nome:'Instagram',
                    acesso:'@sbfoodtech',
                    link:'https://www.instagram.com/sbfoodtech/',
                    svg:'instagram.svg',
                    svg_black:'instagram-black.svg'
                },
                {
                    nome:'Facebook',
                    acesso:'sbfoodtech',
                    link:'https://www.facebook.com/sbfoodtech/',
                    svg:'facebook.svg',
                    svg_black:'facebook-black.svg'
                },

                {
                    nome:'Email',
                    acesso:'contato@sbfoodtech.com.br',
                    link:null,
                    svg:'envelope-regular.svg',
                    svg_black:'envelope-regular-black.svg'
                },
                {
                    nome:'Telefone',
                    acesso:'65 3637-3130',
                    link:null,
                    svg:'phone-solid.svg',
                    svg_black:'phone-solid-black.svg'
                },
            ])}
        }, methods:{
            verficaRede(contato){
                switch (contato.nome) {
                    case 'Facebook':
                        return this.facebook;
                    case 'Instagram':
                        return this.instagram;
                    case 'Email':
                        return this.email;
                    case 'Whatsapp':
                        return this.whatsapp;
                    case 'Telefone':
                        return this.telefone;
                    default:
                        return true;
                }
            }
        }

    }
    
</script>

<template>
     <div v-for="contato in contatos" class="contatos" >
        <template v-if="this.button">
            <a
                :href="contato.link"
                target="_blank"
                v-if="verficaRede(contato)"
                class="button"
            >
                <img v-if="black" :src="'/icons/'+contato.svg_black" :alt="contato.nome"/>
                <img v-else :src="'/icons/'+contato.svg" :alt="contato.nome"/>
                <span v-if="por_estenso" >{{ contato.acesso }}</span>
            </a>
        </template>
        <template v-else>
            <template v-if="verficaRede(contato)">
                <a
                    :href="contato.link"
                    target="_blank"
                >
                    <img v-if="black" :src="'/icons/'+contato.svg_black" :alt="contato.nome"/>
                    <img v-else :src="'/icons/'+contato.svg" :alt="contato.nome"/>
                </a>
                <span v-if="por_estenso" >{{ contato.acesso }}</span>
            </template>
        </template>
        
    </div>
</template>

<style scoped>
    .button:hover {
        background-color: var(--cir-ciza-claro);

        transform: scale(1.1);
    }
    .button{
        border-style: solid;
        border-color: #fff;
        border-width: 2px;
        border-radius: 4px;
        width: 400px;
        font-size: 18px;
        padding-top: 12px;
        padding-bottom: 12px;
        margin-top: 12px;
        transition: 0.2s;
    }




    .contatos{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-right: 10px;
    }
    .contatos a{
        color: var(--cor-branco);
        text-decoration: none;
    }
    .contatos span{
        text-align: center;
        margin-left: 10px;
    }
    .contatos a img{
        width: 20px !important;
    }

</style>