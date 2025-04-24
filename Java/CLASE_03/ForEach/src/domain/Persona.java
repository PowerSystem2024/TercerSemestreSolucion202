package domain;

public class Persona {
    private String nombre;

    public Persona(String string) {
        //TODO Auto-generated constructor stub
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "Persona{" +
                "nombre='" + nombre + '\'' +
                '}';
    }

}
