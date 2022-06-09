/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
function calculator(operator){
  return function(n1, n2){
    var result;
    switch(operator){
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '*':
        result = n1 * n2;
        break;
      case '/':
        result = n1 / n2;
        break;
      case '%':
        result = n1 % n2;
        break;
      default:
        return `Operação inválida.`;
    }
    return `Resultado da operação: ${n1} ${operator} ${n2} = ${result}`;
  }
}
// correto
/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
var sum = calculator('+'); // correto

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(sum(2,2)); // Resultado da operação: 2 + 2 = 4
// correto

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
var subtraction = calculator('-'); // correto
var multiplication = calculator('*'); // correto
var division = calculator('/'); // correto
var mod = calculator('%'); // correto

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
console.log(subtraction(4, 2)); // Resultado da operação: 4 - 2 = 2
// correto
console.log(multiplication(4, 2)); // Resultado da operação: 4 * 2 = 8
// correto
console.log(division(4, 2)); // Resultado da operação: 4 / 2 = 2
// correto
console.log(mod(4, 2)); // Resultado da operação: 4 % 2 = 0
// correto
