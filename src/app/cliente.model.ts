import { Empresa } from './empresa.models';
export class ClienteSID{
    constructor(
        public nombre:  string,
        public codChat: string,
        public canal:   string,
        public empresa: Empresa,){}
}
