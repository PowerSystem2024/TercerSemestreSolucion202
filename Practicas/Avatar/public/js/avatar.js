// ======================
// 1) LISTA DE PERSONAJES 
// ======================
const personajesDisponibles = ['Zuko', 'Katara', 'Aang', 'Toph'];

// ======================
// 2) VARIABLES GLOBALES
// ======================

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

    // Mostrar y ocultar reglas del juego
    document.getElementById("boton-reglas").addEventListener("click", function() {
        document.getElementById("panel-reglas").style.display = "block";
    });
    document.getElementById("cerrar-reglas").addEventListener("click", function() {
        document.getElementById("panel-reglas").style.display = "none";
    });

    // Crear y ocultar el botón "Luchar"
    let btnLuchar = document.createElement("button");
    btnLuchar.id = "boton-luchar";
    btnLuchar.className = "btn btn-primario";
    btnLuchar.innerText = "Luchar";
    btnLuchar.style.display = "none";
    document.getElementById("seleccionar-enemigo").appendChild(btnLuchar);

    btnLuchar.addEventListener("click", function () {
        document.getElementById("seleccionar-personaje").style.display = "none";
        document.getElementById("seleccionar-enemigo").style.display = "none";
        mostrarPanelAtaque();
    });
}

// Ejecutamos iniciarJuego
window.addEventListener('load', iniciarJuego);

// ======================
// 4) SELECCIÓN DEL PERSONAJE JUGADOR
// ======================
function seleccionarPersonajeJugador() {
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

    // Mostrar el personaje elegido
    spanPJ.innerText = personajeJugador;

    // Deshabilitar radios de jugador
    document.getElementById("boton-personaje").disabled = true;
    document.getElementsByName("personaje-jugador")
        .forEach(radio => radio.disabled = true);

    // Quitar resaltado solo de las tarjetas de jugador
    document.querySelectorAll('.opcion-personaje[for$="-jugador"]').forEach(card => card.classList.remove('seleccionado'));
    // Resaltar la tarjeta seleccionada de jugador
    let label = document.querySelector(`label[for="${personajeJugador}-jugador"]`);
    if (label) label.classList.add('seleccionado');

    // Selección aleatoria del enemigo (que no sea el mismo que el jugador)
    const posiblesEnemigos = personajesDisponibles.filter(p => p !== personajeJugador);
    personajeEnemigo = posiblesEnemigos[Math.floor(Math.random() * posiblesEnemigos.length)];

    // Mostrar en pantalla el enemigo elegido
    document.getElementById("personaje-enemigo").innerText = personajeEnemigo;

    // Quitar resaltado solo de las tarjetas de enemigo
    document.querySelectorAll('.opcion-personaje[for$="-enemigo"]').forEach(card => card.classList.remove('seleccionado'));
    // Resaltar la tarjeta seleccionada de enemigo
    let labelEnemigo = document.querySelector(`label[for="${personajeEnemigo}-enemigo"]`);
    if (labelEnemigo) labelEnemigo.classList.add('seleccionado');

    // Mostrar el botón "Luchar"
    document.getElementById("boton-luchar").style.display = "block";
}

// ======================
// 5) SELECCIÓN DEL PERSONAJE ENEMIGO 
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

    // Quitar resaltado solo de las tarjetas de enemigo
    document.querySelectorAll('.opcion-personaje[for$="-enemigo"]').forEach(card => card.classList.remove('seleccionado'));
    // Resaltar la tarjeta seleccionada de enemigo
    let label = document.querySelector(`label[for="${personajeEnemigo}-enemigo"]`);
    if (label) label.classList.add('seleccionado');

    // Si el jugador ya estaba seleccionado antes, mostramos los paneles
    if (personajeJugador !== '') {
        mostrarPanelAtaque();
    }
}

