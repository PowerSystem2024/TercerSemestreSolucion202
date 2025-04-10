package mundopc;

import ar.com.system2024.mundopc.*;

public class MundoPc {
    public static void main(String[] args) {
        // Creación de objetos Monitor, Teclado, Raton y Computadora
        Monitor monitorAcer = new Monitor("Acer", 15);
        Teclado tecladoAcer = new Teclado("USB", "Acer");
        Raton ratonAcer = new Raton("Bluetooth", "Acer");
        Computadora computadoraAcer = new Computadora("Computadora Acer", monitorAcer, tecladoAcer, ratonAcer);

        Monitor monitorDell = new Monitor("Dell", 17);
        Teclado tecladoDell = new Teclado("USB", "Dell");
        Raton ratonDell = new Raton("USB", "Dell");
        Computadora computadoraDell = new Computadora("Computadora Dell", monitorDell, tecladoDell, ratonDell);

        Monitor monitorLenovo = new Monitor("Lenovo", 18);
        Teclado tecladoLenovo = new Teclado("USB", "Lenovo");
        Raton ratonLenovo = new Raton("USB", "Lenovo");
        Computadora computadoraLenovo = new Computadora("Computadora Lenovo", monitorLenovo, tecladoLenovo, ratonLenovo);

        Monitor monitorSamsung = new Monitor("Samsung", 18);
        Teclado tecladoSamsung = new Teclado("USB", "Samsung");
        Raton ratonSamsung = new Raton("USB", "Samsung");
        Computadora computadoraSamsung = new Computadora("Computadora Samsung", monitorSamsung, tecladoSamsung, ratonSamsung);

        // Creación de objetos Orden y llamado a los métodos agregar y mostrar ordenes
        Orden orden1 = new Orden();
        orden1.agregarComputadora(computadoraAcer);
        orden1.agregarComputadora(computadoraLenovo);
        orden1.mostrarOrden();

        Orden orden2 = new Orden();
        orden2.agregarComputadora(computadoraAcer);
        orden2.agregarComputadora(computadoraDell);
        orden2.agregarComputadora(computadoraLenovo);
        orden2.agregarComputadora(computadoraSamsung); // Se agregar una nueva computadora excediendo el máximo
        orden2.mostrarOrden(); // La computadora Samsung no se mostrará ya que excede el máximo
    }
}
