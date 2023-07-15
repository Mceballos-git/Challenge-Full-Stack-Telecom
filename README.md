<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://brandemia.org/contenido/subidas/2021/10/05-telecom-argentina-1200x670.jpg" width="400" alt="Nest Logo" /></a>
</p>


# Challenge Full Stack Telecom
Aplicacion Web para alta/baja/modificación de clientes.

## Tabla de contenidos
### Backend
- [Instalaciones necesarias backend](#instalaciones-necesarias-backend)
- [Instrucciones de ejecucion backend](#instrucciones-de-ejecucion-backend)
- [API Endpoints](#api-endpoints)
- [Datos tecnicos](#datos-tecnicos)

### Frontend
- Instrucciones de ejecucion frontend
- Datos técnicos
<br>
<br>

---
### Instalaciones necesarias backend
- [Debes tener GIT instalado](https://git-scm.com/)
- [Debes tener MySql instalado](https://dev.mysql.com/downloads/)
- [Debes tener Node/npm instalado](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
<br>
---
### Instrucciones de ejecucion backend


1. Clonar el repositorio en tu sistema.
```
cd {install_dir}

git clone git@github.com:tkww/paper-integrations-services.git
```
2. Crear la base de datos a la cual se conectara la aplicacion.<br>
  Para esto es necesario que importes el archivo ```challengedb.sql``` que se encuentra dentro del directorio ```{install_dir}/backend/database```.<br>
  A esto puedes hacerlo con MySqlWorkbench o desde tu gestor preferido.<br>

3. Cargar tus credenciales de usuario de acceso a MySql en el archivo ```.env.template```, que se encuentra en la raiz del directorio backend.
```
DB_USERNAME={NombreDeUsuario}
DB_PASSWORD={Contraseña}
```
3. Renombrar el archivo ```.env.template```  a ```.env```

4. Instalar las dependencias del proyecto
```
npm install
```
5. Levantar proyecto: 
```
npm start
```
---
### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/clients | Para traer todos los clientes |
| GET | /api/clients/:id | Para traer un cliente buscando por su id |
| GET | /api/clients/search/:dni | Para traer un cliente buscando por su dni |
| POST | /api/clients | Para crear un nuevo cliente |
| PATCH | /api/clients/:id | Para editar un cliente seleccionandolo por id |
| DELETE | /api/clients/:id | Para eliminar un cliente seleccionandolo por id |

<br>

Si desea ver mas detalles sobre los endpoints, por favor click [aqui](https://documenter.getpostman.com/view/7251380/2s946fdsZB#f42faebd-686f-4215-8059-8ab13ac6a416 )

---
### Datos tecnicos
- Se utilizo NestJS, esto permite ahorrar tiempo y tener una arquitectura tanto mantenible como escalable.
- Se utilizó MySql como base de datos relacional para el proyecto.<br>
- Se utilizo TypeORM para la reduccion de codigo en comparacion con las tecnicas tradicionales de acceso a datos.
- Se implemento paginación en los resultados a devolver, por cuestiones de performance tanto de backend como frontend.





