/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName(){
    return 'Luciana Fatino Venâncio';
} // correto

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
var varShowName = showName; // correto

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log(`A função ${varShowName.name} retorna ${varShowName()}`); // correto