
package accesodatos;


public interface IAccesodatos {
     int MAX_REGISTRO = 10; // Constante pública (implícitamente public static final)

    // Métodos abstractos (sin implementación)
    void insertar();
    void listar();
    void actualizar();
    void eliminar();
    
    
    
}
