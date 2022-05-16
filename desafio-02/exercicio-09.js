/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function testes(a, b, c){
    if(a !== undefined && b === undefined && c === undefined){
        return a; // correto
    } else if (a !== undefined && b !== undefined && c === undefined){
        return a + b; // correto
    } else if(a !== undefined && b !== undefined && c !== undefined){
        return (a+b)/c; // correto
    } else if(a === undefined && b === undefined && c === undefined){
        return false; // correto
    } else {
        return null; // correto
    }
} // correto

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

testes(); // false
testes(2); // 2
testes(2,3); //5
testes(2,3,5); //1
 // todos corretos