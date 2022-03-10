function greetPilot() {
    alert("Bom dia, Piloto!")
}

greetPilot()


// 01 - PARAMETROS
function speedUp (velocity, acceleration) {
    let newVelocity = velocity + acceleration
    console.log ("Nova velocidade: " + newVelocity)
}

speedUp(60, 10)     /* >>"Nova velocidade: 70" */

speedUp(40, 20)     /* >>"Nova velocidade: 60" */ 

speedUp(70, 05)     /* >>"Nova velocidade: 75" */


//02 - PARÂMETROS COM VALOR PADRÃO
function hiPilot (name, message = "Olá") {
    console.log(message + ", " + name + "!")
}

hiPilot("John Mars", "Seja bem-vindo")  /* >>"Seja bem-vindo, John Mars!" */

hiPilot("John Mars", )                  /* >>"Olá, John Mars!" */





//03 - ARMADILHAS DOS PARÂMETROS
function hiPilot (name, message = "Olá") {
    console.log(message + ", " + name + "!")
}

hiPilot("Luan Braz", "Bem-vindo")   /* >>"Bem-vindo, Luan Braz!" */

hiPilot()       /* >>"Olá, undefined!" */


function speedUp(velocity, unit="km/s", acceleration) {
    let newVelocity = velocity + acceleration
    console.log("Nova velocidade: " + newVelocity + unit)
  }
  
  speedUp(50,"mi/s",20)     /* >>"Nova velocidade: 70mi/s" */

  speedUp(50,20)            /* >>"Nova velocidade: NaN20" */
//

//Parametros em ordem
function speedUp(velocity, acceleration, unit="km/s") {
let newVelocity = velocity + acceleration
console.log("Nova velocidade: " + newVelocity + unit)
}

speedUp(50,"mi/s",20)     /* >>"Nova velocidade: 70mi/s" */
speedUp(50,20)            /* >>"Nova velocidade: 70km/s" */



//04 - RETORNO DA FUNÇÃO (return)
function speedUp(velocity, acceleration) {
    let newVelocity = velocity + acceleration
    console.log("Nova velocidade: " + newVelocity)
    return newVelocity
}

let velocity = 80
let acceleration = 5

console.log(velocity)                           /* >>80 */

velocity = speedUp(velocity, acceleration)      /* >>"Nova velocidade: 85" */

console.log(velocity)                           /* >>85 */

speedUp(100, 20)                                /* >>"Nova velocidade: 120" */




//05 SCOPE
let spaceshipName = "Supernova"

function changeSpaceshipName() {
    spaceshipName = "Elemental"
}

console.log(spaceshipName)      /* >>"Supernova" */

changeSpaceshipName()           /* >>"Elemental" */

console.log(spaceshipName)      /*  */

//

function setSpaceshipDetails() {
    let velocity = 50
    if (velocity == 50) {
        velocity = 60
        var spaceshipName = "Elemental"
        let spaceshipType = "Discovery"
    }

        console.log(velocity)
        console.log(spaceshipName)
        console.log(spaceshipType)
}

setSpaceshipDetails()
        /* >> 60
        >> "Elemental"
        >>  ERROR */

//


// 06 FUNÇÕES ANÔNIMAS
let doubleSpeed = function(velocity) {
    return velocity * 2
}

let newVelocity = doubleSpeed(40)

console.log(newVelocity)
/* >> 80 */

//ex. 2
console.log(speedUp(60, 10))        /* 70 */
console.log(doubleSpeed(50))        /* >> Uncaught ReferenceError: doubleSpeed is not defined */

let doubleSpeedd = function(velocity) {
    return velocity * 2
}

function speedUp(velocity, acceleration) {
    return velocity + acceleration
}


// 07 ARROOW FUNCTIONS
const doubleVelocity = (velocity) => {
    return velocity * 2
}

console.log(doubleVelocity)     /* >> 120 */

//ou
const doubleVelocityy = (velocity) => velocity * 2

console.log(doubleVelocity)     /* >> 120 */


// 08 HIGH ORDER FUNCTIONS
function doubleVelocity(velocity, printer) {
    console.log("Entrei em doubleVelocity")
    let newVelocityyy = velocity * 2
    printer(newVelocityyy)
    return newVelocityyy
}

let printVelocity = velocity => {
    console.log("Nova velocidade: " + velocity + "km/s")    
}

let newVelocityyy = doubleVelocity (60, printVelocity)
console.log(newVelocityyy)
/*  >>"Entrei em doubleVelocity"
    >>"Nova velocidade: 120km/s"
    >>120 */

