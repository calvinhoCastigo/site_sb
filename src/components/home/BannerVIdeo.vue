<script setup>
const url_video = import.meta.env.VITE_PATHVIDEOS;
</script>
<template>
    <video autoplay loop muted>
            <source :src="url_video + '/banner_home.mp4'" type="video/mp4">
            Seu navegador não suporta videos.
        </video>
</template>
<style scoped>
video{
    width: 100%;
}
@media (max-width: 500px) {
    video {
        display: none;
    }
}
</style>