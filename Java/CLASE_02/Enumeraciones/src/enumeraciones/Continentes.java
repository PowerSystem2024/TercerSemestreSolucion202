
package enumeraciones;

public enum Continentes {
    
    AFRICA(54, "1.3 billones"), 
    EUROPA(44, "742 millones" ),
    ASIA(48, "4.8 billones"), 
    AMERICA(35, "1.1 billones"),
    OCEANIA(14, "46.1 millones"),
    ANTARTIDA(0, "10 mil");    
    
    private final int paises;
    private String habitantes;
    
    Continentes(int paises, String habitantes){
        this.paises = paises;
        this.habitantes = habitantes;
    }
    // metodo get
    public int getPaises(){
        return this.paises;
    }
    
    public String getHabitantes(){
        return this.habitantes;
    }
}
