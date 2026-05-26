const input = require("readline-sync")

var media = 0

for (var i = 1; i <= 5; i++) {
    media = media + parseFloat(input.question("Digite a nota: "))
}

media = media / 5

console.log("media:", media)