import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServices } from '../services/data.services';
import { switchMap } from 'rxjs/operators';
import { Cliente } from '../usuario.model';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cliente-particular',
  templateUrl: './cliente-particular.component.html',
  styleUrls: ['./cliente-particular.component.css']
})
export class ClienteParticularComponent implements OnInit {

  cliente: Cliente ={
    id: 0,
    nombre: " ",
    codChat: " ",
    canal: " ",
    empresa: {
      id: 0,
      nombre: " "
    }
  };

  constructor(
    private activeRouter:ActivatedRoute,
    private router: Router,
    private dataServices:DataServices,
    private AuthService:AuthService
  ) { }

  ngOnInit(): void {

    const username: string = "demo1"
    const password: string = "FEpass" 
    this.AuthService.login(username, password).subscribe(resp => {
      console.log(resp)
      environment.token = resp.id_token

      let clienteID= this.activeRouter.snapshot.paramMap.get('id');
      console.log(clienteID)
      this.activeRouter.params.pipe(
        switchMap(({id}) => this.dataServices.getClientePorId(id)))
        .subscribe(cliente => this.cliente = cliente)
    }) 
  }

  eliminar(){
    this.dataServices.borrarCliente(this.cliente.id)
    .subscribe( resp => {
      this.router.navigate(["clientes/listado-clientes"]);
    });

    this.router.navigate(["../listado-clientes"])
  }

  regresar(){
    this.router.navigate(["listado-clientes"])
  }
}
