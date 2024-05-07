
class Animal {
    constructor(cor, tamanho, peso) {
        this.cor = cor
        this.tamanho= tamanho
        this.peso = peso
    }

    dormir() {
        console.log('Dormir')
    }
}

class Passaro extends Animal{
    constructor(bico, cor, tamanho, peso) {
        super(cor, tamanho, peso)
        this.bico = bico
    }

    voar() {
        console.log('Voar')
    }
}   

class Papagaio extends Passaro {
    constructor(sabeFalar, cor, tamanho, peso) {
        super('Médio', cor, tamanho, peso)
        this.sabeFalar = sabeFalar
    }

    fala() {
        console.log('Falar')
    }
}

let papagaio = new Papagaio(true, 'verde', '20cm', '300g' )

console.log(papagaio)
