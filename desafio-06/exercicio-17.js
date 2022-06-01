/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
// ?

var championship = 'Campeonato Paulista';
console.log(championship);
/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?

var teams = ['Corinthians', 'Palmeiras','São Paulo', 'Santos', 'Ponte Preta'];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
// ?

function showTeamPosition(posição){
    switch(posição <= 5){
        case posição === 1:
            console.log(`O time que está em 1º lugar é o ${teams[0]}.`);
            break;
        case posição === 2:
            console.log(`O time que está em 2º lugar é o ${teams[1]}.`);
            break;
        case posição === 3:
            console.log(`O time que está em 3º lugar é o ${teams[2]}.`);
            break;
        case posição === 4:
            console.log(`O time que está em 4º lugar é o ${teams[3]}.`);
            break; 
        case posição === 5:
            console.log(`O time que está em 5º lugar é o ${teams[4]}.`);
            break;
        default:
            console.log(`Não temos a informação do time que está nessa posição.`);
    }       
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
// ?

showTeamPosition(1); // 'O time que está em 1º lugar é o Corinthians'
showTeamPosition(3); // 'O time que está em 3º lugar é o São Paulo'
showTeamPosition(4); // 'O time que está em 4º lugar é o Santos'
showTeamPosition(6); // 'Não temos a informação do time que está nessa posição.'

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
// ?

var counter = 20;
while(counter < 31){
    console.log(counter++);
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
// ?

function convertToHex(cor){
    var cores = {
        red: 'FF0000', 
        blue: '0000FF', 
        green: '00FF00', 
        yellow: 'FFFF00', 
        orange: 'FF820E'
    }
    switch(cor){
        case 'red':
            console.log(`O hexadecimal para a cor Vermelha é ${cores.red}.`);
            break;
        case 'blue':
            console.log(`O hexadecimal para a cor Azul é ${cores.blue}.`);
            break;
        case 'green':
            console.log(`O hexadecimal para a cor Verde é ${cores.green}.`);
            break;
        case 'yellow':
            console.log(`O hexadecimal para a cor Amarelo é ${cores.yellow}.`);
            break;
        case 'orange':
            console.log(`O hexadecimal para a cor Laranja é ${cores.orange}.`);
            break;
        default:
            console.log(`Não temos o equivalente hexadecimal para ${cor};`);
    }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
// ?

convertToHex('red'); // O hexadecimal para a cor Vermelha é FF0000.   
convertToHex('blue'); // O hexadecimal para a cor Azul é 0000FF.
convertToHex('purple'); // Não temos o equivalente hexadecimal para purple;
convertToHex('yellow'); // O hexadecimal para a cor Amarelo é ffff00.
convertToHex('ciano'); // Não temos o equivalente hexadecimal para ciano;
convertToHex('black'); // Não temos o equivalente hexadecimal para black;
convertToHex('green'); // O hexadecimal para a cor Verde é 00FF00.
convertToHex('orange'); // O hexadecimal para a cor Laranja é ff820e.