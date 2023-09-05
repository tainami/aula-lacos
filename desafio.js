// Desafio 1
function adivinharNumeroDoisJogadores() {
    const numero = Number(prompt("Jogo Adivinhe o número que estou pensando. ---Digite o número que você pensou---"))
    console.log("Vamos jogar!")
    let numeroChutado = null
    let tentativas = 0
    while (numeroChutado != numero) {
        numeroChutado = Number(prompt("Chute um número:"))
        console.log(`O número chutado foi: ${numeroChutado}`)
        tentativas++
        if(numeroChutado > numero) {
            console.log("Errrrrrrrou, é menor")
        } else if(numeroChutado < numero) {
            console.log("Errrrrrrrou, é maior")
        }
    }
    if(numeroChutado === numero) {
        console.log("Acertou!!")
        console.log(`O número de tentativas foi: ${tentativas}`)
    }
}
adivinharNumeroDoisJogadores()

// Desafio 2
function adivinharNumeroUmJogador () {
    numero = Math.floor(Math.random() * 51) + 1
    alert("Jogo Adivinhe o número que estou pensando")
    console.log("Vamos jogar!")
    let numeroChutado = null
    let tentativas = 0
    while (numeroChutado != numero) {
        numeroChutado = Number(prompt("Chute um número:"))
        console.log(`O número chutado foi: ${numeroChutado}`)
        tentativas++
        if(numeroChutado > numero) {
            console.log("Errrrrrrrou, é menor")
        } else if(numeroChutado < numero) {
            console.log("Errrrrrrrou, é maior")
        }
    }
    if(numeroChutado === numero) {
        console.log("Acertou!!")
        console.log(`O número de tentativas foi: ${tentativas}`)
    }

}
adivinharNumeroUmJogador()
