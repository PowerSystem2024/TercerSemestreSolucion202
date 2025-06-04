// avatar.js

// ======================
// 1) LISTA DE PERSONAJES (por si la quieres reutilizar en otro lugar)
// ======================
const personajesDisponibles = ['Zuko', 'Katara', 'Aang', 'Toph'];

// ======================
// 2) VARIABLES GLOBALES
// ======================
// Estos iremos llenando al hacer clic en “Seleccionar Jugador” y “Seleccionar Enemigo”
let personajeJugador = '';
let personajeEnemigo = '';

// Vidas iniciales
let vidasJugador = 3;
let vidasEnemigo = 3;

// ======================
// 3) INICIALIZAR JUEGO
// ======================
function iniciarJuego() {
    // 3.1) Botón para seleccionar jugador
    document.getElementById("boton-personaje")
            .addEventListener("click", seleccionarPersonajeJugador);

    // 3.2) Botón para seleccionar enemigo
    document.getElementById("boton-enemigo")
            .addEventListener("click", seleccionarPersonajeEnemigo);

    // 3.3) Botones de ataque (deshabilitados hasta que ambos personajes estén elegidos)
    document.getElementById("boton-puño")
            .addEventListener("click", () => manejarAtaque("PUÑO"));
    document.getElementById("boton-embestida")
            .addEventListener("click", () => manejarAtaque("EMBESTIDA"));
    document.getElementById("boton-patada")
            .addEventListener("click", () => manejarAtaque("PATADA"));
    document.getElementById("boton-barrida")
            .addEventListener("click", () => manejarAtaque("BARRIDA"));
    deshabilitarBotonesAtaque();

    // 3.4) Botón de reiniciar
    document.getElementById("boton-reiniciar")
            .addEventListener("click", reiniciarJuego);

    // 3.5) Al cargar: ocultamos secciones hasta tener ambos personajes
    document.getElementById("seleccionar-ataque").style.display = 'none';
    document.getElementById("mensajes").style.display = 'none';
    document.getElementById("reiniciar").style.display = 'none';
}

// Ejecutamos iniciarJuego cuando el DOM esté listo
window.addEventListener('load', iniciarJuego);

// ======================
// 4) SELECCIÓN DEL PERSONAJE JUGADOR
// ======================
function seleccionarPersonajeJugador() {
    // 4.1) Leemos qué radio de “personaje-jugador” está chequeado
    let spanPJ = document.getElementById('personaje-jugador');

    if (document.getElementById("Zuko-jugador").checked) {
        personajeJugador = 'Zuko';
    } else if (document.getElementById("Katara-jugador").checked) {
        personajeJugador = 'Katara';
    } else if (document.getElementById("Aang-jugador").checked) {
        personajeJugador = 'Aang';
    } else if (document.getElementById("Toph-jugador").checked) {
        personajeJugador = 'Toph';
    } else {
        alert("Por favor, selecciona un personaje para ti.");
        return;
    }

    // Mostramos en la pantalla cuál fue el elegido
    spanPJ.innerText = personajeJugador;

    // Una vez elegido el jugador, deshabilitamos sus radios para no cambiar a mitad de proceso
    document.getElementById("boton-personaje").disabled = true;
    document.getElementsByName("personaje-jugador")
            .forEach(radio => radio.disabled = true);

    // Si el enemigo ya estaba seleccionado antes, mostramos los paneles
    if (personajeEnemigo !== '') {
        mostrarPanelAtaque();
    }
}

// ======================
// 5) SELECCIÓN DEL PERSONAJE ENEMIGO (YA NO ALEATORIO)
// ======================
function seleccionarPersonajeEnemigo() {
    // 5.1) Leemos qué radio de “personaje-enemigo” está chequeado
    let spanPE = document.getElementById('personaje-enemigo');

    if (document.getElementById("Zuko-enemigo").checked) {
        personajeEnemigo = 'Zuko';
    } else if (document.getElementById("Katara-enemigo").checked) {
        personajeEnemigo = 'Katara';
    } else if (document.getElementById("Aang-enemigo").checked) {
        personajeEnemigo = 'Aang';
    } else if (document.getElementById("Toph-enemigo").checked) {
        personajeEnemigo = 'Toph';
    } else {
        alert("Por favor, selecciona un personaje para el enemigo.");
        return;
    }

    // Mostramos en la pantalla cuál fue el elegido
    spanPE.innerText = personajeEnemigo;

    // Deshabilitamos sus radios para no cambiar a mitad de proceso
    document.getElementById("boton-enemigo").disabled = true;
    document.getElementsByName("personaje-enemigo")
            .forEach(radio => radio.disabled = true);

    // Si el jugador ya estaba seleccionado antes, mostramos los paneles
    if (personajeJugador !== '') {
        mostrarPanelAtaque();
    }
}

// ======================
// 6) MOSTRAR PANEL DE ATAQUE SI AMBOS PERSONAJES ESTÁN ELEGIDOS
// ======================
function mostrarPanelAtaque() {
    // Solo una vez que jugador y enemigo estén definidos, mostramos todo lo demás
    document.getElementById("seleccionar-ataque").style.display = 'block';
    document.getElementById("mensajes").style.display = 'block';
    document.getElementById("reiniciar").style.display = 'block';

    // Actualizamos las vidas y habilitamos los botones de ataque
    actualizarVidasEnPantalla();
    habilitarBotonesAtaque();
}

