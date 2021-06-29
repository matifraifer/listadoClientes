import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { AuthResponse, Usuario } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl


  constructor( private http: HttpClient) { }

login(username : string, password: string){
    const url = `${this.baseUrl}/authenticate`;
    const body = {username: "demo1", password: "FEpass"};

    return this.http.post<AuthResponse>(url, body)
  }

validarToken(){
    const url = `${this.baseUrl}/authenticate`;
    const headers = new HttpHeaders()
    .set('x-token', localStorage.getItem("token") || " ")
return this.http.get<AuthResponse>(url, {headers})
  }
}
