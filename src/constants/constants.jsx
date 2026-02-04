export const navItems = [
  { label: 'INICIO', ruta: '#' },
  { label: 'COTIZADOR', ruta: 'cotizacion' },
  {
    label: 'MOTOS',
    submenu: [{label:'AUTECO' ,submenu:['TVS','KTM','HUSQVARNA']}
            , {label:'AUTECO MOBILITY' ,submenu:['KYMCO','STARKER','KAWASAKI','PIAGGIO','CERONTE','BENELLI','VICTORY','VELOCIFERO']}
          ]
  },
  { label: 'POSTVENTA', ruta: 'postventa' },
  
  { label: 'BLOG', ruta: 'blog' },
  { label: 'VISITANOS', ruta: 'visitanos' },
  { label: 'PROMOCIONES', ruta: 'promociones' },
  { label: 'CONTACTO' },
];

export const ciudadModal = [
  { label: 'Antioquia - Medellín' },
  { label: 'Antioquia - Amagá' },
  { label: 'Antioquia - Bello' },
  { label: 'Antioquia - Envigado' },
  { label: 'Antioquia - Itagui' },
  { label: 'Antioquia - Sabaneta' },
  { label: 'Atlántico - Barranquilla' },
  { label: 'Atlántico - Soledad' },
  { label: 'Bolívar - Arjona' },
  { label: 'Bolívar - Turbaco' },
  { label: 'Caldas - Manizales' },
  { label: 'Caldas - Chinchiná' },
  { label: 'Caldas - Neira' },
  { label: 'Caldas - Villamaría' },
  { label: 'Risaralda - Pereira' },
  { label: 'Risaralda - Dosquebradas' },
  { label: 'Risaralda - Santa Rosa de Cabal' },
  { label: 'Bogota D.C. - Bogotá D.C.' },
  { label: 'Valle del Cauca - Cartago' },
  { label: 'Valle del Cauca - Cali' },
  { label: 'Valle del Cauca - Palmira' },
  { label: 'Bolívar - Cartagena' }
];

export const jsonCardTecnologia = [
  {
    titulo: 'TECNOLOGÍA DTS - i',
    texto:
      'Nuestra tecnología patentada DTS-i de encendido digital de doble o triple chispa mejora el rendimiento del combustible, agregando potencia y mejorando el kilometraje para satisfacer todas las necesidades de conducción, tanto en ciudades como en carreteras.',
    imagen: '/images/card.jpg',
  },
  {
    titulo: 'EXHAUSTEC',
    texto:
      'El diseño inteligente de la cámara de expansión ExhausTEC que amplifica significativamente el torque, obteniendo un mejor rendimiento de combustible en la conducción diaria, ya sea de baja o media intensidad. Un atributo muy apreciado por motociclistas en todo el mundo.',
    imagen: '/images/card2.jpg',
  },
  {
    titulo: 'SUSPENSIÓN SNS',
    texto:
      'El equipo de suspensión SNS (resorte en resorte) patentado por Bajaj, está diseñado para garantizar una comodidad superior. De la misma manera optimiza el equilibrio, reduce el encendido prematuro y ofrece mayor estabilidad en la conducción en ciudad y carreteras.',
    imagen: '/images/card3.jpg',
  },
  {
    titulo: 'TECNOLOGÍA DE 4 VÁLVULAS',
    texto:
      'Nuestra tecnología de 4 válvulas mejora la capacidad del motor y aumenta su potencia, manteniéndolo así en óptimas condiciones por más tiempo, lo que representa mayor durabilidad para los motociclistas en todo el mundo.',
    imagen: '/images/card4.jpg',
  },
];

