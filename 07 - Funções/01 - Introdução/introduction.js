function greetPilot() {
    alert("Bom dia, Piloto!")
}

greetPilot()


// PARAMETROS
function speedUp (velocity, acceleration) {
    let newVelocity = velocity + acceleration
    console.log ("Nova velocidade: " + newVelocity)
}

speedUp(60, 10)     /* >>"Nova velocidade: 70" */

speedUp(40, 20)     /* >>"Nova velocidade: 60" */ 

speedUp(70, 05)     /* >>"Nova velocidade: 75" */


//PARÂMETROS COM VALOR PADRÃO

