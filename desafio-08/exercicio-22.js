/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var sum = function calculateSum(NUMERO1, NUMERO2){
    return NUMERO1 + NUMERO2;
} // correto

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
var value01 = 2;
var value02 = 3;
console.log(`A soma entre ${value01} e ${value02} é igual a ${sum(value01, value02)}`); // correto

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
// ?

console.log(`O nome da função que faz a soma é ${sum.name}`); // correto