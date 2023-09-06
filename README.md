<p align="center">
  <a target="blank"><img src="https://brandemia.org/contenido/subidas/2021/10/05-telecom-argentina-1200x670.jpg" width="400" alt="Telecom" /></a>
</p>

Esta aplicacion fue realizada en un lapso de una semana, aproximadamente 16hs de desarrollo.

# Challenge Full Stack Telecom
Aplicación Web para gestión de clientes.

## Tabla de contenidos
### Backend
- [Instalaciones necesarias backend](#instalaciones-necesarias-backend)
- [Instrucciones de ejecución backend](#instrucciones-de-ejecucion-backend)
- [API Endpoints](#api-endpoints)
- [Datos tecnicos backend](#datos-tecnicos-backend)

### Frontend
- [Instrucciones de ejecución frontend](#instrucciones-de-ejecución-frontend)
- [Datos técnicos frontend](#datos-tecnicos-frontend)

---

### Instalaciones necesarias backend
- [Debes tener GIT instalado](https://git-scm.com/)
- [Debes tener MySql Server 8 instalado](https://dev.mysql.com/downloads/)
- [Debes tener Node/npm instalado](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

---
### Instrucciones de ejecución backend


1. Clonar el repositorio en tu sistema.
```
cd {install_dir}

git clone https://github.com/Mceballos-git/Challenge-Full-Stack-Telecom.git
```
2. Crear la base de datos a la cual se conectara la aplicación.<br>
  Para esto es necesario que importes el archivo `challengedb.sql` que se encuentra dentro del directorio `{install_dir}/backend/database`.<br>
  A esto puedes hacerlo con MySQL Workbench o desde tu gestor preferido.<br>
  Para más información sobre como crear una base de datos a partir de un archivo SQL,  con MySQL Workbench, click [aquí.](https://linuxhint.com/import-and-run-sql-script-file-in-mysql-workbench/)



3. Cargar tus credenciales de usuario de acceso a MySql Server en el archivo `.env.template`, que se encuentra en la raíz del directorio backend.
```
DB_USERNAME={NombreDeUsuario}
DB_PASSWORD={Contraseña}
```
3. Renombrar el archivo `.env.template` que se encuentra en la raiz del directorio ```{install_dir}/backend/```  a `.env`

4. Instalar las dependencias del proyecto.<br>
Abrir una terminal dentro de la carpeta backend y ejecutar el siguiente comando:
```
npm install
```
5. Poner a correr el proyecto en el puerto 3000.
```
npm run start
```



---
### API Endpoints
| HTTP Method | Endpoint | Action |
| --- | --- | --- |
| GET | /api/clients | Traer todos los clientes |
| GET | /api/clients/:id | Traer un cliente buscando por su id |
| GET | /api/clients/search/:dni | Traer un cliente buscando por su dni |
| POST | /api/clients | Crear un nuevo cliente |
| PATCH | /api/clients/:id | Editar un cliente seleccionandolo por id |
| DELETE | /api/clients/:id | Eliminar un cliente seleccionandolo por id |

<br>

Si desea ver más detalles sobre los endpoints, por favor click [aqui](https://documenter.getpostman.com/view/7251380/2s946fdsZB )

---
### Datos tecnicos backend
- Se utilizó NestJS, esto permite tener una arquitectura mas mantenible y escalable ahorrando tiempo de desarrollo. 
- Se utilizó MySql como base de datos relacional para el proyecto.
- Se utilizó TypeORM para la reducción de código en comparación con las técnicas tradicionales de acceso a datos.
- Se implementó paginación en los resultados a devolver, por cuestiones de performance tanto de backend como frontend.

---
### Instrucciones de ejecución frontend

1. Instalar las dependencias del proyecto.<br>
Abrir una terminal dentro de la carpeta frontend y ejecutar el siguiente comando:
```
npm install
```
2. Renombrar el archivo ```.env.template``` que se encuentra en la raiz del directorio ```{install_dir}/frontend/``` a ```.env```<br>

3. Levantar la aplicacion
```
npm run dev
```
4. Abrir un navegador y escribir la siguiente direccion URL
```
http://localhost:5173
```
---
### Datos tecnicos frontend
  - Se creó la aplicacion con Vite, ya que provee una mejor experiencia de desarrollo.
  - Se utilizó la ultima version hasta el momento de React, v18.2
  - Se utilizó Axios para realizar llamadas http.
  - Se utilizó la libreria SweetAlert2 para mostrar alerts con mensajes al  usuario.
  - Se maneja el estado de la aplicación utilizando el hook useContext nativo de React.
  - Se utilizó Bootstrap 5 para manejar los estilos.
  





