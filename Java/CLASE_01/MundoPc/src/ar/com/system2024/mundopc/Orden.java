package ar.com.system2024.mundopc;

public class Orden {
    private final int idOrden;
    private Computadora computadora[];
    private static int contadorOrdenes;
    private static final int MAX_COMPUTADORAS = 3;
    private int contadorComputadoras;

    public Orden() {
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadora = new Computadora[Orden.MAX_COMPUTADORAS];
    }

    public void agregarComputadora(Computadora computadora) {
        if (this.contadorComputadoras < Orden.MAX_COMPUTADORAS) {
            this.computadora[this.contadorComputadoras++] = computadora;
        }
        else{
            System.out.println("Ha alcanzado el límite de " + Orden.contadorOrdenes + " computadoras agregadas a la orden");
        }
    }
    public void mostrarOrden() {
        System.out.println("Orden: " + this.idOrden);
        System.out.println("Computadoras de la Orden: " + this.idOrden);
        for(int i = 0; i < this.contadorComputadoras; i++){
            System.out.println(this.computadora[i]);
        }
    }
}
