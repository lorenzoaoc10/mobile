const input = require("readline-sync")

var num = input.question("digite o 1 numero ");
var num2 = input.question("digite o 2 numero ");

console.log(`soma = ${num} + ${num2} = ${num + num2}`);
console.log(`subtração = ${num} - ${num2} = ${num - num2}`);
console.log(`multiplicação = ${num} x ${num2} = ${num * num2}`);
console.log(`divisão = ${num} / ${num2} = ${num / num2}`);
