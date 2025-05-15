function numPc(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = "";
    if (jugada == 1) {
        resultado = "Piedra ✊"
    } else if (jugada == 2) {
        resultado = "Papel 🖐️"
    } else if (jugada == 3) {
        resultado = "Tijera ✌️"
    } else {
        resultado = "Mal elegido 🤷"
    }
    return resultado
}

function reiniciarJuego() {
    triunfos = 0;
    perdidas = 0;
    jugar();
}

function jugar() {
    let jugador = 0;
    let pc = 0;
    let triunfos = 0;
    let perdidas = 0;

    while (triunfos < 3 && perdidas < 3) {
        pc = numPc(3, 1)
        jugador = prompt("Elige 1: piedra, 2: papel, 3: tijera")

        alert("Pc elige: " + eleccion(pc))
        alert("Tu eliges: " + eleccion(jugador))

        //Combate
        if (pc == jugador) {
            alert("EMPATE")
        } else if (jugador == 1 && pc == 3) {
            alert("GANASTE");
            triunfos = triunfos + 1
        } else if (jugador == 2 && pc == 1) {
            alert("GANASTE")
            triunfos = triunfos + 1
        } else if (jugador == 3 && pc == 2) {
            alert("GANASTE")
            triunfos = triunfos + 1
        } else {
            alert("PERDISTE")
            perdidas = perdidas + 1
        }
    }

    alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.");
    document.getElementById('reiniciar').style.display = 'block';
}

// Iniciar el juego al cargar la página
window.onload = function() {
    document.getElementById('reiniciar').addEventListener('click', reiniciarJuego);
    jugar();
};