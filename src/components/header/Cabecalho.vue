<script src="/src/components/socialMedias/script.js"/>
<template>
  <header id="decktop">
    <section>
      <nav>
        <MidiasSociais :facebook="true" :instagram="true" :whatsapp="true" />
      </nav>
      <nav>
        <MidiasSociais :por_estenso="true" :email="true" :whatsapp="true" />
      </nav>
    </section>
    <section>
      <a href="/">
        <img id="logo_sb" src="/images/logo_sbfoodtech-branco.png" alt="Logo SB Foodtechs" />
      </a>
      <nav>
        <ListaMenu />
        <BotaoPrincipal :fillBg="true" :rota="'/contatos'">FALE CONOSCO</BotaoPrincipal>
      </nav>
    </section>
  </header>

  <header id="moblile">
    <section v-on:click="toogleMenu()">
      <img id="logo_sb_mobile" src="/images/logo_sbfoodtech-branco.png" alt="Logo SB Foodtechs" />
    </section>
    <nav>
      <ListaMenu :mobile="true" />
      <BotaoPrincipal :fillBg="true" :rota="'/contatos'">FALE CONOSCO</BotaoPrincipal>
    </nav>
  </header>
</template>

<style scoped>
@import url(styleBase.css);
@import url(styleMobile.css) (max-width: 778px) and (orientation:portrait);
@import url(styleDesktop.css) (min-width: 779px) and (orientation:landscape);
</style>
