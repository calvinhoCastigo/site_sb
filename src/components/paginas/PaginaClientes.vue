<script>
import axios from 'axios';
import { ref } from 'vue';
import BarraDePesquisa from "../BarraDePequisa.vue";


export default {
    name: "PaginaClientes",
    data() {
        
        const clientes = [
                {
                    id: 1,
                    nome: "Farol",
                    logo: "clientes/bares1.png",
                    areaDeAtuacaoId: 2
                },
                {
                    id: 2,
                    nome: "La Cerva",
                    logo: "clientes/bares2.png",
                    areaDeAtuacaoId: 2
                },
                {
                    id: 3,
                    nome: "Feminina",
                    logo: "clientes/coletiva1.png",
                    areaDeAtuacaoId: 9
                },
                {
                    id: 4,
                    nome: "AMAGGI",
                    logo: "clientes/coletiva2.png",
                    areaDeAtuacaoId: 9
                },
                {
                    id: 5,
                    nome: "Vivans",
                    logo: "clientes/coletiva3.png",
                    areaDeAtuacaoId: 9
                },
                {
                    id: 6,
                    nome: "Villa Felici Buffet",
                    logo: "clientes/coletiva4.png",
                    areaDeAtuacaoId: 9
                },
                {
                    id: 7,
                    nome: "Univag",
                    logo: "clientes/coletiva5.png",
                    areaDeAtuacaoId: 9
                },
                {
                    id: 8,
                    nome: "JMF Urbanismo",
                    logo: "clientes/coletiva6.png",
                    areaDeAtuacaoId: 9
                },
                {
                    id: 9,
                    nome: "Magrello",
                    logo: "clientes/confeitaria1.png",
                    areaDeAtuacaoId: 7
                },
                {
                    id: 10,
                    nome: "Dona Zetti",
                    logo: "clientes/confeitaria2.png",
                    areaDeAtuacaoId: 7
                },
                {
                    id: 11,
                    nome: "ECCO Manai",
                    logo: "clientes/conveniencia1.png",
                    areaDeAtuacaoId: 8
                },
                {
                    id: 12,
                    nome: "Real Auto Posto",
                    logo: "clientes/conveniencia2.png",
                    areaDeAtuacaoId: 8
                },
                {
                    id: 13,
                    nome: "Posto Maria & José",
                    logo: "clientes/conveniencia3.png",
                    areaDeAtuacaoId: 8
                },
                {
                    id: 14,
                    nome: "Sorella Pães e Assados",
                    logo: "clientes/conveniencia4.png",
                    areaDeAtuacaoId: 8
                },
                {
                    id: 15,
                    nome: "Burguer na Praça",
                    logo: "clientes/fastfood1.png",
                    areaDeAtuacaoId: 6
                },
                {
                    id: 16,
                    nome: "Cirino's",
                    logo: "clientes/fastfood2.png",
                    areaDeAtuacaoId: 6
                },
                {
                    id: 17,
                    nome: "Rock Buger",
                    logo: "clientes/fastfood3.png",
                    areaDeAtuacaoId: 6
                },
                {
                    id: 18,
                    nome: "O Paulistinha Delivery",
                    logo: "clientes/fastfood4.png",
                    areaDeAtuacaoId: 6
                },
                {
                    id: 19,
                    nome: "Pastelaria do Nono",
                    logo: "clientes/fastfood5.png",
                    areaDeAtuacaoId: 6
                },
                {
                    id: 20,
                    nome: "Hotéis Amazon",
                    logo: "clientes/hotel1.png",
                    areaDeAtuacaoId: 4
                },
                {
                    id: 21,
                    nome: "Thoma Hotel",
                    logo: "clientes/hotel2.png",
                    areaDeAtuacaoId: 4
                },
                {
                    id: 22,
                    nome: "Delmod Hotel",
                    logo: "clientes/hotel3.png",
                    areaDeAtuacaoId: 4
                },
                {
                    id: 23,
                    nome: "Curió",
                    logo: "clientes/mercados1.png",
                    areaDeAtuacaoId: 3
                },
                {
                    id: 24,
                    nome: "Grupo Juba",
                    logo: "clientes/mercados2.png",
                    areaDeAtuacaoId: 3
                },
                {
                    id: 25,
                    nome: "Super Atacado Machado",
                    logo: "clientes/mercados3.png",
                    areaDeAtuacaoId: 3
                },
                {
                    id: 26,
                    nome: "Pan Box Atacadista",
                    logo: "clientes/mercados4.png",
                    areaDeAtuacaoId: 3
                },
                {
                    id: 27,
                    nome: "Pasqualotto",
                    logo: "clientes/mercados5.png",
                    areaDeAtuacaoId: 3
                },
                {
                    id: 28,
                    nome: "Sorrinorte Supermercados",
                    logo: "clientes/mercados6.png",
                    areaDeAtuacaoId: 3
                },
                {
                    id: 29,
                    nome: "Olive Panificação",
                    logo: "clientes/padarias1.png",
                    areaDeAtuacaoId: 5
                },
                {
                    id: 30,
                    nome: "Bake House Padaroa Artesanal",
                    logo: "clientes/padarias2.png",
                    areaDeAtuacaoId: 5
                },
                {
                    id: 31,
                    nome: "Padaria do Moinho",
                    logo: "clientes/padarias3.png",
                    areaDeAtuacaoId: 5
                },
                {
                    id: 32,
                    nome: "Cravo & Canela",
                    logo: "clientes/padarias4.png",
                    areaDeAtuacaoId: 5
                },
                {
                    id: 33,
                    nome: "Chalé do Italiano Paninoteca",
                    logo: "clientes/padarias5.png",
                    areaDeAtuacaoId: 5
                },
                {
                    id: 34,
                    nome: "Japidinho",
                    logo: "clientes/restaurantes1.png",
                    areaDeAtuacaoId: 1
                },
                {
                    id: 35,
                    nome: "Mahalo",
                    logo: "clientes/restaurantes2.png",
                    areaDeAtuacaoId: 1
                }
            ];
        const areasDeAtuacao = [
                {
                    id: 1,
                    nome: "Restaurantes",
                    svg: "utensils-solid.svg",
                },
                {
                    id: 2,
                    nome: "Bares",
                    svg: "martini-glass-citrus-solid.svg",
                },
                {
                    id: 3,
                    nome: "Supermercados",
                    svg: "cart-shopping-solid.svg",
                },
                {
                    id: 4,
                    nome: "Hotéis e Pousadas",
                    svg: "hotel-solid.svg",
                },
                {
                    id: 5,
                    nome: "Padarias",
                    svg: "bread-slice-solid.svg",
                },
                {
                    id: 6,
                    nome: "HAMBURGUERIAS E FAST FOODS",
                    svg: "burger-solid.svg",
                },
                {
                    id: 7,
                    nome: "Confeitarias",
                    svg: "cookie-bite-solid.svg",
                },
                {
                    id: 9,
                    nome: "Alimentação coletiva",
                    svg: "bowl-food-solid.svg",
                }
            ];

        return {
            mostraBotaoTodos:false,
            clientesFiltrador: null,
            areasDeAtuacao: areasDeAtuacao,
            clientes: clientes,
        }
    },
    methods: {
        fetchClientes: function (filtro) {
            this.mostraBotaoTodos = filtro?true:false;
            try {
                const filtroCliente = this.clientes.filter(cliente => cliente.areaDeAtuacaoId == filtro);
                filtroCliente.length > 0 ? this.clientesFiltrador = filtroCliente : this.clientesFiltrador = this.clientes;

            }
            catch (error) {
                console.log("ERRO: "+error) ;
            }
        }
    },
    mounted() {
        this.fetchClientes(false);
    },
    components:{ BarraDePesquisa }
}
</script>

<template>
    <BarraDePesquisa
        :lista="areasDeAtuacao"
        :mostraBotaoTodos="mostraBotaoTodos"
        @itemSelecionado="fetchClientes"
    />

    <section >
            <img
                v-for="cliente in clientesFiltrador"
                :src="'images/' + cliente.logo"
                :alt="'imagem ilustrando o logo do cliente ' + cliente.nome"
            />

    </section>

</template>

<style scoped>


@media (min-width: 601px) {

    img {
        height: 160px;
        padding: 20px;
    }

    section:first-child {
        margin-top: 20px;
    }

    section {
        max-width: var(--largura-bloco-padrao);
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
    }
}

@media (max-width: 500px) {

    img {
        width: 200px;
        padding: 0px;
    }
    section {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
    }
}
</style>