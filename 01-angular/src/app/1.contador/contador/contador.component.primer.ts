import {Component} from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
        <h1>Hola mundo. Nombre app en app.component.ts:  {{ titulo }}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>
        <!-- Las doble llaves es para poner cualquier expresión de java, no solo para sacar variables -->


        <!-- Los eventos con () aunque la lógica no suele ir en la parte del template a no ser que sea un codigo muy sencillo suele ir en la parte del componente.ts -->
        <!-- <button (click)="num = num + 1;"> + 1</button> -->

        <!-- <button (click)="sumar()"> + 1</button> -->

        <button (click)="acumular(base)"> + {{base}}</button>
        <span> {{num}} </span>
        <button (click)="acumular(-base)"> - {{base}}</button>

        <!-- El undefined no existe en js por lo que no aparece -->
        <span>{{undefined}}</span>
    `
})
export class ContadorComponent {

    titulo = 'Contador App';
    num: number = 10;
    base: number = 5;

    // En este lado si que podemos usar la forma corta de sumar mientras que en el html no
    // sumar() {
    //   this.num += 1;
    // }

    acumular(valor:number){
        this.num += valor;
    }
}