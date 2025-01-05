<script>

export default {
    name: "DiferenciaisHome",
    data() {
        return {
            url_imagem: import.meta.env.VITE_IMGBODY,
            url_icons: import.meta.env.VITE_PATH_ICONS
        }
    }, components: {}
}

</script>
<template>
    <section>
        <div class="cont_prinicpal">
            <div class="conntainer_titulo">
                <h1>DIFERENCIAIS</h1>
                <h2>da empresa</h2>
            </div>
            <div class="texto_bloco">
                <ul>
                    <li>
                        <div class="img_cont">
                            <img :src="url_icons + 'handshake-regular.svg'" alt="">
                        </div>
                        <div class="text_cont">
                            <h3>VENDA CONSULTIVA</h3>
                            <p>Auxiliamos o cliente a escolher o melhor produto para o objetivo que se precisa alcançar.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="img_cont">
                            <img :src="url_icons + 'list-check-solid.svg'" alt="">
                        </div>
                        <div class="text_cont">
                            <h3>SOLUÇÕES EM DIVERSAS ETAPAS</h3>

                            <p>Oferecemos desde o serviço de arquitetura para cozinhas profissionais, que é a concepção
                                do
                                negócio,
                                até a implantação dos equipamentos e mobiliários para iniciar a operação da cozinha.</p>
                        </div>
                    </li>
                    <li>
                        <div class="img_cont">
                            <img :src="url_icons + 'calendar-days-solid.svg'" alt="">
                        </div>
                        <div class="text_cont">
                            <h3>DESDE 1992</h3>
                            <p>Temos mais de 30 anos de experiências em negócios da alimentação.</p>
                        </div>
                    </li>
                    <li>
                        <div class="img_cont">
                            <img :src="url_icons + 'comments-regular.svg'" alt="">
                        </div>
                        <div class="text_cont">
                            <h3>REFERÊNCIAS</h3>
                            <p>Temos em nosso portfólio, grandes nomes do food service do Centro-Oeste. É motivo de
                                muito
                                orgulho
                                para nós. Conheça nosso portfólio.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<style scoped>
h1 {
    margin-top: 0px;
}

p {
    width: 100%;
}

.texto_bloco {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

li {
    transition: 0.2s;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 95%;
}

li .text_cont h3 {
    margin-bottom: 0px;
}

li .text_cont p {
    margin-top: 0px;
}

li .text_cont {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

li .img_cont {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 80px;
    height: 80px;
    max-height: 80px;
    max-width: 80px;
    margin-right: 20px;
}

li .img_cont img {
    height: 95%;
    max-height: 80px;
    max-width: 80px;
}

li h3,
li p {
    margin-left: 14px;
}

li:hover {
    background-color: var(--cir-ciza-claro);

    transform: scale(1.1);
}

section {
    width: 100%;
    align-items: flex-start;
    flex-direction: column;
    color: var(--cor-branco);
    background-color: var(--cor-cinza);
    padding-left: 100%;
    padding-right: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    overflow: hidden;
}

@media (min-width: 501px) {
    h1 {

        width: 20%;
    }
}

@media (max-width: 500px) {
    h1 {
        text-align: start;
        width: 35%;
    }
    li{
        width: 95%;
    }
    section{
        align-items: center;
    }
    .texto_bloco{
        width: 90%;
    }
}
</style>
