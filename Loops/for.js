let spaceship = "Helmet"
let newSpaceship = ""

for(let i=0; i < spaceship.length; i++) {
    console.log(spaceship[i])
}
/*  "H"
    "e"
    "l"
    "m"
    "e"
    "t" */

let spaceship = "Helmet"
let newSpaceship = ""

for(let i=0; i < spaceship.length; i++) {
    if(spaceship[i] == "e") {
        newSpaceship += "i"
    } else {
        newSpaceship += spaceship[i]
    }
}
console.log(newSpaceship)    

/* >>"Hilmit" */