const prompt = require('prompt-sync')();

function calcularPerdaVida(cigarrosPorDia, anosFumando){
    let minutosCigarros = 10
    let minutosPorDia = 24 * 60

    let total = cigarrosPorDia * minutosCigarros * 365 * anosFumando

    let diasPerdidos = total / minutosPorDia

    return diasPerdidos
}

let cigarrosPorDia = parseInt(prompt("Quantos cigarros por dia?"))
let anosFumando = parseInt(prompt("Quantos anos fumando?"))

let diasPerdidos = calcularPerdaVida(cigarrosPorDia, anosFumando)

console.log("Você perderá " + diasPerdidos.toFixed(2) + " dias de vida")
