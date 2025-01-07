<script>
import { ref } from "vue";
import BotaoPrincipal from "../BotaoPrincipal.vue";
import ControladorEmCirculo from "../ControladorEmCirculo.vue";

export default {
    name: "ProjetoDeCozinhaProficional",
    data() {
        return {
            url_imagem: import.meta.env.VITE_IMGBODY,
            imagens: [
                'foto_clientes (1).jpg',
                'foto_clientes (2).jpg',
                'foto_clientes (3).jpg',
                'foto_clientes (4).jpg'
            ]
        }
    },
    components: { BotaoPrincipal, ControladorEmCirculo }
}
</script>
<template>
    <section>
        <div class="cont_prinicpal">
            <div class="cont_bloco">
                <div class="texto_bloco">
                    <h1>Arquitetura de Cozinhas profissionais</h1>
                    <h2>desde 2011</h2>
                    <p>Muito além de transformar as ideias em realidade, a SB FoodTech oferece o serviço de
                        arquitetura
                        para
                        cozinhas profissionais e agrega benefícios como </p>
                    <ul>
                        <li>Experiência em implantações;</li>
                        <li>Fluxos de serviço dentro das cozinhas;</li>
                        <li>Conhecimento em operações distintas (a la carte, self-service, cozinha para eventos
                            produções industriais, etc.);</li>
                        <li>Conhecimento sobre os equipamentos e maquinários;</li>
                        <li>Leis e normativas correlatas, como da Vigilância Sanitária e da Segurança do Trabalho;</li>
                        <li>Muito mais!</li>
                    </ul>
                    <p>O nosso objetivo é que nossos clientes possam usufruir de investimentos que sejam funcionais,
                        eficientes,
                        seguros e duradouros. Solicite um orçamento!</p>
                    <BotaoPrincipal :fillBg="true" :rota="'/projetos'">VEJA MAIS</BotaoPrincipal>
                </div>
                <div class="cont_imagem">
                    <img v-for="(imagem, index ) in imagens" :src="url_imagem + imagem" alt="" srcset=""
                        :id="'IMG_COZINHA' + index" class="IMG_COZINHA">
                </div>
            </div>
        </div>
        <ControladorEmCirculo id="controladorEmCirculo" :bg_black="true" :elementos="imagens"
            :identificadorBloco="'IMG_COZINHA'" />
    </section>
</template>
<style scoped>
h1 {
    max-width: 320px;
    text-align: start;
}

p {
    width: 90%;
}

li:hover {

    background-color: var(--cir-ciza-claro);
}

.texto_bloco {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background-color: var(--cor-cinza);
    z-index: 1;
}

.container_tx {
    display: flex;
    flex-direction: column;
}

.cont_bloco {
    width: 100%;
    display: flex;
}

section,
.cont_prinicpal {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-left: 100%;
    padding-right: 100%;
}

section {
    flex-direction: column;
    color: var(--cor-branco);
    align-items: center;
    padding-bottom: 25px;
    background-color: rgb(54, 53, 53);
}

.cont_prinicpal {
    background-color: var(--cor-cinza);
    align-items: flex-start;
    height: 770px;
}

@media (min-width: 601px) {
    .container_tx {
        justify-content: flex-start;
        align-items: flex-start;
    }

    .cont_bloco {
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
    }

    .cont_prinicpal {
        flex-direction: row;
        align-items: center;
        overflow-y: hidden;
    }

    .texto_bloco {
        height: 770px;
        padding-right: 50px;
    }

    .cont_imagem,
    .texto_bloco {
        max-width: 50%;
    }
    img {
        height: 770px;
        transition: 2s;
    }

    img:hover {
        transform: scale(1.1);
    }
}

@media (max-width: 600px) {
    section, .cont_prinicpal, .cont_bloco, .texto_bloco{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        max-height: 100%;
        height: 100%;
    }
    section, .cont_prinicpal, .cont_bloco{
        width: 100%;
    }
    .texto_bloco{
        width: 90%;
        margin-bottom: 25px;
        
        align-items: flex-start;
    }
    h1, h2{
        margin-left: 0px;
        text-align: left;
        width: 90%;
    }
   .cont_imagem {
        width: 100%;
        max-width: 100%;
    }
    img{
        width: 100%;
    }
}
</style>
