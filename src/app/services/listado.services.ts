import { DataServices } from './data.services';
import { Cliente } from '../usuario.model';
export class ListadoServices{

    constructor (private dataServices: DataServices){}

    mostrarClientes(){
        return this.dataServices.obtenerCLientes();
    }
} 