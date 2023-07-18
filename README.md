<p align="center">
  <a target="blank"><img src="https://brandemia.org/contenido/subidas/2021/10/05-telecom-argentina-1200x670.jpg" width="400" alt="Telecom" /></a>
</p>


# Challenge Full Stack Telecom
Aplicación Web para gestión de clientes.

## Tabla de contenidos
### Backend
- [Instalaciones necesarias backend](#instalaciones-necesarias-backend)
- [Instrucciones de ejecución backend](#instrucciones-de-ejecucion-backend)
- [API Endpoints](#api-endpoints)
- [Datos tecnicos](#datos-tecnicos)

### Frontend
- Instrucciones de ejecución frontend
- Datos técnicos
<br>
---

### Instalaciones necesarias backend
- [Debes tener GIT instalado](https://git-scm.com/)
- [Debes tener MySql instalado](https://dev.mysql.com/downloads/)
- [Debes tener Node/npm instalado](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
<br>
---
### Instrucciones de ejecución backend


1. Clonar el repositorio en tu sistema.
```
cd {install_dir}

git clone https://github.com/Mceballos-git/Challenge-Full-Stack-Telecom.git
```
2. Crear la base de datos a la cual se conectara la aplicación.<br>
  Para esto es necesario que importes el archivo `challengedb.sql` que se encuentra dentro del directorio `{install_dir}/backend/database`.<br>
  A esto puedes hacerlo con MySqlWorkbench o desde tu gestor preferido.<br>
  Para más información sobre como crear una base de datos a partir de un archivo `.sql`, click [aquí.](https://dev.mysql.com/doc/workbench/en/wb-admin-export-import-management.html)



3. Cargar tus credenciales de usuario de acceso a MySql en el archivo `.env.template`, que se encuentra en la raíz del directorio backend.
```
DB_USERNAME={NombreDeUsuario}
DB_PASSWORD={Contraseña}
```
3. Renombrar el archivo `.env.template`  a `.env`

4. Instalar las dependencias del proyecto
```
npm install
```
5. Poner a correr el proyecto en el puerto 3000.
```
npm run start:dev
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

Si desea ver más detalles sobre los endpoints, por favor click [aqui](https://documenter.getpostman.com/view/7251380/2s946fdsZB#f42faebd-686f-4215-8059-8ab13ac6a416 )

---
### Datos tecnicos
- Se utilizó NestJS, esto permite ahorrar tiempo y tener una arquitectura tanto mantenible como escalable.
- Se utilizó MySql como base de datos relacional para el proyecto.<br>
- Se utilizó TypeORM para la reducción de código en comparación con las técnicas tradicionales de acceso a datos.
- Se implementó paginación en los resultados a devolver, por cuestiones de performance tanto de backend como frontend.





