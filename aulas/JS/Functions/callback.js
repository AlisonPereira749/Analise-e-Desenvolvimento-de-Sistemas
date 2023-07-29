// São funções que são encaminhadas via parânmetros para outras funções

function exiirArtigo(id, callbackSucesso, callbackErro) {
    //Lógica: recuperar o id via requisição http
    if (false) {
        callbackSucesso('Mensagem avisando que o resultado foi verdadeiro')
    } else {
        callbackErro('Erro ao recuperar dados');
    }
}

let callbackSucesso = function(titulo, descricao) {
    console.log('<h1>' + titulo + '<h1/>')
    console.log('<hr/>')
    console.log('<p>' + descricao + '<p/>')
}

let callbackErro = function(erro) {
    console.log('<h3>' + erro + '<h3/>')
}

exiirArtigo(1, callbackSucesso, callbackErro);