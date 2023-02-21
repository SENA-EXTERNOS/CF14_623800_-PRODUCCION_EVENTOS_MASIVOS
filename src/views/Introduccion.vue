<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center.mt-5.mb-5

      .col-lg-5.col-xs-12
        figure
          img(src='@/assets/curso/temas/introduccion/img1.png', alt='Texto que describa la imagen')

      .col-lg-7.mb-5.mb-lg-0
        .bloque-texto-tema1.color-primario.p-4
          .bloque-texto-tema1__texto
            p Apreciado Aprendiz, bienvenido a este componente formativo, donde se abordará de manera didáctica, explicaciones sencillas y de guías técnicas, el funcionamiento de los planes de emergencia, instrumentos esenciales para hacer una preparación y correcta gestión de los recursos necesarios para la atención oportuna de los posibles sucesos que se puedan materializar durante la ejecución de un evento. 
       
        p Lo invitamos a ver el siguiente video, para que tenga una visión completa de lo que será esta experiencia de aprendizaje, no sin antes desearle éxitos en su desarrollo. 

      

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        


        

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
