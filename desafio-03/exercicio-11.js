/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

var pessoa = {
    nome: 'Luciana',
    sobrenome: 'Fatino',
    sexo: 'Feminino',
    idade: 25,
    altura: 1.53,
    peso: 85,
    andando: false,
    caminhouQuantosMetros: 0
} // correto


/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

pessoa.fazerAniversario = function(){
    pessoa.idade++;
} // correto

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

pessoa.andar = function(a){
    pessoa.caminhouQuantosMetros += a;
    pessoa.andando = true
} // correto

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function(){
    pessoa.andando = false;
} // correto

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

pessoa.nomeCompleto = function(){
    return(`Olá! Meu nome é ${pessoa.nome} ${pessoa.sobrenome}`)
} // correto


/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

pessoa.mostrarIdade = function(){
    return(`Olá, eu tenho ${pessoa.idade} anos!`)
} // correto


/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

pessoa.mostrarPeso = function(){
    return(`Eu peso ${pessoa.peso}Kg.`)
} // correto

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

pessoa.mostrarAltura = function(){
    return(`Minha altura é ${pessoa.altura}m.`)
} // correto


/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.nomeCompleto(); // Olá! Meu nome é Luciana Fatino
// correto

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarIdade(); // 'Olá, eu tenho 25 anos!'
// correto


/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarPeso(); // 'Eu peso 85Kg.'
// correto

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarAltura(); // 'Minha altura é 1.53m.'
// correto

/*
Faça a `pessoa` fazer 3 aniversários.
*/

pessoa.fazerAniversario(); // correto
pessoa.fazerAniversario(); // correto
pessoa.fazerAniversario(); // correto


/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

pessoa.mostrarIdade(); // 'Olá, eu tenho 28 anos!'
// correto

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

pessoa.andar(3); // correto
pessoa.andar(5); // correto
pessoa.andar(1); // correto

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.andando; // true
// correto

/*
Se a pessoa ainda está andando, faça-a parar.
*/

pessoa.parar();
// correto

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

pessoa.andando; // false
// correto

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

pessoa.caminhouQuantosMetros; // 9
// correto

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

pessoa.apresentacao = function(){
    var sexo = 'o';
    var idadeAnos = 'anos';
    var metrosCaminhados = 'metros';
    if(pessoa.sexo === 'Feminino'){
        sexo = 'a';
    }
    if(pessoa.idade === 1){
        idadeAnos = 'ano';
    }
    if(pessoa.caminhouQuantosMetros === 1){
        metrosCaminhados = 'metro';
    }
    return(`Olá, eu sou ${sexo} ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${idadeAnos}, minha altura é de ${pessoa.altura}m, meu peso é ${pessoa.peso}kg e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} ${metrosCaminhados}!`);
}
// correto

// Agora, apresente-se ;)

pessoa.apresentacao(); // correto