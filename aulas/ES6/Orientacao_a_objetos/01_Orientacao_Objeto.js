//Conta bancária

class ContaBancaria {
    constructor() {
        this.agencia = 1057
        this.numeroConta = 1050214
        this.saldo = 0
        this.limite = 100
    }

    depositar(valorDeposito) {
        this.saldo += valorDeposito
    }

    saque(valorSaque) {
        this.saldo -= valorSaque
    }

    consultarSaldo() {
        return this.saldo
    }
}

let x = new ContaBancaria()

x.depositar(50)
x.saque(10)
console.log(x.consultarSaldo())