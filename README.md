PROYECTO DE GESTIÓN DE SOLICITUDES:


CONTENIDO:

- [Requisitos]
- [Instalación]
- [Ejecución]
- [Mejores Prácticas]
- [Seguridad]
- [Contacto]



## Requisitos

- Node.js versión v20.16.0
- npm versión 10.8.1
- Base de datos postgresQL versión 16.0
- Otras dependencias:

 
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.0",
    "express-validator": "^7.2.0",
    "jsonwebtoken": "^9.0.2",
    "morgan": "^1.10.0",
    "multer": "^1.4.5-lts.1",
    "nodemailer": "^6.9.15",
    "pg": "^8.13.0",
    "pg-hstore": "^2.3.4",
    "sequelize": "^6.37.3",
    "stripe": "^17.1.0",
    "swagger-ui-express": "^5.0.1"
    "jest": "^29.7.0",
    "nodemon": "^3.1.7",
    "supertest": "^7.0.0"
    

    INSTALACIÓN:

  bcrypt: Biblioteca para el hash de contraseñas.
cors: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
dotenv: Carga variables de entorno desde un archivo .env.
express: Framework web minimalista para Node.js.
express-validator: Middleware para validar y sanear datos de entrada.
jsonwebtoken: Implementación de JSON Web Tokens (JWT) para autenticación.
morgan: Middleware para registrar las solicitudes HTTP.
multer: Middleware para manejar la subida de archivos.
nodemailer: Biblioteca para enviar correos electrónicos.
pg: Cliente de PostgreSQL para Node.js.
pg-hstore: Módulo para manejar datos de tipo hstore en PostgreSQL.
sequelize: ORM (Object-Relational Mapping) para bases de datos SQL.
stripe: Biblioteca para integrar pagos con Stripe.
swagger-ui-express: Middleware para servir la documentación API generada con Swagger.
jest: Framework de pruebas para JavaScript.
nodemon: Herramienta para reiniciar automáticamente el servidor durante el desarrollo.
supertest: Biblioteca para realizar pruebas HTTP en aplicaciones Express.

EJECUCIÓN:

Se instalan las dependencias con npm install
Se inicializa la aplicación con npm start
Se crea archivo .env se agrega allí puert de servidor y url de base de datos.


MEJORES PRÁCTICAS:


La organización del código es fundamental para facilitar la comprensión y el mantenimiento por ello se utiliza una estructura de carpetas clara y lógica, separando las distintas partes de la aplicación (como controladores, modelos, rutas, servicios).

Se divide el código en módulos reutilizables para que cada archivo tenga una única responsabilidad.
Utiliza patrones de diseño adecuados, como MVC (Modelo-Vista-Controlador), para estructurar la aplicación.
Se agrupan funcionalidades relacionadas en carpetas específicas.


MANEJO DE ERRORES:

Se realiza el manejo de errores que asegura que la aplicación pueda responder adecuadamente a situaciones inesperadas y proporciona una mejor experiencia al usuario.

Se utilizan bloques try/catch para manejar excepciones y errores de manera controlada, así como .then  .catch para controlar la respuesta y los errores.
Proporciona mensajes de error claros y útiles para el usuario final.
se registra los errores en un sistema de logging para facilitar el diagnóstico y la resolución de problemas.


PRUEBAS:

Se realizan pruebas unitarias que ayudan a garantizar que el código funcione como se espera y facilitan la detección de errores a medida que el proyecto evoluciona.
Así mismo se realizan pruebas integrales del sistema.
Se Identifica funciones críticas o complejas que deben ser probadas.
Se utiliza herramienta de pruebas Jest para crear y ejecutar tus pruebas.



SEGURIDAD:

Se realiza el Almacenamiento seguro de contraseñas: Las contraseñas de los usuarios se almacenan de manera segura utilizando el algoritmo de hash bcrypt. Esto garantiza que incluso si los datos son comprometidos, las contraseñas no se pueden recuperar fácilmente.

Validación de entrada: Se implementa una validación exhaustiva de los datos de entrada para prevenir inyecciones SQL y otros tipos de ataques. Utilizamos bibliotecas como express-validator para asegurarnos de que los datos cumplen con los formatos esperados antes de ser procesados.

Mantenimiento de dependencias: Es crucial mantener todas las dependencias actualizadas para beneficiarse de las últimas correcciones de seguridad y mejoras, para ello se Utiliza herramientas como npm audit y npm outdated para identificar vulnerabilidades y actualizaciones necesarias en los paquetes.

AUTENTICACIÓN:

Se protegen las rutas con verificación de usuarios por medio de autenticación en cuanto al usuario que puede acceder a diferentes paginas, también se controla los permisos, privilegios que restringe la afectación a la integridad de los datos.


En este proyecto, he integrado Swagger para documentar y visualizar nuestra API de manera efectiva. Swagger es una herramienta poderosa que permite a los desarrolladores crear, mantener y consumir APIs REST de forma más sencilla y clara. A continuación, se detallan las razones por las que elegí utilizar Swagger en este proyecto:

1. Documentación Interactiva
Swagger proporciona una interfaz de usuario interactiva que permite a los desarrolladores y a los usuarios finales explorar la API de forma intuitiva. A través de esta interfaz, es posible ver todos los endpoints disponibles, sus métodos HTTP, parámetros y ejemplos de respuesta. Esto facilita la comprensión de cómo utilizar la API sin necesidad de consultar documentos externos.

2. Generación Automática de Documentación
Swagger permite generar documentación automáticamente a partir de anotaciones en el código. Esto significa que cualquier cambio realizado en la API se refleja instantáneamente en la documentación, lo que garantiza que siempre esté actualizada y precisa. Esto ahorra tiempo y reduce la posibilidad de errores en la documentación manual.

3. Pruebas Rápidas
Con la interfaz de Swagger, es fácil probar los diferentes endpoints de la API directamente desde el navegador. Los desarrolladores pueden realizar solicitudes y ver respuestas en tiempo real, lo que acelera el proceso de desarrollo y depuración. Esto es especialmente útil durante la fase de pruebas, ya que permite validar el funcionamiento de la API sin necesidad de crear scripts de prueba externos.

4. Facilitación de la Colaboración
Swagger facilita la colaboración entre desarrolladores y otros miembros del equipo, como diseñadores y gerentes de producto. Al tener una documentación clara y accesible, todos pueden comprender el funcionamiento de la API, lo que mejora la comunicación y la planificación del desarrollo.

5. Estandarización
Utilizar Swagger ayuda a estandarizar la forma en que se documentan las APIs en el proyecto. Esto promueve mejores prácticas y consistencia en el desarrollo, lo que es crucial a medida que el proyecto crece y se incorporan nuevos desarrolladores.

MIGRACIÓN:

Se utilizan los seeders para agilizar los recursos de programación creando registros en conjunto de esta manera ayuda a optimizar los tiempos de desarrollo.




Desarrollado por:


Luis Enrique de los Ángeles Acevedo Velásquez

japay01@hotmail.com

https://github.com/LuisAcevedo777