//Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

let message = "Hello World!"
alert(message)


//Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let numberOne = prompt("Digite um número")
let numberTwo = prompt("Digite mais um número")
alert(Number(numberOne) + Number(numberTwo))


//Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

var valueOne = prompt("Digite um valor:");

if (!isNaN(valueOne)) {
    alert("É um número");
} else {
    alert("Não é um número");
}

//Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
 
var valueTwo = 6

if (typeof valueTwo === 'string') {
    alert("É uma string");
} else {
    alert("Não é uma string");
}

//Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

var valueThree = true

if (typeof valueThree == 'boolean') {
  alert('É um booleano')
} else {
  alert('Não é um booleano')
}

//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

const sub = numberOne - numberTwo

alert(sub)

//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

const mult = numberOne * numberTwo

alert(mult)


//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

const div = numberOne / numberTwo

alert(div)

//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const isEvenNumber = 4

if (isEvenNumber % 2 == 0) {
  alert('É um número par')
} else {
  alert('Não é um número par')
}

//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const isOddNumber = 5

if (isOddNumber % 2 != 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}



