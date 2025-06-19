# Intrucciones

Para instalar y ejecutar correctamente la versión web del proyecto, es necesario cumplir con los siguientes requisitos y seguir los pasos indicados:

## Requisitos previos:

- PostgreSQL versión 16.4-2.
- pgAdmin 4 versión 8.11 o cualquier otro gestor de bases de datos compatible con PostgreSQL.
- Script de base de datos: El script de la base de datos llamado “Ucuddit” (opcional, dependiendo de si prefieres usarlo o generar las tablas automáticamente mediante el backend).
- Node.js versión 21.6.2.
- IntelliJ IDEA: Versión 2024.4.2 (para editar y ejecutar el backend).
- npm, herramienta para gestionar paquetes de Node.js (incluida con la instalación de Node.js).
- React versión 18.3.1.
- Git, para clonar el repositorio que contiene el código fuente del proyecto.

## Pasos para la instalación:

- Clonar el código fuente del proyecto (frontend y backend) utilizando Git con `git clone <URL-del-repositorio>`

### Configuracion del Frontend:

- Accede a la carpeta que contiene el código fuente del frontend.
- Ejecuta el comando `npm install` para instalar todas las dependencias necesarias.

### Configuración y ejecución del backend:

- En postgres tener la base de datos creada con el nombre "Ucuddit" y haber ejecutado el script, si no puedes editar una linea del [backend](https://github.com/AgustinG130/UcudditBackendJava) en `“resources/aplication.propierties”` llamada `“spring.jpa.hibernate.ddl-auto=update”` cambiando el `“update”` por `“drop-create”` se te creará automáticamente cuando lo ejecutes solo no te olvides de cambiarlo nuevamente a “update” porque si no tu base de datos se borrará y creará cada vez que ejecutes el backend.
- Ejecuta el backend en el archivo llamado `“DemoApplication”` en `“\demo\demo\src\main\java\com\example\demo\”` y déjalo funcionando en segundo plano para que el frontend pueda utilizarlo.

### Ejecución del proyecto web:

- Desde la carpeta del frontend, ejecuta el siguiente comando para iniciar el servidor de desarrollo: `npm start`.
- Una vez iniciado, el proyecto se abrirá automáticamente en tu navegador web en `“http://localhost:3000”`.

## Arquitectura:

### Frontend:

La arquitectura del frontend de mi sistema se basa en el patrón de diseño Component-Based Architecture (Arquitectura basada en componentes), el mismo da enteneder que el proyecto está compuesto de componentes reutilizables y bien delimitados en responsabilidad. Además, el código está estructurado en carpetas especificas separando el código y lógica de `.js` o `.jsx` en átomos, moléculas, componentes y páginas.

#### El frontend consume esta API REST utilizando la biblioteca Axios para realizar solicitudes HTTP como:

`axios.get()` para obtener datos de la API y `axios.post()` para enviar datos desde el cliente al servidor.

[Arquitectura del backend](https://github.com/AgustinG130/UcudditBackendJava)

## Decisiones Técnicas:

### Diseño de Componentes para Posts y Comentarios:

Durante el desarrollo de los componentes `Post` y `Comment`, decidí mantenerlos separados para permitir ajustes específicos y facilitar futuras modificaciones sin afectar a ambos. Opté por pasar el ID ya sea de post o comment como prop a los componentes `“OtherButtons”` en lugar de usar `useContext`, ya que los datos son específicos de cada post o comentario, lo que garantiza una comunicación más directa y una estructura sencilla.

### Diseño de lógica de likes y comentarios:

Durante el desarrollo de la lógica de likes y comentarios surgieron los componentes `“OtherButtons”` ya que los consideré como reutilizables y evitar tanta lógica en un componente único.
Para los comentarios, utilicé `“useNavigate”` para redirigir al usuario a la página del post específico (según id, además de asignarlo al path) con sus comentarios.

## Aplicación:

### Web:

- ![Home](public/home.webp)
- ![PostPage](public/postpage.webp)

**Nota mas imágenes disponibles en la carpeta public, las adjuntadas anto web y mobile son con la aplicación en funcionamiento.**

##
Agustín García
