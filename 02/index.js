const prompt = require('prompt-sync')();

function calcularMulta(velocidade){
    let limite = 80
    let multa = (velocidade - limite) * 5

    return multa
}

let velocidade = parseInt(prompt("Qual a velocidade do carro?"))

if(velocidade > 80){
    let multa = calcularMulta(velocidade)
    console.log("Você foi multado! O valor da Multa é R$" + multa)
}else{
    console.log("Você não foi multado!")
}