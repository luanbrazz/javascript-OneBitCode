class Spaceship {
    constructor(name, crewQuanity) {
        this.name = name
        this.crewQuanity= crewQuanity
        this.isHitched = false
        this.entraceDoorsOpen = false
    }

    hitch() {
        this.isHitched = true
        this.entraceDoorOpen = true
    }
}

function showMenu() {
    let chosenOption
    while (chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt("O que deseja fazer?\n" +
                                "1 - Engatar nave\n" +
                                "2 - Imprimir naves\n" +
                                "3 - Sair do programa")
    }
    return chosenOption
}

function createSpaceship() {
    let spaceshipName = prompt("Informe o nome da nave: ")
    let crewQuanity = prompt("Informe a quantidade de tripulantes: ")
    let spaceship = new Spaceship(spaceshipName, crewQuanity)
    return spaceship
}

function printSpaceshipList(spaceships) {
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipList += (index + 1) + "- " + spaceship.name + 
                     " (" + spaceship.crewQuantity + "tripulantes)\n"       
    })
    alert(spaceshipList)
}

let hitchedSpaceships = []

let chosenOption

while(chosenOption != "3") {
    chosenOption = showMenu()
    switch (chosenOption) {
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.hitch()
            hitchedSpaceships.push(spaceshipToAdd)
            break
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break
    }
}