import { Component } from "@angular/core";


@Component({
    selector : 'app-Heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre = 'Ironman';
    edad = 30;
    
    obtenerNombre(){
        return this.nombre + " - " + this.edad
    }
    get nombreMayusculas(){
        return this.nombre.toUpperCase();
    }

    cambiarNombre(){
        this.nombre = 'Spiderman';
    }
    cambiarEdad(){
        this.edad = 25;
    }

}