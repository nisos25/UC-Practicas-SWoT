# Práctica 2
Jose Nicolas Santander

## Instalación NodeJS y NestJS
![Link]()

Comandos de instalación que se encuentran en la guía.

## Implementación servidor web 

Con Node y Nest instalados se crea un nuevo proyecto de nest con el comando **nest new "nombre"**.

Cuando Nest crea el proyecto tenemos un servidor web y un Hola mundo básico, en este caso lo consultamos con
localhost:3000, tanto en la terminal como en el navegador.

![Link]()

## Código en repositorio de Github
Acá toca seguir unos pasos antes de poder subir el código por cambios en la autenticación de Github.

- Ir a la página de Github y generar un token de acceso para la cuenta *Settings>Developer settings>Personal 
access tokens*
- Configurar en git el nombre de usuario y correo.
- Al intentar hacer el *push* en el campo de contraseña usar el token generado

Con esto ya se pudo subir el código normalmente sin pasos adicionales

![Link]()

## Identificar los verbos Http y su uso para un caso de ejemplo.

En este paso se usaron los principales verbos HTTP siguiendo el ejemplo y usando Postman para probar los endpoints

El get y post funcionan sin parametros, pero en el caso del post tiene un cuerpo para recibir los datos del producto.

El delete, put y patch usan parametros para saber en qué posición está el objeto que se va a afectar en la operación.

Adicional a esto el patch soporta la modificación de los valores enteros, por lo que también recibe un body.

![Link](https://github.com/nisos25/UC-Practicas-SWoT/blob/1a16389fc39e11b262c01ef7b45773e68d109ca0/Informes/Practica2/imgs/1.png)
![Link](https://github.com/nisos25/UC-Practicas-SWoT/blob/1a16389fc39e11b262c01ef7b45773e68d109ca0/Informes/Practica2/imgs/2.png)
![Link](https://github.com/nisos25/UC-Practicas-SWoT/blob/1a16389fc39e11b262c01ef7b45773e68d109ca0/Informes/Practica2/imgs/3.png)
![Link](https://github.com/nisos25/UC-Practicas-SWoT/blob/1a16389fc39e11b262c01ef7b45773e68d109ca0/Informes/Practica2/imgs/4.png)
![Link](https://github.com/nisos25/UC-Practicas-SWoT/blob/1a16389fc39e11b262c01ef7b45773e68d109ca0/Informes/Practica2/imgs/5.png)
