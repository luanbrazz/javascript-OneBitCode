let pilotName = prompt("Qual seu nome, piloto?")

let velocity = 0

let newVelocity = prompt("A que velocidade você gostaria de acelerar?")

let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + " km/s")

if(confirmVelocity) {
    velocity = newVelocity
}

/* if(velocity <= 0) {
    alert("Nave esta parada, considere partir e aumentar velocidade.")
} else {
    if(velocity < 40) {
        alert("Vacê esta devagar, aumente a velocidade.")
    } else {
        if(velocity < 80) {
            alert("Velocidade adequada.")
        } else {
            if(velocity < 100) {
                alert("Velocidade alta, diminua.")
            } else {
                alert("Velocidade PERIGOSA!!!")
            }
        }
    }
}
 */

if(velocity <= 0) {
    alert("Nave esta parada, considere partir e aumentar velocidade.")
} else if(velocity < 40) {
    alert("Vacê esta devagar, aumente a velocidade.")
} else if(velocity < 80) {
    alert("Velocidade adequada.")
} else if(velocity < 100) {
    alert("Velocidade alta, diminua.")
} else alert("Velocidade PERIGOSA!!!")

alert("Piloto: " + pilotName + "\n\nVelocidade: " + velocity + "km/s" )