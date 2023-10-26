
function distribuiCacarter() {
    //selecionar o caracter digitado
    let entrada = document.getElementById('entrada').value
    //Limpar o campo de entrada
    document.getElementById('entrada').value = ''

    //Limpara espaços nas estremidades da String
    entrada.trim()

    switch (entrada) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        //Adcionar o caracter no campo de números
        document.getElementById('numeros').value += entrada
        break;
        default:
             //Adcionar o caracter no campo de letras
            document.getElementById('letras').value += entrada
    }

}