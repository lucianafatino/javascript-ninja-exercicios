/*
Crie um array com 5 items (tipos variados).
*/
var newArr = ['Mari', 25, true, function(){}, null]; // correto

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item){
    newArr.push(item);
    return newArr;
}
// correto

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(newArr([undefined, -90, 'Luciana'])); // correto

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?

console.log(`O segundo elemento do segundo array é ${newArr[5][1]}.`) // correto

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ?

console.log(`O primeiro array tem ${newArr.length} itens."`)

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?

console.log(`O segundo array tem ${newArr[5].length} itens.`)
