class ContaBancaria {
    #saldo;

    constructor() {
        this.#saldo = 0;
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log("Valor de depósito inválido.");
            return;
        }
        this.#saldo += valor;
        console.log("Depósito realizado: R$ " + valor);
    }

    sacar(valor) {
        if (valor <= 0) {
            console.log("Valor de saque inválido.");
            return;
        }
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente.");
            return;
        }
        this.#saldo -= valor;
        console.log("Saque realizado: R$ " + valor);
    }

    verSaldo() {
        console.log("Saldo atual: R$ " + this.#saldo);
    }
}



const conta1 = new ContaBancaria();
conta1.verSaldo();
conta1.depositar(250);
conta1.depositar(-10); 
conta1.sacar(100);
conta1.sacar(500);
conta1.verSaldo();



class Usuario {
    #email;
    #senha;

    constructor(email, senha) {
        this.#email = email;
        this.setSenha(senha);
    }
    setSenha(novaSenha) {
        if (novaSenha.length < 6) {
            console.log("A senha tem que possuir pelo menos 6 digitos.");
            return;
        }
        this.#senha = novaSenha;
        console.log("Senha definida com sucesso.");
    }
    autenticar(senhaInformada) {
        if (senhaInformada === this.#senha) {
            console.log("Autenticação realizada com sucesso.");
            return true;
        } else {
            console.log("Senha incorreta.");
            return false;
        }
    }
}



const usuario = new Usuario("usuario@example.com", "abc"); 
usuario.setSenha("segura123");
usuario.autenticar("senhaerrada");
usuario.autenticar("segura123");
