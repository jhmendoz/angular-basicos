import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './Contador/Contador.module';
//import { ContadorComponent } from './Contador/Contador/contador.component';
// import { HeroeComponent } from './Heroes/Heroe/heroe.component';
// import { ListadoComponent } from './Heroes/listado/listado.component';
import { HeroesModule } from './Heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent,
    // HeroeComponent,
    // ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
