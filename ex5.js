const input = require("readline-sync")

var impares = 0
var pares = 0
for (var i = 1; i <= 10; i++) {
    if (parseInt(input.question(`Número ${i}: `)) % 2 == 0) {
        pares++
    } else{
        impares++       
    }
}

console.log(`Ímpares: ${impares}`)
console.log(`Pares: ${pares}`)