# Proyecto 1 - Tópicos especiales en telemática
En este proyecto se implementa una aplicación IOT web en la que se registren los datos de temperatura, humedad y GPS, ya sea desde un dispositivo arduino o un celular inteligente.

## Tecnologías
* **Frontend:** Se utilizó el framework [Angular](https://angular.io/) para desarrollar el frontend, el cual utiliza HTML, CSS y Typescript. 
  - Para la conexión entre la vista y el servidor se utilizó el servicio de Angular [HttpClient](https://angular.io/guide/http). 

* **Backend:** Para desarrollar el backend se utilizó [Node.js](https://nodejs.org/es/) y una base de datos no relacional con [MongoDB](https://www.mongodb.com/es). 
  - Para realizar la conexión entre el servidor y la base de datos se utilizó [mongoose](https://mongoosejs.com/), el cual permite definir objetos con un esquema fuertemente tipado que se asigna a un documento *MongoDB*.
  - Para implementar la *API REST* se utilizó el framework de *Node.js* llamado [Express.js](https://expressjs.com/es/) el cual permite crear de manera rápida y sencilla métodos `POST`, `GET`, `PUT`, entre otros.

## Ejecución
Actualmente la aplicación corre de manera local, por esto es necesario instalar todas las dependencias y posteriormente ejecutarlo.

Luego de clonar el repositorio diríjase al directorio *server*:
```
cd proyecto1_Telematica/server
```
Posteriormente, descargue las dependencias necesarias para ejecutar el servidor con `npm install` y finalmente ejecutelo con
```
node app.js
```
Tras ejecutar el comando el servidor comenzará a correr en el puerto `3000`.

Una vez tenga el servidor corriendo abra otra terminal y diríjase al directorio *gui/climate*:
```
cd proyecto1_Telematica/gui/climate/
```
Nuevamente, descarge las dependencias necesarias utilizando `npm install` y ejecute la aplicación
```
ng serve -o
```
Tras correr este comando la aplicación se abrirá en su navegador y se ejecutará en el puerto `4200` de su máquina.

## Especificaciones del proyecto
#### Requisitos funcionales de la aplicación
- El sistema debe recibir periódicamente datos desde un dispositivo IOT y almacenarlos en una base de datos.
- El sistema debe permitir que el usuario se autentifique utilizando una API de Google.
- El sistema debe permitir visualizar los datos almacenados en la base de datos.
- El sistema debe permitir realizar búsquedas y filtrar los elementos almacenados.

#### Requisitos no funcionales de la aplicación
- *Seguridad:* El sistema debe asegurarle al usuario que los datos ingresados en el inicio de sesión están protegidos.
- *Seguridad:* El sistema debe verificar que los dispositivos IOT que envían datos son reales.
- *Disponibilidad:* El sistema debe estar disponible en todo momento.
- *Mantenibilidad:* El sistema se podrá modificar de manera fácil y rápida.
- *Escalabilidad:* El sistema debe permitir ser modificado y agregar nuevas funcionalidades fácilmente.
- *Usabilidad:* El sistema debe ser fácil de comprender y utilizar para el usuario.
- *Capacidad:* El sistema debe ser capaz de almacenar una gran cantidad de datos.

#### Especificación de los servicios *API REST* del backend
El backend debe contener dos servicios *API REST*, un `POST` para almacenar en la base datos toda la información enviada desde los dispositivos IOT y un `GET` para obtener desde el frontend los datos y posteriormente poder visualizarlos.

#### Autenticación de los servicios *API REST*
Para la autenticación de los servicios *API REST* en el frontend se utilizó una API de Google por medio de la librería de *Node* llamada [angularx-social-login](https://www.npmjs.com/package/angularx-social-login).

#### Principales dificultades al desarrollar el proyecto

##### Por desconocimiento de la tecnología
La principal dificultad que tuve con respecto al desconocimiento de la tecnología fue en el backend, ya que anteriormente había desarrollado servidores utilizando [Flask](https://www.palletsprojects.com/p/flask/), sin embargo, en esta oportunidad seleccione *Node.js*, el cual nunca había utilizado para implementar el backend de una aplicación, por lo que fue necesario aprender el funcionamiento básico de este. Además, para la conexión entre el servidor y la base de datos fue necesario aprender a utilizar *mongoose*, ya que en proyectos anteriores en los que había utilizado *MongoDB* había realizado la conexión utilizando [PyMongo](https://api.mongodb.com/python/current/). 

##### Conceptos o fundamentos que no se para poder desarrollar el proyecto
Nunca había trabajando con autenticación de servicios desde el servidor utilizando *API KEYs*

##### Habilidades de desarrollo que faltan para terminar el proyecto
Mejor manejo de *Node.js* para la implementación del servidor.

##### Otras cosas que faltaron para poder desarrollar el proyecto 1
Falta implementar una forma segura de autenticar los dispositivos IOT. Actualmente el dispositivo debe enviar su dirección MAC, sin embargo, no se hace ningún procesamiento de esta información.

#### Principales aprendizajes del proyecto 1
Con la realización de este proyecto aprendí mejores prácticas para el desarrollo e integración de aplicaciones web, aprendí nuevas tecnologías para la creación del backend y pude profundizar en los conocimientos que tenía previamente de *Angular*.