export const jsonSeccionMotoDetallada = [
  {
    imagen: '/images/motoSeccion.jpg',
    subtitulo: 'DOMINAR 400 TERRA',
    titulo: 'VIVE TUS EXPERIENCIAS TOURING NADA TE DETIENE CON TU',
    descripcion_1:
      'La Dominar 400 cuenta con un diseño muy versátil que se acerca notoriamente a la combinación entre una moto sport y turismo, un cuerpo y chasis totalmente aerodinámico que permite realizar cómodos viajes a grandes velocidades con muy buena estabilidad y seguridad. Cuenta con asientos de conductor y pasajero con la respectiva asa de agarre para seguridad de tus pasajeros',
    descripcion_2:
      'En cuanto a las principales partes del nuevo diseño que conforman la Bajaj Dominar se encuentran el faro delantero Led para una buena iluminación en tus viajes, velocímetros primarios y secundarios, luz de freno trasera, la fuerte horquilla delantera, además cuenta con arrancador eléctrico. También encontrarás una caja de herramientas bajo el asiento posterior.',
    motor: '4 tiempos, Monocilíndrico, DOHC',
    cilindraje: '373.27 cc',
    transmision: '6 velocidades',
  },
];

export const jsonBarraPorcentaje = [
  {
    titulo: 'Afinaciones y construcciones',
    porcentaje: '90',
    color: '#d63201',
  },
  {
    titulo: 'Ajustar e instalar',
    porcentaje: '95',
    color: '#d63201',
  },
  {
    titulo: 'Ajuste de moto personal',
    porcentaje: '94',
    color: '#d63201',
  },
];

export const jsonSeccionBarraPorcentaje = [
  {
    motor: '4 Tiempos, Monocilíndrico, SOHC, DTSi, 4 Válvulas',
    cilindraje: '199.4 cc',
    potencia: '24.12 Hp @ 9750 rpm',
  },
];

export const jsonTituloSeccionBarraPorcentaje = {
  titulo: 'DEPORTIVA',
  subtitulo: 'PULSAR NS 200 FI ABS',
};
export const jsonDescripcionTecnica = [
  {
    titulo: 'Arranque',
    descripcion: 'Eléctrico',
  },
  {
    titulo: 'Alimentación',
    descripcion: 'Inyección Electrónica',
  },
  {
    titulo: 'Torque máximo',
    descripcion: '18.6 N.m @ 8000 rpm',
  },
  {
    titulo: 'Batería',
    descripcion: '12 V, 8 Ah, VRLA',
  },
  {
    titulo: 'Transmisión',
    descripcion: ' 6 Velocidades',
  },
  {
    titulo: 'Capacidad del Tanque',
    descripcion: '12 L',
  },
  {
    titulo: 'Peso',
    descripcion: '155 Kg',
  },
  {
    titulo: 'Ancho',
    descripcion: '803.5 mm',
  },
];

export const jsonLinkMarcas = [
  {
    url: '/images/vicotry.png',
  },
  {
    url: '/images/benelli.png',
  },
  {
    url: '/images/ktm.png',
  },
  {
    url: '/images/kawasaki.png',
  },
  {
    url: '/images/piaggio.png',
  },
  {
    url: '/images/kymko.png',
  },
  {
    url: '/images/starker.png',
  },  {
    url: '/images/ktm.png',
  },
  {
    url: '/images/kawasaki.png',
  },
  
  {
    url: '/images/piaggio.png',
  }
];

export const jsonLinkPromociones = [
  {
    url: 'https://aburramotos.com/wp-content/uploads/2025/04/Historia-Whatsapp-Promocion-Boxer-CT125-200000-2025-Abril-768x1366.jpg',
  },
  {
    url: 'https://aburramotos.com/wp-content/uploads/2025/04/Historia-Whatsapp-Promocion-Pulsar-180-Fi-Neon-500000-2025-Abril-768x1366.jpg',
  },
  {
    url: 'https://aburramotos.com/wp-content/uploads/2025/04/Historia-Whatsapp-Promocion-Boxer-CT125-200000-2025-Abril-768x1366.jpg',
  },
  {
    url: 'https://aburramotos.com/wp-content/uploads/2025/04/Historia-Whatsapp-Promocion-Pulsar-180-Fi-Neon-500000-2025-Abril-768x1366.jpg',
  },
  {
    url: 'https://aburramotos.com/wp-content/uploads/2025/04/Historia-Whatsapp-Promocion-Boxer-CT125-200000-2025-Abril-768x1366.jpg',
  },
  {
    url: 'https://aburramotos.com/wp-content/uploads/2025/04/Historia-Whatsapp-Promocion-Pulsar-180-Fi-Neon-500000-2025-Abril-768x1366.jpg',
  },
];

