import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numberContas = 0;
    constructor(cliente, agencia, conta, ){
        super(0,cliente,agencia, conta);
        ContaCorrente.numberContas += 1;
    }
    sacar(valor){
        const taxaComValor = valor * 1.1;
        if (taxaComValor <= this._saldo) {
            this._saldo -= taxaComValor;
            //console.log(`R$${valor.toFixed(2)} reais sacado com sucesso.`)
        } else {
            console.log('Você não tem saldo suficiente!\n');
        }
    }
}