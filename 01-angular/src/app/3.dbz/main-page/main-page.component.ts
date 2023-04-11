import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

    // Valor por defecto que aparece relleno en el formulario

    nuevo: Personaje = {
      nombre: 'Maestro',
      poder: 10000
    }

    constructor () {
    }

  // Todo esto lo pasamos al servicio para centralizar los datos

  // personajes:Personaje[] = [
  //   {
  //     nombre: 'Goku',
  //     poder: 15000
  //   },
  //   {
  //     nombre: 'Vegeta',
  //     poder: 7500
  //   }
  // ];

  // Podemos hacer un getter y sacar el array de personajes del servicio pero no lo estamos usando para nada por lo que vamos a refactorizarlo

  // get personajes(): Personaje[]{
  //   return this.DbzService.personajes;
  // }



  // agregarNuevoPersonaje(event: Personaje){
  //   // Si pones la palabra debugger, cuando el código que se está ejecutando llegue a este punto se va a parar
  //   //debugger;
  //   this.personajes.push(event);
  // }

  // Esto es una injeccion de dependencias y es la forma corta de declarar una variable  
  // constructor (private DbzService: DbzService) {
  // }

}
