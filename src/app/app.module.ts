import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { DataServices } from './services/data.services';

import { AppComponent } from './app.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ClienteParticularComponent } from './cliente-particular/cliente-particular.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListadoClientesComponent,
    AgregarComponent,
    ClienteParticularComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
