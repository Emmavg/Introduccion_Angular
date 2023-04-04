/*
    ===== Código de TypeScript =====
*/

/* El <T> es para especificar que es de tipo genérico */
function queTipoSoy<T>(argumento:T){
    return argumento;
}

/* Si hacemos hover vemos que va cambiando el tipo de la variable dependiendo de lo que le mandes */
let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(900);
let soyArray = queTipoSoy( [1,2,3] );

let soyExplicito = queTipoSoy<number>(100);
