# Funções

- O que são Funções?

  - São blocos de códigos nomeados, que podem ser invocados usando o operador ()
  - Exemplo
    - function nomeDaFunção(){} → estrutura da função
    - nomeDaFunção() → chamada da função

- Elas criam escopo?

  - Sim. Escopos permitem que variáveis criadas dentro da função não possam ser chamadas em outros lugares do código (variáveis locais).

- Elas podem retornar valores?

  - Sim, através da instrução *return*

  - Exemplo

    - function num( ){

      ​	var x = 10;

      ​	return x;

      }

      num( ) → retorna o número 10 

- Elas podem receber parâmetros?

  - Sim

  - Exemplo

    - function num(a, b){

      ​	return a + b;

      }

​					 num(2, 2) →  retorna 4