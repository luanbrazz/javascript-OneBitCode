// CONSTRUTORES E INSTANCIAS
// 01 
class SpacialStation {
    constructor(name, platformsQuantity) {
        this.name = name
        this.platformsQuantity = platformsQuantity
    }
}

let observatory = new SpacialStation("Observatório", 40)

console.log(observatory)
/* 
// [object Object]
{
 "name": "Observatório",
 "platformsQuantity": 40
}
*/




// 02
class Spaceship {
    constructor(anotherName, type = "Descoberta") {
        this.anotherName = anotherName
        this.type = type
    }
}

let darwin = new Spaceship("Darwin")
let helmet = new Spaceship("Helmet", "Batalha")

console.log(darwin)
/*
} 
"anotherName": "Darwin",
"type": "Descoberta"
}
*/

console.log(helmet)
/* 
{
   "anotherName": "Helmet",
   "type": "Batalha"
}
*/