package paquete1;

import paquete2.Clase4;

public class TestDefault {
    public static void main(String[] args) {
        Clasehija2 claseH2 = new Clasehija2();
        claseH2.atributoDefault = "Modificacion del atributo Default desde la prueba";
        System.out.println("clase H2 atributoDefault = " + claseH2.atributoDefault);
        
        Clase4 clase4 = new Clase4("Publico");
        System.out.println(clase4.getAtributoPrivado());
        clase4.setAtributoPrivado("cambio");
        System.out.println("clase4 atributoPrivado = " + clase4.getAtributoPrivado());
    }


}
