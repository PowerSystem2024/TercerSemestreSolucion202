package test;

import enumeraciones.Continentes;

public class TestContinentes {
    
    
    public static void main(String[] args) {
        
        System.out.println("Continente No. 1: " + Continentes.AFRICA);
        System.out.println("No. de paises en el primer continente: " + Continentes.AFRICA.getPaises());
        System.out.println("No. de habitantes en el primer continente: " + Continentes.AFRICA.getHabitantes());
        
        System.out.println("Continente No. 1: " + Continentes.EUROPA);
        System.out.println("No. de paises en el primer continente: " + Continentes.EUROPA.getPaises());
        System.out.println("No. de habitantes en el primer continente: " + Continentes.EUROPA.getHabitantes());
        
        System.out.println("Continente No. 3: " + Continentes.ASIA);
        System.out.println("No. de paises en el tercer continente: " + Continentes.ASIA.getPaises());
        System.out.println("No. de habitantes en el tercer continente: " + Continentes.ASIA.getHabitantes());
        
        System.out.println("Continente No. 4: " + Continentes.AMERICA);
        System.out.println("No. de paises en el 4to. continente: " + Continentes.AMERICA.getPaises());
        System.out.println("No. de habitantes en el 4to. continente: " + Continentes.AMERICA.getHabitantes());
        
        System.out.println("Continente No. 5: " + Continentes.OCEANIA);
        System.out.println("No. de paises en el quinto continente: " + Continentes.OCEANIA.getPaises());
        System.out.println("No. de habitantes en el quinto continente: " + Continentes.OCEANIA.getHabitantes());
        
        System.out.println("Continente No. 6: " + Continentes.AFRICA);
        System.out.println("No. de paises en el sexto continente: " + Continentes.AFRICA.getPaises());
        System.out.println("No. de habitantes en el sexto continente: " + Continentes.AFRICA.getHabitantes());
        
    }
}
