<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de los recursos y desarrollo de prácticas y simulacros 

    .row.justify-content-around.align-items-center.mt-5.mb-5

      .col-lg-7
        p.mb-5 Para el desarrollo de los planes de emergencia y contingencia se deben disponer los recursos humanos, físicos, para la preparación de la emergencia, y suficientes existencias para la atención de sucesos de gran magnitud, para ello se debe realizar un inventario para evidenciar que se cuenta con los mecanismos suficientes. A continuación, se presentan los dos tipos de recursos requeridos: 

        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 #[b Recursos físicos:] son todos los equipos y elementos necesarios para atender las emergencias. Como mínimo se deberá contemplar los siguientes: 
        p En cuanto a los recursos físicos, como mínimo se deberá contemplar los siguientes elementos: 

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img1.png', alt='Texto que describa la imagen')

    ImagenInfografica.color-secundario
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema3/img2.png', alt='Texto que describa la imagen')

      .tarjeta.color-primario.p-3(x="70%" y="60%" numero="1")       
        p.text-center Botiquines fijos

      .tarjeta.color-primario.p-3(x="35%" y="65%" numero="2")       
        p.text-center Botiquines portátiles

      .tarjeta.color-primario.p-3(x="56%" y="74%" numero="3")       
        p.text-center Tablas tipo #[i fell]

      .tarjeta.color-primario.p-3(x="67%" y="85%" numero="4")       
        p.text-center Inmovilizadores de miembros superiores e inferiores

      .tarjeta.color-primario.p-3(x="47%" y="85%" numero="5")       
        p.text-center Inmovilizador de cuello

      .tarjeta.color-primario.p-3(x="82%" y="42%" numero="6")       
        p.text-center Señalización de vías de evacuación

      .tarjeta.color-primario.p-3(x="7%" y="76%" numero="7")       
        p.text-center Señalización de punto de encuentro
      
      .tarjeta.color-primario.p-3(x="11%" y="45%" numero="8")       
        p.text-center Cinta de peligro

      .tarjeta.color-primario.p-3(x="60%" y="32%" numero="9")       
        p.text-center Vallas

      .tarjeta.color-primario.p-3(x="95%" y="70%" numero="10")       
        p.text-center Radios de comuniación

      .tarjeta.color-primario.p-3(x="88%" y="60%" numero="11")       
        p.text-center Megáfonos

      .tarjeta.color-primario.p-3(x="85%" y="83%" numero="12")       
        p.text-center Herramientas (alicate, destornilladores)

      .tarjeta.color-primario.p-3(x="25%" y="93%" numero="13")       
        p.text-center Ambulancias
    
    .row.mt-5
      ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 #[b Recursos humanos:] es el personal que cuenta con la capacitación, entrenamiento y conocimiento suficiente para activar los planes que se definen para atender emergencias.

    p.mb-5 Como mínimo se deberá disponer de los siguientes Recursos humanos:  
    ImagenInfografica.color-secundario
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema3/img3.png', alt='Texto que describa la imagen')

      .tarjeta.color-primario.p-3(x="87%" y="55%" numero="1")       
        p.text-center Policía Nacional

      .tarjeta.color-primario.p-3(x="80%" y="72%" numero="2")       
        p.text-center Brigadistas

      .tarjeta.color-primario.p-3(x="56%" y="78%" numero="3")       
        p.text-center Personal médico

      .tarjeta.color-primario.p-3(x="66%" y="78%" numero="4")       
        p.text-center Enfermeras

      .tarjeta.color-primario.p-3(x="92%" y="77%" numero="5")       
        p.text-center Coordinadores de logística

      .tarjeta.color-primario.p-3(x="27%" y="72%" numero="6")       
        p.text-center Organismos de socorro externos: Cruz Roja, Bomberos y Defensa Civil, de acuerdo con la disponibilidad del evento.

      .tarjeta.color-primario.p-3(x="7%" y="70%" numero="7")       
        p.text-center Agentes de tránsito o encargados de la movilidad: aplican cuando el evento requiere cierres viales.
      
    .bloque-texto-tema1.color-secundario.p-4.mt-5
          .bloque-texto-tema1__texto
            p Una vez claros los tipos de recursos necesarios, se puede ver a continuación las pautas básicas y un ejemplo sobre la práctica de los simulacros. Estos son ejercicios que buscan simular una situación para evaluar la capacidad de respuesta que se tiene ante la presentación de un suceso no planeado que altere el funcionamiento o desarrollo de cualquier actividad.
     
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/6Lgw9CD4x-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        

    .row
      .col-lg-1
      .col-lg-10
        .tarjeta.bgr-tarjeta-1.p-3.mb-5.mt-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema3/img4.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0 
                  p Para un estudio completo del tema, recuerde explorar todos los recursos que se encuentran disponibles en este componente formativo, y que encuentra en el menú principal, tales como material complementario, actividad didáctica, glosario, entre otros.                  
      .col-lg-1 

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
