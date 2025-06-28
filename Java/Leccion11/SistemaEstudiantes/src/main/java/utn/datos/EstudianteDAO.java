package utn.datos;
import static utn.conexion.Conexion.getConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import utn.dominio.Estudiante;

public class EstudianteDAO {

    // Metodo listar
    public List<Estudiante> listarEstudiantes(){
        List<Estudiante> estudiantes = new ArrayList<>();
        //Creamos algunos objetos necesarios para comunicarnos con la base de datos
        PreparedStatement ps; //Nos permite ejecutar las querys
        ResultSet rs; //Obtenemos el resultado de la base de datos
        // Creamos un objeto de tipo conexion
        Connection con = getConnection();

        String sql = "SELECT * FROM estudiante2022 ORDER BY estudiante2022";
        try {
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while(rs.next()){
                var estudiante = new Estudiante();
                estudiante.setIdEstudiante(rs.getInt("idEstudiante"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));

                //Agregarlo a la lista
                estudiantes.add(estudiante);
            }
        } catch (Exception e) {
            System.out.println("Ocurrio un error " + e.getMessage());
        } // Fin try/catch
        finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Ocurrio un error al cerrar la conexion: " + e.getMessage());
            }
        } // Fin finally
        return estudiantes;
    }// Fin metodo listar

    //Metodo por id -> find by id
    public boolean buscarEstudiantePorId(Estudiante estudiante){
        PreparedStatement ps;
        ResultSet rs;
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiante2022 WHERE idestudiante =?";

        try {
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            rs = ps.executeQuery();
            if(rs.next()){
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true; //Se encontro un registro
            }// Fin if
        } catch (Exception e){
            System.out.println("No se encontro el registro " + e.getMessage());
        } //Fin try/catch
        finally {
            try{
                con.close();
            } catch (Exception e) {
                System.out.println("Ocurrio un error al cerrar la conexion " + e.getMessage());
            }            
        } //Fin finally
        return false;
    }

    // Metodo agregar un nuevo estudiante
    public boolean agregarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "INSERT INTO estudainte2022 (nombre, apellido, telefono, email) VALUES (?,?,?,?)";

        try {
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.execute();
            return true;
            
        } catch (Exception e){
            System.out.println("Ocurrio un error al agregar un estudiante " + e.getMessage());
        } //Fin try/catch
        finally {
            try{
                con.close();
            } catch (Exception e) {
                System.out.println("Ocurrio un error al cerrar la conexion " + e.getMessage());
            } //Fin try/catch           
        } //Fin finally
        return false;
    } // Fin metodo agregar estudiante

    // Modificar estudiante
    public boolean modificarEstudiante(Estudiante estudiante){

        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "UPDATE estudainte2022 SET nombre=?, apellido=?, telefono=?, email=? WHERE idestudiante=?";

        try {
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.setInt(5, estudiante.getIdEstudiante());
            ps.execute();
            return true;
            
        } catch (Exception e){
            System.out.println("Ocurrio un error al modificar un estudiante " + e.getMessage());
        } //Fin try/catch
        finally {
            try{
                con.close();
            } catch (Exception e) {
                System.out.println("Ocurrio un error al cerrar la conexion " + e.getMessage());
            } //Fin try/catch           
        } //Fin finally
        return false;
    }
    public static void main(String[] args) {

        var estudianteDAO = new EstudianteDAO();

        //Modificar estudiante
        var estudianteModificado = new Estudiante(1, "Juan Carlos", "Juarez", "26466666", "jcjuarez@mail.com");
        var modificado = estudianteDAO.modificarEstudiante(estudianteModificado);
        if(modificado)
            System.out.println("Estudiante modificado" + estudianteModificado);
        else 
            System.out.println("No se modifico el estudiante" + estudianteModificado);

        //Listar los estudiantes
        System.out.println("Listado de estudiantes");
        List<Estudiante> estudiantes = estudianteDAO.listarEstudiantes();
        estudiantes.forEach(System.out::println); //Funcion lambda

        // Agregar estudiante
        var nuevoEstudiante = new Estudiante("Carlos", "Lara", "2645555", "cLara@mail.com");
        var agregado = estudianteDAO.agregarEstudiante(nuevoEstudiante);
        if(agregado)
            System.out.println("Estudiante agregado " + nuevoEstudiante);
        else
            System.out.println("No se agrego el nuevo estudiante " + nuevoEstudiante);

        //Buscar por id
        var estudiante1 = new Estudiante(1);
        System.out.println("Estudiantes antes de la busqueda: " + estudiante1);
        var encontrado = estudianteDAO.buscarEstudiantePorId(estudiante1);
        if(encontrado){
            System.out.println("Estudiante encontrado: " + estudiante1);
        } else {
            System.out.println("No se encontro el estudiante " + estudiante1.getIdEstudiante());
        }
    }

}
