import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../usuario.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ClienteSID } from '../cliente.model';
import { Empresa } from '../empresa.models';

@Injectable()
export class DataServices{
    private baseUrl: string = environment.baseUrl

    constructor(private httpClient:HttpClient){}

    obtenerCLientes():Observable<Cliente[]>{
        const httpOptions = {
            headers: new HttpHeaders({
            Authorization: 'Bearer ' + environment.token
            })};
        return this.httpClient.get<Cliente[]>(`${this.baseUrl}/contactos`, httpOptions);
    }
    
    

    agregarCliente(cliente:ClienteSID):Observable<ClienteSID>{
        const httpOptions = {
            headers: new HttpHeaders({
            Authorization: 'Bearer ' + environment.token
            })};
        return this.httpClient.post<ClienteSID>(`${this.baseUrl}/contactos`, cliente, httpOptions);
    }

    getClientePorId(id: number): Observable<Cliente>{
        const httpOptions = {
            headers: new HttpHeaders({
            Authorization: 'Bearer ' + environment.token
            })};
        return this.httpClient.get<Cliente>(`${this.baseUrl}/contactos/${id}`, httpOptions)
    }

    borrarCliente(id: number): Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
            Authorization: 'Bearer ' + environment.token
            })};
        return this.httpClient.delete<Cliente>(`${this.baseUrl}/contactos/${id}`, httpOptions)
    }



}