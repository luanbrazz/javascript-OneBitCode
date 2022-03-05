let warpCount =0
let chosenOption = ""

let spaceship = prompt("Digite o nome da nave")

chosenOption = prompt("Deseja entrar em dobra espacial?\n1. SIM\n2. NÃO")

while(chosenOption == "1") {
    warpCount += 1
    chosenOption = prompt("Deseja realizar a proxima dobra?\n1. SIM\n2. NÃO")
}

alert("Nave: " + spaceship + "\nQuantidade de dobras: " + warpCount)