<script>

export default{
    data(){
        return {
            publico : import.meta.env.VITE_PUBLICURL,
            industrias:[
                "images/industrias/aero.png",
                "images/industrias/bralyx.png",
                "images/industrias/fornof.png",
                "images/industrias/franco.png",
                "images/industrias/frigost.png",
                "images/industrias/glasart.png",
                "images/industrias/macom.png",
                "images/industrias/maksell.png",
                "images/industrias/perlima.png",
                "images/industrias/pratica.png",
                "images/industrias/scheer.png",
                "images/industrias/selovac.png",
                "images/industrias/topt.png",
                "images/industrias/zummo.png"
            ]
        }
    }
}

</script>
<template>
    <section>
        <h1>NOssos Parceiros</h1>
        <div class="slider_cont">
            <div class="slider">
                <img 
                    v-for="industria in industrias"
                    :src="industria"
                    alt="" srcset=""
                >
                <img 
                    v-for="industria in industrias"
                    :src="industria"
                    alt="" srcset=""
                >
            </div>
        </div>
    </section>
</template>
<style scoped>
@keyframes scroll-horizontal {
    0% {
        transform: translateX(-60%);
    }
    100% {
        transform: translateX(-200%);
    }
}

@keyframes scroll-horizontal-mobile {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-50%);
    }
}

h1 {
    color: var(--cor-branco)
}
section {
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-left: 100%;
    padding-right: 100%;
    background-color: var(--cor-cinza);
    
}

.slider img {
    height: 70px;
    margin-left: 20px;
}

.slider_cont {
    height: 100px;
    margin-top: 50px;
    width: var(--largura-bloco-padrao);
}

.slider {
    white-space: nowrap;
    display: flex;
    justify-content: space-around;
    width: 80%;
    animation: scroll-horizontal 10s linear infinite ;
}

@media (min-width: 601px) {
    .slider {
        animation: scroll-horizontal 10s linear infinite ;
    }
}


@media (max-width: 600px) {
    .slider {
        animation: scroll-horizontal-mobile 50s linear infinite ;
    }
}

</style>
