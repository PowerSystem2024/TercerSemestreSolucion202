package test;

import enumeraciones.Continentes;
import enumeraciones.Dias;

public class Testenumeraciones {
    public static void main(String[] args) {
//        System.out.println("Dia 1:"+Dias.LUNES);// las enumeraciones se tratan como cadenas
//        indicarDiaSemana(Dias.LUNES);
        // ahora no se debe utilizar comillas, se accede a traves de el operador de punto
        System.out.println("Continente N° 4:"+Continentes.AMERICA);
        System.out.println("No. de paises en el 4to. continente: "+Continentes.AMERICA.getPaises());
        System.out.println("No. de habitantes en el 4to. continente: "+Continentes.AMERICA.getHabitantes());
    }
    
    private static void indicarDiaSemana(Dias dias){
        switch(dias){
            case LUNES:
                System.out.println("Primer dia de la semana");
                break;
            case MARTES:
                System.out.println("Segundo dia de la semana");
                break;
            case MIERCOLES:
                System.out.println("Tercer dia de la semana");
                break;
            case JUEVES:
                System.out.println("Cuarto  dia de la semana");
                break;
            case VIERNES:
                System.out.println("Quinto dia de la semana");
                break;
            case SABADO:
                System.out.println("Sexto dia de la semana");
                break;
            case DOMINGO:
                System.out.println("Septimo dia de la semana");
                break;
        }
        
    }
            
    
}
