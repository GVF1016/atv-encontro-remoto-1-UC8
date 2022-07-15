const rs = require("readline-sync");

// evento de anime
const nomeEvnt = "Site de cadastro para a Nipocon"
console.log(nomeEvnt)

let diaAtual = rs.question("Que dia eh hoje? ")
let qtdDePessoas = rs.question("quantos participantes ja tem no evento? ")

if (qtdDePessoas < 200) {
    console.log("Ainda ah vagas")
} else {
    console.log("Acabaram as vagas")
}

if (diaAtual <= 25) {
    console.log("Ainda ah tempo para o cadastro")
} else {
    console.log("Tempo para cadastro excedido")
}

let nome = rs.question("Qual eh o seu nome? ")
let idade = rs.question("Qual eh a sua idade? ")

if (idade >= 18) {
    console.log("Acesso liberado " + nome + ". seja bem vindo.")
} else {
    console.log("Você não tem idade suficiente " + nome + ". acesso negado.")
}
