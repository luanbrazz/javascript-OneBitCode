let spacialStation = {
    name: "Receptora",
    platformsQuantity: 15,
    shape: "Esférica"
}

console.log(spacialStation.name.toUpperCase())      /* >> "RECEPTORA" */

let spaceshipNames = ["fenix", "Puller", "Golias"]

console.log(spaceshipNames[0].toUpperCase())        /* >> "FENIX" */




//ANINHANDO ARRAY A OBJETO 
let spaceship = {
    name: "Supernova",
    type: "Batalha",
    crew: ["cap. Marques", "Edson", "Sgt. Luiz Almeida"]
}

spaceship.crew.push("Ten. Marcondes")

console.log(spaceship)
/* 
Object
crew: (4) ['cap. Marques', 'Edson', 'Sgt. Luiz Almeida', 'Ten. Marcondes']
name: "Supernova"
type: "Batalha"
*/



//ANINHANDO OBJETO A ARRAY
 let spaceships = [
     {name: "Elemental", crewQuantity: 10},
     {name: "Colossus", crewQuantity: 8},
     {name: "Helmet", crewQuantity: 15}
 ]

 console.log(spaceships[0].name)                 /* >> "Elemental"*/

 console.log(spaceships[1].crewQuantity)        /* >> "8"*/

 spaceships.forEach(spaceship => {                                          
     alert(spaceship.name + " tem " + spaceship.crewQuantity + " tripulantes.")
 });
/* 
1° msg - Elemental tem 10 tripulantes.
2° msg - Colossus tem 8 tripulantes.
3° msg - Helmet tem 15 tripulantes.
*/





// OBJETO DENTRO DE UM OBJETO
let nave = {
    nome: "Golias",
    maxTrip: 20,
    captain: {
        nome: "Hugo Silva",
        age: 37
    }
}

console.log(nave.captain.nome)
/* 
>> "Hugo Silva"
*/