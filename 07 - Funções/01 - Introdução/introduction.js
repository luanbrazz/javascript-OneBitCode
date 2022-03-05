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

