const prompt = require('prompt-sync')();

function calcularMulta(velocidade){
    let limite = 80
    let multa = (velocidade - limite) * 5

    if(velocidade > 80){
        return console.log("Você foi multado! O valor da Multa é R$" + multa)
    }

    return console.log("Você não foi multado!")
}

let velocidade = parseInt(prompt("Qual a velocidade do carro?"))
calcularMulta(velocidade)