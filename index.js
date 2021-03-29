import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta/Conta.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";


const cliente1 = new Cliente('Cleiber Ziviani', '302712290-55');

const contaCorrente = new ContaCorrente(0, cliente1, 1001, '31624-0');
contaCorrente.depositar(500);
contaCorrente.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001, '31624-0');
contaPoupanca.sacar(10);

const contasalario = new ContaSalario(cliente1);
contasalario.depositar(100);
contasalario.sacar(10);

console.log(contasalario)
