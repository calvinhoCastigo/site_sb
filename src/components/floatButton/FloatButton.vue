<script src="./script.js" />
<template>
  <MidiasSociais :whatsapp="true" />
  <a href="https://api.whatsapp.com/send?phone=556581340077" id="floatButton" target="_blank">
    <img src="../../../public/icons/whatsapp.svg" alt="">
    <p>Fale Conosco</p>
  </a>
</template>
<style scoped>
@import url(styleBase.css);
@import url(styleMobile.css) (max-width: 778px) and (orientation:portrait);
@import url(styleDesktop.css) (min-width: 779px) and (orientation:landscape);
</style>
