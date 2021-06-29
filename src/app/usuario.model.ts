import { Empresa } from './empresa.models';
export class Cliente{
    constructor(
        public id:      number,
        public nombre:  string,
        public codChat: string,
        public canal:   string,
        public empresa: Empresa,){}
}
