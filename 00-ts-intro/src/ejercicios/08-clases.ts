/*
    ===== Código de TypeScript =====
*/

class PersonaNormal{

    /* Cuando generas un constructor no hace falta poner los atributos para declararlos antes vomoo en java sino que en el mismo condtructor se puede hacer todo esto */
    /* Inyección de dependencias */
    constructor(
        public nombre: string, 
        public direccion:string
    ){}

}

class Heroe extends PersonaNormal{

     /* En una clase puedes implementar métodos y definir su comportamiento mientras que en una interfaz solo la puedes declarar para mas tarde redefinirla */
    
    // imprimirNombre(){
    //     return this.alterEgo + ' ' +this.nombreReal;
    // }

    /* Inyección de dependencias */

    constructor( 
        public alterEgo:string, 
        public edad: number,
        public nombreReal?: string,
    ){
        super(nombreReal, 'New York, USA');
    }

}

// interface Personaje3 {
//     alterEgo?: string;
//     edad?: number;
//     nombreReal?: number;

//     imprimirNonbre: () => string;
// }

/* Crear un objeto */

// const spiderman: Personaje3 = {};

/* Crear una instancia */
const ironman = new Heroe('Ironman', 19, 'Emma');

console.log(ironman);