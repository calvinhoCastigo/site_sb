<script>
import { ref } from "vue";
import BotaoPrincipal from "../mainButton/BotaoPrincipal.vue";
import ControladorEmCirculo from "../ControladorEmCirculo.vue";

export default {
    name: 'EquipamentosEMobiliarios',
    data() {
        return {
            identificadorBloco: 'EEM',
            url_imagem: import.meta.env.VITE_IMGBODY,
            lista: [
                {
                    titulo: "para gastronomia",
                    paragrafo: "A alimentação fora do lar cresce exponencialmente a cada ano, graças ao desenvolvimento da GASTRONOMIA, que oferta cada vez mais qualidade de alimentação para um número cada vez maior de clientes. Por isso, representamos marcas de equipamentos que possam aumentar a PRODUTIVIDADE, com QUALIDADE e menor CUSTO para o empreendedor.",
                    lista: [
                        "FORNOS COMBINADOS",
                        "FOGÕES, CHAPAS E FRITADEIRAS",
                        "REFRIGERADORES E FREEZERS PROFISSIONAIS",
                        "ULTRACONGELADORES",
                        "CHURRASQUEIRAS E CHARBROILERS"
                    ],
                    paragrafoFinal: "Conheça a Aços Macom e a Prática, por meio da SB Foodtech",
                    rota: "/equipamentos",
                    imagem: "equiphorizontal1.png",
                },
                {
                    titulo: "para panificação",
                    paragrafo: "A panificação talvez seja umas das artes culinárias mais antigas do mundo. Apesar disso, a Prática é uma das indústrias brasileiras que estão na vanguarda do desenvolvimento de tecnologias para o processo de produção de pães, massas e confeitos. É uma indústria que oferece demonstrações e treinamentos, mais produtividade e menor custo operacional, política de qualidade fabril, confiabilidade e transparência.",
                    lista: [
                        "FORNOS TURBO E LASTRO",
                        "AMASSADEIRAS ESPIRAIS E CILINDROS",
                        "DIVISORAS E MODELADORAS",
                        "LAMINADORAS E BATEDEIRAS PLANETÁRIAS",
                        "CÂMARAS DE FERMENTAÇÃO"
                    ],
                    paragrafoFinal: "Conheça a Prática, por meio da SB Foodtech!",
                    rota: "/equipamentos",
                    imagem: "equiphorizontal2.png",
                },
                {
                    titulo: "para salgadaria e confeitaria",
                    paragrafo: "Quem trabalha no ramo de salgadaria e de confeitaria sabe que a palavra-chave para o sucesso do negócio é PRODUTIVIDADE. E para alcançar isso, é necessário contar com equipamentos de alta performance e durabilidade. A Bralyx é empresa nacional especializada na fabricação de máquinas para salgados, doces, massas frescas e confeitaria.",
                    lista: [
                        "FORMADORAS DE DOCES E DE SALGADOS",
                        "EMPANADORAS PROFISSIONAIS",
                        "DOSADORAS E RECHEADORAS",
                        "PINGADEIRAS PARA CORTE A FIO",
                        "EQUIPAMENTOS PARA MASSAS FRESCAS E FERMENTADAS"
                    ],
                    paragrafoFinal: "Conheça a Bralyx, por meio da SB Foodtech!",
                    rota: "/equipamentos",
                    imagem: "equiphorizontal3.png",
                },
                {
                    titulo: "para outros segmentos",
                    paragrafo: "A SB Foodtech se preocupa em atender a grande diversidade de negócios da alimentação da região Centro-Oeste, onde o food service está em pleno desenvolvimento! Por isso, escolhemos as principais marcas nacionais que possam agregar ao empreendedor.",
                    lista: [
                        "EXTRATORAS PARA SUCOS",
                        "SISTEMAS DE EXAUSTÃO E DE VENTILAÇÃO",
                        "PISTAS AQUECIDAS E REFRIGERADAS PARA BUFFETS",
                        "VITRINES E GÔNDOLAS PARA EXPOSIÇÃO DE PRODUTOS",
                        "MESAS, ASSENTOS E BANQUETAS PARA RESTAURANTES"
                    ],
                    paragrafoFinal: "Somos representantes de + de 20 marcas nacionais! Conheça nosso portfólio!",
                    rota: "/equipamentos",
                    imagem: "equiphorizontal4.png"
                }
            ]
        }
    }, components: { BotaoPrincipal, ControladorEmCirculo }
}

</script>

<template>
    <section>
        <div :class="'cont_prinicpal  ' + identificadorBloco" v-for="(item, index) in lista"
            :id="identificadorBloco + index">

            <div class="conntainer_titulo">
                <h1>EQUIPAMENTOS E MOBILIÁRIOS</h1>
                <h2>{{ item.titulo }}</h2>
            </div>
            
            <div class="texto_bloco">
                <p>{{ item.paragrafo }}</p>
            </div>
            
            <img :src="url_imagem + item.imagem" class="borda_imagens" alt="" srcset="" />
            <div class="texto_bloco">
                    <h2>São diversos equipamentos, como:</h2>
                    <p v-for="li in item.lista" class="lista">
                        - {{ li }}
                    </p>
                    <p class="lista">- MUITO MAIS!</p>
                <h3>{{ item.paragrafoFinal }}</h3>
                    
                <BotaoPrincipal :fillBg="false" :rota="item.rota">VEJA MAIS</BotaoPrincipal>

              </div>
        </div>

        <ControladorEmCirculo :bg_black="false" :elementos="lista" :identificadorBloco="identificadorBloco" />
    </section>
</template>

<style scoped>

section {
    max-width: var(--largura-bloco-padrao);
}
.lista{
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: start;
    width: 80%;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 10px;
    border-radius: 5px;
}
.lista:nth-child(odd){

    background-color: #cecece;
}
.conntainer_titulo {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
}

.texto_bloco {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    text-align: justify;
}

.container_tx {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.cont_prinicpal {
    width: 100%;
    display: flex;
    justify-content: flex-start;
}

section,
.cont_prinicpal {
    align-items: center;
    flex-direction: column;
}

img {
    border-radius: 2px;
    transition: 2s ease;
    box-shadow: 40px 40px 0px 0px var(--cor-laranja);
    width: 100%;
    margin-bottom: 50px;
}

img:hover {
    transform: scale(1.1);
    animation: box-shadow-rb 3s ease-in-out infinite;
}
 

@media (max-width: 500px) {
    img {
        width: 100%;
        box-shadow: 20px 20px 0px 0px var(--cor-laranja);
    }

    .conntainer_titulo {
        width: 95%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
    }
    .texto_bloco{
        max-width: 90%
    }
}

@keyframes box-shadow-rb {
    0% {
        box-shadow: 40px 40px 0px 0px var(--cor-laranja);
    }

    25% {
        box-shadow: 20px 40px 0px 0px var(--cor-laranja);
    }

    50% {
        box-shadow: 20px 20px 0px 0px var(--cor-laranja);
    }

    75% {
        box-shadow: 40px 20px 0px 0px var(--cor-laranja);
    }

    100% {
        box-shadow: 40px 40px 0px 0px var(--cor-laranja);
    }
}
</style>
