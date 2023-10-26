// Game Mata Mosquito

let criaMosquitoTempo = 1500;

//Página inicial
function iniciarJogo(){
    let nivel = document.getElementById('nivel').value

    if(nivel === '') {
        alert('Selecione um nível para inicar o jogo')
        return false
    }

    window.location.href = 'game.html'

    if(nivel === 'normal') {
        criaMosquitoTempo = 1500
    } else if (nivel === 'dificil') {
        criaMosquitoTempo = 1000
    } else if (nivel === 'chucknorris') {
        criaMosquitoTempo = 800
    }
}


//1 capturar as dimensões da janela


let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;
document.getElementById('cronometro').innerHTML = tempo


function capturaDimensaoJanela() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

capturaDimensaoJanela()

let cronometro = setInterval(function(){
    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'

    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
},criaMosquitoTempo)

function posicionamentoRandomico() {

    // Remover mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(vidas > 3) {
            window.location.href = 'game_over.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }

    let posicaoX = Math.floor(Math.random() * largura - 90)
    let posicaoY = Math.floor(Math.random() * altura - 90)

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY)

    //Criar elemnto HTML
    let mosquito = document.createElement('img')
    mosquito.src = ('imagens/mosca.png')
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosquito)

}

let criaMosquito = setInterval(function() {
    posicionamentoRandomico()
},2000)


function tamanhoAleatorio() {
    let  classeCss = Math.floor(Math.random() * 3)

    switch(classeCss) {
        case 0:
            return 'tamanho_p'
        case 1:
            return 'tamanho_m'
        case 2:
            return 'tamanho_g'
    }
}

// Lado aleatório do mosquito
function ladoAleatorio() {
     let classeCss = Math.floor(Math.random() * 2)

     switch(classeCss) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
     }
}
