package paquete1;

public class Clase1{
    public String atributoPublic = "Valor Atributo Public";
    protected String atibutoProtected = "Vloar Atributo Protected";
    
    public Clase1(){
        System.out.println("Constructor Publico");
    }

    protected Clase1(String atributoPublic){
        System.out.println("Constructor Protected");
    }

    public void metodoPublico(){
        System.out.println("Metodo Publico");
    }
    protected void metodoProtected(){
        System.out.println("Metodo Protected");
    }

}


    

