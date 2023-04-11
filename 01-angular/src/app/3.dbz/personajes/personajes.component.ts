import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent {

  //El input es para asociarselo en el personajes.html con las []
  // @Input() personajes: Personaje[] = [];

  get personajes(){
    // Si no está el constructor haciendo referencia al servicio no podemos hacer referencia al array de personajes privados
    return this.DbzService.personajes;
  }

  
  // Esto es una injeccion de dependencias y es la forma corta de declarar una variable  
  constructor(private DbzService: DbzService){}
}
