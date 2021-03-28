import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente('Cleiber Ziviani', '302712290-55');
const cliente2 = new Cliente('Alice Aguiar','889105551-43');

const conta1 = new ContaCorrente(1001, '31624-0', cliente1);
conta1.depositar(300);
conta1.sacar(100);

const conta2 = new ContaCorrente(1001, '13254-6', cliente2);
conta2.depositar(200);
conta2.sacar(100);

conta1.tranferir(conta2, 110, cliente1.nome);
conta2.tranferir(conta1, 23, cliente2.nome);

console.log(`${cliente1.nome} -- Agência: ${conta1.agencia} -- Conta: ${conta1.conta} -- Saldo: R$ ${conta1.saldo.toFixed(2)}\n${cliente2.nome} -- Agência: ${conta2.agencia} -- Conta: ${conta2.conta} -- Saldo: R$ ${conta2.saldo.toFixed(2)}.`);