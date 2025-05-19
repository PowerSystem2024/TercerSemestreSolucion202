class NReinas {
    constructor(n) {
        this.n = n;  // El tamaño del tablero
        this.tablero = Array(n).fill().map(() => Array(n).fill(0));  // Crea un tablero vacío (MATRIZ)
        this.soluciones = [];  // Array para almacenar las soluciones encontradas
    }

    // Método para mostrar el tablero o MATRIZ
    // Reina = 1 = 'R'
    // nada igual 0 = '.'
    imprimirTablero(tablero) {
        for (let fila of tablero) {
            console.log(fila.map(celda => (celda ? 'R' : '.')).join('      '));
        }
        console.log('--------------------------------');
    }

    // Verifica si es seguro colocar una reina en una posición (fila, columna)
    esSeguro(fila, columna, tablero) {
        for (let i = 0; i < fila; i++) {
            // Verifica la columna y las dos diagonales
            if (tablero[i][columna] === 1 || 
                (columna - (fila - i) >= 0 && tablero[i][columna - (fila - i)] === 1) || 
                (columna + (fila - i) < this.n && tablero[i][columna + (fila - i)] === 1)) {
                return false;
            }
        }
        return true;
    }

    // Método para resolver el problema usando retroceso (backtracking)
    resolverNReinas(fila = 0, tablero = this.tablero) {
        //Usamos ese log para verificar la recursividad. 
        console.log(fila);
        if (fila === this.n) {
            //Usamos ese log para enternter en vivo el output de la solucion que suceded cunado la recursividad llegga 
            // con fila y this.n al mismo valor
            console.log(fila);
            // Crear una copia del tablero usando bucles tradicionales
            let copiaDelTablero = [];
               
            for (let i = 0; i < tablero.length; i++) {
                let nuevaFila = [];
                for (let j = 0; j < tablero[i].length; j++) {
                    nuevaFila.push(tablero[i][j]);  // Copiar valor de cada celda
                }
                copiaDelTablero.push(nuevaFila);  // Añadir la nueva fila a la copia del tablero
            }

            // Almacenar la copia del tablero en soluciones
            this.soluciones.push(copiaDelTablero);

            // Mostrar el tablero con las reinas colocadas
            this.imprimirTablero(tablero);  
            return;
        }

        // Intentamos colocar una reina en cada columna de la fila actual
        for (let columna = 0; columna < this.n; columna++) {
            if (this.esSeguro(fila, columna, tablero)) {
                tablero[fila][columna] = 1;  // Coloca la reina
                this.resolverNReinas(fila + 1, tablero);  // Llama recursivamente para la siguiente fila
                tablero[fila][columna] = 0;  // Retrocede si no encuentra solución
            }
        }
    }


    // Inicia la solución
    encontrarSoluciones() {
        this.resolverNReinas();
        console.log(`Número de soluciones encontradas: ${this.soluciones.length}`);
    }
}

// Crear una instancia para N=8
let nReinas = new NReinas(4);
nReinas.encontrarSoluciones();
