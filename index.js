import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

// Clientes e Contas
const cliente1 = new Cliente('Cleiber Ziviani', '302712290-55');
const contaCorrente = new ContaCorrente(0, cliente1, 1001, '31624-0');
contaCorrente.depositar(500);
contaCorrente.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001, '31624-0');
contaPoupanca.sacar(10);

const contasalario = new ContaSalario(cliente1);
contasalario.depositar(100);
contasalario.sacar(10);

//Funcionários e login
const diretor = new Diretor('Cleiber Ziviani', 10500, '301712453-68');
diretor.cadastrarSenha('123456');
const estaLogadoDiretor = SistemaAutenticacao.login(diretor, '123456');

const gerente = new Gerente('Nalva Ziviani', 6000, '889104556-00');
gerente.cadastrarSenha('abc123');
const estaLogado = SistemaAutenticacao.login(gerente, 'ab123');

console.log(estaLogado);

