/*
Ser usuário significa ter a propriedade "senha";
*/

export class SistemaAutenticacao{
    static login(usuario, senha){
        return usuario.senha == senha;
    }
    }