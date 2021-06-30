# Prototype Memorama - Equipo 7

## Planteamiento del problema
#EstamosConectados es una encuesta realizada en noviembre del 2020, en la que participaron más de 3.400 personas, entre estudiantes, docentes y directivos de todo el país de chile, con el objetivo de conocer las condiciones y herramientas de las que disponen las comunidades educativas para sostener el proceso de enseñanza a distancia y obtener sus opiniones ante la pandemia por el Covid-19.

En dicha entrevista se realizó la siguiente pregunta: ¿Qué tan entretenidas o aburridas te han parecido las clases a distancia?, más del 60% respondió que considera aburridas las clases a distancia.

Es preocupante que a la mayoría de los encuestados valoren el aprendizaje en línea como aburrido, este porcentaje de personas podrían presentar falta de motivación y escasez de participación en el aula virtual. Se analizaron las posibles causas de esta situación y se procederá a aplicar una metodología que ayude a resolver este problema.

## Solución propuesta
Después de analizar la problemática de la falta de participación y motivación en clase se ha procedido a buscar solución incluyendo la metodología de la gamificación. Dicha metodología busca la motivación del alumnado y ayuda a aprender conceptos de una manera diferente. Además, acerca al alumnado a las nuevas tecnologías y ayuda fijarse objetivos.

La solución propuesta es la gamificación debido a que es una metodología que promueve la motivación y participación. Para ello se llevará a cabo el desarrollo de un juego en línea. 

El proyecto consiste en un memorama de un solo jugador. Existen 3 dificultades, con 12, 24 y 48 cartas. Al seleccionar cualquiera de estas dificultades se empieza a contar el tiempo y se detiene cuando el jugador logra encontrar todos los pares. Al finalizar el juego, el jugador puede registrar el tiempo obtenido registrando su nombre y en el menú principal puede ver en el botón de mejores tiempos, los 50 puntajes más altos, de acuerdo con el tiempo y tarjetas volteadas, ahí mismo podrá observar el nombre y país de los jugadores.

## Página principal de la Aplicación web
![](https://i.imgur.com/1KoH1e1.png)

## Memorama: contiene las tarjetas, el tiempo de juego y los conceptos
![](https://i.imgur.com/fqdmrbb.png)

## Registro de puntaje
![](https://i.imgur.com/EL7advV.png)

## Mejores tiempos por dificultad
![](https://i.imgur.com/SneSyqV.png)

## Arquitectura utilizada
![](https://raw.githubusercontent.com/Longaniza/ImagesPrototype/master/arq.jpeg)

## Tablas guardadas en el backend
### Scores(puntajes)

![](https://raw.githubusercontent.com/Longaniza/ImagesPrototype/master/table.png)

## Setup
### Local
1. Se clona el repositorio (en este ejemplo con ayuda de https) y se accede a la carpeta raíz del proyecto.
``` 
git clone https://github.com/Longaniza/ProyectoPrototypeBedu.git
cd ProyectoPrototypeBedu
```
2. Se instalan todas las paquetetias utilizadas por el backend.
``` 
npm install
```
3. Se crea un archivo .env en la raiz del proyecto con las credencias requeridas para conectarse a una base de datos mysql(proceso de creación de la base de datos mysql no incluido dentro de esta guía) con el siguiente formato.
``` 
DB_HOST=<Host Name>
DB_USER=<User Name>
DB_PASSWORD=<Contraseña>
DB_DATABASE=<Database Name>
```
4. Se hace build del Front para ser servido por el backend.
``` 
npm run build-client
```
5. Se inicia la aplicación. Si se creó una variable global para un puerto se accedera a la app con el url localhost:Puerto y si no es asi, se accederá desde el puerto 8081 con el url localhost:8081.
``` 
npm run start
```
### Hosteado
Se hizo uso de Heroku para el hosteo de la pagina. Más informacion en la página oficial de [Heroku](https://www.heroku.com/platform).

## Web App
Para utilizar nuestra Web App, visita el siguiente url:
[https://still-cove-58043.herokuapp.com/](https://still-cove-58043.herokuapp.com/)

## Bibliografías
-Institut de Publique Sondage d'Opinion Secteur (2020). #EstamosConectados. https://educacion2020.cl/encuestas/estamosconectados/encuesta2

-Porcar Marín, Óscar. (2018). La Gamificación, una solución para la falta de motivación y escasez de participación en clase. http://repositori.uji.es/xmlui/bitstream/handle/10234/180113/TFM_2018_PorcarMarin_Oscar.pdf?sequence=1&isAllowed=y#:~:text=La%20gamificaci%C3%B3n%20en%20educaci%C3%B3n%20es,y%20la%20resoluci%C3%B3n%20de%20problemas.
