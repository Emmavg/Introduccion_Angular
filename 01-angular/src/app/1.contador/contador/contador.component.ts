import {Component} from '@angular/core';


@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html'
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