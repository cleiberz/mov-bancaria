import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial,cliente,agencia, conta ){
        super(saldoInicial, cliente, agencia, conta); 
    }
}
