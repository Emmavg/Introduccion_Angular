import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

// Cuando es un servicio este tiene que ser el decorador
@Injectable()
export class DbzService {

    private _personajes:Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ];

    get personajes(): Personaje [] {
        // ... = operador spread. Como js manda todo por referencias podría ser posible modificar el getter por eso se pone para separar cada uno de los elementos de forma independiente del array y crea uno nuevo
        return [...this._personajes];
    }
      
    constructor(){
        console.log('Servicio inicializado');
    }

    
    agregarNuevoPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}