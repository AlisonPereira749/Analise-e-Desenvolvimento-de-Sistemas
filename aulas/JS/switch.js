//JavaScript Switch Statement

//A switchinstrução é usada para executar diferentes ações com base em diferentes condições.

/* 
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/

/* 
O getDay()método retorna o dia da semana como um número entre 0 e 6.

(Domingo=0, Segunda=1, Terça=2 ..)

Este exemplo usa o número do dia da semana para calcular o nome do dia da semana:
*/

let dia;

switch(new Date().getDay()) {
    case 0:
        dia = "Domingo";
        break
    case 1:
        dia = "Segunda";
        break
    case 2:
        dia = "Terça";
        break
    case 3:
        dia = "Quarta";
        break
    case 4:
        dia = "Quinta";
        break
    case 5:
        dia = "Sexta";
        break
    case 6:
        dia = "Sábado";
        break
    default:
        dia = "Dia inválido"

}

console.log(dia)