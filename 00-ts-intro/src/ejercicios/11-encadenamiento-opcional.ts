/*
    ===== Código de TypeScript =====
*/

interface Pasajero{
    nombre: string;
    hijos?: string[]
}

const pasa1: Pasajero = {
    nombre: 'Fernando'
}

const pasa2: Pasajero = {
    nombre: 'Melisa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos(pasajero: Pasajero): void {

    // En caso de que el pasajero tenga hijos determina el length por eso la ? aquí
    // En caso de ser undefined la propiedad hijos que devuelva 0 -> || 0
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimeHijos(pasa2);
imprimeHijos(pasa1);