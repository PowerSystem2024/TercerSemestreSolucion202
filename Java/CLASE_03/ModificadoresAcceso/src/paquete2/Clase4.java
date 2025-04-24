package paquete2;

public class Clase4 {
    private String atributoPrivado = "Atributo Privado";

    private Clase4() {
        System.out.println("Constructor Privado");
    }

    public Clase4(String argumento) {
        this(); // Llamada válida al constructor privado
        System.out.println("Constructor Público");
    }

    private void metodoPrivado() {
        System.out.println("Método Privado");
    }

    public String getAtributoPrivado() {
        return atributoPrivado;
    }
    public void setAtributoPrivado(String atributoPrivado) {
        this.atributoPrivado = atributoPrivado;
    }
}
