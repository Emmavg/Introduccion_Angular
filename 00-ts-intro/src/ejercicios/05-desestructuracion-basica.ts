/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor:'Emma',
        anio: 2023,
    }
}

const autor = 'Fulano';

/* Para evitar tanta repetición de reproductor. nosek se hace desestructuración de campos que es asignárselos a variables */
// const { volumen, segundo, detalles} = reproductor;

/* En caso de que tengamos dos autores pero queramos mantener ambas constantes se le puede cambiar el nombre dela variable dentro */
const { volumen, segundo, cancion:can, detalles:{autor: autorDetalle}} = reproductor;

/* Desestructuracion del autor que está dentro de detalles puedes asignarselo arriba como variable y poner detalles.autor, la opción en una línea aunque más compleja es la segunda de arriba o sino: */
// const { autor } = detalles;

console.log('El volumen actual es de: ', volumen);
console.log('El segundo actual es de: ', segundo);
console.log('La cancion actual es: ', reproductor.cancion);
console.log('La cancion actual es: ', can);
console.log('El autor actual es: ', reproductor.detalles.autor);
console.log('El autor actual es: ', autorDetalle);
console.log('El autor actual es: ', autor);


/* ---------------------------- DESESTRUCTURACIÓN DE ARRAYS (Con square brackets) ------------------------------ */

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
/* Depende de la posicion aunque da igual el nombre de la variable */
const [ p1, , goku ] = dbz;

console.log('Personaje 1: ', goku);
console.log('Personaje 2: ', p1);
console.log('Personaje 3: ', dbz[2]);
