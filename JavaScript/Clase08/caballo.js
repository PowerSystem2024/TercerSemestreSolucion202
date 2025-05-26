const N = 8;
const moves = [
  [2, 1], [1, 2], [-1, 2], [-2, 1],
  [-2, -1], [-1, -2], [1, -2], [2, -1]
];

let board = Array.from({ length: N }, () => Array(N).fill(-1));
let delay = 100;

function createBoardUI() {
  const boardDiv = document.getElementById('board');
  boardDiv.innerHTML = '';
  for (let i = 0; i < N * N; i++) {
    const cell = document.createElement('div');
    const row = Math.floor(i / N);
    const col = i % N;
    cell.classList.add('cell');
    cell.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
    cell.id = `cell-${row}-${col}`;
    boardDiv.appendChild(cell);
  }
}

function isValid(x, y) {
  return x >= 0 && x < N && y >= 0 && y < N && board[x][y] === -1;
}

// Heurística de Warnsdorff: contar movimientos posibles desde una casilla
function countOnwardMoves(x, y) {
  let count = 0;
  for (let [dx, dy] of moves) {
    let nx = x + dx, ny = y + dy;
    if (isValid(nx, ny)) count++;
  }
  return count;
}

async function solve(x, y, moveCount) {
  board[x][y] = moveCount;
  highlightCell(x, y, moveCount);
  await sleep(delay);

  if (moveCount === N * N - 1) return true;

  // Ordenar los movimientos por la cantidad de opciones siguientes (Warnsdorff)
  let nextMoves = [];
  for (let [dx, dy] of moves) {
    let nx = x + dx, ny = y + dy;
    if (isValid(nx, ny)) {
      nextMoves.push({ x: nx, y: ny, degree: countOnwardMoves(nx, ny) });
    }
  }
  nextMoves.sort((a, b) => a.degree - b.degree); // menor primero

  for (let move of nextMoves) {
    if (await solve(move.x, move.y, moveCount + 1)) {
      return true;
    }
  }

  board[x][y] = -1;
  unhighlightCell(x, y);
  await sleep(delay);
  return false;
}

function highlightCell(x, y, moveCount) {
  const cell = document.getElementById(`cell-${x}-${y}`);
  if (cell) {
    cell.classList.add('visited');
    cell.textContent = moveCount + 1;
  }
}

function unhighlightCell(x, y) {
  const cell = document.getElementById(`cell-${x}-${y}`);
  if (cell) {
    cell.classList.remove('visited');
    cell.textContent = '';
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startTour() {
  board = Array.from({ length: N }, () => Array(N).fill(-1));
  createBoardUI();
  const success = await solve(0, 0, 0);
  if (!success) alert("No se encontró solución.");
}

window.onload = createBoardUI;
