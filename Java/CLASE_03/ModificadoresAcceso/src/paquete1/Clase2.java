package paquete1;

class Clase2  {
    String atributoDefault = "Valor Atributo Default";

    //Clase2(){
        
    //    System.out.println("Constructor Default");
    //}

    public Clase2(){
        super();
        this.atributoDefault = "Modificacion del atributo Default";
        System.out.println("atributoDefault = " + this.atributoDefault);
        this.metodoDefault();
    }

    void metodoDefault(){
        System.out.println("Metodo Default");
    }
}