export const jsonPuntosVentas = [
  {
    nombre: "AUTECO TUNJA",
    direccion: "Carrera 10 # 29 - 05 Barrio Maldonado",
    telefono: "+57 3212744763",
    ruta: "https://maps.app.goo.gl/TnzXyVipUDmgGvMp6"
  },
  {
    nombre: "AUTECO DUITAMA",
    direccion: "Calle 9 # 21 - 39",
    telefono: "+57 3212609439",
    ruta: "https://maps.app.goo.gl/g7LuwTLCL4U9rZx36"
  },
  {
    nombre: "AUTECO SOGAMOSO",
    direccion: "Calle 11 # 24 - 51",
    telefono: "+57 3212293251",
    ruta: "https://maps.app.goo.gl/VU8EBCrhRRdLt2RQ7"
  },
  {
    nombre: "AUTECO CHIQUINQUIRÁ",
    direccion: "Calle 9 # 8 - 52",
    telefono: "+57 3187017610",
    ruta: "https://maps.app.goo.gl/tsE6xirRNXEcRP6U7"
  },
  {
    nombre: "AUTECO VALLEDUPAR",
    direccion: "Diagonal 21 # 20 - 53 Primero de Mayo",
    telefono: "+57 3108199444",
    ruta: "https://maps.app.goo.gl/kQykLDy2JewfgAW18"
  },
  {
    nombre: "AUTECO CODAZZI - CESAR",
    direccion: "Carrera 16 # 21 - 53 Fátima",
    telefono: "+57 3232946356",
    ruta: "https://maps.app.goo.gl/M88K94F8tFJ35QJN7"
  },
  {
    nombre: "AUTECO LA LOMA - CESAR",
    direccion: "Calle 10 # 9 - 39 Calle Central",
    telefono: "+57 3118269608",
    ruta: "https://maps.app.goo.gl/NwWfB9hUWUdjnpy99"
  },
  {
    nombre: "AUTECO LA JAGUA - CESAR",
    direccion: "Carrera 4 Calle 5 # 06 Local 1 Centro",
    telefono: "+57 3118283016",
    ruta: "https://maps.app.goo.gl/qhbHxMjYtmryd7Di9"
  },
  {
    nombre: "AUTECO EL COPEY - CESAR",
    direccion: "Carrera 14 # 6 - 5 Las Flores",
    telefono: "+57 3118066821",
    ruta: "https://maps.app.goo.gl/HvwiRwWT5ijAC1ik8"
  },
  {
    nombre: "AUTECO AGUACHICA - CESAR",
    direccion: "Calle 5 # 21 - 15 Las Américas",
    telefono: "+57 3107058994",
    ruta: "https://maps.app.goo.gl/4FSxc5QAGM4zAPSi8"
  },
  {
    nombre: "AUTECO BOSCONIA - CESAR",
    direccion: "Carrera 18 # 14 - 71",
    telefono: "+57 3118055485",
    ruta: "https://maps.app.goo.gl/4FSxc5QAGM4zAPSi8"
  }
  ,
  {
    nombre: "AUTECO UBATÉ - CUNDINAMARCA",
    direccion: "Calle 15 # 5 a - 46",
    telefono: "+57 321 5065370",
    ruta: "https://maps.app.goo.gl/4FSxc5QAGM4zAPSi8"
  }
  ,
  {
    nombre: "AUTECO SANTA MARTA - MAGDALENA",
    direccion: "Calle 29 d Carrera 21 -11 Local 1",
    telefono: "+57 321 2764029",
    ruta: "https://maps.app.goo.gl/4FSxc5QAGM4zAPSi8"
  }
  ,
  {
    nombre: "AUTECO SANTA MARTA G20- MAGDALENA",
    direccion: "Carrera 11 # calle 24-21 Local 4",
    telefono: "+57 321 2756423",
    ruta: "https://maps.app.goo.gl/4FSxc5QAGM4zAPSi8"
  }
];

