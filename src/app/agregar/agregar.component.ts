import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServices } from '../services/data.services';
import { Cliente } from '../usuario.model';
import { Empresa } from '../empresa.models';
import { ClienteSID } from '../cliente.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  empresa =[
    {
      id: 12,
      nombre: "Alumetal"
    },
    {
      id: 11,
      nombre: "Barcelo"
    }
  ]

  clienteNoId: ClienteSID= {
    nombre: " ",
    codChat: " ",
    canal: " ",
    empresa: {
      id: 12,
      nombre: " "
    }
  }
  cliente: Cliente ={
    id: 0,
    nombre: " ",
    codChat: " ",
    canal: " ",
    empresa: {
      id: 12,
      nombre: " "
    }

  } 


  constructor(
    private dataService: DataServices,
    private      router:Router){}

    ngOnInit(): void {

    }


  guardarCliente(){
  if(this.clienteNoId.nombre.trim().length === 0){
      return;
    } 
    this.dataService.agregarCliente(this.clienteNoId)
    .subscribe( resp => {
      console.log("Respuesta"+ resp)
    })
    console.log(this.clienteNoId);
    this.router.navigate(['listado-clientes'])
  }


  regresarListado(){
    this.router.navigate(['listado-clientes'])
  }
}
