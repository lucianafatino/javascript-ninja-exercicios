/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function novaFunc(a, b, c){
    if(a === undefined || b === undefined || c === undefined){
        return("Preencha todos os valores!");
    } else {
        return (a*b*c) + 2;
    }
} // correto

// Invoque a função criada acima, passando só dois números como argumento.
novaFunc(2,1); // correto

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores!  // correto

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
novaFunc(2,4,3);  // correto

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 26  // correto