//Classe abstrata

export class Conta{
    constructor(saldoInicial,cliente,agencia, conta ){
        if (this.constructor == Conta) {
            throw new Error('Você não deveria instanciar um objeto do tipo Conta diretamente! Pois essa é uma classe abstrata.');
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        this._conta = conta;
        
        
    }

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