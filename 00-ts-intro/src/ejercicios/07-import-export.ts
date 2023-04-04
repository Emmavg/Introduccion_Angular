import { calculaIVA, Producto } from './06-desestructuracion-funcion';
/*
    ===== Código de TypeScript =====
*/

/* Para poder importar antes hay que exportar en el archivo anterior*/

const carritoCompra: Producto[] = [
    {
        desc: 'Telefono1',
        precio: 100,
    },
    {
        desc: 'Telefono2',
        precio: 150,
    }
];

const [total, iva] = calculaIVA(carritoCompra);


/* Salen los logs anteriores también porque al buscar la función la tiene que crear ejecutando así el archivo anterior */
console.log('Total', total);
console.log('IVA', iva);

