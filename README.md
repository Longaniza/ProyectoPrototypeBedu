# Prototype Memorama - Equipo 7

## Planteamiento del problema
El aburrimiento es una enfermedad que se enfrenta cuando estas en tiempo de pandemia. Nada más tedioso que no tener que hacer, y más en tiempos donde se esta el 90% del tiempo en casa.

## Solución propuesta
Qué más divertido que entretenerte compitiendo con tus amigos y contra el mundo para pasar el rato, por lo cual se decidió el crear un memorama.
El proyecto consiste en un memorama de un solo jugador por tiempo. Existen 3 dificultades, con 12, 24 o 48 cartas. Al seleccionar cualquiera de estas dificultades se empieza a contar el tiempo y se para cuando se gana. Se puede registrar el tiempo a un nombre y ver la comparación contra otros tiempos dentro de una pantalla que muestra los mejores tiempos.

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
Institut de Publique Sondage d'Opinion Secteur (2020). #EstamosConectados. https://educacion2020.cl/encuestas/estamosconectados/encuesta2
Porcar Marín, Óscar. (2018). La Gamificación, una solución para la falta de motivación y escasez de participación en clase. http://repositori.uji.es/xmlui/bitstream/handle/10234/180113/TFM_2018_PorcarMarin_Oscar.pdf?sequence=1&isAllowed=y#:~:text=La%20gamificaci%C3%B3n%20en%20educaci%C3%B3n%20es,y%20la%20resoluci%C3%B3n%20de%20problemas.
