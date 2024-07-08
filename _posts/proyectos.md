---
title: "Proyectos y subproyectos | Insight"
excerpt: "Problematizar cuestiones en etapas de desarrollo a veces puede llevar a nuevas ideas de subpryectos muy enriquecedoras."
coverImage: "/assets/blog/proyectos.png"
date: "2024-07-08"
author:
  name: Matias Gomez
ogImage:
  url: "/assets/blog/proyectos.png"
---

Estas últimas semanas estuve retomando Python, usando Django Rest Framework para construir una API y Postgresql para la respectiva base de datos. Solo una vez antes habia hecho algo similar, pero esa vez en Java. Otra vez uno de los desafíos fue el sistema de login (autorización y autenticación).

Como parte del último tramo del programa ONE desarrollé una API Rest en Java siguiendo a un instructor y usando paquetes para Spring Boot, mvn etc. Era un projecto básico con una base de datos SQL y endpoints que devolvían listas de usuarios o productos. Lo último que vimos y agregamos al proyecto fue autorizacion y autenticación. Me acuerdo que me costó bastante seguir esa parte del proceso. 

Ahora en un proyecto distinto estoy desarrollando algo similar pero más completo. La proxima tarea es agregar soporte para imágenes en la base de datos, galerias de productos y fotos de perfil. Algo hizo `click!`. Ya considero una opcion viable usar la capa gratuita de algun servicio como backblaze. Posiblemente encarar el alacenamiento de grandes volumenes de imágenes con un bucket tercerizado sea aceptable asi que me permití distraerme con un sub proyecto: un generador de imágenes a partir de strings. Una especie de clon de Gravatar. Un servicio sencillo.


Además de ser un proyecto cuya complejidad depende exclusivamente del tiempo que se le quiera dedicar me pareció una buena forma de acercarme a `npm` y contribuir un paquete de mi autoría. En ese proceso hay un aprendizaje de otro set de reglas y formatos pero en escencia el código hace lo mismo que haria si este paquete fuera implementado como parte del código de un proyecto de React. Es un buen ejercicio de lógica y en el medio también se explora.

El paquete hace lo siguiente: Hashea una string y de ese hash extraemos partes que consideraremos valores hexadecimales. Luego los convertimos a valores decimales redondeados y relativos a una escala que representa los limites del canvas. Con esos valores conseguimos varios colores y diez pares de coordenadas. Los colores son convertidos en una escala usando la libreria chroma-js y después utilizados para diferentes trazos o rellenos. Las coordenadas son leidas por un bucle que traza lineas y curvas. El ancho del trazo tambien se extrae del hash por lo que los colores, el ancho del trazo y la figura en sí son unicas para cada usuario.

Me parece importante resaltar el camino que me lleva hasta este proyecto. avatar-generator es el producto de problematizar un aspecto de un sistema mas grande y crear una herramienta que resuelva este problema. 

Hete aquí el producto de la versión actual con mi email de input:
![magomezdev@gmail.com](/assets/blog/avatarGen1.png)