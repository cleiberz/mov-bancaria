import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numberContas = 0;
    agencia;
    conta;
    _cliente;
    _saldo = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
        this._cliente = novoValor;
    }
    }
    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(agencia, conta, cliente){
        this.agencia = agencia;
        this.conta = conta;
        this.cliente = cliente;
        ContaCorrente.numberContas += 1;
    }

    sacar(valor){
        if (valor <= this._saldo) {
            this._saldo -= valor;
            //console.log(`R$${valor.toFixed(2)} reais sacado com sucesso.`)
        } else {
            console.log('Você não tem saldo suficiente!\n');
        }
    }
    depositar(valor){
        if (valor <= 0) {
            console.log(`Deposito não permitido!\n`)
        } else {
            this._saldo += valor;
        }
        } 
    
    tranferir(conta, valor, cliente) {
        if (valor <= 0) {
            console.log('Transferência não permitida, informe um valor maior que zero!\n');
        } else if (valor <= this._saldo) {
            this._saldo -= valor;
            conta._saldo += valor;
        } else {
            console.log(`${cliente}, você não tem saldo suficiente.  Saldo atual: ${conta._saldo}\n`);
        }
}
}