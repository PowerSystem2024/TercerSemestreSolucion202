
package domain;

public class Persona {
    private final int idPersona;
    private static int contadorPersonas;
    
    static{// Bloque de inicializacion estatico
        System.out.println("Ejecucion bloque estatico");
        ++Persona.contadorPersonas;
        //idPersona = 10; No es un atributo estatico por eso tenemos un error 
    }
    
    {// bloque de inicializacion no estatico o contexto dinamico
        System.out.println("Ejecucion del bloque no estatico");
        this.idPersona = Persona.contadorPersonas++;//Incrementamos el atributo
    }
    // los bloques de inicializacion se ejecutan antes del constructor
    
    public Persona(){
        System.out.println("Esta es la ejecucion del constructor");
    }
    
    public int idPersona(){
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
    
}
