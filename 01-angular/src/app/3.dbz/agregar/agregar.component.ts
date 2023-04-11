import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  //El input es para asociarselo en el personajes.html con las []

  // Creamos un nuevo objeto
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  }
  
  // Esto es una injeccion de dependencias y es la forma corta de declarar una variable  
  constructor(private DbzService: DbzService){}

  // agregar(event:any){
  //   // Evita que el boton de submit refresce todo el rato la pagina cuando le clicas lo podemos evitar importando en el module el FormsModule
  //   event.preventDefault();
  //   console.log(event);
  // }

  // cambiarNombre(event: any){
  //   console.log(event);
  // }

  // @Output() onNuevoPers: EventEmitter<Personaje> = new EventEmitter();

  agregar(){

    // Si no escribes nada en el nombre validamos que no mande nada
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);

    // Mandamos el nuevo personaje para trabajar el evento, en el padre.html = main-page
    // this.onNuevoPers.emit(this.nuevo);

    this.DbzService.agregarNuevoPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
