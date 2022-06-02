
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
    var hexa;
    switch(cor){
        case 'red':
            hexa = '#FF0000';
            break;
        case 'blue':
            hexa = '#0000FF';
            break;
        case 'green':
            hexa = '#00FF00';
            break;
        case 'yellow':
            hexa = '#FFFF00';
            break;
        case 'orange':;
            hexa = '#FF820E';
            break;
        default:
            console.log(`Não temos o equivalente hexadecimal para ${cor};`);
    }
    console.log(`O hexadecimal para a ${cor} é ${hexa}.`);
}

// correto

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

// correto