// ======================
// 6) MOSTRAR PANEL DE ATAQUE SI AMBOS PERSONAJES ESTÁN ELEGIDOS
// ======================
function mostrarPanelAtaque() {
    // Mostrar paneles
    document.getElementById("seleccionar-ataque").style.display = 'block';
    document.getElementById("mensajes").style.display = 'block';
    document.getElementById("reiniciar").style.display = 'block';

    // Mostrar imágenes y nombres en el panel VS
    const imagenes = {
        Zuko: "./img/zuko.jpg",
        Katara: "./img/katara.jpg",
        Aang: "./img/Aang.jpg",
        Toph: "./img/toph.jpeg"
    };
    document.getElementById("img-jugador-vs").src = imagenes[personajeJugador];
    document.getElementById("img-jugador-vs").alt = personajeJugador;
    document.getElementById("nombre-jugador-vs").innerText = personajeJugador;

    document.getElementById("img-enemigo-vs").src = imagenes[personajeEnemigo];
    document.getElementById("img-enemigo-vs").alt = personajeEnemigo;
    document.getElementById("nombre-enemigo-vs").innerText = personajeEnemigo;

    // Quitar resaltado ganador/perdedor al mostrar el panel VS
    document.getElementById("versus-jugador").classList.remove("vs-ganador", "vs-perdedor");
    document.getElementById("versus-enemigo").classList.remove("vs-ganador", "vs-perdedor");

    // --- REINICIAR ANIMACIÓN DE ENTRADA ---
    const vj = document.getElementById("versus-jugador");
    const ve = document.getElementById("versus-enemigo");
    vj.style.animation = "none";
    ve.style.animation = "none";
    // Forzar reflow
    void vj.offsetWidth;
    void ve.offsetWidth;
    vj.style.animation = "vs-slide-in-left 0.7s cubic-bezier(.5,1.5,.5,1) both";
    ve.style.animation = "vs-slide-in-right 0.7s cubic-bezier(.5,1.5,.5,1) both";

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

    // Quita clases previas
    document.getElementById("versus-jugador").classList.remove("vs-ganador", "vs-perdedor");
    document.getElementById("versus-enemigo").classList.remove("vs-ganador", "vs-perdedor");

    // --- REINICIAR ANIMACIÓN DE RESPLANDOR ---
    const vj = document.getElementById("versus-jugador");
    const ve = document.getElementById("versus-enemigo");
    vj.style.animation = "";
    ve.style.animation = "";

    if (vidasJugador <= 0) {
        textoFinal.innerText = `¡HAS SIDO DERROTADO! ${personajeEnemigo} se impuso.`;
        document.getElementById("versus-jugador").classList.add("vs-perdedor");
        document.getElementById("versus-enemigo").classList.add("vs-ganador");
    } else if (vidasEnemigo <= 0) {
        textoFinal.innerText = `¡FELICITACIONES! ${personajeJugador} ganó la batalla.`;
        document.getElementById("versus-jugador").classList.add("vs-ganador");
        document.getElementById("versus-enemigo").classList.add("vs-perdedor");
    }
}

// ======================
// 12) REINICIAR JUEGO
// ======================
function reiniciarJuego() {
    // Quitar resaltado de todas las tarjetas de personajes
    document.querySelectorAll('.opcion-personaje').forEach(card => card.classList.remove('seleccionado'));

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

    // 12.5) Deshabilitar nuevamente los botones de ataque
    deshabilitarBotonesAtaque();

    // Ocultar el botón "Luchar"
    let btnLuchar = document.getElementById("boton-luchar");
    if (btnLuchar) btnLuchar.style.display = "none";

    // Mostrar paneles de selección
    document.getElementById("seleccionar-personaje").style.display = "block";
    document.getElementById("seleccionar-enemigo").style.display = "block";

    // Quitar resaltado ganador/perdedor al reiniciar
    document.getElementById("versus-jugador").classList.remove("vs-ganador", "vs-perdedor");
    document.getElementById("versus-enemigo").classList.remove("vs-ganador", "vs-perdedor");
}
