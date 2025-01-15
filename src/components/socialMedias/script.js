import { ref } from 'vue';

export default {
    name: 'MidiasSociais',
    props: {
        black: {
            type: Boolean,
            default: false
        },
        por_estenso: {
            type: Boolean,
            default: false,
        },
        facebook: {
            type: Boolean,
            default: false,
        },

        instagram: {
            type: Boolean,
            default: false,
        },
        email: {
            type: Boolean,
            default: false,
        },

        whatsapp: {
            type: Boolean,
            default: false,
        },

        telefone: {
            type: Boolean,
            default: false,
        },

        button: {
            type: Boolean,
            default: false
        }
    }, data() {
        return {
            contatos: ref([
                {
                    nome: 'Whatsapp',
                    acesso: '65 98134-0077',
                    link: 'https://api.whatsapp.com/send?phone=556581340077',
                    svg: 'whatsapp.svg',
                    svg_black: 'whatsapp-black.svg'
                },
                {
                    nome: 'Instagram',
                    acesso: '@sbfoodtech',
                    link: 'https://www.instagram.com/sbfoodtech/',
                    svg: 'instagram.svg',
                    svg_black: 'instagram-black.svg'
                },
                {
                    nome: 'Facebook',
                    acesso: 'sbfoodtech',
                    link: 'https://www.facebook.com/sbfoodtech/',
                    svg: 'facebook.svg',
                    svg_black: 'facebook-black.svg'
                },

                {
                    nome: 'Email',
                    acesso: 'contato@sbfoodtech.com.br',
                    link: null,
                    svg: 'envelope-regular.svg',
                    svg_black: 'envelope-regular-black.svg'
                },
                {
                    nome: 'Telefone',
                    acesso: '65 3637-3130',
                    link: null,
                    svg: 'phone-solid.svg',
                    svg_black: 'phone-solid-black.svg'
                },
            ])
        }
    }, methods: {
        verficaRede(contato) {
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
