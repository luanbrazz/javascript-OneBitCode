let spaceship = "Golias"
let velocity = 80

console.log(spaceship == "Golias") /* true */
console.log(velocity == 90) /* false */

console.log(velocity != 90) /* true */

console.log(velocity > 90) /* false */


/* 
    Operações Lógicas - Tabela verdade E/&&
*/
let spaceship = "Elemental"
let velocity = 20

console.log(spaceship.length == 9 && velocity > 15)
/* V e V = true */

console.log(velocity > 10 && velocity < 19)
// V e F = F false

console.log(velocity < 17 && spaceship == "Elemental")
// F e V = F false

console.log(spaceship == "Golias" && velocity > 21)
// F e F = F false

/* 
    Operações Lógicas - Tabela verdade OU/ ||
*/
let spaceship = "Elemental"
let velocity = 20

console.log(spaceship.length == 9 || velocity > 15)
// V ou V = V

console.log(velocity > 10 || velocity < 19)
// V ou F = V

console.log(velocity < 17 || spaceship == "Elemental")
// F ou V = V

console.log(spaceship == "Golias" || velocity > 21)
// F ou F = F

/* 
    Operações Lógicas - Tabela verdade NÃO/ !
*/
let spaceship = "Elemental"
let velocity = 20

console.log(!(velocity > 19))
// NÃO v = F

console.log(!(spaceship == "Golias"))
// NÃO F = V


console.log (!(velocity > 25 && spaceship == "Elemental") || (velocity - 3 == 17 && spaceship.length + 1 > 15))
// (!(velocity > 25 && spaceship == "Elemental") || (17 == 17 && 10 > 15))
// (!(F && V) || (V && F))
//  !F || F
//   V || F
//      V