// ======================
// 7) HABILITAR / DESHABILITAR BOTONES DE ATAQUE
// ======================
function habilitarBotonesAtaque() {
    document.getElementById("boton-puño").disabled = false;
    document.getElementById("boton-embestida").disabled = false;
    document.getElementById("boton-patada").disabled = false;
    document.getElementById("boton-barrida").disabled = false;
}

function deshabilitarBotonesAtaque() {
    document.getElementById("boton-puño").disabled = true;
    document.getElementById("boton-embestida").disabled = true;
    document.getElementById("boton-patada").disabled = true;
    document.getElementById("boton-barrida").disabled = true;
}

// ======================
// 8) MANEJAR ATAQUE DEL JUGADOR
// ======================
function manejarAtaque(ataqueJugador) {
    // Si el juego ya terminó o alguno no está definido, no hacemos nada
    if (vidasJugador <= 0 || vidasEnemigo <= 0) return;
    if (personajeJugador === '' || personajeEnemigo === '') return;

    // Generar ataque enemigo al azar (solo la parte de combate, no para personaje)
    const ataques = ['PUÑO', 'EMBESTIDA', 'PATADA', 'BARRIDA'];
    const indice = Math.floor(Math.random() * ataques.length);
    const ataqueEnemigo = ataques[indice];

    // Comparamos los ataques
    compararAtaques(ataqueJugador, ataqueEnemigo);
}

// ======================
// 9) COMPARAR ATAQUES Y ACTUALIZAR VIDAS
// ======================
function compararAtaques(ataqueJugador, ataqueEnemigo) {
    let mensaje = "";

    if (ataqueJugador === ataqueEnemigo) {
        mensaje = `¡EMPATE! Ambos usaron ${ataqueJugador}.`;
    } else {
        const ganaJugador =
            (ataqueJugador === "PUÑO" && ataqueEnemigo === "PATADA") ||
            (ataqueJugador === "PATADA" && ataqueEnemigo === "BARRIDA") ||
            (ataqueJugador === "BARRIDA" && ataqueEnemigo === "EMBESTIDA") ||
            (ataqueJugador === "EMBESTIDA" && ataqueEnemigo === "PUÑO");

        if (ganaJugador) {
            vidasEnemigo--;
            mensaje = `¡GANASTE! Tu ${ataqueJugador} derrotó a ${ataqueEnemigo}.`;
        } else {
            vidasJugador--;
            mensaje = `¡PERDISTE! Tu ${ataqueJugador} fue vencido por ${ataqueEnemigo}.`;
        }
    }

    // Actualizar vidas en pantalla
    actualizarVidasEnPantalla();

    // Mostrar mensaje en el panel inferior
    document.getElementById("texto-mensaje").innerText = mensaje;

    // Si alguien llega a 0, finalizamos
    if (vidasJugador <= 0 || vidasEnemigo <= 0) {
        finalizarJuego();
    }
}

// ======================
// 10) ACTUALIZAR VIDAS EN EL HTML
// ======================
function actualizarVidasEnPantalla() {
    document.getElementById("vidas-jugador").innerText = vidasJugador;
    document.getElementById("vidas-enemigo").innerText = vidasEnemigo;
}

// ======================
// 11) FINALIZAR JUEGO
// ======================
function finalizarJuego() {
    deshabilitarBotonesAtaque();
    const textoFinal = document.getElementById("texto-mensaje");

    if (vidasJugador <= 0) {
        textoFinal.innerText = `¡HAS SIDO DERROTADO! ${personajeEnemigo} se impuso.`;
    } else if (vidasEnemigo <= 0) {
        textoFinal.innerText = `¡FELICITACIONES! ${personajeJugador} ha ganado.`;
    }
}

// ======================
// 12) REINICIAR JUEGO
// ======================
function reiniciarJuego() {
    // 12.1) Restablecer variables
    personajeJugador = '';
    personajeEnemigo = '';
    vidasJugador = 3;
    vidasEnemigo = 3;

    // 12.2) Limpiar textos y spans
    document.getElementById("personaje-jugador").innerText = "";
    document.getElementById("personaje-enemigo").innerText = "";
    document.getElementById("vidas-jugador").innerText = vidasJugador;
    document.getElementById("vidas-enemigo").innerText = vidasEnemigo;
    document.getElementById("texto-mensaje").innerText = "";

    // 12.3) Ocultar paneles de ataque, mensajes y reinicio
    document.getElementById("seleccionar-ataque").style.display = 'none';
    document.getElementById("mensajes").style.display = 'none';
    document.getElementById("reiniciar").style.display = 'none';

    // 12.4) Reactivar los botones de selección de personaje
    document.getElementById("boton-personaje").disabled = false;
    document.getElementsByName("personaje-jugador").forEach(radio => {
        radio.checked = false;
        radio.disabled = false;
    });

    document.getElementById("boton-enemigo").disabled = false;
    document.getElementsByName("personaje-enemigo").forEach(radio => {
        radio.checked = false;
        radio.disabled = false;
    });

    // 12.5) Deshabilitar nuevamente los botones de ataque
    deshabilitarBotonesAtaque();
}
