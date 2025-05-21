package domain;

  public class Rectangulo extends FiguraGeometrica {
    // Constructor
    public Rectangulo(String tipoFigura) {
        super(tipoFigura);
    }

    @Override
    public void dibujar() { // Implementando el método abstracto
        System.out.println("Se dibuja un: " + this.getClass().getSimpleName());
    }  
    
    
    
}
