
// Capturar os campos de entrada
//let inputAltura = document.getElementById("altura_input");
//let inputPeso = document.getElementById("peso_input");
// Botões
let btnCalc = document.getElementById("submit_calc")
let btnclear = document.getElementById("clear_calc")

let divBtns = document.querySelector(".buttons")

// Capturar eventos dos botões e valores dos inputs
divBtns.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputAltura = e.target.getElementById("altura_input");
    const inputPeso = e.target.getElementById("peso_input");

    const altura = Number(inputAltura.value)
    const peso = Number(inputPeso.value)

    const imc = getImc(peso, altura);
    console.log(imc())
}) 

//Calculo do IMC
function getImc (peso, altura) {
    const imc = peso / altura * 2;
    return imc.toFixed(2)
}

//Mensagem de resultado
