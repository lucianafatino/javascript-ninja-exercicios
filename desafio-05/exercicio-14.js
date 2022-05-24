/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['luciana', 'feminino', 'brasileira', 25, 1.55];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function funcArr(arg){
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.


*/

funcArr(arr)[2];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myFunc(arg1, arg2){
    return arg1[arg2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var novoArr = ['Luciana', 25, 1.55, true, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

function retornaTodos(arg){
    return arg;
}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName){
    var books = {
        oGuiaDoMochileiro: {
            quantidadeDePaginas: 156,
            autor: 'Douglas Adams',
            editora: 'Fora do Catálogo'
        },
        atosHumanos: {
            quantidadeDePaginas: 192,
            autor: 'Han Kang',
            editora: 'Todavia'
        },
        oCasteloAnimado:{
            quantidadeDePaginas: 368,
            autor: 'Diana Wynne Jones',
            editora: 'Galera'
        }
    };
    if(bookName === 'O Guia do Mochileiro das Galáxias'){
        return books.oGuiaDoMochileiro;
    }
    if(bookName === 'Atos Humanos'){
        return books.atosHumanos;
    }
    if(bookName === 'O Castelo Animado'){
        return books.oCasteloAnimado;
    }
    if (bookName === undefined){
        return books;
    }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/



/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

