import { NgModule, Component } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ClienteParticularComponent } from './cliente-particular/cliente-particular.component';
import { ValidarTokenGuard } from './guard/validar-token.guard';

const routes:Routes = [
  { path: "**", component: ListadoClientesComponent},
  {path: "listado-clientes", component: ListadoClientesComponent, canActivate:[ValidarTokenGuard], canLoad:[ValidarTokenGuard]},
  { path: "listado-clientes/agregar", component: AgregarComponent},
  { path: "clienteparti/:id", component: ClienteParticularComponent},
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {}
