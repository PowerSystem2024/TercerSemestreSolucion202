function seleccionarPersonajeJugador() {
    if (Zuko.checked) {
        alert("SELECCIONASTE AL PERSONAJE DE ZUKO 🔥");
    } else if (Katara.checked) {
        alert("SELECCIONASTE AL PERSONAJE DE KATARA 💧");
    } else if (Aang.checked) {
        alert("SELECCIONASTE AL PERSONAJE DE AANG 🌪️");
    } else if (Toph.checked) {
        alert("SELECCIONASTE AL PERSONAJE DE TOPH 🌱");
    } else {
        alert("Por favor, selecciona un personaje.");
    }
}

let botonPersonajeJugador = document.getElementById("boton-personaje");
botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
