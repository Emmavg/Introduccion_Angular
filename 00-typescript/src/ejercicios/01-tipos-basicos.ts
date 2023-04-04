/*
    ===== Código de TypeScript =====
    Este comentario tiene que estar si o si para que reconozca que es un fichero de tipo ts
    Se pueden declarar poniendo o sin poner de forma explicita el tipo de dato que es 
    pero a diferencia de js si le declaras el tipo, luego dentro no le puedes meter un valor que no sea del tipo que has declarado
*/


let nombre = 'Emma';
let nombre2 : string = 'Emma';
const nombreC = 'Emma'; /* Si hacemos hover en el nombre de la variable podemos ver el tipo menos cuando es const que nos dice el valor que tiene */

/* Declaras que puede ser esa variable de esos dos tipos */
let hp: number | string = 95;
hp = 'FULL';

let estaVivo: boolean= true;


/* Esto de console se ve en la parte de la web inspeccioanndo elementos y en consola */
console.log(nombre, hp);

