<script>

export default {
    name: "DepoimentosCliente",
    data() {
        return {
            depoimentos: [
                {
                    nome: 'Japidinho',
                    logo: 'images/depoimentos/restaurantes1depo.png',
                    texto: 'Indicamos a todos os colegas de profissão, bares e restaurantes, para que conheçam os serviços e produtos da SB FoodTech, que nos atende desde 2014. De lá pra cá reduzimos nossos prejuízos com armazenamento e melhoramos o fluxo de nossas cozinhas através dos projetos de arquitetura. Deixo nosso agradecimento a essa empresa que tem feito a diferença nos nosso negócio.',
                    texto2: 'Fernando Medeiros, CEO do Japidinho (Cuiabá - Mato Grosso)'
                }, {
                    nome: "BNP",
                    logo: 'images/depoimentos/fastfood1depo.png',
                    texto: 'Contratamos a SB FoodTech para fazer nosso projeto e isso foi essencial para a boa funcionalidade da nossa cozinha. Organizaram para nós o tamanho dos equipamentos, disposição dos mobiliários, fluxograma da cozinha, tudo dentro das normas da vigilância sanitária. Se você quiser montar um negócio na área da gastronomia, chame eles para te ajudar!',
                    texto2: 'Rodrigo Maciel, CEO do Burguer na Praça (Cuiabá - Mato Grosso)'
                }, {
                    nome:"Olive Panificação Artesanal" ,
                    logo: 'images/depoimentos/padarias1depo.png',
                    texto: 'A realização do sonho da cozinha Olive só foi possível devido ao excelente trabalho da SB Foodtech. Nossa eterna gratidão pela entrega cirúrgica em cada detalhe, empenho, envolvimento e presteza.',
                    texto2:'Daniela Rodrigues, CEO da Olive Panificação Artesanal (SINOP - Mato Grosso)'
                },
            ],
            
        }
    }
}


</script>
<template>
    <section>
        <div class="cont_bloco">
            <h1>Depoimentos</h1>
            <div class="container_depoimentos">
                <div class="depoimento" v-for="depoimento in depoimentos">
                    <span>{{ depoimento.nome }}</span>

                    <img :src="depoimento.logo" :alt="'Imagem da logo do cliente '+depoimento.nome" />

                    <p>{{ depoimento.texto }}</p>
                    <p>{{ depoimento.texto2 }}</p>

                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
p {
    width: 100%;
}
.depoimento p:first-child{
    margin-bottom: 0px
}
.depoimento p:last-child{
    margin-top: 0px;
    font-family: VinSansPro-Bold;
}

.container_depoimentos {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}

.container_depoimentos p {
    text-align: justify;
}

.cont_bloco {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.depoimento {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 30%;
}

span {
    font-size: 20px;
    text-transform: uppercase;
    font-family: VinSansPro-Bold;
}

img {
    width: 190px;
    height: 190px;
    transition: 2s;
    box-shadow: -20px 20px 0px 0px var(--cor-laranja);
    margin-top: 25px;
    margin-bottom: 25px;
    border-style: solid;
    border-color: var(--cor-laranja);
}

img:hover {
    transform: scale(1.1);
    animation: box-shadow-rb 3s ease-in-out infinite;
}

@keyframes box-shadow-rb {
    0% {
        box-shadow: -20px 20px 0px 0px var(--cor-laranja);
    }

    25% {
        box-shadow: -10px 20px 0px 0px var(--cor-laranja);
    }

    50% {
        box-shadow: -10px 10px 0px 0px var(--cor-laranja);
    }

    75% {
        box-shadow: -20px 10px 0px 0px var(--cor-laranja);
    }

    100% {
        box-shadow: -20px 20px 0px 0px var(--cor-laranja);
    }
}

@media (max-width: 600px) {
    .container_depoimentos {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .depoimento {
        width: 90%;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .depoimento span{
        width: 90%;
        font-size: 28px;
        text-align: start
    }

    .cont_bloco {
        align-items: center;
    }
    .depoimento img{
        width: 90%;
        height: 90%
    }

}
</style>
