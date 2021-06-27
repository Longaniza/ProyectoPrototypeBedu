import React from 'react';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
//Arreglo de dificultades que es renderizado en el menu principal
export const difficulties = [
    {
        name: 'Pan comido',
        size: '12 cartas',
        cardsPerRowColumn: 12,
        icon: <ViewColumnIcon style={{ fontSize: 100 }} />,
        message: 'Esta dificultad es lo mas facil que existe, es como quitarle un dulce a un bebe'
    },
    {
        name: 'Normalito',
        size: '24 cartas',
        cardsPerRowColumn: 24,
        icon: <ViewModuleIcon style={{ fontSize: 100 }} />,
        message: 'Esta un poco mas dificil, pero aun es super pasable',
    },
    {
        name: 'Superhipermega dificil',
        size: '48 cartas',
        cardsPerRowColumn: 48,
        icon: <ViewComfyIcon style={{ fontSize: 100 }} />,
        message: 'Esto ya es demasiado, quedaras traumado de tanta dificultad. God mode.',
    }
];

//Arreglo con los urls de las imagenes colocadas en la cartas del memorama y su informacion a mostrar
export const urls = [{ url: "https://i.imgur.com/cTD1HSU.png", concept: "Alumna Bedu", info: "Ese eres, un alumno Bedu. Alguien que busca no parar de aprender todos los dias." },
{ url: "https://i.imgur.com/SrbUDSX.png", concept: "Bedu", info: "Plataforma de especialización en habilidades emergentes con el objetivo de preparar profesionales y empresas para los retos del futuro y los que se viven a diario" },
{ url: "https://i.imgur.com/sbttY7T.png", concept: "Celular", info: "Dispositivo portátil que puede hacer o recibir llamadas a través de una portadora de radiofrecuencia, mientras el usuario se está moviendo dentro de un área de servicio telefónico." },
{ url: "https://i.imgur.com/nQznH6o.png", concept: "Computadora", info: "Máquina digital programable que ejecuta una serie de comandos para procesar los datos de entrada, obteniendo convenientemente información que posteriormente se envía a las unidades de salida." },
{ url: "https://i.imgur.com/AFL4XLZ.png", concept: "Comunicación", info: "La acción consciente de intercambiar información entre dos o más participantes con el fin de transmitir o recibir información u opiniones distintas. " },
{ url: "https://i.imgur.com/Dvowa5P.png", concept: "CSS", info: "Lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML (incluyendo varios languages basados en XML como SVG, MathML o XHTML). " },
{ url: "https://i.imgur.com/jBmdjq5.png", concept: "Cursor", info: "Indicador que se usa para mostrar la posición en un monitor o en otros dispositivos de visualización que responderán a las pulsaciones en un dispositivo de entrada de texto o a las acciones en un dispositivo apuntador." },
{ url: "https://i.imgur.com/HtckLJA.png", concept: "Facebook", info: "Servicio de redes y medios sociales en línea estadounidense con sede en Menlo Park, California." },
{ url: "https://i.imgur.com/sPrg5hc.png", concept: "Google Chrome", info: "Navegador web de código cerrado desarrollado por Google, aunque derivado de proyectos de código abierto (como el motor de renderizado Blink). Está disponible gratuitamente." },
{ url: "https://i.imgur.com/8n7xWUa.png", concept: "HTML", info: "Lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet. Se trata de la siglas que corresponden a HyperText Markup Language, es decir, Lenguaje de Marcas de Hipertexto." },
{ url: "https://i.imgur.com/WodChfy.png", concept: "Insomnia", info: "Insomnia es un cliente API REST simple con administración de cookies, variables de entorno, generación de código y autenticación para Mac, Windows y Linux." },
{ url: "https://i.imgur.com/WjB8mPg.png", concept: "JavaScript", info: "JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional)." },
{ url: "https://i.imgur.com/dx2mY02.png", concept: "JSX", info: "JSX es una extensión de JavaScript creada por Facebook para el uso con su librería React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código a JavaScript." },
{ url: "https://i.imgur.com/GFPm4oK.png", concept: "MongoDB", info: "MongoDB es una base de datos orientada a documentos. Esto quiere decir que en lugar de guardar los datos en registros, guarda los datos en documentos. Estos documentos son almacenados en BSON, que es una representación binaria de JSON." },
{ url: "https://i.imgur.com/WpTiPyQ.png", concept: "Mozilla Firefox", info: "Navegador web gratuito respaldado por Mozilla, una organización sin fines de lucro dedicada a la salud y privacidad de Internet." },
{ url: "https://i.imgur.com/qzxPbPy.png", concept: "Postman", info: "Postman es una herramienta que facilita el desarrollo y uso de API. Postman proporciona toda la funcionalidad necesaria para crear o simular especificaciones API y utilizar Postman Collection Runner para crear pruebas." },
{ url: "https://i.imgur.com/OYT9jGr.png", concept: "React", info: "React es una biblioteca escrita en JavaScript, desarrollada en Facebook para facilitar la creación de componentes interactivos, reutilizables, para interfaces de usuario. Se utiliza en Facebook para la producción de componentes." },
{ url: "https://i.imgur.com/Me13W31.png", concept: "Safari", info: "Safari es un navegador web de código cerrado desarrollado por Apple Inc. Está disponible para macOS, iPadOS e iOS." },
{ url: "https://i.imgur.com/ACY1WHu.png", concept: "Slack", info: "Herramienta de comunicación en equipo​." },
{ url: "https://i.imgur.com/MfQZNFf.png", concept: "URL", info: "Mecanismo usado por los navegadores para obtener cualquier recurso publicadon en la web. URL significa Uniform Resource Locator (Localizador de Recursos Uniforme). Una URL no es más que una direccion que es dada a un recurso único en la Web." },
{ url: "https://i.imgur.com/Zd0HpT2.png", concept: "Wifi", info: "Tecnología de red inalámbrica a través de la cual los dispositivos, como computadoras (portátiles y de escritorio), dispositivos móviles (teléfonos inteligentes y accesorios) y otros equipos (impresoras y ⁪videocámaras), pueden interactuar con Internet." },
{ url: "https://i.imgur.com/rSU6kPv.png", concept: "Zoom", info: "Zoom utiliza los servicios de la nube en Internet para realizar videoconferencias por video, audio o ambos, uniendo a personas de todo el mundo a través de una cámara web o un teléfono." },
{ url: "https://i.imgur.com/QRt5FIB.png", concept: "Javascript ON", info: "Notación para crear y consumir objetos en JavaScript." },
{ url: "https://i.imgur.com/JaF2XzX.png", concept: "Nube", info: "La administración de datos en la nube funciona como una red de servidores de datos conectados que se utilizan colectivamente para compartir tus archivos a través de dispositivos y acceder a ellos. Los proveedores de almacenamiento en la nube poseen." }
]
//Objeto utilizado para hacer renderado en base a columnas en el memorama(se utiliza como props con ayuda de
// de material UI .Esta cantidad depende de la cantidad de cartas necesarias y el tamanio del display
export const responsiveRows = {
    12: { xs: 6, sm: 3 },
    24: { xs: 6, sm: 2 },
    48: { xs: 6, sm: 4, md: 1 }
}