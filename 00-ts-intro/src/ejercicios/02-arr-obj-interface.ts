/*
    ===== Código de TypeScript =====
*/

let habilidades = [1, 'Fernando', true, [], {}];
let hab: (boolean | string | number)[] = ['Yo', 'Tu', 'El', 100];
let hab2 = ['Yo', 'Tu', 'El', 100];
hab.push('Si');
habilidades.push(false);

/* Para poder definir el tipo de las propiedades del personaje creamos una interfaz en la que se definen los atrib */
interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    /* Cuando los atb son opcionales ponemos ? */
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Emma',
    hp: 100,
    habilidades: ['Uno', 'Dos', 'Tres'] 
}
personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);