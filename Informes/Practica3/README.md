# Práctica 3
Jose Nicolas Santander.

## Aplicar conceptos de arquitectura hexagonal
![Link](https://github.com/nisos25/UC-Practicas-SWoT/blob/89fd2b1fd699da119b6aa07f6154008eb5ba48bf/Informes/Practica3/imgs/1.png)


## Implementar protección simple de endpoints

Uso de passport para la protección de los endpoints

![Link](https://github.com/nisos25/UC-Practicas-SWoT/blob/89fd2b1fd699da119b6aa07f6154008eb5ba48bf/Informes/Practica3/imgs/2.png)

## Implementar autenticación JWT

![Link](https://github.com/nisos25/UC-Practicas-SWoT/blob/89fd2b1fd699da119b6aa07f6154008eb5ba48bf/Informes/Practica3/imgs/3.png)
Acá tenemos el login que nos regresa el token de acceso para poder usar los endpoints
![Link](https://github.com/nisos25/UC-Practicas-SWoT/blob/89fd2b1fd699da119b6aa07f6154008eb5ba48bf/Informes/Practica3/imgs/4.png)
Al realizar un POST y enviando el token vemos que el resultado nos muestra que insertó los datos
![Link](https://github.com/nisos25/UC-Practicas-SWoT/blob/89fd2b1fd699da119b6aa07f6154008eb5ba48f/Informes/Practica3/imgs/5.png)
Intentando borrar con el token también permite realizar la operación
![Link](https://github.com/nisos25/UC-Practicas-SWoT/blob/89fd2b1fd699da119b6aa07f6154008eb5ba48bf/Informes/Practica3/imgs/6.png)
En caso de quitar el token de la petición el server va a retornar 401