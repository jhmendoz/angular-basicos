import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

heroes : string [] = ['Spiderman','Thor','IronMan','Hulk','Superman'];
heroeBorrado = '';

borrarHeroe()  {
  this.heroeBorrado = this.heroes.shift() || '';
}

}
