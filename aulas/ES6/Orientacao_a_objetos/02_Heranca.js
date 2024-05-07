
class Animal {
    constructor() {
        this.peso = 'Peso do animal'
        this.cor = 'Cor'
        this.tamanho= 'Tamanho'
    }

    dormir() {
        console.log('Dormir')
    }
}

class Cachorro extends Animal {
    constructor() {
        super()
        this.orelhas = 'Grandes e caidas'
    }

    correr () {
        console.log('Correr')
    }

    brincar () {
        console.log('Brincar')
    }
}

class Passaro extends Animal{
    constructor() {
        super()
        this.bico = 'Curto'
    }

    voar() {
        console.log('Voar')
    }
}

let cachorro = new Cachorro
let passaro = new Passaro

console.log(cachorro)