/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myFunc(arg1, arg2){
    return arg1[arg2];
} // correto

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var novoArr = ['Luciana', 25, 1.55, true, undefined];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunc(novoArr, 0));
console.log(myFunc(novoArr, 1));
console.log(myFunc(novoArr, 2));
console.log(myFunc(novoArr, 3));
console.log(myFunc(novoArr, 4));

