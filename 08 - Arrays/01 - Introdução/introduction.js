// 01 ARRAYS
let hitchedSapaceships = ["Supernova", "Elemental", "Helmet"]

console.log(hitchedSapaceships[0])      /* >>"Supernova" */

console.log(hitchedSapaceships)         // [object Array] (3) => >>["Supernova","Elemental","Helmet"]

// ex.2
let listSpaceships = new Array("Supernova", "Elemental", "Helmet")

console.log(listSpaceships)     /* >>["Supernova","Elemental","Helmet"] */

//ex.3
let hitchedSapaceship = new Array(5)

console.log(hitchedSapaceship)      /* >>[undefined, undefined, undefined, undefined, undefined] */ 


// 02 FUNÇÕES BÁSICAS DE ARRAYS
// ex.1 (push)
let newSpaceships = ["Colossus", "Elemental", "Helmet"]

console.log(newSpaceships)      /* >>["Colossus","Elemental","Helmet"] */

newSpaceships.push("Supernova")

console.log(newSpaceships)      /* >>["Colossus","Elemental","Helmet","Supernova"] */

// ex.2 (pop)
let newSpaceship = ["Colossus", "Elemental", "Helmet"]

console.log(newSpaceship)      /* >>["Colossus","Elemental","Helmet"] */

newSpaceship.pop("Supernova")

console.log(newSpaceship)      /* >>["Colossus","Elemental"] */


// ex.3 (shift)
let hSpaceships = ["Colossus", "Elemental", "Helmet"]

console.log(hSpaceships)        /* >>["Colossus","Elemental","Helmet"] */

let removedSpaceship = hSpaceships.shift()

console.log (hSpaceships)       /* >>["Elemental","Helmet"] */

console.log(removedSpaceship)       /* >>"Colossus" */


// ex.4 (unshift)
let hSpaceshipss = ["Colossus", "Elemental", "Helmet"]

console.log(hSpaceshipss)               /* >>["Colossus","Elemental","Helmet"] */

hSpaceshipss.unshift("Fenix")

console.log (hSpaceshipss)              /* >>["Fenix","Colossus","Elemental","Helmet"] */

console.log(hSpaceshipss.length)       /* >>3 */


let elementalPos = hSpaceshipss.indexOf("Elemental")  //ex.5 (indexOf)

console.log(elementalPos)           /* >> 2 */



// 03 ARRAYS BIDIMENSIONAIS
let infosSpaceships = [["Elemental", 7], ["Helmet", 13], ["Golias", 5], ["Supernova", 5, [true, false]]]

console.log(infosSpaceships)


console.log(infosSpaceships[0])
/* >>["Elemental, 7"] */

console.log(infosSpaceships[2][1])
/* >>5 */

console.log(infosSpaceships[3][2][0]) 
/* >>true */




// 04 SPLICE E SLICE
let spaceshipNames = ["Elemental", "Darwin", "Artemis", "Supernova"]

console.log(spaceshipNames)
/* >>["Elemental","Darwin","Artemis","Supernova"] */

let removedSpaceships = spaceshipNames.splice(1, 2, "Deméter", "Puller", "Golias")

console.log(spaceshipNames)
/* >>["Elemental","Deméter","Puller","Golias","Supernova"] */

console.log(removedSpaceships)
/* >>["Darwin","Artemis"] */

//

let spaceshipNamess = ["Elemental", "Darwin", "Artemis", "Supernova"]

let extractedNames = spaceshipNamess.slice(1, 3)

console.log(spaceshipNamess)
/* >>["Elemental","Darwin","Artemis","Supernova"] */

console.log(extractedNames)
/* >>["Darwin","Artemis"] */





// 05 ITERAÇÃO EM ARRAYS
//ex.1 (forEach)
let hhitchedSapaceships = ["Demeter", "Darwin", "Supernova", "Fenix", "Puller"]

hhitchedSapaceships.forEach(function(currentSpaceship, index){
    console.log("Nave: " + currentSpaceship + "\nIndice: " + index)
})
/*  >>"Nave: Demeter
       Indice: 0"
    >>"Nave: Darwin
       Indice: 1"
    >>"Nave: Supernova
       Indice: 2"
    >>"Nave: Fenix
       Indice: 3"
    >>"Nave: Puller
       Indice: 4" */



//ex.1.1 (forEach)
const socialNetworks = ["youtube", "twitter", "instagram", "Facebook"]

socialNetworks.forEach((socialNetwork, index, array) => {
   console.log(index, socialNetwork, array)
})
/*
   >>0 "youtube" // [object Array] (4)
      ["youtube","twitter","instagram","Facebook"]
   >>1 "twitter" // [object Array] (4)
      ["youtube","twitter","instagram","Facebook"]
   >>2 "instagram" // [object Array] (4)
      ["youtube","twitter","instagram","Facebook"]
   >>3 "Facebook" // [object Array] (4)
      ["youtube","twitter","instagram","Facebook"] 
 */



//ex.2(toUpperCase)
let listaNaves = ["Demeter", "Darwin", "Supernova", "Fenix", "Puller"]

let upcasedListaNaves = listaNaves.map(function(naveAtual){
   let upcased = naveAtual.toUpperCase()
   return upcased
})

console.log(upcasedListaNaves)
/*
>>["DEMETER","DARWIN","SUPERNOVA","FENIX","PULLER"] 
 */



//ex.3 (filter)
let hitchedSapaceshipss = ["Demeter", "Darwin", "Supernova", "Fenix", "Puller"]

let with7Chars = hitchedSapaceshipss.filter(element => {return element.length >= 7})

console.log(with7Chars)
/* 
>>["Demeter","Supernova"]
*/



//ex.4 (find)
let hitchedSapaceshipsss = ["Demeter", "Darwin", "Supernova", "Fenix", "Puller"]

let with7Charss = hitchedSapaceshipsss.find(element => {return element.length >= 7})

console.log(with7Charss)
/* 
>>"Demeter"
*/

