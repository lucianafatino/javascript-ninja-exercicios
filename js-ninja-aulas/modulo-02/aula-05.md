# Operadores Lógicos

## O que são operadores lógicos?

- São operadores que combinam ou invertem valores booleanos

## Quais são os operadores lógicos?

### && (and)

- Verifica se duas ou mais condições são verdadeiras
- Todas as condições devem ser verdadeiras para este operador retornar *true*. Se uma das condições for falsa, já é o suficiente para ele retornar *false*
- var x = 3
- var y = 7
- x === 3 && y === 7 // retorna true

### || (or)

- Verifica uma ou mais condições, sendo que apenas uma delas pode ser verdadeira para este operador retornar *true*
- x === 3 || y === 3 // retorna true pois x === 3 é verdadeiro

### ! (not)

- Inverte valores booleanos
- var x = !true // retorna false