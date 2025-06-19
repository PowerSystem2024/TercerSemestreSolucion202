let miPromesa = new Promise( (resolver, rechazar) => {
    let expresion   = true;
    if (expresion) {
        resolver("Resolvió correctamente");
    } else {
        rechazar("Se produjo un error");
    }
});

//miPromesa.then(
//    valor => console.log(valor),
//    error => console.log(error)
//);

//miPromesa
//    .then(valor => console.log(valor))
//    .catch(error => console.log(error));

let promesa = new Promise( (Resolver) => {
    //console.log("Inicio de promesa");
    setTimeout( () => {Resolver("Saludos desde promesa, callback, función flecha y setTimeout")}, 3000);
    //console.log("Final de promesa");
});

// Llamado a la promesa desde setTimeout
//promesa.then(valor => console.log(valor));

// async indica que la función regresará una promesa
async function miFuncionConPromesa() {
    return "Saludos con promesa y async";
}

//miFuncionConPromesa().then(valor => console.log(valor));

// aync - await
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });
    console.log(await miPromesa);
}

//funcionConPromesaYAwait();

// Promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout() {
    let miPromesa = new Promise(resolver => {
        console.log("Inicio función");
        setTimeout(() => resolver("Promesa con await y setTimeout"), 3000);
        console.log("Final funcion");
    });
    console.log(await miPromesa);
}

// Llamamos a la funcion
funcionConPromesaAwaitTimeout();