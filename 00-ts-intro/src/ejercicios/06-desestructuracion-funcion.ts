/*
    ===== Código de TypeScript =====
*/
export interface Producto{
    desc: string;
    precio:number;
}

const telefono: Producto = {
    desc: 'Nokia',
    precio: 150,
}

const tablet: Producto = {
    desc: 'iPad',
    precio: 350,
}

export function calculaIVA(productos: Producto[]): [number, number]{
    let total = 0;

    /* Por cada producto tiene que hacer lo de dentro de las llaves */
    productos.forEach( ({precio}) => {
        total += precio;
    })

    return [total, total* 0.15];
}
const articulos = [telefono, tablet];
const [total, iva] = calculaIVA(articulos);
const arr = calculaIVA(articulos);

console.log('IVA: ', iva);
console.log('Total: ', total);
console.log('Array: ', arr);