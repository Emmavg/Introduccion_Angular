import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Aquí se declaran los componentes que queremos usar en el proyecto
import { AppComponent } from './app.component';

import { HeroesModule } from './2.heroes/heroes.module';
import { ContadorModule } from './1.contador/contador/contador.module';
import { DbzModule } from './3.dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
