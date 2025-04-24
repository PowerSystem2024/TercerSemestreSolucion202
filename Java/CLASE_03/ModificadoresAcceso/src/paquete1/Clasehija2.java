package paquete1;

public class Clasehija2 extends Clase2{
    public  Clasehija2(){
        super();
        this.atributoDefault = "Modificacion del atributo Default";
        System.out.println("atributoDefault = " + this.atributoDefault);
        this.metodoDefault();
    }
    void metodoDefault(){
        System.out.println("Metodo Default desde la clase hija");
    }

}
