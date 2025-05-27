const N = 8;
const moves = [
  [2, 1], [1, 2], [-1, 2], [-2, 1],
  [-2, -1], [-1, -2], [1, -2], [2, -1]
];

let boardBacktracking = Array.from({ length: N }, () => Array(N).fill(-1));
let boardHeuristic = Array.from({ length: N }, () => Array(N).fill(-1));
let delay = 100;

function createBoardUI(containerId, prefix) {
  const boardDiv = document.getElementById(containerId);
  boardDiv.innerHTML = '';
  for (let i = 0; i < N * N; i++) {
    const cell = document.createElement('div');
    const row = Math.floor(i / N);
    const col = i % N;
    cell.classList.add('cell');
    cell.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
    cell.id = `${prefix}-cell-${row}-${col}`;
    boardDiv.appendChild(cell);
  }
}

function isValid(x, y, board) {
  return x >= 0 && x < N && y >= 0 && y < N && board[x][y] === -1;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function highlightCell(x, y, moveCount, prefix) {
  const cell = document.getElementById(`${prefix}-cell-${x}-${y}`);
  if (cell) {
    cell.classList.add('visited');
    cell.textContent = moveCount + 1; // Mostrar el número de movimiento
  }

  // Solo registrar movimientos para el tablero heurístico
  if (prefix === "heuristic") {
    const moveList = document.getElementById("move-list");
    const li = document.createElement("li");
    li.textContent = `${moveCount + 1}: (${x}, ${y})`;
    moveList.appendChild(li);
  }
}


function unhighlightCell(x, y, prefix) {
  const cell = document.getElementById(`${prefix}-cell-${x}-${y}`);
  if (cell) {
    cell.classList.remove('visited');
    cell.textContent = '';
  }
}

// Backtracking puro es muy lento en mi pc no lo termina
async function solveBacktracking(x, y, moveCount) {
  boardBacktracking[x][y] = moveCount;
  highlightCell(x, y, moveCount, "backtracking");
  await sleep(delay);

  if (moveCount === N * N - 1) return true;

  for (let [dx, dy] of moves) {
    let nx = x + dx, ny = y + dy;
    if (isValid(nx, ny, boardBacktracking)) {
      if (await solveBacktracking(nx, ny, moveCount + 1)) {
        return true;
      }
    }
  }

  boardBacktracking[x][y] = -1;
  unhighlightCell(x, y, "backtracking");
  await sleep(delay);
  return false;
}

// Heurística de Warnsdorff: contar movimientos posibles desde una casilla
/*
Una técnica muy efectiva (y muy usada) es la Heurística de Warnsdorff, que dice:

    En cada paso, elige el movimiento que lleve al caballo a una casilla desde la cual tenga menos movimientos disponibles futuros.

Esto reduce drásticamente la cantidad de caminos que explora.
*/
function countOnwardMoves(x, y, board) {
  let count = 0;
  for (let [dx, dy] of moves) {
    let nx = x + dx, ny = y + dy;
    if (isValid(nx, ny, board)) count++;
  }
  return count;
}

async function solveHeuristic(x, y, moveCount) {
  boardHeuristic[x][y] = moveCount;
  highlightCell(x, y, moveCount, "heuristic");
  await sleep(delay);

  if (moveCount === N * N - 1) return true;

  let nextMoves = [];
  for (let [dx, dy] of moves) {
    let nx = x + dx, ny = y + dy;
    if (isValid(nx, ny, boardHeuristic)) {
      nextMoves.push({ x: nx, y: ny, degree: countOnwardMoves(nx, ny, boardHeuristic) });
    }
  }
  nextMoves.sort((a, b) => a.degree - b.degree);

  for (let move of nextMoves) {
    if (await solveHeuristic(move.x, move.y, moveCount + 1)) {
      return true;
    }
  }

  boardHeuristic[x][y] = -1;
  unhighlightCell(x, y, "heuristic");
  await sleep(delay);
  return false;
}

async function startBothTours() {
  boardBacktracking = Array.from({ length: N }, () => Array(N).fill(-1));
  boardHeuristic = Array.from({ length: N }, () => Array(N).fill(-1));
  createBoardUI("board-backtracking", "backtracking");
  createBoardUI("board-heuristic", "heuristic");

  solveBacktracking(0, 0, 0);  // sin esperar
  solveHeuristic(0, 0, 0);     // en paralelo
}

window.onload = () => {
  createBoardUI("board-backtracking", "backtracking");
  createBoardUI("board-heuristic", "heuristic");
};
