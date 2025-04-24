package test;

import domain.Persona;

public class TestForEach {
    public static void main(String[] args) {
        int edades[] = { 5, 6, 8, 9 }; // Sintaxis resumida
        for(int edad : edades) { // sintaxis del for each
            System.out.println("edad=" + edad);
        }

        Persona personas[] = { new Persona("Juan"), 
        new Persona("Karla"), new Persona("Luis") };
        for(Persona persona : personas) { // sintaxis del for each
            System.out.println("persona=" + persona);
        }
    }

}
