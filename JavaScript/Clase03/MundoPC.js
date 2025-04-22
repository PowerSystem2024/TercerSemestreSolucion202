class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
    }
}

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}

class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = '';
        for( let computadora of this._computadoras ){
            computadorasOrden += `\n${computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }

    
}
let raton1 = new Raton('USB', 'Genius');
let raton2 = new Raton('Bluetooth', 'Logitech')
let raton3 = new Raton('Bluetooth', 'Microsoft');
 
let teclado1 = new Teclado('USB', 'Razer');
let teclado2 = new Teclado('USB', 'HyperX');
let teclado3 = new Teclado('USB', 'Asus');
 
let monitor1 = new Monitor('LG', 15);
let monitor2 = new Monitor('Samsung', 22);
let monitor3 = new Monitor('Samsung', 27);
 
let computadora1 =  new Computadora('Acer', monitor1, raton1, teclado1);
let computadora2 =  new Computadora('Asus', monitor2, raton2, teclado2);
let computadora3 =  new Computadora('HP', monitor3, raton3, teclado3)
let computadora4 =  new Computadora('Dell', monitor3, raton3, teclado2)
 
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora3);
orden1.agregarComputadora(computadora4);
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();
 
function imprimir(tipo){
    console.log(tipo.toString());
    if( tipo instanceof DispositivoEntrada){
        console.log('Es un objeto de tipo DispositivoEntrada');
        console.log(tipo.tipoEntrada)
    }
    else if( tipo instanceof Raton){
        console.log('Es un objeto de tipo Raton');
    }
    else if( tipo instanceof Teclado){
        console.log('Es un objeto de tipo Teclado');
        console.log(tipo._idTeclado)
        console.log(tipo.toString())
    }
    else if( tipo instanceof Monitor){
        console.log('Es un objeto de tipo Monitor');
    }
    else if( tipo instanceof Computadora){
        console.log('Es un objeto de tipo Computadora');
        console.log(tipo.toString());
    }
    else if( tipo instanceof Orden){
        console.log('Es un objeto de tipo Orden');
        console.log(tipo._idOrden);
    }
    else if( tipo instanceof Object){
        console.log('Es un objeto de tipo Object');
    }
   
}
 
imprimir(raton1);
imprimir(teclado1);
imprimir(monitor3);
imprimir(computadora3);
imprimir(orden1);