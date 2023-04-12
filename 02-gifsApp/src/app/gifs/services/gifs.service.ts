import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

// Hace que se pueda ejecutar este servicio a nivel global de la aplicación no a nivel de módulo ni de componente

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  // Api que hemos generado en la página de gifs creando una app

  private apiKey: string = 'QDMWzvU9hlfjSASG0t7xJkv9rvXKhqGW';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string [] = []

  // TODO: Cambiar any por su tipo corresp
  public resultados: Gif[] = [];
  
  get historial(){
    // Rompemos la referencia directa en caso de que alguien lo pueda modificar por eso ponemos los ... puntos antes
    return [...this._historial];
  }
  

  // Primero importamos el httpClientModule en el app.module.ts

  // El constructor oslo ejecuta una vez que es la primera que se ke llama al servicio por eso aquícargamos el local storage
  constructor(private http: HttpClient){
    if (localStorage.getItem('historial')) {
      // El parse, al contrario que abajo coge un objeto serializado y lo convierte a un tipo. Con la ! decimos que seguro que no es nulo que confie ts
      this._historial = JSON.parse(localStorage.getItem('historial')!)
      this.resultados = JSON.parse(localStorage.getItem('resultados')!)
    }

  }

  // Otra forma de hacerlo aunque mejor con http:

  // async buscarGifs(query:string = ''){
      
  buscarGifs(query:string = ''){

    query = query.trim().toLowerCase();

    // Compruebas a ver si ya está como el contains
    if (!this._historial.includes(query)) {

      // Insertamos al inicio del array no al final
      this._historial.unshift (query);

      // Cortamos para que solo pueda devolver como max 10 y los va sobreescribiendo
      this._historial = this._historial.splice(0,10);

      // Dentro del navegador web en la pestaña de application podemos almacenar info en el local storage del navegador como si fuera la cache
      // JSON es una propiedad que convierte cualquier obj a un string (serializa con el stringify)
      
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    // Forma async de hacerlo descomentar la línea de arriba tambien

    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=QDMWzvU9hlfjSASG0t7xJkv9rvXKhqGW&q=dragon ball&limit=10');
    // const data = await resp.json();
    // console.log(data);

    // Parámetros http:

    const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q', query);

    // Forma http: Primero declaramos el servicio arriba en el constructor y luego: (el subscribe se ejecuta cuando tenemos respuesta del get)
    
    // Las peticiones http devuelven observables por las cuales no nos tenemos que preocupar por si falla como el caso de arriba que deberíamos recorrer el fetch
    // Podemos mandar el query (arg que pasamos como parametro) dentro de la url si en vez de ' usamos `
    
    // Le asignamos el tipo de lo que devuelve al get con la interfaz nueva que nos hemos creado en la carpeta de interfaces
   
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
    .subscribe( (resp) =>{
      // console.log(resp.data);
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    });

  }
}
