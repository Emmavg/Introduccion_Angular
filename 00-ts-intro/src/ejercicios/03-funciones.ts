/*
    ===== Código de TypeScript =====
*/

function sumar(a, b, c?:number): any{
    return (a + b).toString();
}

const sumarFecha = (a: number, b: number): number =>{
    return a + b;
}

/* Primero van los argumentos obligatorio, luego los opcionales y por último los que tienen un valor por defecto 
La base si no se envía se le asigna un 2*/
function multiplicar(numero: number, numero2?: number, base:number=2): number{
    return numero * base;
}
const resul = sumar('Emma', ' Yo');

/* Este programa nos devuelve el primer num multiplicado por la base por defecto ya que no se ha enviado aun ese valor */
const resul2 = multiplicar(10, 20);
console.log(resul, resul2);



/** EJERCICIOS MAS ELABORADOS */

interface Personaje2 {
    nombre: string;
    pv: number;
    mostrarHp:(a?: number) => void;
}

function curar(personaje: Personaje2, curarX: number): void{
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPers: Personaje2 = {
    nombre: 'Emma2',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida: ',this.pv);
    }
}

curar(nuevoPers, 50);
nuevoPers.mostrarHp();