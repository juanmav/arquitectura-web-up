UP - Arquitectura Web 
=========

### Applicacion de prueba:

  - AngularJS
  - AngularStrap
  - Bower
  - Grunt
  - Rest API

### Hacer funcionar esto :

- TODO

### De que es.

### Clonar el proyecto

```sh
git clone https://github.com/juanmav/arquitectura-web-up.git ArqWeb
cd ArqWeb
```
### Como generar las Vistas?
Linea de Comando dentro de la carpeta del proyecto 
```sh 
yo angular:view contact
```
En este comando se esta generando la Vista de Contact


### Como generar los Controladores?
Linea de Comando dentro de la carpeta del proyecto 
```sh 
yo angular:controller contact
```
En este comando se esta generando el Controlador para la vista de Contact

### Como configurar las rutas de la aplicacion?
Dentro de app.js se encuentran las rutas de la aplicacion con sus respectivos controllers.

### Generando un Servicio
En este caso el servicio va a ser una conexion a una rest api
```sh
yo angular:service contact-service
```

Traer cambios
/dev/ArqWeb$ git pull

Arrancar proyecto
grunt serve