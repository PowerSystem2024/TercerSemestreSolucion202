package domain;

public class Empleado {
    protected String nombre;
    protected double sueldo;

    // Constructor
    public Empleado(String nombre, double sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    /**
     * Método que puede ser sobrescrito por subclases.
     * Retorna detalles básicos del empleado.
     */
    public String obtenerDetalles() {
        return "Nombre: " + this.nombre + ", sueldo: " + this.sueldo;
    }

    // Getters y setters (comentarios breves)
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getSueldo() {
        return sueldo;
    }

    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }
}
