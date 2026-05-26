const input = require("readline-sync")

var num = parseFloat(input.question("Digite o numero: "))

for (var i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i))
}