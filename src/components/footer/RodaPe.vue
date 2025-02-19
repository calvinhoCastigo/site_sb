<script src="./script.js" />
<template>
  <footer>
    <div class="container_principal_footer">
      <section>
        <div class="container_footer">
          <div>
            <img class="logo_footer" src="/images/logo_sbfoodtech-branco.png" alt="Logo SB" srcset="" />
            <h3>Navegue no site</h3>
            <ListaMenu />
          </div>
        </div>
        <div class="container_footer">
          <img :src="url_imagem + '01.png'" class="imagensFooter" alt="" />
          <!-- <FormularioContato :labels="false" /> -->
          <div>
            <MidiasSociais :por_estenso="true" :email="true" :facebook="true" :instagram="true" :whatsapp="true"
              :telefone="true" :button="true" />
          </div>

        </div>
        <div class="container_footer">
          <img :src="url_imagem + '02.png'" class="imagensFooter" alt="" />
          <div class="info_container">
            <div>
              <h3>ENDEREÇO</h3>
              <span>Rua dos Miosótis, 151.</span>
              <span>Jardim Cuiabá, Cuiabá-MT.</span>
            </div>
            <div>
              <h3>HORÁRIO</h3>

              <span>SEGUNDA A SEXTA</span>
              <span>8h às 12h</span>
              <span>14h às 18h</span>

              <span>SÁBADO</span>
              <span>8h às 12h</span>
            </div>
          </div>
        </div>
        <div class="container_footer">
          <img :src="url_imagem + '03.png'" class="imagensFooter" alt="" />
          <div class="info_container">
            <div>
              <h3>TELEFONE</h3>
              <MidiasSociais :por_estenso="true" :telefone="true" :whatsapp="true" />
            </div>
            <div>
              <h3>E-mail</h3>
              <MidiasSociais :por_estenso="true" :email="true" />
            </div>
            <div>
              <h3>Redes Sociais</h3>
              <MidiasSociais :por_estenso="true" :instagram="true" :facebook="true" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>
<style scoped>
@import url(styleBase.css);
@import url(styleMobile.css) (max-width: 778px) and (orientation:portrait);
@import url(styleDesktop.css) (min-width: 779px) and (orientation:landscape);
</style>
