package accesodatos;

public class ImplementacionMySql implements IAccesodatos {
    public void insertar() {
        System.out.println("Insertar desde MySql");    
    }

    public void listar() {
        System.out.println("Listar desde MySql");    
    }

    public void actualizar() {
        System.out.println("Actualizar desde MySql");    
    }

    public void eliminar() {
       System.out.println("Eliminar desde MySql");    
    }
}