export const jsonCardMarcasMotos = [
  {
    titulo: 'NAKED',
    descripcion: 'LA EVOLUCIÓN DE LA FURIA.',
    imagen: '/images/NAKED.png',
  },
  {
    titulo: 'SUPERSPORT',
    descripcion: 'PERFECTA PARA DEVORAR CURVAS.',
    imagen: '/images/SUPERSPORT.png',
  },
  {
    titulo: 'TRAVEL',
    descripcion: 'DISFRUTA DE LA LIGEREZA Y LAS CARACTERÍSTICAS DEPORTIVAS QUE SE ESPERAN DE UNA KTM.',
    imagen: '/images/TRAVEL.png',
  }
];

export const jsonImagenCarousel = [
  {
    ruta: 'https://aburramotos.com/wp-content/uploads/2025/04/Banner-Web-1920x636-Promociones-Promocion-Boxer-KS-400000-2025-Abril.jpg',
  },
  {
    ruta: 'https://aburramotos.com/wp-content/uploads/2025/04/Banner-Web-1920x636-Promociones-Promocion-Boxer-S-700000-2026-Abril.jpg',
  },
  {
    ruta: 'https://aburramotos.com/wp-content/uploads/2025/04/Banner-Web-1920x636-Promociones-Promocion-Boxer-X-300000-2025-Abril.jpg',
  },
  {
    ruta: 'https://aburramotos.com/wp-content/uploads/2025/04/Banner-Web-1920x636-Promociones-Promocion-Dominar-250-500000-2026-Abril.jpg',
  },
  {
    ruta: 'https://aburramotos.com/wp-content/uploads/2025/04/Banner-Web-1920x636-Promociones-Promocion-Dominar-250-1000000-2025-Abril.jpg',
  },
  {
    ruta: 'https://aburramotos.com/wp-content/uploads/2025/04/Banner-Web-1920x636-Promociones-Promocion-Pulsar-150-Fi-UG-500000-2026-Abril.jpg',
  },
  {
    ruta: 'https://aburramotos.com/wp-content/uploads/2025/04/Banner-Web-1920x636-Promociones-Promocion-Pulsar-180-Fi-Neon-500000-2025-Abril.jpg',
  },
  {
    ruta: 'https://aburramotos.com/wp-content/uploads/2025/04/Banner-Web-1920x636-Promociones-Promocion-Pulsar-N-160-Fi-500000-2026-Abril.jpg',
  },
  {
    ruta: 'https://aburramotos.com/wp-content/uploads/2025/04/Banner-Web-1920x636-Promociones-Promocion-Pulsar-N-160-Fi-ABS-UG-1200000-2025-Abril.jpg',
  },
  {
    ruta: 'https://aburramotos.com/wp-content/uploads/2025/04/Banner-Web-1920x636-Promociones-Promocion-Pulsar-NS-200-Fi-ABS-UG-500000-2025-Abril.jpg',
  },
];
export const jsonBlog = [
  {
      titulo: 'CILINDRAJE DE LAS MOTOS: ¿QUÉ ES Y COMO ELEGIRLO?',
      fecha: 'julio 17, 2024',
      imagen: '/images/dukeblog.jpg',
      html: `
<section class="contenido-cilindraje">

  <h1>CILINDRAJE DE LAS MOTOS: ¿QUÉ ES Y CÓMO ELEGIRLO?</h1>

  <p>
    Cuando se trata de elegir la moto perfecta, uno de los factores clave a considerar es el
    cilindraje del motor. Pero, ¿qué significa realmente el cilindraje y cómo influye en tu
    experiencia de conducción? Vamos a desglosar todo lo que necesitas saber sobre el cilindraje
    de las motos, desde su significado hasta cómo tomar la mejor decisión al elegir tu vehículo.
  </p>

  <h2>¿QUÉ ES EL CILINDRAJE?</h2>

  <p>
    El cilindraje se refiere al volumen total de todos los cilindros del motor de la moto.
    Por lo general, se mide en centímetros cúbicos (cc) o en litros (L).
    Este número representa la capacidad del motor para generar potencia y es uno de los
    principales determinantes de su rendimiento.
  </p>

  <p>
    En general, un mayor cilindraje significa que hay más espacio para que entre combustible y
    aire en el motor, lo que a su vez significa que el motor tiene la capacidad de generar más
    potencia. Sin embargo, también debes tener en cuenta que los motores más grandes tienden a ser
    menos eficientes en términos de consumo de combustible y pueden ser más pesados.
    Esto significa que tienes que priorizar tus necesidades entre potencia, eficiencia y
    maniobrabilidad.
  </p>

  <h2>TIPOS DE CILINDRAJE</h2>

  <p>Los cilindrajes de las motos varían ampliamente, estas son los más comunes:</p>

  <ul>
    <li>
      <strong>Motos de cilindraje bajo (125cc o menos).</strong><br>
      Las motos con cilindraje bajo son ideales para los motociclistas principiantes y aquellos
      que buscan una conducción económica y eficiente en la ciudad. Son fáciles de maniobrar,
      livianas y generalmente más asequibles tanto en precio de compra, el combustible y el
      mantenimiento. Son perfectas para desplazamientos diarios y viajes cortos.
      <br><br>
      En esta categoría podemos ubicar la
      <a href="https://www.auteco.com.co/motos-tvs/raider-125/" target="_blank" style="color:#c36">TVS RAIDER 125</a>, 
      <a href="https://www.auteco.com.co/motos-tvs-trabajo-y-transporte/" target="_blank" style="color:#c36">nuestra línea de trabajo y transporte</a> y todas las
      <a href="https://www.auteco.com.co/motos-tvs-scooters/" target="_blank" style="color:#c36">scooters</a> del portafolio Auteco.
    </li>

    <li>
      <strong>Motos de cilindraje medio (entre 125cc y 750cc).</strong><br>
      Este segmento es una elección versátil que combina eficiencia y potencia.
      Las motos con cilindrajes medios son adecuadas tanto para rodar en la ciudad como para
      viajes en carretera. Ofrecen un equilibrio entre rendimiento y economía de combustible,
      lo que las convierte en una opción popular entre los motociclistas que desean una moto
      bastante versátil.
      <br><br>
      Aquí puedes encontrar la línea de motos deportivas
      <a href="https://www.auteco.com.co/motos-tvs-deportivas-apache/" target="_blank" style="color:#c36">APACHE</a>,
      <a href="https://www.auteco.com.co/motos-ktm/390-duke-ng/" target="_blank" style="color:#c36">KTM 390 DUKE </a> y 
      <a href="https://www.auteco.com.co/motos-ktm/200-duke-ng/" target="_blank" style="color:#c36">200</a>,
      la HUSQVARNA <a href="https://www.auteco.com.co/motos-husqvarna/701-enduro/" target="_blank" style="color:#c36"> 701 ENDURO</a>,
      <a href="https://www.auteco.com.co/motos-husqvarna/svartpilen-401/" target="_blank" style="color:#c36">SVARTPILEN 401 </a> y 
      <a href="https://www.auteco.com.co/motos-husqvarna/svartpilen-200/" target="_blank" style="color:#c36">200</a>.
    </li>

    <li>
      <strong>Motos de cilindraje alto (más de 750cc).</strong><br>
      Estas motos son conocidas por su potencia y rendimiento excepcionales.
      Son ideales para viajes largos en carretera, donde la velocidad y la capacidad de
      respuesta son esenciales. Las motos de cilindraje alto son populares entre los
      apasionados por las motos deportivas o travel. Sin embargo, tienden a ser menos
      eficientes en términos de consumo de combustible y pueden ser más pesadas y difíciles
      de maniobrar en entornos urbanos.
      <br><br>
      En este segmento se encuentran las motos más potentes como la
      <a href="https://www.auteco.com.co/motos-ktm/890-duke/" target="_blank" style="color:#c36">KTM 890 DUKE</a>,
      <a href="https://www.auteco.com.co/motos-ktm/890-adventure/" target="_blank" style="color:#c36">890 ADVENTURE</a>,
      <a href="https://www.auteco.com.co/motos-ktm/1290-super-duke-r/" target="_blank" style="color:#c36">1290 SUPER DUKE R</a>,
      <a href="https://www.auteco.com.co/motos-ktm/1290-super-adventure-r/" target="_blank" style="color:#c36">1290 SUPER ADVENTURE R</a> y la
      <a href="https://www.auteco.com.co/motos-husqvarna/norden-901/" target="_blank" style="color:#c36">HUSQVARNA NORDEN 901</a>.
    </li>
  </ul>

  <h2>¿CÓMO ELEGIR EL CILINDRAJE ADECUADO?</h2>

  <p>
    La elección del cilindraje adecuado es una decisión crucial al comprar una moto y depende
    de varios factores que deben considerarse detenidamente para garantizar que la moto se
    adapte a tus necesidades y estilo de vida.
  </p>

  <ul>
    <li>
      <strong>Experiencia.</strong><br>
      Si eres principiante es recomendable comenzar con un cilindraje bajo o medio para aprender
      las habilidades de conducción de manera segura. Las motos más pequeñas son más fáciles de
      manejar y controlar, lo que es fundamental cuando estás aprendiendo a conducir.
      A medida que ganes experiencia y confianza en la conducción, puedes considerar motos con
      cilindrajes más grandes si así lo deseas.
    </li>

   <li>
      <strong>Tipo de conducción.</strong><br>
        Considera dónde y cómo planeas usar tu moto. Si la vas a usar principalmente para desplazamientos urbanos, un cilindraje bajo o medio será más eficiente. 
        Si planeas viajes largos en carretera, un cilindraje alto es una mejor opción.
    </li>

      <li>
      <strong>Presupuesto.</strong><br>
        Las motos con cilindraje más alto a menudo tienen un precio más elevado, tanto en la compra como en el mantenimiento. Asegúrate de que tu elección se 
        ajuste a tu presupuesto.
    </li>
    <li>
      <strong>Objetivos de rendimiento.</strong><br>
        Los motociclistas que buscan una aceleración y velocidad significativamente mayor a menudo optan por cilindrajes más altos. Por otro lado, si simplemente 
        deseas una forma eficiente de moverte por la ciudad, un cilindraje menor puede ser suficiente.
    </li>
    <li>
      <strong>Comodidad y ergonomía.</strong><br>
        Asegúrate de que la moto que elijas se adapte a tu altura y complexión. Una moto con un cilindraje adecuado pero una posición de conducción incómoda puede afectar 
        negativamente tu experiencia de manejo.
    </li>
  </ul>
  <p>
    Recuerda que no hay un cilindraje mejor o peor que otros, la elección ideal dependerá de cómo planeas usar tu moto y cuáles son tus objetivos de conducción. Ya sea que busques 
    economía, versatilidad o un rendimiento superior. Antes de tomar una decisión de compra, te recomendamos investigar y, si es posible, realizar pruebas de conducción para sentir 
    cómo se maneja cada cilindraje y determinar cuál se adapta mejor a ti. No hay nada mejor que sentirse bien con la moto que siempre has soñado
  </p>
</section>

      `
  }
]