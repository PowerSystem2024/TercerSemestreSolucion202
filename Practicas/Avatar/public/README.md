# Juego Avatar: Selección de Personajes

Este proyecto es un pequeño juego interactivo basado en Avatar: The Last Airbender, donde los usuarios pueden seleccionar un personaje y recibir una confirmación. A continuación, se detalla la estructura, funcionalidad y conceptos clave utilizados.

# 📂 Estructura del Proyecto
## 1. Creación de la Estructura de Directorios

Usamos comandos básicos en la terminal para organizar el proyecto:

```sh
> mkdir Juego-Avatar          # Crea la carpeta principal
> cd Juego-Avatar             # Entra en la carpeta
> mkdir public                # Carpeta para archivos públicos
> cd public                   # Entra en "public"
> mkdir css                   # Para estilos CSS
> mkdir assets                # Para imágenes/recursos
> mkdir js                    # Para scripts JavaScript
> touch README.md             # Documentación
> touch avatar.html           # Archivo HTML principal
> code .                      # Abre el proyecto en VS Code

```
# 🖥️ Maquetación HTML
## 1. Comentarios en VS Code

    Comentar/Descomentar línea: CTRL + K + C / CTRL + K + U

    Agregar comentario en espacio vacío: CTRL + )

    Comentarios en CSS: /* */

## 2. Estructura Básica del HTML

    Usamos id para identificar elementos clave en el DOM.

    El elemento <input> permite diferentes tipos de entrada de usuario. En este caso, usamos type="radio" para selección única.

### Ejemplo de Radio Buttons Agrupados

```sh
<label for="aang">Aang</label>
<input type="radio" name="personaje" id="aang" />

<label for="katara">Katara</label>
<input type="radio" name="personaje" id="katara" />

<label for="toph">Toph</label>
<input type="radio" name="personaje" id="toph" />

<label for="zuko">Zuko</label>
<input type="radio" name="personaje" id="zuko" />

```
🔹 Explicación:

    name="personaje" agrupa los radio buttons, permitiendo solo una selección a la vez.

    for="id" en <label> vincula el texto al input correspondiente, mejorando la accesibilidad (se puede seleccionar haciendo clic en el texto).

## 3. Botones de Acción

```sh
<button id="boton-personaje">Seleccionar</button>
<button id="boton-reiniciar">Reiniciar</button>

```

## 4. Vinculación del JavaScript
El script se carga al final del <body> para asegurar que el DOM esté listo antes de ejecutar el código:

```sh

<script src="./js/avatar.js"></script>

```

# ⚙️ Funcionalidad con JavaScript
## 1. Captura de Elementos del DOM

Usamos document.getElementById() para seleccionar elementos:

```sh
let botonPersonaje = document.getElementById("boton-personaje");
```

## 2. Event Listeners

Asignamos acciones a los botones con addEventListener:

```sh
botonPersonaje.addEventListener("click", seleccionarPersonajeJugador);
```

## 3. Función seleccionarPersonajeJugador()

Esta función verifica qué personaje fue seleccionado y muestra un mensaje

# 📚 Conceptos Teóricos Clave
## 1. DOM (Document Object Model)

Estructura jerárquica que representa un documento HTML, permitiendo manipular dinámicamente contenido, estructura y estilos.

## 2. Radio Buttons vs Checkboxes

    Radio Buttons: Solo una selección posible (mismo name).

    Checkboxes: Múltiples selecciones permitidas.

## 3. Event-Driven Programming

JavaScript usa eventos (clics, teclas, etc.) para ejecutar funciones. addEventListener es el método principal para gestionarlos.