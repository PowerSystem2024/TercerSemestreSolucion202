const NUM_DISCOS = 4;
const torres = {
  A: document.getElementById('A'),
  B: document.getElementById('B'),
  C: document.getElementById('C')
};

let movimientos = [];
let paso = 0;
let pausa = false;
let timer = null;

// Crear discos en la torre A
function crearDiscos(n) {
  for (let i = n; i >= 1; i--) {
    const disco = document.createElement('div');
    disco.classList.add('disco');
    disco.style.width = `${i * 25}px`;
    disco.dataset.size = i;
    torres.A.appendChild(disco);
  }
}

// Limpiar torres
function limpiarTorres() {
  for (let key in torres) {
    const torre = torres[key];
    torre.querySelectorAll('.disco').forEach(disco => disco.remove());
  }
}

// Calcular movimientos con recursividad
function hanoi(n, origen, destino, auxiliar) {
  if (n === 1) {
    movimientos.push([origen, destino]);
    return;
  }
  hanoi(n - 1, origen, auxiliar, destino);
  movimientos.push([origen, destino]);
  hanoi(n - 1, auxiliar, destino, origen);
}

// Función de animación paso a paso
function moverPaso() {
  if (pausa || paso >= movimientos.length) return;

  const [from, to] = movimientos[paso];
  const torreFrom = torres[from];
  const torreTo = torres[to];
  const disco = torreFrom.querySelector('.disco:last-of-type');
  

  if (disco) {
    torreTo.appendChild(disco);
    registrarMovimientoEnTabla(paso + 1, from, to);
  }

  paso++;
  timer = setTimeout(moverPaso, 800);
}

// Iniciar o reiniciar la animación
function iniciarAnimacion() {
  clearTimeout(timer);
  pausa = false;
  paso = 0;
  movimientos = [];

  // 🧹 Limpiar la tabla de movimientos
  document.getElementById('tabla-body').innerHTML = '';

  limpiarTorres();
  crearDiscos(NUM_DISCOS);
  hanoi(NUM_DISCOS, 'A', 'C', 'B');

  setTimeout(moverPaso, 800);
}

// Pausar/Reanudar
function togglePausa() {
  pausa = !pausa;
  if (!pausa) moverPaso();
}

// función para registrar el movimiento en la tabla


function registrarMovimientoEnTabla(numero, origen, destino) {
  const tbody = document.getElementById('tabla-body');
  const fila = document.createElement('tr');

  const celdaNum = document.createElement('td');
  celdaNum.textContent = numero;

  const celdaOrigen = document.createElement('td');
  celdaOrigen.textContent = origen;

  const celdaDestino = document.createElement('td');
  celdaDestino.textContent = destino;

  fila.appendChild(celdaNum);
  fila.appendChild(celdaOrigen);
  fila.appendChild(celdaDestino);

  tbody.appendChild(fila);
}

