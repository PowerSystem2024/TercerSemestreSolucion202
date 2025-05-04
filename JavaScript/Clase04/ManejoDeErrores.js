'use strict'

// Viendo como manejar el siguiente error
try {
    let x = 10;
    //miFuncion();
    throw 'Mi error'
} catch (error){
    console.log( typeof(error) );
}
finally {
    console.log('Termina la revision de errores')
}
// La ejecucion ahora continua
console.log('Continuamos...')

let resultado = -1;
try {
    y = 6;
    if(isNaN(resultado)) throw 'No es un numero';
    else if (resultado === '') throw 'Es una cadena vacia'
    else if ( resultado > 0) throw 'Valor positivo'
    else if ( resultado < 0) throw 'Valor negativo'
}
catch (error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally {
    console.log('Termina la revision de errores 2')
}