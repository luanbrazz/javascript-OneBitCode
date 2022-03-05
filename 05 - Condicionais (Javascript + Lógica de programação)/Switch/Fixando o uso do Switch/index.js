let distanceInLY = prompt("Digite a distância em anos-luz")

let chosenOption = prompt("Para qual unidade deseja converter?\n1. Parse(pc)\n2. Unidade Astronômica (AU)" +
                         "\n3. Quilômetros (km)\n\n(Digite o número da opção desejada)")

let chosenUnity
let converteDistance

switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        converteDistance = distanceInLY * 0.306601        
        break;
    case "2":
        chosenUnity = "Unidade Astronômica"
        converteDistance = distanceInLY * 63241.1       
        break;
    case "3":
        chosenUnity = "Quilômetros"
        converteDistance = distanceInLY * 9.5 * Math.pow(10, 12)     
        break;        
    default:
        chosenUnity = "Unidade não identificada"
        converteDistance = "Conversão fora do escopo"
        break;
}

alert("Distância em Anos-luz: " + distanceInLY + "\n" + chosenUnity + ": " + converteDistance)