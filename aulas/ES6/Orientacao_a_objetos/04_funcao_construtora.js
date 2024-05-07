
let Carro = function() {
    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180

    this.acelerar = function() {
        let velocidade = this.getVelocidadeAtual() + 10
        this.setVelocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = () => {
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = () => {
        this.velocidadeAtual = velocidadeAtual
    }
    
}

let carro = new Carro()



console.log(`A velocidade atual é de ${carro.getVelocidadeAtual()}`)

carro.acelerar()