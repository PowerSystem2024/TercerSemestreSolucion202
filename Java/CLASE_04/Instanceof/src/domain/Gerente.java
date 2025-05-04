package domain;

public class Gerente extends Empleado {
    private String departamento;

    // Constructor que llama al constructor de la clase padre (Empleado)
    public Gerente(String nombre, double sueldo, String departamento) {
        super(nombre, sueldo); // Inicializa nombre y sueldo usando el constructor de Empleado
        this.departamento = departamento;
    }

    /**
     * Sobrescribe el método obtenerDetalles() de Empleado.
     * Añade información del departamento al resultado.
     */
    @Override
    public String obtenerDetalles() {
        return super.obtenerDetalles() + ", Departamento: " + this.departamento;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }
    
}