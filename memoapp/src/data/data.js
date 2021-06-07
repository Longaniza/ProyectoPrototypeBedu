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
        message: 'Esta dificultad es lo mas facil que existe, es como quitarle un dulce a un bebe',
        imgUrl: 'https://drive.google.com/uc?export=view&id=17aaJAum032uYMORSRJWdGgRky7mHHYnD'
    },
    {
        name: 'Normalito',
        size: '24 cartas',
        cardsPerRowColumn: 24,
        icon: <ViewModuleIcon style={{ fontSize: 100 }} />,
        message: 'Esta un poco mas dificil, pero aun es super pasable',
        imgUrl: 'https://drive.google.com/uc?export=view&id=1ld2k1xej59Fr1bNN0A0Xt6IxYRapLeR1'
    },
    {
        name: 'Superhipermega dificil',
        size: '48 cartas',
        cardsPerRowColumn: 48,
        icon: <ViewComfyIcon style={{ fontSize: 100 }} />,
        message: 'Esto ya es demasiado, quedaras traumado de tanta dificultad. God mode.',
        imgUrl: 'https://drive.google.com/uc?export=view&id=13pUnQI5Y1WPz4v9Ue7v3eUf8iyjkoQkZ'
    }
];

//Arreglo con los urls de las imagenes colocadas en la cartas del memorama
export const urls = ["https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=70,format=webp/images/cards/source/leblanc.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=70,format=webp/images/cards/source/leveled-katarina.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=70,format=webp/images/cards/source/leveled-aphelios.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=70,format=webp/images/cards/source/karma.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=70,format=webp/images/cards/source/leveled-zed.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=70,format=webp/images/cards/source/leona.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=70,format=webp/images/cards/source/diana.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=70,format=webp/images/cards/source/lucian.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/leveled-kindred.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/azir.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/leveled-lux.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/lee-sin.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/leveled-fiora.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/garen.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/darius.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/ashe.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/leveled-jinx.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/leveled-riven.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/leveled-shen.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/leveled-vi.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/leveled-miss-fortune.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/gangplank.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/leveled-braum.png",
    "https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/nimble-poro.png"
]
//Objeto utilizado para hacer renderado en base a columnas en el memorama(se utiliza como props con ayuda de
// de material UI .Esta cantidad depende de la cantidad de cartas necesarias y el tamanio del display
export const responsiveRows = {
    12: { xs: 6, sm: 3 },
    24: { xs: 6, sm: 2 },
    48: { xs: 6, sm: 4, md: 1 }
}