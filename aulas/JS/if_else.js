// Aula IF e Else

// As instruções condicionais são usadas para executar diferentes ações com base em diferentes condições.

/* 

Declarações condicionais
Muitas vezes, quando você escreve código, deseja executar diferentes ações para diferentes decisões.

Você pode usar instruções condicionais em seu código para fazer isso.

Em JavaScript, temos as seguintes declarações condicionais:

Use if - para especificar um bloco de código a ser executado, se uma condição especificada for verdadeira


Use else - para especificar um bloco de código a ser executado, se a mesma condição for falsa


Use else if - para especificar uma nova condição para testar, se a primeira condição for falsa

*/

let media = 28;

let matematica = 10;
let historia = 7;
let ingles = 10;

let pontos = matematica + historia + ingles;


if (pontos >= media) {
    console.log(`Passei com ${pontos} pontos`)
}else {
    console.log(`Não passei, preciso de ${media - pontos} pontos`)
}
