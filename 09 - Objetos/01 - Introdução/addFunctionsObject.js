// Adicionando funções aos objetos
let spaceship = {
    name: "Deméter",
    type: "Extração",
    maxCrew: 20,
    turnOn: function() {
        alert("Preparando propulsão")
        alert("Ligando computador de bordo")
    }
}

spaceship.turnOn()      
/* 1° ALERTA - "Preparando propulsão"  */
/* 2° ALERTA - "Ligando computador de bordo"  */
   

spaceship.velocity = 0
spaceship.speedUp = function(acceleration) {
    this.velocity += acceleration
}

console.log(spaceship)
/* 
maxCrew: 20
name: "Deméter"
speedUp: ƒ (spaceshipToSpeedUp, acceleration)
turnOn: ƒ ()
type: "Extração"
velocity: 0
*/

spaceship.speedUp(10)

console.log(spaceship)
/* 
maxCrew: 20
name: "Deméter"
speedUp: ƒ (spaceshipToSpeedUp, acceleration)
turnOn: ƒ ()
type: "Extração"
velocity: 10
*/