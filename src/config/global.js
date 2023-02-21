export default {
  global: {
    componenteFormativo: 'Plan de emergencias y contingencias de un evento',
    descripcionCurso:
      'La estructuración de los planes de emergencia y contingencia de un evento, nos permite determinar de manera anticipada los recursos necesarios para la atención de un suceso repentino que pueda afectar la integridad, los bienes y las condiciones ambientales en el desarrollo de un evento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planes de emergencia y normatividad',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Modelo de gestión del riesgo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Gestión de los recursos y desarrollo de prácticas y simulacros',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Estructura organizacional de la gestión del riesgo',
      referencia:
        'Positiva Compañía de Seguros. (2019). ¿Qué puede hacer la brigada de emergencia por la empresa y los trabajadores? (folleto).',
      tipo: 'Cartilla ',
      link:
        'https://posipedia.com.co/wp-content/uploads/2020/01/que-puede-hacer-brigada-emergencia-empresa-trabajadores.pdf',
    },
    {
      tema: 'Gestión del riesgo',
      referencia:
        'P.N.U.D Equipo de gestión de conocominiento-2016. Introducción curso en gestión del riesgo de desastres para autoridades ambientales. Youtube. ',
      tipo: 'Video ',
      link: 'https://youtu.be/tjQl665fCrM',
    },
    {
      tema: 'Gestión del riesgo',
      referencia:
        'Fondo de prevención y atención de emergencias, Alcaldía de Bogotá, (2011). Plan de Emergencias y contingencias. Palacio de los deportes, tipo aglomeración concierto. ',
      tipo: 'Guía ',
      link:
        'https://www.sire.gov.co/documents/82884/84796/PEC+PALACIO+CONCIERTOS.pdf/49bd9b03-03e1-4fb5-9c6d-dc940333a2e0',
    },
    {
      tema: 'Gestión de los recursos y desarrollo de prácticas y simulacros',
      referencia:
        'Fondo de prevención y atención de emergencias- FOPAE (2014). Guía para el desarrollo de simulaciones.',
      tipo: 'Guía',
      link:
        'https://www.sire.gov.co/documents/82884/85386/ANEXO+10+-+GUIA+DESARROLLO+SIMULACIONES.pdf/518cc905-189c-4cbb-931e-667340fe32d0 ',
    },
  ],
  glosario: [
    {
      termino: 'Accidente',
      significado:
        'evento o interrupción repentina no planeada de una actividad que da lugar a muerte, lesión, daño u otra pérdida a las personas, a la propiedad, al ambiente, a la calidad o perdida en el proceso.',
    },
    {
      termino: 'Brigada',
      significado:
        'grupo organizado de personas reunido para un trabajo concreto.',
    },
    {
      termino: 'Coordinador',
      significado: 'persona que dirige las acciones de dirección del plan.',
    },
    {
      termino: 'Emergencia',
      significado:
        'atención de forma urgente y totalmente imprevista, ya sea por causa de accidente o suceso inesperado. Dependiendo del ámbito en el que se use, esta palabra podrá tener distintos significados.',
    },
    {
      termino: 'Evacuación',
      significado:
        'desalojo que se produce de un lugar, una casa, un edificio, un barrio, por parte de las personas que lo habitan porque de permanecer en el mismo la vida puede correr peligro, o en su defecto, porque ha sufrido algún daño y es preciso abandonarlo. Sin dudas, la evacuación consiste en una medida precautoria.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'documento en forma de sumario que contiene la descripción de las características de un objeto, material, proceso o programa de manera detallada. Los contenidos varían dependiendo del producto, servicio o entidad descrita, pero en general suele contener datos como el nombre, características físicas, el modo de uso o elaboración, propiedades distintivas y especificaciones técnicas.',
    },
    {
      termino: 'Incidente',
      significado:
        'suceso de causa natural o por actividad humana que requiere la acción de personal de servicios de emergencias para proteger vidas, bienes y ambiente.',
    },
    {
      termino: 'M.E.C.',
      significado: 'módulo de estabilización y clasificación de heridos. ',
    },
    {
      termino: 'Plan de contingencia',
      significado:
        'planificación de medidas técnicas, humanas y organizativas destinadas a lidiar con algún tipo de inconveniente, accidente o imprevisto, es decir, con algún tipo de contingencia. Existen diferentes tipos de planes de contingencia, dependiendo de los bienes que se desea salvaguardar o de aquello que se considere prioritario. Pueden ser, por ejemplo, planes de respaldo (sobre todo en informática), planes de emergencia o planes de recuperación.',
    },
    {
      termino: 'Procedimiento',
      significado:
        'conducta preestablecida para la realización de una actividad, la cual puede estar dividida en pasos, basado en un orden estandarizado, para llevar adelante las acciones en cada instancia o bien componer una fase específica dentro de un proceso.',
    },
  ],
  referencias: [
    {
      referencia:
        'Naciones Unidas. (2015). <em>Marco de Sendai para la Reducción del Riesgo de Desastres 2015-2030</em>. informe (69/283) Asamblea General. ',
      link:
        'https://www.preventionweb.net/files/resolutions/N1516720.pdf?_gl=1*wfjikn*_ga*MzM4MDM3NzgyLjE2NjA4NzMyNzA.*_ga_D8G5WXP6YM*MTY2MzIwNTM3OS4xLjEuMTY2MzIwNTQwOC4wLjAuMA',
    },
    {
      referencia:
        'Ucha, F. (febrero, 2014). <em>Definición de Evacuación</em>. Definición ABC. ',
      link: 'https://www.definicionabc.com/general/evacuacion.php',
    },
    {
      referencia:
        'Real Academia Española. (2022). <em>Brigada</em>. Diccionario de la lengua española.',
      link: 'https://dle.rae.es/brigada',
    },
    {
      referencia:
        'Atehortúa, H (2005). <em>Gestión y auditoría de la calidad para las organizaciones públicas: Norma NTCGP 1000: 2004 conforme a la ley 872 de 2003</em>. Grupo editorial ISO Universidad de Antioquia.',
      link: '',
    },
    {
      referencia:
        'Concepto (2021. <em>Contingencia</em>. Definición de Concepto de.',
      link: 'https://concepto.de/contingencia/#ixzz7ev2fixQ2',
    },
    {
      referencia:
        'Dirección de Prevención y Atención de Emergencias (2009). <em>Guía para elaborar planes de emergencia y contingencias</em> (folleto). ',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/14249/Gu%C3%ADa%20para%20elaborar%20planes%20de%20emergencia.pdf?sequence=1',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
