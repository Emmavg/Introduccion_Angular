import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  // Utilizamos el servicio para buscar, con injeccion de dependencias

  constructor(private gifsServ: GifsService){}

  get historial(){
    // Si no está el constructor haciendo referencia al servicio no podemos hacer referencia al array de personajes privados
    return this.gifsServ.historial;
  }

  buscar(item:string){
   this.gifsServ.buscarGifs(item);
  }

}
