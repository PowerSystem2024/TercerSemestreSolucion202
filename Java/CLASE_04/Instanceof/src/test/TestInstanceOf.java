package test;

import domain.*;

public class TestInstanceOf {
    public static void main(String[] args) {
        // Polimorfismo: La referencia es de tipo Empleado, pero el objeto es Empleado
        Empleado empleado1 = new Empleado("Juan", 2000);
        determinarTipo(empleado1); // Salida: "Es de tipo Empleado"

        // Polimorfismo: La referencia es Empleado, pero el objeto es Gerente (subclase)
        empleado1 = new Gerente("Jose", 5000, "Sistemas");
        determinarTipo(empleado1); // Salida: "Es de tipo Gerente"
    }

    /**
     * Método que usa instanceof para verificar el tipo real de un objeto en memoria.
     * - instanceof es clave en polimorfismo para manejar lógica específica por tipo.
     * - En tiempo de ejecución, Java verifica la estructura del objeto en el heap,
     *   independientemente del tipo de la referencia.
     * - Permite hacer "type casting" seguro cuando se confirma el tipo real.
     */
    public static void determinarTipo(Empleado empleado) {
        if (empleado instanceof Gerente) {
            System.out.println("Es de tipo Gerente");
            // Downcasting seguro: Convertimos Empleado a Gerente (tras verificar con instanceof)
            Gerente gerente = (Gerente) empleado;
            System.out.println("Departamento del Gerente: " + gerente.getDepartamento());
            /*
             * Polimorfismo en acción:
             * - Aunque la referencia es Empleado, el objeto es Gerente.
             * - Al hacer downcasting, accedemos a métodos exclusivos de Gerente (getDepartamento()).
             */
        }
        else if (empleado instanceof Empleado) {
            System.out.println("Es de tipo Empleado");
            // Nota: Si intentáramos hacer downcasting aquí a Gerente, lanzaría ClassCastException.
            // Ejemplo de error (descomentar para ver):
            // Gerente gerente = (Gerente)empleado; // ¡Falla si empleado no es Gerente!
        }
        else if (empleado instanceof Object) {
            System.out.println("Es de tipo Object"); // Redundante (todo objeto es Object)
        }
    }
}
