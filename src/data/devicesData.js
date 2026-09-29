export const devicesList = [
  {
    slug: 'samsung-smart-tv',
    name: 'Samsung Smart TV (Tizen OS)',
    category: 'Smart TV',
    iconName: 'Tv',
    popular: true,
    shortDesc: 'Instalación sencilla en televisores Samsung Tizen mediante aplicaciones oficiales.',
    recommendedApps: ['IPTV Smarters Pro', 'Smart IPTV', 'IBO Player', 'SET IPTV', 'Nanomid'],
    connectionMethods: ['Xtream Codes API', 'Lista M3U / MAC Address'],
    estimatedTime: '4 - 6 minutos',
    requirements: [
      'Samsung Smart TV fabricada de 2016 en adelante con Tizen OS.',
      'Conexión a Internet estable (mínimo 15 Mbps para HD, 30 Mbps para 4K). Se recomienda cable Ethernet.',
      'Credenciales activas de Reflexsat IPTV (servidor, usuario y contraseña o enlace M3U).',
      'Cuenta Samsung activa para descargar aplicaciones desde la tienda oficial.',
    ],
    steps: [
      {
        number: '1',
        title: 'Abrir Samsung Smart Hub y buscar la aplicación',
        description: 'Enciende tu televisor Samsung y pulsa el botón Home o Smart Hub del mando a distancia. Dirígete a la sección "Apps" (tienda de aplicaciones). Utiliza el icono de lupa para buscar "IPTV Smarters Pro", "IBO Player" o "Smart IPTV".',
      },
      {
        number: '2',
        title: 'Instalar la aplicación en el televisor',
        description: 'Haz clic en "Instalar" y espera a que se complete la descarga. Una vez finalizada, selecciona "Abrir" y añade el icono a la barra de inicio de tu televisor para acceder rápidamente en el futuro.',
      },
      {
        number: '3',
        title: 'Configurar credenciales con Xtream Codes API',
        description: 'Al iniciar la app, elige la opción "Login with Xtream Codes API". Introduce tus datos facilitados por Reflexsat IPTV:\n• Any Name: Reflexsat IPTV\n• Username: tu usuario\n• Password: tu contraseña\n• Portal URL: http://servidor-reflexsat... (facilitado en tu email de activación)',
      },
      {
        number: '4',
        title: 'Cargar canales y disfrutar del contenido en 4K',
        description: 'Pulsa en "Add User" o "Iniciar Sesión". La aplicación descargará automáticamente la lista organizada de canales en directo, películas VOD, series y guía EPG. ¡Ya puedes disfrutar de la mejor televisión en tu Smart TV!',
      },
    ],
    troubleshooting: [
      '¿La app se cierra o tarda en cargar? Ve a Ajustes del televisor > Asistencia > Cuidado del dispositivo para liberar memoria RAM.',
      '¿Los canales 4K se cortan? Conecta el televisor mediante cable de red Ethernet en lugar de Wi-Fi de 2.4 GHz, o conecta a la red Wi-Fi de 5 GHz.',
      '¿No encuentras IPTV Smarters en la tienda? Puedes utilizar IBO Player o Smart IPTV ingresando la dirección MAC que muestra la pantalla en la web de la aplicación.',
    ],
    faqs: [
      {
        q: '¿Necesito un decodificador adicional para ver IPTV en mi Samsung?',
        a: 'No. Las Smart TV Samsung ejecutan la aplicación IPTV directamente en el sistema Tizen, por lo que no necesitas ningún aparato exterior.',
      },
      {
        q: '¿Se actualizan los canales automáticamente?',
        a: 'Sí, cada vez que abres la aplicación se sincroniza automáticamente con nuestros servidores para incorporar nuevos canales y contenidos bajo demanda.',
      },
    ],
  },
  {
    slug: 'lg-smart-tv',
    name: 'LG Smart TV (webOS)',
    category: 'Smart TV',
    iconName: 'Tv',
    popular: true,
    shortDesc: 'Configuración rápida en televisores LG webOS con IBO Player, IPTV Smarters o SS IPTV.',
    recommendedApps: ['IBO Player', 'IPTV Smarters Pro', 'Smart IPTV', 'SS IPTV', 'XCIPTV'],
    connectionMethods: ['Xtream Codes API', 'Lista M3U / MAC Address'],
    estimatedTime: '4 - 5 minutos',
    requirements: [
      'LG Smart TV con sistema operativo webOS 3.0 o superior.',
      'Conexión a Internet de alta velocidad (fibra óptica recomendada).',
      'Credenciales de suscripción de Reflexsat IPTV.',
      'Acceso a LG Content Store.',
    ],
    steps: [
      {
        number: '1',
        title: 'Acceder a LG Content Store',
        description: 'Pulsa el botón Home en el mando Magic Remote de tu LG y selecciona el icono rosado "LG Content Store" o "Tienda de aplicaciones".',
      },
      {
        number: '2',
        title: 'Buscar e instalar IBO Player o IPTV Smarters',
        description: 'En el buscador de la tienda, escribe "IBO Player" o "IPTV Smarters". Selecciona la app e inicia la instalación gratuita.',
      },
      {
        number: '3',
        title: 'Activar tu lista de reproducción',
        description: 'Si usas IPTV Smarters, inicia sesión directamente mediante "Xtream Codes API" con tu usuario y contraseña. Si usas IBO Player, anota la dirección MAC y Device Key que aparecen en pantalla y activa tu lista en el portal con tu enlace M3U.',
      },
      {
        number: '4',
        title: 'Comprobar la calidad y disfrutar de tus canales',
        description: 'Reinicia la aplicación y navega por las categorías de canales españoles, deportes en directo, películas y series en alta definición.',
      },
    ],
    troubleshooting: [
      'Si experimentas retrasos en la carga, cambia el reproductor interno en Ajustes de la app a "ExoPlayer" o "VLC".',
      'Verifica que el reloj y la fecha de tu Smart TV LG estén configurados en automático con la zona horaria de España (Península o Canarias).',
    ],
    faqs: [
      {
        q: '¿Es compatible con el mando Magic Remote de LG?',
        a: 'Sí, tanto IBO Player como IPTV Smarters permiten navegar fluidamente con el puntero del Magic Remote de LG.',
      },
    ],
  },
  {
    slug: 'fire-tv-stick',
    name: 'Amazon Fire TV Stick & Fire TV Cube',
    category: 'Dispositivo Streaming',
    iconName: 'Flame',
    popular: true,
    shortDesc: 'El dispositivo más popular para IPTV. Soporte nativo para TiviMate y Smarters Pro.',
    recommendedApps: ['TiviMate IPTV Player', 'IPTV Smarters Pro', 'XCIPTV Player', 'Televizo'],
    connectionMethods: ['Xtream Codes API', 'Lista M3U'],
    estimatedTime: '5 minutos',
    requirements: [
      'Amazon Fire TV Stick (Lite, HD, 4K o 4K Max) conectado al televisor y configurado.',
      'App Downloader instalada desde la tienda Amazon Appstore.',
      'Conexión Wi-Fi de 5 GHz o adaptador Ethernet para Fire Stick.',
      'Datos de acceso Reflexsat IPTV.',
    ],
    steps: [
      {
        number: '1',
        title: 'Instalar la aplicación Downloader',
        description: 'En la pantalla de inicio de tu Fire TV, ve a Buscar y escribe "Downloader". Instala la aplicación oficial naranja con dicho nombre.',
      },
      {
        number: '2',
        title: 'Habilitar apps de fuentes desconocidas',
        description: 'Ve a Configuración > Mi Fire TV > Opciones para desarrolladores > Instalar aplicaciones desconocidas > selecciona "Downloader" y márcalo como ACTIVADO.',
      },
      {
        number: '3',
        title: 'Descargar IPTV Smarters Pro o TiviMate',
        description: 'Abre Downloader y en el recuadro de URL introduce el código de descarga rápida (o la URL oficial del reproductor). Pulsa GO, descarga el archivo APK e instálalo.',
      },
      {
        number: '4',
        title: 'Introducir tus datos de Reflexsat IPTV',
        description: 'Abre la app instalada, selecciona "Xtream Codes API", rellena tu usuario, contraseña y URL de servidor que te enviamos al correo. ¡Listo para disfrutar en 4K!',
      },
    ],
    troubleshooting: [
      'Si la opción de desarrollador no aparece en Mi Fire TV, ve a Acerca de > pulsa 7 veces consecutivas sobre "Fire TV Stick" para desbloquearla.',
      'En ajustes de IPTV Smarters Pro en Fire Stick, selecciona "Hardware Decoder" en Video Output para garantizar 60 fps en partidos de fútbol.',
    ],
    faqs: [
      {
        q: '¿Qué Fire Stick me recomiendan para ver fútbol en 4K?',
        a: 'Recomendamos el Fire TV Stick 4K o el Fire TV Stick 4K Max por su potente procesador y compatibilidad con Wi-Fi 6 y HDR10+.',
      },
    ],
  },
  {
    slug: 'android-tv',
    name: 'Android TV & Google TV Box',
    category: 'Smart TV & Box',
    iconName: 'Smartphone',
    popular: true,
    shortDesc: 'Excelente fluidez en Xiaomi Mi Box, Chromecast con Google TV, Nvidia Shield y Sony.',
    recommendedApps: ['TiviMate IPTV Player (Recomendado)', 'IPTV Smarters Pro', 'Televizo', 'OTT Navigator'],
    connectionMethods: ['Xtream Codes API', 'Lista M3U'],
    estimatedTime: '3 - 5 minutos',
    requirements: [
      'Dispositivo o televisor con Android TV 9.0 o posterior (Sony, Philips, TCL, Xiaomi Box, Chromecast).',
      'Acceso directo a Google Play Store.',
      'Suscripción activa a Reflexsat IPTV.',
    ],
    steps: [
      {
        number: '1',
        title: 'Abrir Google Play Store en tu Android TV',
        description: 'Dirígete a la sección de aplicaciones y abre Google Play Store con tu mando.',
      },
      {
        number: '2',
        title: 'Descargar TiviMate IPTV Player o IPTV Smarters',
        description: 'Busca "TiviMate IPTV Player" (el reproductor más optimizado y aclamado para Android TV) y pulsa "Instalar".',
      },
      {
        number: '3',
        title: 'Añadir nueva lista de reproducción',
        description: 'Abre TiviMate, pulsa en "Añadir lista" > "Xtream Codes" e ingresa la URL de servidor, usuario y contraseña de Reflexsat.',
      },
      {
        number: '4',
        title: 'Organizar canales y activar guía EPG',
        description: 'En cuestión de segundos se sincronizarán todos los grupos de canales en español y la guía de programación interactiva.',
      },
    ],
    troubleshooting: [
      'Si tienes cortes en directo, activa la aceleración por hardware en los ajustes del reproductor de TiviMate.',
    ],
    faqs: [
      {
        q: '¿Funciona en Chromecast con Google TV?',
        a: 'Sí, funciona perfectamente con máxima fluidez y soporte para mandos por Bluetooth.',
      },
    ],
  },
  {
    slug: 'apple-tv',
    name: 'Apple TV (tvOS)',
    category: 'Dispositivo Streaming',
    iconName: 'Tv',
    popular: false,
    shortDesc: 'Máxima potencia y fidelidad visual en Apple TV 4K con GSE Smart IPTV o iPlayTV.',
    recommendedApps: ['iPlayTV', 'IPTV Smarters Pro', 'GSE Smart IPTV', 'Smarters Player Lite'],
    connectionMethods: ['Xtream Codes API', 'Lista M3U'],
    estimatedTime: '4 minutos',
    requirements: [
      'Apple TV HD o Apple TV 4K con tvOS actualizado.',
      'ID de Apple para descargar aplicaciones desde el App Store.',
      'Datos de Reflexsat IPTV.',
    ],
    steps: [
      {
        number: '1',
        title: 'Abrir App Store en Apple TV',
        description: 'Navega a la tienda App Store de tu Apple TV y utiliza la búsqueda con Siri o el teclado.',
      },
      {
        number: '2',
        title: 'Descargar GSE Smart IPTV o Smarters Player Lite',
        description: 'Descarga "GSE Smart IPTV" o "Smarters Player Lite" de manera gratuita.',
      },
      {
        number: '3',
        title: 'Configurar Xtream Codes API',
        description: 'Selecciona "Añadir lista" > "Xtream Codes API" y cumplimenta tus datos de Reflexsat IPTV.',
      },
      {
        number: '4',
        title: 'Disfrutar del contenido en Apple TV 4K',
        description: 'Aprovecha la tasa de refresco y el procesamiento del procesador Bionic de Apple para ver emisiones deportivas con suavidad inigualable.',
      },
    ],
    troubleshooting: [
      'Asegúrate de que la salida de vídeo del Apple TV esté configurada en "Ajustar al contenido y rango dinámico" para máxima fidelidad.',
    ],
    faqs: [
      {
        q: '¿Se puede enviar contenido por AirPlay desde el iPhone al Apple TV?',
        a: 'Sí, puedes reproducir en tu iPhone y lanzar la señal a tu Apple TV con un solo toque.',
      },
    ],
  },
  {
    slug: 'iphone-ipad',
    name: 'iPhone & iPad (iOS)',
    category: 'Móviles y Tablets',
    iconName: 'Tablet',
    popular: false,
    shortDesc: 'Lleva tu televisión a cualquier lugar con apps optimizadas para iPhone y iPad.',
    recommendedApps: ['Smarters Player Lite', 'GSE Smart IPTV', 'Snappier IPTV', '247 IPTV Player'],
    connectionMethods: ['Xtream Codes API', 'Enlace M3U'],
    estimatedTime: '3 minutos',
    requirements: [
      'iPhone o iPad con iOS 13 o superior.',
      'Conexión Wi-Fi o datos móviles 4G/5G.',
      'Credenciales de Reflexsat IPTV.',
    ],
    steps: [
      {
        number: '1',
        title: 'Instalar Smarters Player Lite desde App Store',
        description: 'Abre la App Store de Apple en tu iPhone o iPad y descarga "Smarters Player Lite".',
      },
      {
        number: '2',
        title: 'Acceder con Xtream Codes API',
        description: 'Acepta los términos y pulsa en "Iniciar sesión con Xtream Codes API".',
      },
      {
        number: '3',
        title: 'Introducir usuario, clave y URL de servidor',
        description: 'Pega los datos recibidos tras contratar tu plan Reflexsat.',
      },
      {
        number: '4',
        title: 'Ver televisión en movilidad',
        description: 'Disfruta de tus partidos y series favoritas en la pantalla Retina de tu dispositivo o reenvíalo a tu TV por AirPlay.',
      },
    ],
    troubleshooting: [
      'Si viajas fuera de España por la Unión Europea, tu servicio seguirá funcionando sin bloqueos gracias a la compatibilidad europea de Reflexsat.',
    ],
    faqs: [
      {
        q: '¿Consume muchos datos móviles?',
        a: 'En calidad HD estándar consume aproximadamente 1.2 GB por hora. En Wi-Fi puedes disfrutar de 4K sin preocuparte por el consumo.',
      },
    ],
  },
  {
    slug: 'pc-windows-mac',
    name: 'PC Windows & Mac',
    category: 'Ordenadores',
    iconName: 'Monitor',
    popular: false,
    shortDesc: 'Visualiza en tu ordenador mediante VLC Media Player, IPTV Smarters Pro para Windows o IINA.',
    recommendedApps: ['VLC Media Player (Gratuito y universal)', 'IPTV Smarters Pro para Windows', 'IINA (Mac)', 'Kodi'],
    connectionMethods: ['Archivo M3U / URL M3U', 'Xtream Codes API'],
    estimatedTime: '2 - 4 minutos',
    requirements: [
      'PC con Windows 10/11 o Mac con macOS Catalina en adelante.',
      'Reproductor VLC Media Player instalado (gratuito desde videolan.org).',
      'Enlace M3U o credenciales de Reflexsat IPTV.',
    ],
    steps: [
      {
        number: '1',
        title: 'Descargar VLC Media Player',
        description: 'Descarga e instala VLC Media Player desde su sitio web oficial www.videolan.org.',
      },
      {
        number: '2',
        title: 'Abrir emisión de red',
        description: 'En el menú superior de VLC, ve a Medio > Abrir ubicación de red (o pulsa Ctrl + N en Windows / Cmd + N en Mac).',
      },
      {
        number: '3',
        title: 'Pegar el enlace M3U de Reflexsat',
        description: 'Pega tu enlace M3U personalizado y pulsa en "Reproducir".',
      },
      {
        number: '4',
        title: 'Visualizar la lista de reproducción',
        description: 'Pulsa Ctrl + L para abrir la lista de reproducción y navegar cómodamente entre los miles de canales organizados por países y temáticas.',
      },
    ],
    troubleshooting: [
      'En VLC, si un canal salta rápidamente al siguiente, pulsa el botón de bucle/repetición en la barra inferior para mantener el stream.',
    ],
    faqs: [
      {
        q: '¿Hay aplicación con interfaz gráfica para Windows?',
        a: 'Sí, puedes instalar IPTV Smarters Pro para Windows o SFVIP Player para una experiencia tipo Smart TV en el ordenador.',
      },
    ],
  },
  {
    slug: 'mag-box',
    name: 'Dispositivos MAG Box (Infomir)',
    category: 'Decodificador IPTV',
    iconName: 'Box',
    popular: false,
    shortDesc: 'Configuración clásica y ultra estable por Portal URL y dirección MAC en dispositivos MAG.',
    recommendedApps: ['Stalker Portal Nativo (MAG 250, 322, 420, 524, etc.)'],
    connectionMethods: ['Portal Stalker / Dirección MAC'],
    estimatedTime: '5 minutos',
    requirements: [
      'Decodificador MAG original (MAG 250, 254, 322, 420, 524, 542).',
      'Cable de red Ethernet conectado al router.',
      'Dirección MAC comunicada a nuestro soporte para su previa activación en el servidor.',
    ],
    steps: [
      {
        number: '1',
        title: 'Localizar la dirección MAC de tu MAG',
        description: 'En la parte inferior de tu aparato MAG, localiza la pegatina con la MAC (formato 00:1A:79:XX:XX:XX). Comunícanosla al realizar tu pedido.',
      },
      {
        number: '2',
        title: 'Acceder a System Settings',
        description: 'Enciende el MAG sin cable de red o mantén pulsado el botón Setup del mando. Entra en System Settings > Servers > Portals.',
      },
      {
        number: '3',
        title: 'Introducir la URL de Portal de Reflexsat',
        description: 'En "Portal 1 Name" escribe "Reflexsat". En "Portal 1 URL" introduce la URL de Stalker que te enviará nuestro equipo de soporte.',
      },
      {
        number: '4',
        title: 'Guardar y reiniciar',
        description: 'Pulsa OK para guardar y selecciona "Reboot device". Tu MAG cargará la interfaz Stalker con los canales y VOD listos.',
      },
    ],
    troubleshooting: [
      'Si aparece "Your STB is blocked", verifica con nuestro soporte de WhatsApp que tu dirección MAC esté dada de alta correctamente en el sistema.',
    ],
    faqs: [
      {
        q: '¿Puedo usar mi MAG y mi móvil con el mismo plan?',
        a: 'En las MAG el servicio se asocia a la MAC. Si deseas ver también en tu móvil o televisor simultáneamente, contrata el Plan Familiar multi-pantallas.',
      },
    ],
  },
];
