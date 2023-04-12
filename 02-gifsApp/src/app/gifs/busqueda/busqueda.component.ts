import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {

  // Buscamos el elemento por referencias la referencia local con este decorador y creamos una variable de tipo any
  @ViewChild('txtBuscar')

  //Non null assertion operation. Nos aseguramos de que ese elemento siempre existe pero como ts no se fia pues le ponemos la !
  txtBuscar!: ElementRef<HTMLInputElement>;

  // Utilizamos el servicio para buscar, con injeccion de dependencias

  constructor(private gifsServ: GifsService){}

  buscar () {

    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }
    this.gifsServ.buscarGifs(valor);

    // Una vez le demos enter reiniciamos a vacío la caja de txt
    this.txtBuscar.nativeElement.value = '';
  }
}
