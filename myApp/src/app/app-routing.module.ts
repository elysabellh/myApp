import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebasComponent } from "./pruebas/pruebas.component";
import { PaisesComponent } from "./paises/paises.component";
import { BuscadorComponent } from "./buscador/buscador.component";

const routes: Routes = [
  {path:"pruebas", component: PruebasComponent },
  {path:"paises", component : PaisesComponent},
  {path:"buscador", component: BuscadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
