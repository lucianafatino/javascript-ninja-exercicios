/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var num = 10;
while(num <= 20){
    num % 2  === 0 ? console.log(num) : '';
    num++;
}  // correto

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var numImpar = 10;
while(numImpar < 20){
    numImpar % 2 !== 0 ? console.log(numImpar) : '';
    numImpar++;
}  // correto

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(var numP = 100; numP <= 120; numP++){
    numP % 2 === 0 ? console.log(numP) : '';
} // correto

console.log( 'Números ímpares entre 111 e 125:' );
for(var numI = 111; numI <= 125; numI++){
    numI % 2 !== 0 ? console.log(numI) : '';
} // correto