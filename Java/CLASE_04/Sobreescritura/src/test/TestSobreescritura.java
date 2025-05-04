package test;

import domain.*;


public class TestSobreescritura {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan", 2000);
        imprimir(empleado1);
        //System.out.println("Empleado 1: " + empleado1.obtenerDetalles());
        empleado1 = new Gerente("Jose", 5000, "Sistemas");
        imprimir(empleado1);
        //System.out.println("Gerente 1 = " + gerente1.obtenerDetalles());
    }

    /* 
    * Polimorfismo: 
    * Vamos a crear un objeto que va a llamar a obtenerDetalles, 
    * ya sea en la clase padre o clase hija dependiendo del tipo de referencia
    * que a recibido la variable
    */
    public static void imprimir(Empleado empleado){
        String detalles = empleado.obtenerDetalles();
        //System.out.println("Empleado: " + empleado.obtenerDetalles());
        System.out.println("Detalles: " + detalles);
    }
}
