/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
// ?

var championship = 'Campeonato Paulista';
console.log(championship); // correto
/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?

var teams = ['Corinthians', 'Palmeiras','São Paulo', 'Santos', 'Ponte Preta']; // correto

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
    if(posição < 1 || posição > 5){
        return(`Não temos a informação do time que está nessa posição.`)
    }
    return(`O time que está em ${posição}º lugar é o ${teams.posição[-1]}.`)     
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

// correto