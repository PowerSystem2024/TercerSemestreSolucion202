// =============================================
// DEMOSTRACIÓN DE HOISTING EN FUNCIONES
// =============================================
// Las llamadas a función se ejecutan antes de su declaración
// Esto funciona porque las declaraciones de función son elevadas (hoisting)
miFuncion1();
miFuncion2();

/*
 * Función declarativa - Ejemplo 1
 * Este tipo de funciones son elevadas (hoisted) completamente,
 * por lo que pueden llamarse antes de su declaración.
 */
function miFuncion1() {
    console.log('Funcion 1');
}

/*
 * Función declarativa - Ejemplo 2
 * Al igual que miFuncion1, esta también sufre hoisting.
 */
function miFuncion2() {
    console.log('Funcion 2');
}

// =============================================
// FUNCIONES CALLBACK
// =============================================
/*
 * Función callback asignada a variable
 * Observación: Esta es una función expresada (function expression),
 * por lo que NO sufre hoisting como las declarativas.
 * 
 * @param {string} mensaje - Texto a imprimir en consola
 */
let impr = function imprimir(mensaje) {
    console.log(mensaje);
}

/*
 * Función que utiliza un callback
 * Ejemplo clásico de función de orden superior que recibe otra función como argumento
 * 
 * @param {number} op1 - Primer operando
 * @param {number} op2 - Segundo operando
 * @param {function} funcionCallBack - Función que procesará el resultado
 */
function sumar(op1, op2, funcionCallBack) {
    let res = op1 + op2;
    // El callback permite desacoplar la operación del formato de salida
    funcionCallBack(`Resultado: ${res}`);
}

// Ejecución con callback
sumar(5, 3, impr); // Resultado: 8

// =============================================
// OPERACIONES ASÍNCRONAS CON setTimeout
// =============================================
/*
 * Ejemplo básico de asincronía en JavaScript
 * setTimeout permite ejecutar código después de un retraso especificado
 * 
 * Observación: Esto demuestra el modelo de event loop de JavaScript
 */
function miFuncionCallback() {
    console.log('Saludo asincrono despues de 3 segundos');
}

// setTimeout con función declarada
setTimeout(miFuncionCallback, 3000); // 3000 ms = 3 segundos

// setTimeout con función anónima (patrón común)
setTimeout(function() {
    console.log("Saludo asincrono 2 despues de 5 segundos");
}, 5000);

// setTimeout con arrow function (ES6+)
setTimeout(() => console.log('Saludo asincrono 3 despues de 9 segundos'), 9000);

// =============================================
// USO DE setInterval PARA EJECUCIÓN PERIÓDICA
// =============================================
/*
 * Arrow function que muestra la hora actual
 * Usa el objeto Date para obtener horas, minutos y segundos
 * 
 * Observación: Los template literals (``) permiten interpolación de variables
 */
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

/*
 * setInterval ejecuta la función repetidamente cada X milisegundos
 * 
 * Importante: Para detenerlo necesitarías clearInterval(intervalID)
 * Ejemplo de uso:
 * const intervalID = setInterval(reloj, 1000);
 * // Para detenerlo después de 10 segundos:
 * setTimeout(() => clearInterval(intervalID), 10000);
 */
setInterval(reloj, 1000); // Actualiza cada segundo (1000 ms)

// =============================================
// OBSERVACIONES GENERALES
// =============================================
/*
 * 1. Hoisting: Las funciones declarativas se elevan completamente,
 *    las expresadas (como las arrow functions) no.
 * 
 * 2. Callbacks: Patrón fundamental en JS para operaciones asíncronas
 *    y funciones de orden superior.
 * 
 * 3. Asincronía: setTimeout y setInterval son APIs del navegador,
 *    no parte del lenguaje JS propiamente dicho.
 * 
 * 4. Arrow functions: Sintaxis concisa (ES6+), pero cuidado con el
 *    contexto de 'this' que difiere de funciones regulares.
 */

// =============================================
// ALTERNATIVAS MODERNAS
// =============================================
// Usando promesas con setTimeout
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function ejemplo() {
  console.log("Inicio");
  await delay(2000);
  console.log("Después de 2 segundos");
}

/*
* Precisión de temporizadores: Los temporizadores en JavaScript 
* no son precisos para intervalos cortos (<10ms) debido a cómo funciona el event loop.
*/