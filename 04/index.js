const prompt = require('prompt-sync')();

function podeFormarTriangulo(a, b, c) {
    return a < b + c && b < a + c && c < a + b;
}

let segmento1 = parseInt(prompt("Digite o tamanho do primeiro segmento:"))
let segmento2 = parseInt(prompt("Digite o tamanho do segundo segmento:"))
let segmento3 = parseInt(prompt("Digite o tamanho do terceiro segmento:"))

if (podeFormarTriangulo(segmento1, segmento2, segmento3)) {
    console.log('Os segmentos podem formar um triângulo.');
  } else {
    console.log('Os segmentos não podem formar um triângulo.');
}