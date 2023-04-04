/*
    ===== Código de TypeScript =====
*/
function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir(){
        console.log('Hola mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log( miClase.miPropiedad);

// Aunque de error se muestra en el navegador ya que extiende del decorador
//console.log( miClase.reportingURL);
