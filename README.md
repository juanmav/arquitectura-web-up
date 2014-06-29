UP - Arquitectura Web 
=========

###Reseña del Proyecto

En este proyecto construimos una aplicación que al conectarse a la URL del servidor se descarga la aplicación en
el navegador del cliente web.
Esta aplicación fue construida en HTML, CCS utilizando AngulasJS (Java Script). Utilizamos AngularStrap que es la
librería que adapta TwitterBoostrap a AngularJS entre otras dependencias (las dependencias estan descriptas en
el archivo bower.JSON)

El cliente Web para obtener los datos se conecta al back end a travez de una REST appi desarrollada en Ruby on Rails,
este backend fue generado con los comandos de scaffolding de Rails.
Ej:
```sh
rails scaffold Droplet nombre:string ip:string active:boolean
```

### Hacer funcionar esto :

** Dependencias Necesarias:
    - nodejs
    - NPM
    - Grunt
    - Bower
    - Git
    - Ruby
    - Ruby on Rails

### Como tener el proyecto en la maquina de desarrollo?


- Clonar el proyecto
```sh
git clone https://github.com/juanmav/arquitectura-web-up.git ArqWeb
cd ArqWeb
grunt serve
```


- Como generar las Vistas?
Linea de Comando dentro de la carpeta del proyecto 
```sh 
yo angular:view contact
```
En este comando se esta generando la Vista de Contact



- Como generar los Controladores?
Linea de Comando dentro de la carpeta del proyecto 
```sh 
yo angular:controller contact
```
En este comando se esta generando el Controlador para la vista de Contact



- Como configurar las rutas de la aplicacion?
>Dentro del archivo app.js se encuentran las rutas de la aplicacion con sus respectivos controllers.



- Generando un Servicio
En este caso el servicio va a ser una conexion a una rest api
```sh
yo angular:service contact-service
```


- Traer cambios
Este comando trae los cambios realizados en Git
```sh
/dev/ArqWeb$ git pull
```
