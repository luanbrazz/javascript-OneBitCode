let spaceship = {
    name: "Fenix",
    crewQuantity: 7,
    type: "Batalha"
}

console.log(spaceship)
/* 
>>  Object{
        crewQuantity: 7
        name: "Fenix"
        type: "Batalha"
        }
*/

console.log(spaceship.type)
/* 
>> "Batalha"
*/

console.log(spaceship["name"])
/* 
"Fenix"
*/
spaceship.isHitched = false
spaceship["shieldLavel"] = 100

console.log(spaceship["isHitched"])
/* 
>> false
*/

console.log(spaceship.shieldLavel)
/* 
>> 100
*/