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
function books(bookName){
    var allBooks = {
        'O Guia do Mochileiro das Galáxias': {
            quantidadeDePaginas: 156,
            autor: 'Douglas Adams',
            editora: 'Fora do Catálogo'
        },
        'Atos Humanos': {
            quantidadeDePaginas: 192,
            autor: 'Han Kang',
            editora: 'Todavia'
        },
        'O Castelo Animado':{
            quantidadeDePaginas: 368,
            autor: 'Diana Wynne Jones',
            editora: 'Galera'
        }
    };
    return !bookName ? allBooks : allBooks[ bookName ];
} // correto

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(books());  // correto

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro O Castelo Animado tem ${books('O Castelo Animado').quantidadeDePaginas} páginas!`);  // correto

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log(`O(a) autor(a) do livro O Castelo Animado é  ${books('O Castelo Animado').autor}.`);  // correto

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log(`O livro O Castelo Animado foi publicado pela editora ${books('O Castelo Animado').editora}!`)

