const palavras = ["sol", "computador", "rede", "programacao", "bit", "algoritmo"];

const palavrasmaiores = palavras.filter((elemento) => {
    return elemento.length > 5;

});
console.log(palavrasmaiores);
console.log(palavrasmaiores.length);
