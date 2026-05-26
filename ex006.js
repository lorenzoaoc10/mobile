const input = require("readline-sync")
const secreto = 42

var numero
while (true) {
    numero = parseFloat(input.question("Digite o secreto "))
    if (secreto > numero) {

        console.log("Maior ")

    } else if (secreto < numero) {

        console.log("Menor ")

    } else {

        console.log("Acertou ")
        break
    }
}