import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';


const routes: Routes= [
  {
    // Si no tengo nada en la ruta y estoy en la principal quiero enseñar el por pais component que va a ser el primer comp
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full'
  },
  // En /region
  {
    path: 'region',
    component: PorRegionComponent
  },
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  // Para poder ver el pais es especial porque por cada uno tiene un pais y debe ir cambiando el path por que le ponemos : para indicsrque recibe otro arg al que llamamos id
  {
    path: 'pais/:id',
    component: PorRegionComponent
  },
  // En caso de que no sea ninguna de las rutas anteriores:
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [
    // forRoot es para la ruta principal porque aun no tenemos hijas
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
