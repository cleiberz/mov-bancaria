import { Usuario } from "./Usuario.js"

export class Gerente extends Usuario{
    constructor(nome, salario, cpf){
        super(nome, salario, cpf);
        this._bonificacao = 1.1;
        }
        autenticar(){
            return true;
        }
}