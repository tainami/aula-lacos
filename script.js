// Exercícios de interpretação

// 1)
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) 
// Enquento a variável "i" for menor que 5 a variável "valor" é incrementada com o valor de "i" que é incrementado por 1 a cada laço do for.

// 2)
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero) // 19, 21, 23, 25, 27, 30
	}
}

// 3)
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: ")) // Recebe 4
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = "" 
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha) // * ** *** ****
  quantidadeAtual++
}

// Exercícios de escrita 

// 3)
petDoUsuario = Number(prompt("Quantos bichinhos de estimação você tem?"))
pets = []

if(petDoUsuario === 0) {
  console.log("Que pena! Você pode adotar um pet.")
} else {
  for(let i = 0; i < petDoUsuario; i++) {
    pets.push(prompt("Digite o nome deles: "))
  }
  console.log(pets)
}

// 2)
const arrayOriginal = [4, 5, 6, 7, 8, 9]

// a)
const imprimeArray = (array) => {
  for(numero of array) {
    console.log(numero)
  }
}
imprimeArray(arrayOriginal)

// b)
const arrayDivididoDez = (array) => {
  for(numero of array) {
    console.log(numero / 10)
  }
}
arrayDivididoDez(arrayOriginal)

// c) 
const criaArray = (arrayReferencia) => {
  let novoArray = []
  for(numero of arrayReferencia) {
    if(numero % 2 === 0)
    novoArray.push(numero)
  }
  console.log(novoArray)
}
criaArray(arrayOriginal)

// d)
const criaArrayStrings = (arrayReferencia) => {
  let novoArrayStrings = []
  for(let i = 0; i < arrayReferencia.length; i++) {
    novoArrayStrings.push(`O elemento do índex ${i} é: ${arrayReferencia[i]}`)
  }
  console.log(novoArrayStrings)
}
criaArrayStrings(arrayOriginal)

// e) 
const maiorAndMaior = (array) => {
  let maiorNumero = 0
  for(numero of array) {
    if(numero > maiorNumero) {
      maiorNumero = numero
  }

  let menorNumero = maiorNumero
  for(numero of array) {
    if(numero < menorNumero) {
      menorNumero = numero
    }
  }

  console.log(`Número menor: ${menorNumero}`)
  console.log(`Número maior: ${maiorNumero}`)
  }
}
maiorAndMaior(arrayOriginal)


