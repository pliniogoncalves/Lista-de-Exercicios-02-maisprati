const prompt = require('prompt-sync')();

function calculoPassagem(distancia){
    let preco = 0

    if(distancia<=200){
        preco = distancia * 0.5
        return console.log("O preço da passagem é R$"+ preco)
    }

    preco = distancia * 0.45
    return console.log("O preço da passagem é R$"+ preco)
}

let distancia = parseFloat(prompt("Qual a distancia da viagem?"))
calculoPassagem(distancia)
