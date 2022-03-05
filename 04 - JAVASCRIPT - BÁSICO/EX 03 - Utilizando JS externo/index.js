let olderPersonName = prompt("Digite o nome da pessoa mais velha")
let olderPersonAge = prompt("Digite a idade da pessoa mais velha")

let youngerPersonName = prompt("Digite o nome da pessoa mais nova")
let youngerPersonAge = prompt("Digite a idade da pessoa mais nova")

let ageDiference = olderPersonAge - youngerPersonAge

alert(
    "A pessoa mais velha é: " + olderPersonName + "\nIdade: " + olderPersonAge +
    "\n\nA pessoa mais nova é: " + youngerPersonName + "\nIdade: " + youngerPersonAge +
    "\n\n A diferença de idade é: " + ageDiference + " anos."
    )