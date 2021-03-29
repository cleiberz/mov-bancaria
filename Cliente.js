import { Usuario } from './Usuario/Usuario.js';

export class Cliente extends Usuario{
    

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){
        super(nome, cpf, senha)
    }

}