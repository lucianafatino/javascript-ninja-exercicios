/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = function(a){
    if(a){
        return true;
    }
    return false;
}; // resolução do professor


// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

isTruthy(0); //correto
isTruthy(-0); //correto
isTruthy(undefined); //correto
isTruthy(null); //correto
isTruthy(false); //correto
isTruthy(''); //correto
isTruthy(""); //correto
isTruthy(NaN); //correto

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1);
isTruthy({});
isTruthy([]);
isTruthy(true);
isTruthy("Ninja");
isTruthy(-22);
isTruthy(Infinity);
isTruthy(-Infinity);
isTruthy(1n);
isTruthy(3.6);