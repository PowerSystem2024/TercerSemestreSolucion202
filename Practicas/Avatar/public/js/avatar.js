// Agregamos una variable constante que contiene la lista de todos los personajes
// para que la función de seleccionar un personaje enemigo de la PC
// tenga dicha referencia junto con la seleccion del jugador
// y seleccione al azar una opción distinta a la del jugador
const personajesDisponibles = ['Zuko', 'Katara', 'Aang', 'Toph'];

function iniciarJuego(){
    let botonPersonajeJugador = document.getElementById("boton-personaje");
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
}

function seleccionarPersonajeJugador() {

    let spanPersonajeJugador = document.getElementById('personaje-jugador');
    // Se crea una variable para almacenar el personaje que seleccionará el usuario
    // Ese almacenamiento se hará dentro de los condicionales
    let personajeSeleccionado = '';

    if (Zuko.checked) {
        spanPersonajeJugador.innerHTML = 'Zuko';
        personajeSeleccionado = 'Zuko';
    } else if (Katara.checked) {
        spanPersonajeJugador.innerHTML = 'Katara';
        personajeSeleccionado = 'Katara';
    } else if (Aang.checked) {
        spanPersonajeJugador.innerHTML = 'Aang';
        personajeSeleccionado = 'Aang';
    } else if (Toph.checked) {
        spanPersonajeJugador.innerHTML = 'Toph';
        personajeSeleccionado = 'Toph';
    } else {
        alert("Por favor, selecciona un personaje.");
    }

    // Se llama a la funcion que verificará los personajes disponibles para elegirlo aleatoriamente
    seleccionarPersonajeEnemigo(personajeSeleccionado);
}
// Funcion para seleccionar al azar un personaje enemigo filtrando el personaje seleccionado por el jugador
function seleccionarPersonajeEnemigo(personajeJugador) {
    // Se crea la variable spanPersonajeEnemigo para obtener el valor través del Id del html
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo');
    
    // Se crea un arreglo con los personajes disponibles para la PC con una funcion flecha
    // La funcion flecha analiza si cada personaje de la lista es distinto al personaje seleccionado por el jugador, entonces alli arma el nuevo arreglo del cual la PC obtendrá el personaje enemigo
    let personajesParaEnemigo = personajesDisponibles.filter(personaje => personaje !== personajeJugador);

    // Se crea variable para elegir aleatoriamente dentro del rango de lista personajes paraEnemigo
    let eleccionAleatoria = Math.floor(Math.random() * personajesParaEnemigo.length);
    
    // Se asigna a la variable personajeEnemigo el elegido aleatoriamente
    let personajeEnemigo = personajesParaEnemigo[eleccionAleatoria];

    // Por último, usamos innerHTML para agregar el nombre del personaje y mostrarlo en la web
    spanPersonajeEnemigo.innerHTML = personajeEnemigo;
}

window.addEventListener('load', iniciarJuego);