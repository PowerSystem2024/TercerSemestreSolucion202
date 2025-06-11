import java.util.Scanner;

public class CalculadoraUTN {
    
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true){ // ciclo infinito
            System.out.println("****** Aplicacion Calculadora ******");
            mostrarMenu();

            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {
                    ejecutarOperacion(operacion, entrada);
                }//fin del if
                else if (operacion == 5) {
                    System.out.println("Hasta pronto...");
                    break;
                } else {
                    System.out.println("Operacion erronea: " + operacion);
                } // salto linea antes de repetir menu
                System.out.println();
            } catch (Exception e){ // fin de try comiendo del catch
                System.out.println("Ocurrio un error " + e.getMessage());
                System.out.println();
            }
        } // fin while
    }//fin main

    private static void mostrarMenu(){
        // Mostramos el menu
        System.out.println("""
                            1. Suma
                            2. Resta
                            3. Multiplicacion
                            4. Division
                            5. Salir
                            """);
        System.out.print("Operacion a realizar?");
    } // fin metodo mostrar menu

    private static void ejecutarOperacion(int operacion, Scanner entrada){
        System.out.print("Digite el valor para el operando 1 : ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Digite el valor para el operando 2 : ");
        var operando2 = Double.parseDouble(entrada.nextLine());
        double resultado;
        switch (operacion) {
            case 1 -> { //Suma
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma = " + resultado);
            }
            case 2 -> { //Resta
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta = = " + resultado);
            }
            case 3 -> { //Multiplicacion
                resultado = operando1 * operando2;
                System.out.println("Resultado de la Multiplicacion = = " + resultado);
            }
            case 4 -> { // division
                resultado = operando1 / operando2;
                System.out.println("Resultado de la division = = " + resultado);
            }
            default -> System.out.println("Operacion erronea: " + operacion);
        }//fin switch
    }// fin metodod ejecutar operacion


}//fin clase
