import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ListadoServices } from '../services/listado.services';
import { Cliente } from '../usuario.model';
import { Empresa } from '../empresa.models';
import { DataServices } from '../services/data.services';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})


export class ListadoClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  empresa =[
    {
      id: 12,
      nombre: "Alumetal"
    },
    {
      id: 11,
      nombre: "Barcelo"
    }
  ];

  constructor(
    private router:Router,
    private dataService: DataServices,
    private AuthService: AuthService,
  ) { }


  ngOnInit(): void {
    const username: string = "demo1"
    const password: string = "FEpass" 
    this.AuthService.login(username, password).subscribe(resp => {
      console.log(resp)
      environment.token = resp.id_token
      this.dataService.obtenerCLientes()
      .subscribe( e =>this.clientes=e)
    }) 
  }

  navAgregar(){
    this.router.navigate(['listado-clientes/agregar']);
  }




  editarCliente(id: any){
    console.log(id)
    this.router.navigate(["clienteparti", id]);
  }
}
