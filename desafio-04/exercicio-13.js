/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

const { CaretCircleUp } = require("phosphor-react-native");

var carro = {
    marca: 'Chevrolet',
    modelo: 'Onix',
    placa: 'EN265J',
    ano: 2020,
    cor: 'Azul',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
};  //correto

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = function(novaCor){
    carro.cor = novaCor;
};  //correto

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = function(){
    return carro.cor;
}; //correto

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
    return carro.modelo;
};  //correto

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function(){
    return carro.marca;
}; //correto


/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = function(){
    return(`Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`)
}; //correto

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.addPessoas = function(numPessoas){
    var totalPessoas = carro.quantidadePessoas + numPessoas;
    if(carro.quantidadePessoas === carro.assentos){
        return(`O carro já está lotado`);
    }

    if(totalPessoas > carro.assentos){
        var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
        var pluralOuSing = quantasPessoasCabem === 1 ? 'pessoa' : 'pessoas';
        return(`Só cabem ${quantasPessoasCabem} ${pluralOuSing}!`);
    }

    carro.quantidadePessoas += numPessoas;
    return(`Já temos ${totalPessoas} pessoas no carro!`);
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

carro.obterCor(); // 'Azul'
 //correto

// Mude a cor do carro para vermelho.

carro.mudarCor('Vermelho');  //correto

// E agora, qual a cor do carro?

carro.obterCor();  // 'Vermelho'
 //correto

// Mude a cor do carro para verde musgo.

carro.mudarCor('Verde Musgo');  //correto

// E agora, qual a cor do carro?

carro.obterCor();  // 'Verde Musgo'
 //correto

// Qual a marca e modelo do carro?

carro.obterMarcaModelo(); // 'Esse carro é um Chevrolet Onix'
 //correto

// Adicione 2 pessoas no carro.
carro.addPessoas(2); // 'Já temos 2 pessoas no carro!'

// Adicione mais 4 pessoas no carro.
carro.addPessoas(4) // 'Só cabem mais 3 pessoas!'

// Faça o carro encher.
carro.addPessoas(3)

// Tire 4 pessoas do carro.
carro.quantidadePessoas -= 4;

// Adicione 10 pessoas no carro.
carro.addPessoas(10); // 'Só cabem mais 4 pessoas!'

// Quantas pessoas temos no carro
carro.addPessoas();
//ou
carro.quantidadePessoas;