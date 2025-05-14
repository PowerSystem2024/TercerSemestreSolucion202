function miFuncion(){
    console.log('saludos desde mi funcion')
}

miFuncion();

let myFuncion = function (){
    console.log('Saludos desde la funcion anonima')
}

// Ahora vamos a crear una funcion flecha
let miFuncionFlecha = () => {
    console.log('saludos desde mi funcion flecha')
}
// Hay mas variantes para funciones flecha que vamos a ir viendo
miFuncionFlecha()

// Lo hacemos en una linea
const saludar = () => console.log('Saludos a todos desde esta funcion flecha');
saludar();

// Otro ejemplo
const saludar2 = () => {
    return 'Saludos desde la funcion flecha dos'
}
console.log(saludar2());

// Simplificamos la funcion anterior
const saludar3 = () => 'Saludos desde la funcion saludar 3'
console.log(saludar3())

// Continuamos con otro ejemplo
const regresaObjeto = () => ({nombre:'Juan', apellido: 'Lara'})
console.log(regresaObjeto());

// Funciones que reciban parametros
const funcionParametros = (mensaje) => console.log(mensaje);
funcionParametros('Saludos desde esta funcion con parametros');

// Una funcion clasica
const funcionParametrosClasica = function(mensaje){
    console.log(mensaje);
}
funcionParametrosClasica('Saludos desde la funcion clasica');

// Se pueden omitirl os parentesis
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros('Otra forma de trabajar con funcion flecha')

// Ahora vemos funciones flecha con varios parametros
// Podemos abrir la funcion y tener mas cosas dentro de ella
const funcionConParametros2 = (operador1, operador2) => {
    let resultado = operador1 + operador2
    return resultado
}
console.log(funcionConParametros2(3, 5))
